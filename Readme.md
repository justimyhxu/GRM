# GRM: Large Gaussian Reconstruction Model for Efficient 3D Reconstruction and Generation



> **GRM: Large Gaussian Reconstruction Model for Efficient 3D Reconstruction and Generation** <br>
> Yinghao Xu*, Zifan Shi*, Wang Yifan, Hansheng Chen, Ceyuan Yang, Sida Peng, Yujun Shen, Gordon Wetzstein<br>

## [[Paper](https://arxiv.org/abs/2403.14621)] [[Project Page](https://justimyhxu.github.io/projects/grm)] [[Blender Demo](https://github.com/justimyhxu/GRM/assets/29980330/0cf713aa-ba87-4a15-a8ee-1b0da643cb3c)] [[HF Demo](https://huggingface.co/spaces/GRM-demo/GRM)][[Weights](https://huggingface.co/justimyhxu/GRM/tree/main)]

https://github.com/justimyhxu/GRM/assets/29980330/32f41f04-5ebe-4aa4-b1b7-bf4f78e5f197

## Todo List
- [x] Release gradio demo code.
- [x] Release inference code.
- [x] Release pretrained models.
- [ ] Release training code.

## GRM Demo
* [Huggingface Demo](https://huggingface.co/spaces/GRM-demo/GRM)
* [Replicate Demo](https://replicate.com/camenduru/grm). Thanks [@camenduru](https://github.com/camenduru) for the [jupyter code](https://github.com/camenduru/GRM-jupyter)! 

## Requirements
* 64-bit Python 3.10 and PyTorch 2.0.1 or higher.
* CUDA 11.8 
* Users can use the following commands to install the packages
```bash
conda create -n grm python=3.10
conda activate grm 
pip install -r requirements.txt --extra-index-url https://download.pytorch.org/whl/cu118
cd third_party/diff-gaussian-rasterization &&  pip install -e .
```
## Pretrained weights
Pretrained weights can be downloaded from [Hugging Face](https://huggingface.co/justimyhxu/GRM/tree/main).
```bash
# Example
mkdir checkpoints && cd checkpoints
wget https://huggingface.co/justimyhxu/GRM/blob/main/grm_u.pth && cd ..
```

Note that we provide three checkpoints for use. We use the OpenCV coordinate system.

| Checkpoint | Training settings |
| ---------- | ----------------- |
| [grm_u.pth](https://huggingface.co/justimyhxu/GRM/blob/main/grm_u.pth)  | The elevations are all 20 degrees and the azimuths uniformly cover all the 360-degree information.|
| [grm_r.pth](https://huggingface.co/justimyhxu/GRM/blob/main/grm_r.pth)  | The azimuths roughly cover the 360-degree information. |
| [grm_zero123plus.pth](https://huggingface.co/justimyhxu/GRM/blob/main/grm_zero123plus.pth) | Three views are with 30-degree elevations and the azimuths are evenly distributed at intervals of 120 degrees. Another view has the elevation of -20 degrees and the azimuth is 60 degrees different from one of the three. |
| [instant3d.pth](https://huggingface.co/justimyhxu/GRM/resolve/main/instant3d.pth) | We reproduce the first-stage diffusion model of [instant3d](https://arxiv.org/pdf/2311.06214.pdf), which can produce consistent multi-view images. |


Besides, you need to download checkpoints for [SV3D](https://huggingface.co/stabilityai/sv3d/tree/main).
```bash
cd checkpoints
wget https://huggingface.co/stabilityai/sv3d/blob/main/sv3d_p.safetensors && cd ..
```


## Inference
```bash
# text-to-3D
python test.py --prompt 'a car made out of cheese'
# image-to-3D with zero123plus-v1.1
python test.py --image_path examples/dragon2.png --model zero123plus-v1.1
# image-to-3D with zero123plus-v1.2
python test.py --image_path examples/dragon2.png --model zero123plus-v1.2
# image-to-3D with SV3D
python test.py --image_path examples/dragon2.png --model sv3d
```

Add ```--fuse_mesh True``` if you would like to get the textured mesh.
Add ```--optimize_texture True``` if you would like to optimize texture on extracted textured mesh.

## Gradio Demo
We provide an offline gradio demo, which can be run with the following command:
```bash
python app.py
```

## Results

### Blender Demo
https://github.com/justimyhxu/GRM/assets/29980330/0cf713aa-ba87-4a15-a8ee-1b0da643cb3c

### Sparse-view Reconstruction
https://github.com/justimyhxu/GRM/assets/29980330/d436bca9-ddf9-4507-aed3-828fd6508ec3


## Acknowledgement
We thank all of the following amazing codes:
- [gaussian-splatting](https://github.com/graphdeco-inria/gaussian-splatting), and [diff-gaussian-rasterization](https://github.com/ashawkey/diff-gaussian-rasterization) for depth rendering
- [ARF](https://github.com/Kai-46/ARF-svox2)
- [zero123++](https://github.com/SUDO-AI-3D/zero123plus)
- [Instant3D](https://instant-3d.github.io/)
- [SV3D](https://github.com/Stability-AI/generative-models)
- [V3D](https://github.com/heheyas/V3D)
- [nvdiffrast](https://github.com/NVlabs/nvdiffrast)
- [MVEdit](https://github.com/Lakonik/MVEdit)

## BibTeX

```bibtex
@article{xu2024grm,
     author    = {Xu, Yinghao and Shi, Zifan and Yifan, Wang and Peng, Sida and Yang, Ceyuan and Shen, Yujun and Wetzstein Gordon},
     title     = {GRM: Large Gaussian Reconstruction Model for Efficient 3D Reconstruction and Generation},
     journal   = {arxiv: 2403.14621},
     year      = {2024},
    }
```
