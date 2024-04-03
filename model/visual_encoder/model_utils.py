import torch
import torch.nn as nn
from einops import rearrange
from collections import OrderedDict
from torch.utils.checkpoint import checkpoint
import numpy as np

def unproject_depth(depth_map, fxfycxcy, c2w):
    """
    Unproject depth to 3D space (world coordinate).
    """
    B, N, H, W = depth_map.shape
    depth_map = depth_map.reshape(B*N, H, W)
    fxfycxcy = fxfycxcy.reshape(-1, fxfycxcy.shape[-1])
    K = torch.zeros(B*N, 3, 3, device=depth_map.device)
    K[:,0,0] = fxfycxcy[:, 0]
    K[:,1,1] = fxfycxcy[:, 1]
    K[:,0,2] = fxfycxcy[:, 2]
    K[:,1,2] = fxfycxcy[:, 3]
    K[:,2,2] = 1
    c2w = c2w.reshape(B*N, 4, 4)
    y, x = torch.meshgrid(torch.arange(H), torch.arange(W))
    y = y.to(depth_map.device).unsqueeze(0).repeat(B*N,1,1)/(H-1)
    x = x.to(depth_map.device).unsqueeze(0).repeat(B*N,1,1)/(W-1)
    xy_map = torch.stack([x, y], axis=-1) * depth_map[..., None]
    xyz_map = torch.cat([xy_map, depth_map[..., None]], axis=-1)
    xyz = xyz_map.view(B*N, -1, 3)

    # get point positions in camera coordinate
    xyz = torch.matmul(xyz, torch.transpose(torch.inverse(K), -1, -2))
    xyz_map = xyz.view(B*N, H, W, 3)

    # transform pts from camera to world coordinate
    xyz_homo = torch.ones((B*N, H, W, 4), device=depth_map.device)
    xyz_homo[...,:3] = xyz_map
    xyz_world = torch.bmm(c2w, xyz_homo.reshape(B*N, -1, 4).permute(0, 2, 1)).permute(
                                    0, 2, 1)[..., :3].reshape(B, N*H*W, 3)
    return xyz_world

class TransformerEncoder(nn.Module):
    """
    Transformer-based encoder.
    """
    def __init__(self, input_res, in_channels, patch_size, width, layers, heads, window_size):
        super().__init__()
        self.input_res = input_res
        self.patch_size = patch_size
        self.conv = nn.Conv2d(in_channels=in_channels, out_channels=width, kernel_size=patch_size, stride=patch_size, bias=False)

        self.positional_embedding = nn.Parameter(torch.zeros(1, (input_res// patch_size) ** 2, width))
        nn.init.trunc_normal_(self.positional_embedding, std=0.02)

        self.layernorm1 = LayerNorm(width)
        self.transformer = Transformer(width, layers, heads, window_size=window_size)
        self.layernorm2 = LayerNorm(width)

    def set_grad_checkpointing(self, set_checkpointing=True):
        self.transformer.set_grad_checkpointing(set_checkpointing)

    def forward(self, x, condition=None):
        _, v = x.shape[:2]
        x = rearrange(x, 'b v c h w -> (b v) c h w')

        condition = rearrange(condition, 'b v c h w -> (b v) c h w')   
        x = torch.cat([x, condition], dim=1)
        
        x = self.conv(x)
        x = x.reshape(x.shape[0], x.shape[1], -1)
        x = x.permute(0, 2, 1)
        x = x + self.positional_embedding.to(x.dtype)

        x = self.layernorm1(x)
        x = rearrange(x, '(b v) n d -> b (v n) d', v=v)
        x = x.permute(1, 0, 2)
        x = self.transformer(x)
        x = x.permute(1, 0, 2)
        x = self.layernorm2(x)
        x = rearrange(x, 'b (v n) d -> b v n d', v=v)
        return x

class PSUpsamplerBlock(nn.Module):
    """
    Upsampling block.
    """
    def __init__(self, d_model, d_model_out, scale_factor):
        super().__init__()

        self.scale_factor = scale_factor
        self.d_model_out = d_model_out
        self.residual_fc = nn.Linear(d_model, d_model_out * (scale_factor**2))
        self.pixelshuffle = nn.PixelShuffle(scale_factor)

    def forward(self, x):
        x = self.residual_fc(x)
        bs, l, c = x.shape
        resolution = int(np.sqrt(l))
        x = x.permute(0, 2, 1).reshape(bs, c, resolution, resolution)
        x = self.pixelshuffle(x)
        x = x.reshape(bs, self.d_model_out, resolution*self.scale_factor*resolution*self.scale_factor)
        x = x.permute(0, 2, 1)
        return x

class GaussianUpsampler(nn.Module):
    """
    Upsampler.
    """
    def __init__(self, width, up_ratio, ch_decay=1, low_channels=64, window_size=None):
        super().__init__()
        self.up_ratio = up_ratio
        self.low_channels = low_channels
        self.window_size = window_size
        self.base_width = width
        for res_log2 in range(int(np.log2(up_ratio))):
            _width = width
            width = max(width // ch_decay, 64)
            heads = int(width / 64)
            width = heads * 64
            self.add_module(f'upsampler_{res_log2}', PSUpsamplerBlock(_width, width, 2))
            encoder = Transformer(width, 2, heads, window_size=window_size)
            self.add_module(f'attention_{res_log2}', encoder)
        self.out_channels = width
        self.layernorm2 = LayerNorm(width)

    def forward(self, x):
        for res_log2 in range(int(np.log2(self.up_ratio))):
            x = getattr(self, f'upsampler_{res_log2}')(x)
            x = x.permute(1, 0, 2)
            x = getattr(self, f'attention_{res_log2}')(x)
            x = x.permute(1, 0, 2)
        x = self.layernorm2(x)
        return x


class LayerNorm(nn.LayerNorm):
    """
    To support fp16.
    """
    def forward(self, x):
        type_ = x.dtype
        ret = super().forward(x.type(torch.float32))
        return ret.type(type_)

class GELU_(nn.Module):
    """
    Fast gelu implementation.
    """
    def forward(self, x):
        return x * torch.sigmoid(1.702 * x)

class ResAttBlock(nn.Module):
    """
    Attention block.
    """
    def __init__(self, d_model, n_head, window_size=None):
        super().__init__()
        self.attn = nn.MultiheadAttention(d_model, n_head)
        self.layernorm1 = LayerNorm(d_model)
        self.mlp = nn.Sequential(OrderedDict([
            ("c_fc", nn.Linear(d_model, d_model * 4)),
            ("gelu", GELU_()),
            ("c_proj", nn.Linear(d_model * 4, d_model))
        ]))
        self.layernorm2 = LayerNorm(d_model)
        self.window_size = window_size

    def attention(self, x, index):
        attn_mask = None
        if self.window_size is not None:
            x = x.permute(1, 0, 2)
            l = x.shape[1]
            assert l % self.window_size == 0
            if index % 2 == 0:
                x = rearrange(x, 'b (p w) c -> (b p) w c', w=self.window_size)
                x = x.permute(1, 0, 2)
                x = self.attn(x, x, x, need_weights=False, attn_mask=attn_mask)[0] 
                x = x.permute(1, 0, 2)
                x = rearrange(x, '(b l) w c -> b (l w) c', l=l//self.window_size, w=self.window_size)
                x = x.permute(1, 0, 2)
            else:
                x = torch.roll(x, shifts=self.window_size//2, dims=1)
                x = rearrange(x, 'b (p w) c -> (b p) w c', w=self.window_size)
                x = x.permute(1, 0, 2)
                x = self.attn(x, x, x, need_weights=False, attn_mask=attn_mask)[0] 
                x = x.permute(1, 0, 2)
                x = rearrange(x, '(b l) w c -> b (l w) c', l=l//self.window_size, w=self.window_size)
                x = torch.roll(x, shifts=-self.window_size//2, dims=1)
                x = x.permute(1, 0, 2)
        else:
            x = self.attn(x, x, x, need_weights=False, attn_mask=attn_mask)[0]
        return x

    def forward(self, x, index):
        y = self.layernorm1(x)
        y = self.attention(y, index)
        x = x + y
        y = self.layernorm2(x)
        y = self.mlp(y)
        x = x + y
        return x

class Transformer(nn.Module):
    """
    Transformer.
    """
    def __init__(self, width, layers, heads, window_size=None):
        super().__init__()
        self.width = width
        self.layers = layers
        blocks = []
        for _ in range(layers):
            layer = ResAttBlock(width, heads, window_size=window_size) 
            blocks.append(layer)

        self.resblocks = nn.Sequential(*blocks)
        self.grad_checkpointing = False

    def set_grad_checkpointing(self, flag=True):
        self.grad_checkpointing = flag

    def forward(self, x):
        for res_i, module in enumerate(self.resblocks):
            if self.grad_checkpointing:
                x = checkpoint(module, x, res_i)
            else:
                x = module(x, res_i)

        return x

