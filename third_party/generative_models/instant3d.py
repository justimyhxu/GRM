import random
import math
import os
import sys

import numpy as np
import torch
from omegaconf import OmegaConf
from torch import autocast
import torch.nn.functional as F
from torchvision import transforms

from sgm.util import default, instantiate_from_config
from sgm.modules.diffusionmodules.sampling import EulerEDMSampler
from scripts.demo.streamlit_helpers import (
    get_batch, 
    load_model, 
    unload_model, 
    init_embedder_options,
    get_unique_embedder_keys_from_conditioner,
)

def init_sampling(
    steps=100,
    guidance_scale=5.0,
):
    discretization_config = {
            "target": "sgm.modules.diffusionmodules.discretizer.LegacyDDPMDiscretization",
        }
    guider_config = {
            "target": "sgm.modules.diffusionmodules.guiders.VanillaCFG",
            "params": {
                 "scale": guidance_scale,
                 }
        }
    sampler = EulerEDMSampler(
        num_steps=steps,
        discretization_config=discretization_config,
        guider_config=guider_config,
        verbose=True,
    )
    return sampler


def build_gaussians(H, W, std, device, dtype):
    assert H == W
    x_vals = torch.arange(W).to(device).to(dtype)
    y_vals = torch.arange(H).to(device).to(dtype)
    x_vals, y_vals = torch.meshgrid(x_vals, y_vals)
    x_vals = x_vals.unsqueeze(0).unsqueeze(0)
    y_vals = y_vals.unsqueeze(0).unsqueeze(0)
    center_x, center_y = W // 2, H // 2

    gaussian = torch.exp(-((x_vals - center_x) ** 2 + (y_vals - center_y) ** 2) / (2 * (std * H) ** 2))
    gaussian = gaussian / gaussian.max()
    gaussian = gaussian.repeat(1, 3, 1, 1)
    gaussian = 1. - gaussian  

    gaussian = torch.cat([gaussian, gaussian], dim=-1)
    gaussian = torch.cat([gaussian, gaussian], dim=-2)
    gaussians = F.interpolate(gaussian, (H, W), mode='bilinear')
    gaussians = 2 * gaussians - 1

    return gaussians


def do_sample(
    model,
    sampler,
    value_dict,
    num_samples,
    H,
    W,
    C,
    F,
    gaussian_std=0.1,
    force_uc_zero_embeddings=None,
    force_cond_zero_embeddings=None,
    batch2model_input=None,
    return_latents=False,
    additional_batch_uc_fields=None,
    filter=None,
    T=None,
    decoding_t=None,
):

    force_uc_zero_embeddings = default(force_uc_zero_embeddings, [])
    batch2model_input = default(batch2model_input, [])
    additional_batch_uc_fields = default(additional_batch_uc_fields, [])

    precision_scope = autocast
    with torch.no_grad():
        with precision_scope("cuda"):
            with model.ema_scope():
                load_model(model.conditioner)

                if T is not None:
                    num_samples = [num_samples, T]
                else:
                    num_samples = [num_samples]

                batch, batch_uc = get_batch(
                    get_unique_embedder_keys_from_conditioner(model.conditioner),
                    value_dict,
                    num_samples,
                    T=T,
                    additional_batch_uc_fields=additional_batch_uc_fields,
                )

                c, uc = model.conditioner.get_unconditional_conditioning(
                    batch,
                    batch_uc=batch_uc,
                    force_uc_zero_embeddings=force_uc_zero_embeddings,
                    force_cond_zero_embeddings=force_cond_zero_embeddings,
                )

                for k in c:
                    if not k == "crossattn":
                        c[k], uc[k] = map(
                            lambda y: y[k][: math.prod(num_samples)].to("cuda"), (c, uc)
                        )
                    if k in ["crossattn", "concat"] and T is not None:
                        uc[k] = repeat(uc[k], "b ... -> b t ...", t=T)
                        uc[k] = rearrange(uc[k], "b t ... -> (b t) ...", t=T)
                        c[k] = repeat(c[k], "b ... -> b t ...", t=T)
                        c[k] = rearrange(c[k], "b t ... -> (b t) ...", t=T)

                additional_model_inputs = {}
                for k in batch2model_input:
                    if k == "image_only_indicator":
                        assert T is not None

                        if isinstance(
                            sampler.guider,
                            (
                                VanillaCFG,
                                LinearPredictionGuider,
                                TrianglePredictionGuider,
                            ),
                        ):
                            additional_model_inputs[k] = torch.zeros(
                                num_samples[0] * 2, num_samples[1]
                            ).to("cuda")
                        else:
                            additional_model_inputs[k] = torch.zeros(num_samples).to(
                                "cuda"
                            )
                    else:
                        additional_model_inputs[k] = batch[k]

                shape = (math.prod(num_samples), C, H // F, W // F)
                randn = torch.randn(shape).to("cuda")

                def fuse_latents(randn, gaussians):
                    sigma_max = sampler.discretization(sampler.num_steps)[0]
                    randn = randn * sigma_max + gaussians
                    randn /= torch.sqrt(1.0 + sigma_max ** 2.0) 
                    return randn

                gaussians = build_gaussians(H, W, gaussian_std, "cuda:0", randn.dtype)
                gaussians = model.encode_first_stage(gaussians) 
                randn = fuse_latents(randn, gaussians)


                def denoiser(input, sigma, c):
                    return model.denoiser(
                        model.model, input, sigma, c, **additional_model_inputs
                    )

                load_model(model.denoiser)
                load_model(model.model)
                samples_z = sampler(denoiser, randn, cond=c, uc=uc)
                unload_model(model.model)
                unload_model(model.denoiser)

                load_model(model.first_stage_model)
                model.en_and_decode_n_samples_a_time = (
                    decoding_t  # Decode n frames at a time
                )
                samples_x = model.decode_first_stage(samples_z)
                samples = torch.clamp((samples_x + 1.0) / 2.0, min=0.0, max=1.0)
                unload_model(model.first_stage_model)

                if filter is not None:
                    samples = filter(samples)

                if return_latents:
                    return samples, samples_z
                return samples


def run_txt2img(
    model,
    prompt,
    negative_prompt,
    guidance_scale,
    num_steps=100,
    return_latents=False,
    gaussian_std=0.1,
    filter=None,
):
    W = H = 1024
    C = 4
    F = 8

    init_dict = {
        "orig_width": W,
        "orig_height": H,
        "target_width": W,
        "target_height": H,
    }

    value_dict = init_embedder_options(
        get_unique_embedder_keys_from_conditioner(model.conditioner),
        init_dict,
        prompt=prompt,
        negative_prompt=negative_prompt,
    )
    sampler = init_sampling(steps=num_steps, guidance_scale=guidance_scale)

    out = do_sample(
        model=model,
        sampler=sampler,
        value_dict=value_dict,
        num_samples=1,
        H=H,
        W=W,
        C=C,
        F=F,
        force_uc_zero_embeddings=["txt"],
        gaussian_std=gaussian_std,
        return_latents=return_latents,
        filter=filter,
    )
    return out

def build_instant3d_model(config_path, ckpt_path):
    global config
    config = OmegaConf.load(config_path)
    model = instantiate_from_config(config.model)
    model.load_state_dict(torch.load(ckpt_path, map_location="cpu"))
    model.cuda()
    return model


def instant3d_pipe(model, prompt, negative_prompt="", guidance_scale=5.0, num_steps=30, gaussian_std=0.1):
    out = run_txt2img(
        model=model,
        prompt=prompt,
        negative_prompt=negative_prompt,
        guidance_scale=guidance_scale,
        return_latents=False,
        num_steps=num_steps,
        gaussian_std=gaussian_std,
    )
    if isinstance(out, (tuple, list)):
        samples, samples_z = out
    else:
        samples = out
        samples_z = None
    assert samples.shape[0] == 1 and samples.shape[1] == 3
    sample = samples[0]
    return sample



