import random
import gradio as gr
from functools import partial
from .gradio_custommodel3d import CustomModel3D


def create_prompt_opts(var_dict):
    var_dict['prompt'] = gr.Textbox(
        label='Prompt', show_label=False, lines=1, placeholder='Prompt', container=False, interactive=True)
    var_dict['negative_prompt'] = gr.Textbox(
        label='Negative prompt', show_label=False, lines=1,
        placeholder='Negative prompt', container=False, interactive=True)


def create_generate_bar(var_dict, text='Generate', variant='primary', seed=-1):
    with gr.Row(equal_height=False):
        var_dict['run_btn'] = gr.Button(text, variant=variant, scale=2)
        var_dict['seed'] = gr.Number(
            label='Seed', value=seed, min_width=100, precision=0, minimum=-1, maximum=2 ** 31,
            elem_classes=['force-hide-container'])
        var_dict['random_seed'] = gr.Button('\U0001f3b2\ufe0f', elem_classes=['tool'])
        var_dict['reuse_seed'] = gr.Button('\u267b\ufe0f', elem_classes=['tool'])
        with gr.Column(visible=False):
            var_dict['last_seed'] = gr.Number(value=seed, label='Last seed')
    var_dict['reuse_seed'].click(
        fn=lambda x: x,
        inputs=var_dict['last_seed'],
        outputs=var_dict['seed'],
        show_progress=False,
        api_name=False)
    var_dict['random_seed'].click(
        fn=lambda: -1,
        outputs=var_dict['seed'],
        show_progress=False,
        api_name=False)


def create_base_opts(var_dict,
                     scheduler='DPMSolverMultistep',
                     scheduler_dropdown=['DPMSolverMultistep', 'DPMSolverMultistepKarras',
                                         'EulerAncestralDiscrete', 'DDIM'],
                     steps=24,
                     denoising_strength=0.5,
                     random_init=False,
                     cfg_scale=7,
                     render=True):
    with gr.Column(variant='compact', elem_classes=['custom-spacing'], render=render) as base_opts:
        with gr.Row(variant='compact', elem_classes=['force-hide-container']):
            var_dict['scheduler'] = gr.Dropdown(
                scheduler_dropdown, value=scheduler, label='Sampling method',
                elem_classes=['force-hide-container'])
            var_dict['steps'] = gr.Slider(
                1, 64, value=steps, step=1, label='Sampling steps', elem_classes=['force-hide-container'])
        if denoising_strength is not None:
            with gr.Row(variant='compact', elem_classes=['force-hide-container']):
                var_dict['denoising_strength'] = gr.Slider(
                    minimum=0.0, maximum=1.0, step=0.01, label='Denoising strength', value=denoising_strength, scale=3,
                    elem_classes=['force-hide-container'])
                var_dict['random_init'] = gr.Checkbox(
                    label='Random initialization', value=random_init, container=False)
        var_dict['cfg_scale'] = gr.Slider(
            0.0, 30.0, value=cfg_scale, step=0.5, label='CFG scale', elem_classes=['force-hide-container'])
    return base_opts


def create_auxiliary_prompt_opts(var_dict, aux_prompt='', aux_negative_prompt=''):
    with gr.Accordion('Auxiliary text prompts', open=False, elem_classes=['custom-spacing']):
        with gr.Column(variant='compact', elem_classes=['custom-spacing']):
            with gr.Row(variant='compact', elem_classes=['force-hide-container']):
                var_dict['aux_prompt'] = gr.Textbox(
                    label='Prompt', value=aux_prompt, lines=1, elem_classes=['force-hide-container'])
            with gr.Row(variant='compact', elem_classes=['force-hide-container']):
                var_dict['aux_negative_prompt'] = gr.Textbox(
                    label='Negative prompt', value=aux_negative_prompt, lines=1, elem_classes=['force-hide-container'])


def create_batch_size_opts(var_dict,
                           diff_bs=10,
                           patch_size=128,
                           patch_bs_nerf=1,
                           render_bs=8,
                           patch_bs=8):
    if diff_bs is not None:
        with gr.Column(variant='compact', elem_classes=['custom-spacing']):
            var_dict['diff_bs'] = gr.Slider(
                1, 32, value=diff_bs, step=1, label='Diffusion batch size (# of views)',
                elem_classes=['force-hide-container'])
    with gr.Accordion('Optimization batch size', open=False, elem_classes=['custom-spacing']):
        with gr.Column(variant='compact', elem_classes=['custom-spacing']):
            with gr.Row(variant='compact', elem_classes=['force-hide-container']):
                var_dict['patch_size'] = gr.Dropdown(
                    [128, 256, 512], value=patch_size, label='Patch size', elem_classes=['force-hide-container'])
            if patch_bs_nerf is not None:
                with gr.Row(variant='compact', elem_classes=['force-hide-container']):
                    var_dict['patch_bs_nerf'] = gr.Slider(
                        1, 16, value=1, step=1, label='NeRF rendering batch size (# of patches)',
                        elem_classes=['force-hide-container'])
            if render_bs is not None:
                with gr.Row(variant='compact', elem_classes=['force-hide-container']):
                    var_dict['render_bs'] = gr.Slider(
                        1, 32, value=render_bs, step=1, label='Mesh rendering batch size (# of views)',
                        elem_classes=['force-hide-container'])
            with gr.Row(variant='compact', elem_classes=['force-hide-container']):
                var_dict['patch_bs'] = gr.Slider(
                    1, 32, value=patch_bs, step=1, label='LPIPS batch size (# of patches)',
                    elem_classes=['force-hide-container'])


def create_loss_sliders(var_dict,
                        alpha_soften=0.02,
                        normal_reg_weight=4.0,
                        start_entropy_weight=0.0,
                        end_entropy_weight=3.0,
                        entropy_d=0.015,
                        mesh_smoothness=5.0):
    with gr.Accordion('Optimization loss functions', open=False):
        with gr.Column(variant='compact', elem_classes=['custom-spacing']):
            var_dict['alpha_soften'] = gr.Slider(
                0.0, 0.1, value=alpha_soften, step=0.001,
                label='Alpha softening', elem_classes=['force-hide-container'])
            var_dict['normal_reg_weight'] = gr.Slider(
                0.0, 20.0, value=normal_reg_weight, step=0.1,
                label='Normal regularization weight', elem_classes=['force-hide-container'])
            with gr.Row(variant='compact', elem_classes=['force-hide-container']):
                var_dict['start_entropy_weight'] = gr.Slider(
                    0.0, 20.0, value=start_entropy_weight, step=0.1,
                    label='Start entropy weight', elem_classes=['force-hide-container'])
                var_dict['end_entropy_weight'] = gr.Slider(
                    0.0, 20.0, value=end_entropy_weight, step=0.1,
                    label='End entropy weight', elem_classes=['force-hide-container'])
            var_dict['entropy_d'] = gr.Slider(
                0.0, 0.1, value=entropy_d, step=0.001,
                label='Entropy loss d (background correction)', elem_classes=['force-hide-container'])
            var_dict['mesh_smoothness'] = gr.Slider(
                0.0, 20.0, value=mesh_smoothness, step=0.1,
                label='Mesh smoothness', elem_classes=['force-hide-container'])


def create_optimization_opts(var_dict,
                             main_label='NeRF/mesh optimization steps',
                             n_inverse_steps=80,
                             init_inverse_steps=512,
                             tet_init_inverse_steps=120,
                             start_lr=0.01,
                             end_lr=0.005,
                             tet_resolution=128):
    if init_inverse_steps is not None or tet_init_inverse_steps is not None:
        with gr.Accordion('Optimization steps', open=False):
            with gr.Column(variant='compact', elem_classes=['custom-spacing']):
                with gr.Row(variant='compact', elem_classes=['force-hide-container']):
                    var_dict['n_inverse_steps'] = gr.Slider(
                        0, 1024, value=n_inverse_steps, step=1,
                        label=main_label, elem_classes=['force-hide-container'])
                with gr.Row(variant='compact', elem_classes=['force-hide-container']):
                    var_dict['init_inverse_steps'] = gr.Slider(
                        0, 1024, value=init_inverse_steps, step=1,
                        label='Initial NeRF optimization steps', elem_classes=['force-hide-container'])
                if tet_init_inverse_steps is not None:
                    with gr.Row(variant='compact', elem_classes=['force-hide-container']):
                        var_dict['tet_init_inverse_steps'] = gr.Slider(
                            0, 1024, value=tet_init_inverse_steps, step=1,
                            label='DMTet conversion optimization steps', elem_classes=['force-hide-container'])
    with gr.Column(variant='compact', elem_classes=['custom-spacing']):
        if init_inverse_steps is None and tet_init_inverse_steps is None:
            with gr.Row(variant='compact', elem_classes=['force-hide-container']):
                var_dict['n_inverse_steps'] = gr.Slider(
                    0, 1024, value=n_inverse_steps, step=1,
                    label=main_label, elem_classes=['force-hide-container'])
        with gr.Row(variant='compact', elem_classes=['force-hide-container']):
            var_dict['start_lr'] = gr.Slider(0.0, 0.1, value=start_lr, step=0.001,
                                             label='Start learning rate', elem_classes=['force-hide-container'])
            var_dict['end_lr'] = gr.Slider(
                0.0, 0.1, value=end_lr, step=0.001, label='End learning rate', elem_classes=['force-hide-container'])
        if tet_resolution is not None:
            var_dict['tet_resolution'] = gr.Dropdown(
                [128, 256], value=tet_resolution, label='DMTet resolution', elem_classes=['force-hide-container'])


def create_stablessdnerf_opts(
        var_dict,
        stablessdnerf_signatures,
        scheduler='EulerAncestralDiscrete',
        scheduler_dropdown=[
            'DDIM',
            'DDPM',
            'DEISMultistep',
            'DPMSolverMultistep',
            'DPMSolverSDE',
            'DPMSolverSinglestep',
            'EulerAncestralDiscrete',
            'EulerDiscrete',
            'HeunDiscrete',
            'KDPM2AncestralDiscrete',
            'KDPM2Discrete',
            'LMSDiscrete',
            'PNDM',
            'UniPCMultistep'],
        steps=32):
    with gr.Accordion('StableSSDNeRF options', open=False):
        create_base_opts(
            var_dict, scheduler=scheduler, scheduler_dropdown=scheduler_dropdown,
            steps=steps, denoising_strength=None,
            cfg_scale=stablessdnerf_signatures['cfg_scale'])


def create_superres_opts(
        var_dict,
        superres_signatures,
        do_superres=True, scheduler='DPMSolverSDEKarras',
        scheduler_dropdown=[
            'DPMSolverSDE', 'DPMSolverMultistep', 'DPMSolverSDEKarras', 'DPMSolverMultistepKarras',
            'EulerAncestralDiscrete', 'DDIM'],
        steps=24, denoising_strength=0.4, random_init=False,
        n_inverse_steps=48,
        show_advanced=True):
    var_dict['do_superres'] = gr.Checkbox(label='Texture super-resolution', value=do_superres, container=False)
    with gr.Accordion('Texture super-resolution options', open=False):
        create_base_opts(
            var_dict, scheduler=scheduler, scheduler_dropdown=scheduler_dropdown,
            steps=steps, denoising_strength=denoising_strength,
            random_init=random_init, cfg_scale=superres_signatures['cfg_scale'])
        if show_advanced:
            gr.Markdown('### Advanced settings')
            var_dict['checkpoint'] = gr.Textbox(
                label='Stable Diffusion v1.5 checkpoint', lines=1, value=superres_signatures['checkpoint'],
                elem_classes=['force-hide-container'])
            create_auxiliary_prompt_opts(
                var_dict, aux_prompt=superres_signatures['aux_prompt'],
                aux_negative_prompt=superres_signatures['aux_negative_prompt'])
            create_batch_size_opts(
                var_dict, diff_bs=None, patch_size=superres_signatures['patch_size'],
                patch_bs_nerf=None, render_bs=None, patch_bs=superres_signatures['patch_bs'])
            create_optimization_opts(
                var_dict, main_label='Texture optimization steps', n_inverse_steps=n_inverse_steps,
                init_inverse_steps=None, tet_init_inverse_steps=None,
                start_lr=superres_signatures['start_lr'], end_lr=superres_signatures['end_lr'], tet_resolution=None)


def on_select(evt: gr.SelectData):
    print('Selected: ', evt.index)
    return evt.index


def create_mesh_input(var_dict, cache_dir, preproc_api, render_bs=8, api_name=None):
    var_dict['in_mesh'] = CustomModel3D(
        height=400, label='Input 3D model (.glb)', interactive=True)
    with gr.Column(visible=False):
        var_dict['proc_mesh'] = gr.Textbox(interactive=False, label='Processed mesh')
        var_dict['front_view_id'] = gr.Number(interactive=False, label='Front view ID')
    var_dict['in_mv'] = gr.Gallery(
        columns=6, rows=2, interactive=False, label='Select the front view (optional)',
        height=244, type='pil', allow_preview=False)
    var_dict['preproc_kwargs'] = dict(
        fn=partial(preproc_api, cache_dir=cache_dir, render_bs=render_bs),
        inputs=var_dict['in_mesh'],
        outputs=[var_dict['in_mv'], var_dict['proc_mesh'], var_dict['front_view_id']],
        concurrency_id='default_group')
    var_dict['in_mesh'].change(
        **var_dict['preproc_kwargs'],
        api_name=api_name)
    var_dict['in_mv'].select(
        fn=on_select,
        inputs=None,
        outputs=var_dict['front_view_id'],
        api_name=False)


def create_send_buttons(var_dict):
    with gr.Row():
        var_dict['to_text_3d_to_3d'] = gr.Button('To Text-Guided 3D-to-3D')
        var_dict['to_instruct_3d_to_3d'] = gr.Button('To Instruct 3D-to-3D')
    with gr.Row():
        var_dict['to_text_retex'] = gr.Button('To Txt/Img-Guided Re-Texturing')
        var_dict['to_instruct_retex'] = gr.Button('To Instruct Re-Texturing')
    with gr.Row():
        var_dict['export_video'] = gr.Button('Export Video')


def set_seed(seed):
    seed = random.randint(0, 2**31) if seed == -1 else seed
    return seed


def send_to_click(*inputs, target_tab_ids=None):
    assert isinstance(target_tab_ids, list)
    out_tabs = [gr.Tabs(selected=target_tab_id) for target_tab_id in target_tab_ids]
    return *inputs, *out_tabs
