import gradio as gr
from functools import partial
from .shared_opts import create_base_opts, create_generate_bar, create_auxiliary_prompt_opts, \
    set_seed, create_prompt_opts
from .parameters import image_defaults


def create_interface_text_to_img_to_3d(sd_api, examples=None, advanced=True):
    var_dict = dict()
    with gr.Blocks(analytics_enabled=False) as interface:
        md_txt = ('Generic text-to-3D can be achieved by chaining text-to-image and image-to-3D. '
                  'This tab provides a simple text-to-image interface based on Stable Diffusion (`'
                  + image_defaults['checkpoint'] + '` by default).<br>'
                  'After generating the image, you can send the results **to Image-to-3D**.')
        gr.Markdown(md_txt)
        with gr.Row():
            with gr.Column():
                with gr.Column(variant='compact', elem_classes=['custom-spacing']):
                    with gr.Row(variant='compact', elem_classes=['force-hide-container']):
                        var_dict['width'] = gr.Slider(
                            label='Width', minimum=64, maximum=2048, step=8, value=image_defaults['width'],
                            elem_classes=['force-hide-container'])
                        var_dict['switch_hw'] = gr.Button('\U000021C6', elem_classes=['tool'])
                        var_dict['height'] = gr.Slider(
                            label='Height', minimum=64, maximum=2048, step=8, value=image_defaults['height'],
                            elem_classes=['force-hide-container'])
                        var_dict['switch_hw'].click(
                            fn=lambda w, h: (h, w),
                            inputs=[var_dict['width'], var_dict['height']],
                            outputs=[var_dict['width'], var_dict['height']],
                            show_progress=False,
                            api_name=False)
                create_prompt_opts(var_dict)
                if examples is not None:
                    gr.Examples(
                        examples=examples,
                        inputs=[var_dict[k] for k in ['width', 'height', 'prompt', 'negative_prompt']],
                        label='Examples (click one of the rows below to start)',
                        api_name=False)
                create_generate_bar(var_dict, text='Generate', seed=-1)
                create_base_opts(
                    var_dict, scheduler='DPMSolverMultistep',
                    scheduler_dropdown=[
                        'DPMSolverSDE', 'DPMSolverMultistep', 'DPMSolverSDEKarras', 'DPMSolverMultistepKarras',
                        'EulerAncestralDiscrete', 'DDIM'],
                    steps=32, denoising_strength=None, cfg_scale=image_defaults['cfg_scale'])
                if advanced:
                    gr.Markdown('### Advanced settings')
                    create_auxiliary_prompt_opts(
                        var_dict, **{key: image_defaults[key] for key in ['aux_prompt', 'aux_negative_prompt']})

            with gr.Column():
                var_dict['output_image'] = gr.Image(
                    type='pil', image_mode='RGB', label='Output image', interactive=False)
                var_dict['to_img_to_3d'] = gr.Button('To Image-to-3D')

        default_var_dict = {
            k: v for k, v in image_defaults.items()
            if k not in var_dict}
        text_to_img_fun = partial(sd_api, **default_var_dict)
        img_to_3d_inputs = [var_dict[k] for k in image_defaults.keys()
                            if k not in default_var_dict]

        var_dict['run_btn'].click(
            fn=set_seed,
            inputs=var_dict['seed'],
            outputs=var_dict['last_seed'], api_name=False
        ).success(
            fn=text_to_img_fun,
            inputs=[var_dict['last_seed']] + img_to_3d_inputs,
            outputs=var_dict['output_image'],
            concurrency_id='default_group', api_name='text_to_img'
        )

    return interface, var_dict
