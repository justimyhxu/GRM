import os
import sys

sys.path.append(os.path.abspath(os.path.join(__file__, '../')))
if 'OMP_NUM_THREADS' not in os.environ:
    os.environ['OMP_NUM_THREADS'] = '16'

import shutil
import os.path as osp
import argparse
import torch
import gradio as gr
from functools import partial
from webui.tab_text_to_img_to_3d import create_interface_text_to_img_to_3d
from webui.tab_img_to_3d import create_interface_img_to_3d
from webui.tab_instant3d import create_interface_instant3d
from webui.runner import GRMRunner
from webui.shared_opts import send_to_click


def parse_args():
    parser = argparse.ArgumentParser(description='GRM Live Demo')
    parser.add_argument('--advanced', action='store_true', help='Show advanced settings')
    return parser.parse_args()


def main():
    args = parse_args()

    torch.set_grad_enabled(False)
    device = torch.device('cuda')
    runner = GRMRunner(device)

    with gr.Blocks(analytics_enabled=False,
                   title='GRM Live Demo',
                   css='webui/style.css'
                   ) as demo:
        md_txt = '# GRM Live Demo' \
                 '\n\nOfficial demo of the paper [GRM: Large Gaussian Reconstruction Model for Efficient 3D Reconstruction and Generation](https://justimyhxu.github.io/projects/grm/). ' \
                 'Part of this demo is based on [MVEdit Web UI](https://huggingface.co/spaces/Lakonik/MVEdit).' \
                 '<br>GRM can reconstruct 3D Gaussians and meshes from various sources, including **Zero123++**, **Instant3D**, **V3D**, **SV3D**. To save VRAM, this demo only supports **Zero123++** and **Instant3D**, while the the full supports will be available in the official [code release](https://github.com/justimyhxu/grm).'
        gr.Markdown(md_txt)

        with gr.Tabs() as main_tabs:

            with gr.TabItem('Image-to-3D', id='tab_img_to_3d'):
                _, var_img_to_3d = create_interface_img_to_3d(
                    runner.run_segmentation,
                    runner.run_img_to_3d)

            with gr.TabItem('Text-to-3D', id='tab_text_to_3d'):
                with gr.Tabs() as sub_tabs_text_to_3d:
                    with gr.TabItem('Instant3D', id='tab_instant3d'):
                        _, var_instant3d = create_interface_instant3d(
                            runner.run_instant3d,
                            examples=[
                                'a wooden carving of a wise old turtle',
                                'a glowing robotic unicorn, full body',
                                'a ceramic mug shaped like a smiling cat',
                                'a car made out of cheese',
                                'a beagle in a detective’s outfit',
                            ])
                    with gr.TabItem('Text-to-Image-to-3D', id='tab_text_to_img_to_3d'):
                        _, var_text_to_img_to_3d = create_interface_text_to_img_to_3d(
                            runner.run_text_to_img,
                            examples=[
                                [768, 512, 'a wooden carving of a wise old turtle', ''],
                                [512, 512, 'a glowing robotic unicorn, full body', ''],
                                [512, 512, 'a ceramic mug shaped like a smiling cat', ''],
                            ],
                            advanced=args.advanced)

        var_text_to_img_to_3d[f'to_img_to_3d'].click(
            fn=partial(send_to_click, target_tab_ids=['tab_img_to_3d']),
            inputs=[var_text_to_img_to_3d['output_image']],
            outputs=[var_img_to_3d['in_image'], main_tabs],
            api_name=False
        )

        demo.queue().launch(share=False)


if __name__ == "__main__":
    main()
