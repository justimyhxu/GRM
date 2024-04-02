# conda install -y pytorch  pytorch-cuda=12.1 -c pytorch -c nvidia
# pip install Pillow plyfile opencv-python numpy git+https://github.com/graphdeco-inria/diff-gaussian-rasterization


import os
import torch
import numpy as np
from .deferred_bp import deferred_bp
from .gaussian_utils import render, GaussianModel


class GaussianRenderer:
    def __init__(self, renderer_config=None):
        self.render_type = renderer_config.render_type
        if 'scaling_activation_type' not in renderer_config:
            renderer_config['scaling_activation_type'] = 'exp'
        if 'scale_min_act' not in renderer_config:
            renderer_config['scale_min_act'] = 1 
            renderer_config['scale_max_act'] = 1 
            renderer_config['scale_multi_act'] = 0.1 

        self.gaussian_model = GaussianModel(sh_degree=renderer_config.sh_degree, 
                                            scaling_activation_type=renderer_config.scaling_activation_type, 
                                            scale_min_act=renderer_config.scale_min_act, 
                                            scale_max_act=renderer_config.scale_max_act, 
                                            scale_multi_act=renderer_config.scale_multi_act)
        self.img_height = renderer_config.img_height
        self.img_width = renderer_config.img_width
        self.patch_size = renderer_config.patch_size

    @torch.cuda.amp.custom_fwd(cast_inputs=torch.float32)
    def render(self, latent, output_fxfycxcy, output_c2ws):
        xyz, features, opacity, scaling, rotation = latent['xyz'], latent['feature'], latent['opacity'], latent['scaling'], latent['rotation']
 
        bs, vs = output_fxfycxcy.shape[:2] 
        renderings = torch.zeros(bs, vs, 3, self.img_height, self.img_width, dtype=torch.float32, device=output_c2ws.device)
        alphas = torch.zeros(bs, vs, 1, self.img_height, self.img_width, dtype=torch.float32, device=output_c2ws.device)
        depths = torch.zeros(bs, vs, 1, self.img_height, self.img_width, dtype=torch.float32, device=output_c2ws.device)
        if self.render_type == 'defered':
            renderings, depths, alphas = deferred_bp(xyz, features, scaling, rotation, 
                                              opacity, self.img_height, self.img_width, output_c2ws, output_fxfycxcy, self.patch_size, self.gaussian_model)
            return {'image': renderings, 'depth': depths, 'alpha': alphas}
        else:
            for idx in range(bs):
                pc = self.gaussian_model.set_data(xyz[idx], features[idx], scaling[idx], rotation[idx], opacity[idx])
                for vidx in range(vs):
                    render_results = render(pc, self.img_height, self.img_width, output_c2ws[idx, vidx], output_fxfycxcy[idx, vidx])
                    image = render_results['render']
                    alpha = render_results['alpha']
                    renderings[idx, vidx] =  image
                    alphas[idx, vidx] =  alpha
            results = {'image': renderings, 'alpha': alphas}
            return results

