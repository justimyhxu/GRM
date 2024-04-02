import torch
from torch import nn

from model.visual_encoder.vit_gs import ViTGSEncoder
from model.render.gaussian_renderer import GaussianRenderer

class GRM(nn.Module):
    def __init__(self, config):

        super().__init__()

        self.gs_renderer = GaussianRenderer(
            renderer_config=config.render.params
        )

        self.visual_encoder = ViTGSEncoder(
            **config.visual.params,
        )

        self.num_input_views = config.visual.params.get("num_input_views", 1)


    def forward_visual(self, x, camera=None, input_c2ws=None, input_fxfycxcy=None):
        features = self.visual_encoder(x, camera, input_c2ws=input_c2ws, input_fxfycxcy=input_fxfycxcy)
        latent, img_features = features
        return latent, img_features, None 


    def forward(
            self,
            imgs,
            camera: torch.Tensor=None,
            num_input_views=None,
            input_c2ws=None, 
            input_fxfycxcy=None,
            output_c2ws=None,
            output_fxfycxcy=None
    ):

        num_input_views = num_input_views or self.num_input_views
        num_input_views = min(num_input_views, imgs.shape[1])

        if num_input_views == 1:
            imgs = imgs[:, 0]
            camera = camera[:, 0]
        else:
            imgs = imgs[:, :num_input_views]
            camera = camera[:, :num_input_views]
            input_c2ws = input_c2ws[:, :num_input_views]
            input_fxfycxcy = input_fxfycxcy[:, :num_input_views]
        
        latent, _, posterior = self.forward_visual(imgs, camera, input_c2ws=input_c2ws, input_fxfycxcy=input_fxfycxcy)

        result = {"latent": latent, "posterior": posterior}

        gs_result = self.gs_renderer.render(latent=latent,
                output_c2ws=output_c2ws, 
                output_fxfycxcy=output_fxfycxcy)
        result.update(gs_result)    

        return result




