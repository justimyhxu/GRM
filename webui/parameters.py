from collections import OrderedDict


nerf_mesh_defaults = OrderedDict([
    ('prompt', None),
    ('negative_prompt', None),
    ('scheduler', None),
    ('steps', None),
    ('denoising_strength', None),
    ('random_init', None),
    ('cfg_scale', 7),
    ('checkpoint', 'runwayml/stable-diffusion-v1-5'),
    ('aux_prompt', 'best quality, sharp focus, photorealistic, extremely detailed'),
    ('aux_negative_prompt', 'worst quality, low quality, depth of field, blurry, out of focus, low-res, '
                            'illustration, painting, drawing'),
    ('diff_bs', None),
    ('patch_size', 128),
    ('patch_bs_nerf', 1),
    ('render_bs', 8),
    ('patch_bs', 8),
    ('alpha_soften', 0.02),
    ('normal_reg_weight', 4.0),
    ('start_entropy_weight', 0.0),
    ('end_entropy_weight', 4.0),
    ('entropy_d', 0.015),
    ('mesh_smoothness', 5.0),
    ('n_inverse_steps', None),
    ('init_inverse_steps', None),
    ('tet_init_inverse_steps', 120),
    ('start_lr', 0.01),
    ('end_lr', 0.005),
    ('tet_resolution', None)])

superres_defaults = OrderedDict([
    ('do_superres', None),
    ('scheduler', None),
    ('steps', None),
    ('denoising_strength', None),
    ('random_init', None),
    ('cfg_scale', 7),
    ('checkpoint', 'runwayml/stable-diffusion-v1-5'),
    ('aux_prompt', 'best quality, sharp focus, photorealistic, extremely detailed'),
    ('aux_negative_prompt', 'worst quality, low quality, depth of field, blurry, out of focus, low-res, '
                            'illustration, painting, drawing'),
    ('patch_size', 512),
    ('patch_bs', 1),
    ('n_inverse_steps', None),
    ('start_lr', 0.01),
    ('end_lr', 0.01)])

image_defaults = OrderedDict([
    ('width', 512),
    ('height', 512),
    ('prompt', None),
    ('negative_prompt', None),
    ('scheduler', None),
    ('steps', None),
    ('cfg_scale', 7),
    ('checkpoint', 'Lykon/dreamshaper-8'),
    ('aux_prompt', 'best quality, sharp focus, photorealistic, extremely detailed'),
    ('aux_negative_prompt', 'worst quality, low quality, depth of field, blurry, out of focus, low-res, '
                            'illustration, painting, drawing')])

retex_defaults = OrderedDict([
    ('prompt', None),
    ('negative_prompt', None),
    ('scheduler', None),
    ('steps', None),
    ('denoising_strength', None),
    ('random_init', None),
    ('cfg_scale', 7),
    ('force_auto_uv', False),
    ('checkpoint', 'Lykon/dreamshaper-8'),
    ('aux_prompt', 'best quality'),
    ('aux_negative_prompt', 'worst quality, low quality'),
    ('diff_bs', None),
    ('patch_size', 512),
    ('render_bs', 8),
    ('patch_bs', 1),
    ('n_inverse_steps', None),
    ('init_inverse_steps', None),
    ('start_lr', 0.01),
    ('end_lr', 0.01)]
)

stablessdnerf_signatures = OrderedDict([
    ('prompt', None),
    ('negative_prompt', None),
    ('scheduler', None),
    ('steps', None),
    ('cfg_scale', 7),
    ('render_bs', 4)]
)

text_3d_to_3d_params = dict(
    normal_reg_weight=0.6,
    start_entropy_weight=0.25,
    end_entropy_weight=3.0,
    mesh_smoothness=0.5,
    start_lr=0.0075,
    alpha_soften=0.0,
)

text_3d_to_3d_superres_params = dict(
    checkpoint='Lykon/dreamshaper-8'
)

instruct_3d_to_3d_params = dict(
    normal_reg_weight=2.0,
    start_entropy_weight=0.0,
    end_entropy_weight=4.0,
    mesh_smoothness=0.5,
    entropy_d=0.02,
    start_lr=0.0075,
    aux_prompt='',
    aux_negative_prompt='blur the texture',
)

instruct_retex_params = dict(
    aux_prompt='',
    aux_negative_prompt='blur the texture',
)

stablessdnerf_to_mesh_params = dict(
    normal_reg_weight=0.1,
    start_entropy_weight=0.25,
    end_entropy_weight=3.0,
    mesh_smoothness=0.5,
    start_lr=0.01,
    alpha_soften=0.0,
)


def parse_3d_args(args, kwargs):
    nerf_mesh_kwargs = {
        k: kwargs[k] if k in kwargs else args.pop(0) for k in nerf_mesh_defaults.keys()}
    superres_kwargs = {
        k: kwargs['superres_' + k] if 'superres_' + k in kwargs else args.pop(0) for k in superres_defaults.keys()}
    init_images = args
    return nerf_mesh_kwargs, superres_kwargs, init_images


def parse_2d_args(args, kwargs):
    image_kwargs = {
        k: kwargs[k] if k in kwargs else args.pop(0) for k in image_defaults.keys()}
    return image_kwargs


def parse_retex_args(args, kwargs):
    retex_kwargs = {
        k: kwargs[k] if k in kwargs else args.pop(0) for k in retex_defaults.keys()}
    superres_kwargs = {
        k: kwargs['superres_' + k] if 'superres_' + k in kwargs else args.pop(0) for k in superres_defaults.keys()}
    if len(args) == 0:
        in_image = None
    elif len(args) == 1:
        in_image = args[0]
    else:
        raise ValueError
    return retex_kwargs, superres_kwargs, in_image


def parse_stablessdnerf_args(args, kwargs):
    stablessdnerf_kwargs = {
        k: kwargs[k] if k in kwargs else args.pop(0) for k in stablessdnerf_signatures.keys()}
    return stablessdnerf_kwargs
