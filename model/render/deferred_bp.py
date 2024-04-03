import torch
from torch.utils.checkpoint import _get_autocast_kwargs
from .gaussian_utils import render


class DeferredBP(torch.autograd.Function):
    @staticmethod
    def forward(ctx, xyz, features, scaling, rotation, opacity, height, width, C2W, fxfycxcy, patch_size, gaussian_model):
        """
        Forward rendering.
        """
        assert (xyz.dim() == 3) and (
            features.dim() == 3
        ) and (scaling.dim() == 3) and (rotation.dim() == 3), f"xyz: {xyz.shape}, features: {features.shape}, scaling: {scaling.shape}, rotation: {rotation.shape}, opacity: {opacity.shape}"
        assert height  % patch_size == 0 and width % patch_size == 0, f'patch_size must be divided by H and W!'

        ctx.save_for_backward(xyz, features, scaling, rotation, opacity)  # save tensors for backward
        ctx.height = height
        ctx.width = width
        ctx.C2W = C2W
        ctx.fxfycxcy = fxfycxcy
        ctx.patch_size = patch_size
        ctx.gaussian_model = gaussian_model 

        ctx.gpu_autocast_kwargs, ctx.cpu_autocast_kwargs = _get_autocast_kwargs()
        ctx.manual_seeds = []

        with torch.no_grad(), torch.cuda.amp.autocast(
            **ctx.gpu_autocast_kwargs
        ), torch.cpu.amp.autocast(**ctx.cpu_autocast_kwargs):
            device = C2W.device
            b, v =  C2W.shape[:2]
            colors = torch.zeros(
                b, v, 3, height, width, device=device
            )
            depths = torch.zeros(
                b, v, 1, height, width, device=device
            )
            alphas = torch.zeros(
                b, v, 1, height, width, device=device
            )

            for i in range(b):
                ctx.manual_seeds.append([])
                pc = ctx.gaussian_model.set_data(
                    xyz[i], features[i], scaling[i], rotation[i], opacity[i]
                )

                for j in range(v):
                    fxfycxcy_ij = fxfycxcy[i, j]
                    fx, fy, cx, cy = fxfycxcy_ij[0], fxfycxcy_ij[1], fxfycxcy_ij[2], fxfycxcy_ij[3]
                    for m in range(0, ctx.width//ctx.patch_size):
                        for n in range(0, ctx.height //ctx.patch_size):
                            seed = torch.randint(0, 2**32, (1,)).long().item()
                            ctx.manual_seeds[-1].append(seed)
                            # implement how to transform intrinsic
                            center_x = (m*ctx.patch_size + ctx.patch_size//2) / ctx.width
                            center_y = (n*ctx.patch_size + ctx.patch_size//2) / ctx.height
                            
                            scale_x = ctx.width // ctx.patch_size 
                            scale_y = ctx.height // ctx.patch_size
                            trans_x = 0.5 - scale_x * center_x 
                            trans_y = 0.5 - scale_y * center_y 

                            new_fx = scale_x * fx 
                            new_fy = scale_y * fy
                            new_cx = scale_x * cx + trans_x
                            new_cy = scale_y * cy + trans_y
                            
                            new_fxfycxcy = torch.stack([new_fx, new_fy, new_cx, new_cy], dim=0) 

                            render_results = render(pc, patch_size, patch_size, C2W[i, j], new_fxfycxcy)
                            colors[i, j, :, n*ctx.patch_size:(n+1)*ctx.patch_size, m*ctx.patch_size:(m+1)*ctx.patch_size] = render_results["render"]
                            depths[i, j, :, n*ctx.patch_size:(n+1)*ctx.patch_size, m*ctx.patch_size:(m+1)*ctx.patch_size] = render_results["depth"]
                            alphas[i, j, :, n*ctx.patch_size:(n+1)*ctx.patch_size, m*ctx.patch_size:(m+1)*ctx.patch_size] = render_results["alpha"]

        
        return colors, depths, alphas

    @staticmethod
    def backward(ctx, grad_colors, grad_depths, grad_alphas):
        """
        Backward process.
        """

        xyz, features, scaling, rotation, opacity = ctx.saved_tensors

        xyz_nosync = xyz.detach().clone()
        xyz_nosync.requires_grad = True
        xyz_nosync.grad = None

        features_nosync = features.detach().clone()
        features_nosync.requires_grad = True
        features_nosync.grad = None

        scaling_nosync = scaling.detach().clone()
        scaling_nosync.requires_grad = True
        scaling_nosync.grad = None

        rotation_nosync = rotation.detach().clone()
        rotation_nosync.requires_grad = True
        rotation_nosync.grad = None

        opacity_nosync = opacity.detach().clone()
        opacity_nosync.requires_grad = True
        opacity_nosync.grad = None

        with torch.enable_grad(), torch.cuda.amp.autocast(
            **ctx.gpu_autocast_kwargs
        ), torch.cpu.amp.autocast(**ctx.cpu_autocast_kwargs):
            b, v = ctx.C2W.shape[:2]

            for i in range(b):
                ctx.manual_seeds.append([])
                pc = ctx.gaussian_model.set_data(
                    xyz_nosync[i], features_nosync[i], scaling_nosync[i], rotation_nosync[i], opacity_nosync[i]
                )

                for j in range(v):
                    fxfycxcy_ij = ctx.fxfycxcy[i, j]
                    fx, fy, cx, cy = fxfycxcy_ij[0], fxfycxcy_ij[1], fxfycxcy_ij[2], fxfycxcy_ij[3]

                    for m in range(0, ctx.width//ctx.patch_size):
                        for n in range(0, ctx.height //ctx.patch_size):
                            grad_colors_split = grad_colors[i, j, :, n*ctx.patch_size:(n+1)*ctx.patch_size, m*ctx.patch_size:(m+1)*ctx.patch_size]
                            grad_depths_split = grad_depths[i, j, :, n*ctx.patch_size:(n+1)*ctx.patch_size, m*ctx.patch_size:(m+1)*ctx.patch_size]
                            grad_alphas_split = grad_alphas[i, j, :, n*ctx.patch_size:(n+1)*ctx.patch_size, m*ctx.patch_size:(m+1)*ctx.patch_size]

                            seed = torch.randint(0, 2**32, (1,)).long().item()
                            ctx.manual_seeds[-1].append(seed)
                            # Transform intrinsics
                            center_x = (m*ctx.patch_size + ctx.patch_size//2) / ctx.width
                            center_y = (n*ctx.patch_size + ctx.patch_size//2) / ctx.height

                            scale_x = ctx.width // ctx.patch_size
                            scale_y = ctx.height // ctx.patch_size
                            trans_x = 0.5 - scale_x * center_x
                            trans_y = 0.5 - scale_y * center_y

                            new_fx = scale_x * fx
                            new_fy = scale_y * fy
                            new_cx = scale_x * cx + trans_x
                            new_cy = scale_y * cy + trans_y

                            new_fxfycxcy = torch.stack([new_fx, new_fy, new_cx, new_cy], dim=0)

                            render_results = render(pc, ctx.patch_size, ctx.patch_size, ctx.C2W[i, j], new_fxfycxcy)
                            color_split = render_results["render"]
                            depth_split = render_results["depth"]
                            alpha_split = render_results["alpha"]

                            render_split = torch.cat([color_split, depth_split, alpha_split], dim=0)
                            grad_split = torch.cat([grad_colors_split, grad_depths_split, grad_alphas_split], dim=0) 
                            render_split.backward(grad_split)


        return xyz_nosync.grad, features_nosync.grad, scaling_nosync.grad, rotation_nosync.grad, opacity_nosync.grad, None, None, None, None, None, None


def deferred_bp(
        xyz, features, scaling, rotation, opacity, height, width, C2W, fxfycxcy, patch_size, gaussian_model,
):
    return DeferredBP.apply(
        xyz, features, scaling, rotation, opacity, height, width, C2W, fxfycxcy, patch_size, gaussian_model,
    )


