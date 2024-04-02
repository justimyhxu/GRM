import gradio as gr
from functools import partial
from .gradio_custommodel3d import CustomModel3D
from .shared_opts import create_generate_bar, set_seed
from .gradio_customgs import CustomGS


def create_interface_img_to_3d(
        segmentation_api, grm_api):
    var_dict = dict()
    with gr.Blocks(analytics_enabled=False) as interface:
        with gr.Row():
            with gr.Column(scale=3):
                with gr.Row():
                    var_dict['in_image'] = gr.Image(
                        type='pil', image_mode='RGBA', label='Input image')
                    var_dict['fg_image'] = gr.Image(
                        type='pil', label='Segmented foreground', interactive=False, image_mode='RGBA')
                gr.Examples(
                    examples='examples',
                    inputs=var_dict['in_image'],
                    cache_examples=False,
                    label='Examples (click one of the images below to start)',
                    examples_per_page=18)
                var_dict['model'] = gr.Dropdown(
                    ['Zero123++ v1.1', 'Zero123++ v1.2'], value='Zero123++ v1.2',
                    label='Multi-view model',
                    elem_classes=['force-hide-container'])
                var_dict['fuse_mesh'] = gr.Checkbox(
                    label='Fuse mesh to get 3D model', value=False, container=False)
                create_generate_bar(var_dict, text='Generate', seed=-1)

            with gr.Column(scale=2):
                var_dict['out_gs_vis'] = CustomGS(
                    label='Output GS', interactive=False, height=400)
                var_dict['out_gs'] = gr.File(
                    label='Output GS (download)', interactive=False)
                var_dict['out_video'] = gr.Video(
                    label='Output video', interactive=False, autoplay=True, height=320)
                var_dict['out_mesh'] = CustomModel3D(
                    label='Output mesh', interactive=False, height=400)

        var_dict['run_btn'].click(
            fn=segmentation_api, inputs=var_dict['in_image'],
            outputs=var_dict['fg_image'], concurrency_id='default_group',
            api_name='run_segmentation'
        ).success(
            fn=set_seed,
            inputs=var_dict['seed'],
            outputs=var_dict['last_seed'], api_name=False
        ).success(
            fn=partial(grm_api, cache_dir=interface.GRADIO_CACHE),
            inputs=[var_dict['last_seed'], var_dict['fg_image'], var_dict['model'], var_dict['fuse_mesh']],
            outputs=[var_dict[k] for k in ['out_gs_vis', 'out_gs', 'out_video', 'out_mesh']], concurrency_id='default_group',
            api_name='run_img_to_3d'
        )

    return interface, var_dict
