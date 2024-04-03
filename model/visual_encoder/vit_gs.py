import math

import numpy as np
import torch
from torch import nn
from torch.nn import functional as F

from .model_utils import TransformerEncoder, GaussianUpsampler, unproject_depth

class ViTGSEncoder(nn.Module):
    def __init__(
            self,
            in_channels,
            input_res,
            patch_size, # patch size of the first conv layer
            layers,
            width,
            window_size=None,
            bwindow_size=None,
            checkpointing=False,
            depth_std=0.015,
            decoder_ratio=0,
            scaling_activation_type='sigmoid',
            half_res_input=False, # whether perform 2x superresolution of the output
            scale_offset=0, # for exp scale activation
            scale_max=0, # for exp scale activation
            **kwargs
    ):
        super(ViTGSEncoder, self).__init__()
        self.width = width
        self.patch_size = patch_size
        self.input_res = input_res
        self.depth_std = depth_std
        self.scale_offset = scale_offset
        self.scale_max = scale_max
        self.num_layers = layers
        self.scaling_activation_type = scaling_activation_type
        self.half_res_input = half_res_input

        if self.half_res_input:
            self.actual_input_res = input_res // 2
        else:
            self.actual_input_res = input_res

        self.in_channels = in_channels + 6 # plucker embedding
        self.transformer_encoder = TransformerEncoder(
            in_channels=self.in_channels,
            input_res=self.actual_input_res,
            patch_size=patch_size,
            layers=layers,
            width=width,
            heads=width // 64,
            window_size=bwindow_size
        )
        self.transformer_encoder.set_grad_checkpointing(checkpointing)

        # Upsampler
        self.decoder_ratio = decoder_ratio
        hid_channels = width     
        if self.decoder_ratio > 0:
            self.gaussian_upsampler = GaussianUpsampler(width=hid_channels,
                                                        ch_decay=2,
                                                        up_ratio=(2**self.decoder_ratio),
                                                        low_channels=64, 
                                                        window_size=window_size)
            hid_channels = self.gaussian_upsampler.out_channels
        if self.half_res_input:
            ratio = int(2**(math.log2(patch_size)+1-self.decoder_ratio))**2
        else:
            ratio = int(2**(math.log2(patch_size)-self.decoder_ratio))**2

        self.out_layer_depth = nn.Conv2d(hid_channels, 1*ratio, kernel_size=1, stride=1, padding=0, bias=False)
        self.out_layer_feature = nn.Conv2d(hid_channels, 3*ratio, kernel_size=1, stride=1, padding=0, bias=False)
        self.out_layer_opacity = nn.Conv2d(hid_channels, 1*ratio, kernel_size=1, stride=1, padding=0, bias=False)
        self.out_layer_scaling = nn.Conv2d(hid_channels, 3*ratio, kernel_size=1, stride=1, padding=0, bias=False)
        self.out_layer_rotation = nn.Conv2d(hid_channels, 4*ratio, kernel_size=1, stride=1, padding=0,bias=False)
        self.pixelshuffle = nn.PixelShuffle(upscale_factor=int(ratio**(1/2)))
        self.init_out_layers()
        
    def init_out_layers(self):
        self.out_layer_scaling.weight.data.normal_(mean=0, std=0.02)
        self.out_layer_opacity.weight.data.normal_(mean=0, std=0.02)
        self.out_layer_depth.weight.data.normal_(mean=0,std=self.depth_std)

    def plucker_embedder(self, image, camera):
        b, v, _, h, w = image.size()

        c2w = camera[:, :, :16]
        fxfycxcy = camera[:, :, 16:]
        c2w = c2w.reshape(b * v, 4, 4)
        fxfycxcy = fxfycxcy.reshape(b * v, 4)

        y, x = torch.meshgrid(torch.arange(h), torch.arange(w), indexing="ij")
        y, x = y.to(image.device), x.to(image.device)
        x = x[None, :, :].expand(b * v, -1, -1).reshape(b * v, -1) / (w - 1)
        y = y[None, :, :].expand(b * v, -1, -1).reshape(b * v, -1) / (h - 1)
        x = (x + 0.5 - fxfycxcy[:, 2:3]) / fxfycxcy[:, 0:1]
        y = (y + 0.5 - fxfycxcy[:, 3:4]) / fxfycxcy[:, 1:2]
        z = torch.ones_like(x)
        ray_d = torch.stack([x, y, z], dim=2)  # [b*v, h*w, 3]
        ray_d = torch.bmm(ray_d, c2w[:, :3, :3].transpose(1, 2))  # [b*v, h*w, 3]
        ray_d = ray_d / torch.norm(ray_d, dim=2, keepdim=True)  # [b*v, h*w, 3]
        ray_o = c2w[:, :3, 3][:, None, :].expand_as(ray_d)  # [b*v, h*w, 3]

        ray_o = ray_o.reshape(b, v, h, w, 3).permute(0, 1, 4, 2, 3)
        ray_d = ray_d.reshape(b, v, h, w, 3).permute(0, 1, 4, 2, 3)
        plucker = torch.cat([torch.cross(ray_o, ray_d, dim=2), ray_d], dim=2)
        return plucker 

    def forward(self, x, camera=None, input_c2ws=None, input_fxfycxcy=None):
        if len(x.shape) == 5:
            batch_size, input_views = x.shape[0], x.shape[1]
            assert len(camera.shape) == 3, f"Camera condition should be [b, #views, feature_size] but {camera.shape} is given"
        else:
            batch_size, input_views = x.shape[0], 1
        
        if self.half_res_input:
            channel_size = x.shape[2]
            x = F.interpolate(x.reshape(batch_size*input_views, channel_size, self.input_res, self.input_res), scale_factor=0.5, mode='bilinear')
            x = x.reshape(batch_size, input_views, channel_size, self.actual_input_res, self.actual_input_res)

        camera_feature = self.plucker_embedder(x, camera)


        features = self.transformer_encoder(x, camera_feature)

        output = features
        num_features = output.shape[2]
        final_res = self.input_res

        # Upsampling
        if self.decoder_ratio > 0:
            output = output.reshape(batch_size, input_views*num_features, output.shape[-1])
            output = self.gaussian_upsampler(output)

        inter_res = int(self.actual_input_res//(2**(math.log2(self.patch_size)-self.decoder_ratio)))
        
        output = output.reshape(batch_size * input_views, inter_res, inter_res, output.shape[-1]).permute(0,3,1,2)

        def reshape_tensor(x):
            x = x.reshape((batch_size, input_views)+x.shape[1:])
            x = x.permute(0, 1, 3, 4, 2)
            h, w = x.shape[2:4]
            x = x.reshape(batch_size, input_views*h*w, x.shape[-1])
            return x

        output_depth = reshape_tensor(self.pixelshuffle(self.out_layer_depth(output)))
        output_feature =  reshape_tensor(self.pixelshuffle(self.out_layer_feature(output)))
        output_opacity =  reshape_tensor(self.pixelshuffle(self.out_layer_opacity(output)))
        output_scaling =  reshape_tensor(self.pixelshuffle(self.out_layer_scaling(output)))
        output_rotation = reshape_tensor(self.pixelshuffle(self.out_layer_rotation(output)))

        # scale clipping before activation
        if self.scaling_activation_type == 'exp':
            output_scaling = torch.clip(output_scaling + self.scale_offset, max=self.scale_max)
        elif self.scaling_activation_type == 'softplus':
            output_scaling = torch.clip(output_scaling, max=self.scale_max)
        elif self.scaling_activation_type == 'sigmoid':
            pass
        else:
            raise NotImplementedError

        # shift opacity value to a reasonable range before activation
        output_opacity = output_opacity - 2

        # unproject depth to xyz
        c2w = camera[:, :, :16]
        c2w = c2w.reshape(batch_size, input_views, 4, 4)
        ray_o = c2w[:, :, :3, 3]
        depth_offset = torch.norm(ray_o, dim=-1, p=2, keepdim=True)
        output_depth = (output_depth.reshape(batch_size, input_views, -1) + depth_offset).reshape(batch_size, -1, 1)
        output_depth = output_depth.reshape(batch_size, input_views, final_res, final_res)
        output_xyz = unproject_depth(output_depth, input_fxfycxcy, input_c2ws)

        output = {'depth': output_depth, 
                  'xyz':output_xyz,
                  'feature': output_feature,
                  'opacity': output_opacity,
                  'scaling': output_scaling,
                  'rotation': output_rotation}

        return output, features



