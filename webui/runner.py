import os
import random
import numpy as np
import torch
import torch.nn.functional as F
import sys
from PIL import Image
import imageio
import math
import cv2
import uuid
import open3d as o3d
import fast_simplification
import fpsample
from tqdm import tqdm
from diffusers.pipelines import StableDiffusionPipeline
from utils import saveload_utils
from diffusers import EulerAncestralDiscreteScheduler
from third_party.segmentation.segmentors.tracer_b7 import TracerUniversalB7
from huggingface_hub import hf_hub_download
from .parameters import image_defaults, parse_2d_args
from .zero123plus import Zero123PlusPipeline
from .base_mesh import Mesh
from .base_mesh_renderer import MeshRenderer

current_folder = os.path.dirname(os.path.abspath(__file__))
sys.path.append(f'{current_folder}/../third_party/generative_models')

from third_party.generative_models.instant3d import build_instant3d_model, instant3d_pipe
# from generative_models.scripts.sampling.simple_video_sample import sample as svd3d_pipe
from segment_anything import sam_model_registry, SamPredictor

### set gpu
torch.cuda.set_device(0)
device = torch.device(0)


def dump_video(image_sets, path, **kwargs):
    video_out = imageio.get_writer(path, mode='I', fps=30, codec='libx264')
    for image in image_sets:
        video_out.append_data(image)
    video_out.close()


def pad_rgba_image(in_img, ratio=0.95, shift=[0, 0]):
    in_mask = np.where(in_img[:, :, 3] > 127)

    x1 = np.min(in_mask[1])
    x2 = np.max(in_mask[1]) + 1
    y1 = np.min(in_mask[0])
    y2 = np.max(in_mask[0]) + 1
    w = x2 - x1
    h = y2 - y1
    center_x = int(round((x1 + x2) / 2))
    center_y = int(round((y1 + y2) / 2))

    padded_size = int(round(max(w, h) / ratio))
    padded_center = int(round(padded_size / 2))
    padded_img = np.zeros((padded_size, padded_size, 4), dtype=np.uint8)
    padded_img[..., :3] = 255

    paste_x1 = padded_center - center_x + shift[0]
    paste_x2 = paste_x1 + in_img.shape[1]
    paste_y1 = padded_center - center_y + shift[1]
    paste_y2 = paste_y1 + in_img.shape[0]

    crop_l = max(0, -paste_x1)
    crop_r = max(0, paste_x2 - padded_size)
    crop_t = max(0, -paste_y1)
    crop_b = max(0, paste_y2 - padded_size)

    paste_x1 = max(0, paste_x1)
    paste_x2 = min(padded_size, paste_x2)
    paste_y1 = max(0, paste_y1)
    paste_y2 = min(padded_size, paste_y2)

    padded_img[paste_y1:paste_y2, paste_x1:paste_x2] = in_img[crop_t:in_img.shape[0]-crop_b, crop_l:in_img.shape[1]-crop_r]

    return Image.fromarray(padded_img)


def generate_cameras(r, num_cameras=20, device='cuda:0', pitch=math.pi / 8, use_fibonacci=False):
    def normalize_vecs(vectors):
        return vectors / (torch.norm(vectors, dim=-1, keepdim=True))

    t = torch.linspace(0, 1, num_cameras).reshape(-1, 1)

    pitch = torch.zeros_like(t) + pitch

    directions = 2 * math.pi + math.pi / 4
    yaw = math.pi
    yaw = directions * t + yaw

    if use_fibonacci:
        cam_pos = fibonacci_sampling_on_sphere(num_cameras)
        cam_pos = torch.from_numpy(cam_pos).float().to(device)
        cam_pos = cam_pos * r
    else:
        z = r * torch.sin(pitch)
        x = r * torch.cos(pitch) * torch.cos(yaw)
        y = r * torch.cos(pitch) * torch.sin(yaw)
        cam_pos = torch.stack([x, y, z], dim=-1).reshape(z.shape[0], -1).to(device)

    forward_vector = normalize_vecs(-cam_pos)
    up_vector = torch.tensor([0, 0, -1], dtype=torch.float,
                             device=device).reshape(-1).expand_as(forward_vector)
    left_vector = normalize_vecs(torch.cross(up_vector, forward_vector,
                                             dim=-1))

    up_vector = normalize_vecs(torch.cross(forward_vector, left_vector,
                                           dim=-1))
    rotate = torch.stack(
        (left_vector, up_vector, forward_vector), dim=-1)

    rotation_matrix = torch.eye(4, device=device).unsqueeze(0).repeat(forward_vector.shape[0], 1, 1)
    rotation_matrix[:, :3, :3] = rotate

    translation_matrix = torch.eye(4, device=device).unsqueeze(0).repeat(forward_vector.shape[0], 1, 1)
    translation_matrix[:, :3, 3] = cam_pos
    cam2world = translation_matrix @ rotation_matrix
    return cam2world


def fibonacci_sampling_on_sphere(num_samples=1):
    points = []
    phi = np.pi * (3.0 - np.sqrt(5.0))  # golden angle in radians
    for i in range(num_samples):
        y = 1 - (i / float(num_samples - 1)) * 2  # y goes from 1 to -1
        radius = np.sqrt(1 - y * y)  # radius at y

        theta = phi * i  # golden angle increment

        x = np.cos(theta) * radius
        z = np.sin(theta) * radius

        points.append([x, y, z])
    points = np.array(points)
    return points


def generate_input_camera(r, poses, device='cuda:0', fov=50):
    def normalize_vecs(vectors): return vectors / (torch.norm(vectors, dim=-1, keepdim=True))

    poses = np.deg2rad(poses)
    poses = torch.tensor(poses).float()
    pitch = poses[:, 0]
    yaw = poses[:, 1]

    z = r * torch.sin(pitch)
    x = r * torch.cos(pitch) * torch.cos(yaw)
    y = r * torch.cos(pitch) * torch.sin(yaw)
    cam_pos = torch.stack([x, y, z], dim=-1).reshape(z.shape[0], -1).to(device)

    forward_vector = normalize_vecs(-cam_pos)
    up_vector = torch.tensor([0, 0, -1], dtype=torch.float,
                             device=device).reshape(-1).expand_as(forward_vector)
    left_vector = normalize_vecs(torch.cross(up_vector, forward_vector,
                                             dim=-1))

    up_vector = normalize_vecs(torch.cross(forward_vector, left_vector,
                                           dim=-1))
    rotate = torch.stack(
        (left_vector, up_vector, forward_vector), dim=-1)

    rotation_matrix = torch.eye(4, device=device).unsqueeze(0).repeat(forward_vector.shape[0], 1, 1)
    rotation_matrix[:, :3, :3] = rotate

    translation_matrix = torch.eye(4, device=device).unsqueeze(0).repeat(forward_vector.shape[0], 1, 1)
    translation_matrix[:, :3, 3] = cam_pos
    cam2world = translation_matrix @ rotation_matrix

    fx = 0.5 / np.tan(np.deg2rad(fov / 2))
    fxfycxcy = torch.tensor([fx, fx, 0.5, 0.5], dtype=rotate.dtype, device=device)

    return cam2world, fxfycxcy


def build_grm_model(model_path):
    latest_checkpoint_file, _ = saveload_utils.load_checkpoint(model_path, model=None)
    model_config = latest_checkpoint_file['config'].model_config
    from model import model
    model = model.GRM(model_config).to(device).eval()
    _ = saveload_utils.load_checkpoint(latest_checkpoint_file, model=model)
    return model, model_config


def save_gaussian(latent, gs_path, model, opacity_thr=None):
    xyz = latent['xyz'][0]
    features = latent['feature'][0]
    opacity = latent['opacity'][0]
    scaling = latent['scaling'][0]
    rotation = latent['rotation'][0]

    if opacity_thr is not None:
        index = torch.nonzero(opacity.sigmoid() > opacity_thr)[:, 0]
        xyz = xyz[index]
        features = features[index]
        opacity = opacity[index]
        scaling = scaling[index]
        rotation = rotation[index]

    pc = model.gs_renderer.gaussian_model.set_data(xyz.to(torch.float32), features.to(torch.float32),
                                                   scaling.to(torch.float32), rotation.to(torch.float32),
                                                   opacity.to(torch.float32))
    pc.save_ply(gs_path)
    vis_gs_path = gs_path[:-4] + '_vis' + gs_path[-4:] 
    pc.save_ply_vis(vis_gs_path)

def rgbd_to_mesh(images, depths, c2ws, fov, mesh_path, cam_elev_thr=0):

    voxel_length = 2 * 2.0 / 512.0
    sdf_trunc = 2 * 0.02
    color_type = o3d.pipelines.integration.TSDFVolumeColorType.RGB8

    volume = o3d.pipelines.integration.ScalableTSDFVolume(
        voxel_length=voxel_length,
        sdf_trunc=sdf_trunc,
        color_type=color_type,
    )

    for i in tqdm(range(c2ws.shape[0])):
        camera_to_world = c2ws[i]
        world_to_camera = np.linalg.inv(camera_to_world)
        camera_position = camera_to_world[:3, 3]
        camera_elevation = np.rad2deg(np.arcsin(camera_position[2]))
        if camera_elevation < cam_elev_thr:
            continue
        color_image = o3d.geometry.Image(np.ascontiguousarray(images[i]))
        depth_image = o3d.geometry.Image(np.ascontiguousarray(depths[i]))
        rgbd_image = o3d.geometry.RGBDImage.create_from_color_and_depth(
            color_image, depth_image, depth_scale=1.0, depth_trunc=4.0, convert_rgb_to_intensity=False
        )
        camera_intrinsics = o3d.camera.PinholeCameraIntrinsic()

        fx = fy =  images[i].shape[1] / 2. / np.tan(np.deg2rad(fov / 2.0))
        cx = cy = images[i].shape[1] / 2.
        h =  images[i].shape[0]
        w =  images[i].shape[1]
        camera_intrinsics.set_intrinsics(
            w, h, fx, fy, cx, cy
        )
        volume.integrate(
            rgbd_image,
            camera_intrinsics,
            world_to_camera,
        )

    fused_mesh = volume.extract_triangle_mesh()

    triangle_clusters, cluster_n_triangles, cluster_area = (
            fused_mesh.cluster_connected_triangles())
    triangle_clusters = np.asarray(triangle_clusters)
    cluster_n_triangles = np.asarray(cluster_n_triangles)
    cluster_area = np.asarray(cluster_area)

    triangles_to_remove = cluster_n_triangles[triangle_clusters] < 500
    fused_mesh.remove_triangles_by_mask(triangles_to_remove)
    fused_mesh.remove_unreferenced_vertices()

    fused_mesh = fused_mesh.filter_smooth_simple(number_of_iterations=2)
    fused_mesh = fused_mesh.compute_vertex_normals()
    o3d.io.write_triangle_mesh(mesh_path, fused_mesh)
    print(f'Save mesh at {mesh_path}')


def images2gaussian(images, c2ws, fxfycxcy, model, model_config, gs_path, video_path,
                    mesh_path=None, fuse_mesh=False, mesh_renderer=None, radius=2.7):
    if fuse_mesh:
        fib_camera_path = generate_cameras(r=2.9, num_cameras=200, pitch=np.deg2rad(20), use_fibonacci=True)

    camera_path = generate_cameras(r=radius, num_cameras=120, pitch=np.deg2rad(10))

    with torch.no_grad():
        with torch.cuda.amp.autocast(
                enabled=True,
                dtype=torch.bfloat16
        ):
            images = images.to(device, dtype=torch.float32, non_blocking=True)
            c2ws = c2ws.to(device, dtype=torch.float32, non_blocking=True)
            fxfycxcy = fxfycxcy.to(device, dtype=torch.float32, non_blocking=True)

            camera_feature = torch.cat([c2ws.flatten(-2, -1), fxfycxcy], -1)
            gs, feat, _ = model.forward_visual(images, camera=camera_feature, input_fxfycxcy=fxfycxcy, input_c2ws=c2ws)

            filter_mask = torch.nonzero((gs['xyz'].abs() < 1).sum(dim=-1) == 3)
            for key in gs:
                if key == 'depth': continue
                if gs[key] is not None:
                    gs[key] = gs[key][filter_mask[:, 0], filter_mask[:, 1]].unsqueeze(0)

            save_gaussian(gs, gs_path, model, opacity_thr=0.025)

            gs_rendering = model.gs_renderer.render(latent=gs,
                                                    output_c2ws=camera_path.unsqueeze(0),
                                                    output_fxfycxcy=fxfycxcy[:, 0:1].repeat(1, camera_path.shape[0], 1))['image']
            dump_video((gs_rendering[0].permute(0, 2, 3, 1).detach().cpu().numpy() * 255).astype(np.uint8), video_path)

            if fuse_mesh:

                c_nerf_results = model.gs_renderer.render(latent=gs,
                                                          output_c2ws=fib_camera_path.unsqueeze(0),
                                                          output_fxfycxcy=fxfycxcy[:, 0:1].repeat(1, fib_camera_path.shape[0], 1))

                cnerf_image = c_nerf_results['image'].permute(0, 1, 3, 4, 2).detach()
                cnerf_alpha = c_nerf_results['alpha'].permute(0, 1, 3, 4, 2).detach()
                cnerf_depth = c_nerf_results['depth'].permute(0, 1, 3, 4, 2).detach()

                images = (cnerf_image[0].cpu().numpy() * 255).clip(0, 255).astype(np.uint8)

                depths = cnerf_depth[0].cpu().numpy()

                weights_sum = cnerf_alpha[0].cpu().numpy()
                mask = (weights_sum > 1e-2).astype(np.uint8)
                depths = depths * mask - np.ones_like(depths) * (1 - mask)

                c2ws = fib_camera_path.detach().cpu().numpy()
                fov = 50
                rgbd_to_mesh(images, depths, c2ws, fov, mesh_path)

        if fuse_mesh:
            num_cameras = 16
            cam_pos = fib_camera_path[:, :3, 3].cpu().numpy()
            cam_inds = torch.from_numpy(fpsample.fps_sampling(cam_pos, num_cameras).astype(np.int64)).to(device=device)

            bake_alphas = cnerf_alpha[:, cam_inds].float()
            bake_images = (cnerf_image[:, cam_inds].float() - (1 - bake_alphas)) / bake_alphas.clamp(min=1e-6)

            out_mesh = Mesh.load(mesh_path, auto_uv=False, device='cpu')
            mesh_verts_, mesh_faces_ = fast_simplification.simplify(
                out_mesh.v.numpy(), out_mesh.f.numpy(), target_reduction=0.9)
            mesh_verts = out_mesh.v.new_tensor(mesh_verts_, dtype=torch.float32).requires_grad_(False)
            mesh_faces = out_mesh.f.new_tensor(mesh_faces_).requires_grad_(False)
            out_mesh = Mesh(v=mesh_verts, f=mesh_faces)
            out_mesh.auto_normal()
            out_mesh.auto_uv()
            out_mesh = out_mesh.to(device)
            intrinsics = fxfycxcy[:, 0:1].clone().float()
            intrinsics[..., [0, 2]] *= bake_images.shape[-2]
            intrinsics[..., [1, 3]] *= bake_images.shape[-3]
            out_mesh = mesh_renderer.bake_multiview(
                [out_mesh], bake_images, bake_alphas, fib_camera_path.unsqueeze(0)[:, cam_inds].float(), intrinsics
            )[0]
            out_mesh.write(mesh_path[:-4] + '.glb', flip_yz=True)


def pad_image_to_fit_fov(image, new_fov, old_fov):
    img = Image.fromarray(image)

    scale_factor = math.tan(np.deg2rad(new_fov / 2)) / math.tan(np.deg2rad(old_fov / 2))

    # Calculate the new size
    new_size = (int(img.size[0] * scale_factor), int(img.size[1] * scale_factor))

    # import ipdb; ipdb.set_trace()
    # Calculate padding
    pad_width = (new_size[0] - img.size[0]) // 2
    pad_height = (new_size[1] - img.size[1]) // 2

    # Create padding
    padding = (pad_width, pad_height, pad_width + img.size[0], pad_height + img.size[1])

    # Pad the image
    img_padded = Image.new(img.mode, (new_size[0], new_size[1]), color='white')
    img_padded.paste(img, padding)
    img_padded = np.array(img_padded)
    return img_padded


def instant3d_gs(instant3d_model,
                 grm_model,
                 grm_model_cfg,
                 prompt='a chair',
                 guidance_scale=5.0,
                 num_steps=30,
                 gaussian_std=0.1,
                 fuse_mesh=False,
                 mesh_renderer=None,
                 cache_dir='cache'):
    image = instant3d_pipe(model=instant3d_model,
                           prompt=prompt,
                           guidance_scale=guidance_scale,
                           num_steps=num_steps,
                           gaussian_std=gaussian_std)
    torch.cuda.empty_cache()

    image_np = image.cpu().numpy().transpose(1, 2, 0)

    # reshape 2H * 2W * C ---> 4* H * W * C
    image = image.permute(1, 2, 0)
    shape = image.shape[0]
    out_s = int(shape // 2)
    image = image.reshape(2, out_s, 2, out_s, 3)
    image = image.permute(0, 2, 1, 3, 4)
    image = image.reshape(4, out_s, out_s, 3)
    # normalize
    image = image[None]
    image = (image - 0.5) * 2
    # 1, V, C, H, W
    image = image.permute(0, 1, 4, 2, 3)

    # generate input pose
    c2ws, fxfycxcy = generate_input_camera(2.7, [[20, 225], [20, 225 + 90], [20, 225 + 180], [20, 225 + 270]], fov=50)
    c2ws = c2ws[None]
    fxfycxcy = (fxfycxcy.unsqueeze(0).unsqueeze(0)).repeat(1, c2ws.shape[1], 1)

    images2gaussian(image, c2ws, fxfycxcy, grm_model, grm_model_cfg, os.path.join(cache_dir, 'gs.ply'),
                    os.path.join(cache_dir, 'gs.mp4'), os.path.join(cache_dir, 'mesh.ply'),
                    fuse_mesh=fuse_mesh, mesh_renderer=mesh_renderer)
    torch.cuda.empty_cache()


def zero123plus_v11(
        mv_images,
        grm_model,
        grm_model_cfg,
        num_steps=30,
        cache_dir='cache',
        fuse_mesh=False,
        mesh_renderer=None,
):
    mv_images_ = []
    input_size = grm_model_cfg.visual.params.input_res
    for idx in [0, 2, 4, 5]:
        image_fg = cv2.resize(mv_images[idx], (input_size, input_size))
        mv_images_.append(image_fg)
    mv_images = mv_images_

    images = np.stack(mv_images, axis=0)[None]
    images = (images - 0.5) * 2
    images = torch.tensor(images).to(device)
    # 1, V, C, H, W
    images = images.permute(0, 1, 4, 2, 3)

    # generate input pose
    c2ws, fxfycxcy = generate_input_camera(2.7, [[30, 225 + 30], [30, 225 + 150], [30, 225 + 270], [-20, 225 + 330]],
                                           fov=50)
    c2ws = c2ws[None]
    fxfycxcy = (fxfycxcy.unsqueeze(0).unsqueeze(0)).repeat(1, c2ws.shape[1], 1)

    images2gaussian(images, c2ws, fxfycxcy, grm_model, grm_model_cfg, os.path.join(cache_dir, 'gs.ply'),
                    os.path.join(cache_dir, 'gs.mp4'), os.path.join(cache_dir, 'mesh.ply'),
                    fuse_mesh=fuse_mesh, mesh_renderer=mesh_renderer)
    torch.cuda.empty_cache()


def zero123plus_v12(
        mv_images,
        grm_model,
        grm_model_cfg,
        num_steps=30,
        cache_dir='cache',
        fuse_mesh=False,
        mesh_renderer=None,
        radius=2.7,
):
    mv_images_ = []
    input_size = grm_model_cfg.visual.params.input_res
    for idx in [0, 2, 4, 5]:
        image_fg = pad_image_to_fit_fov((mv_images[idx] * 255).astype(np.uint8), 50, 30)
        image_fg = cv2.resize(image_fg, (input_size, input_size))
        image_fg = image_fg / 255
        mv_images_.append(image_fg)
    mv_images = mv_images_

    # normalize
    images = np.stack(mv_images, axis=0)[None]
    images = (images - 0.5) * 2
    images = torch.tensor(images).to(device)
    # 1, V, C, H, W
    images = images.permute(0, 1, 4, 2, 3)

    # generate input pose
    c2ws, fxfycxcy = generate_input_camera(2.7, [[20, 225 + 30], [20, 225 + 150], [20, 225 + 270], [-10, 225 + 330]],
                                           fov=50)
    c2ws = c2ws[None]
    fxfycxcy = (fxfycxcy.unsqueeze(0).unsqueeze(0)).repeat(1, c2ws.shape[1], 1)

    images2gaussian(images, c2ws, fxfycxcy, grm_model, grm_model_cfg, os.path.join(cache_dir, 'gs.ply'),
                    os.path.join(cache_dir, 'gs.mp4'), os.path.join(cache_dir, 'mesh.ply'),
                    fuse_mesh=fuse_mesh, mesh_renderer=mesh_renderer, radius=radius)
    torch.cuda.empty_cache()


# def svd3d_gs(grm_model,
#              grm_model_cfg,
#              image_path,
#              num_steps=30,
#              cache_dir='cache',
#              ):
#     video = svd3d_pipe(input_path=image_path,
#                        version='sv3d_p',
#                        elevations_deg=20.0,
#                        azimuths_deg=[0, 10, 30, 50, 90, 110, 130, 150, 180, 200, 220, 240, 270, 280, 290, 300, 310, 320,
#                                      330, 340, 350],
#                        output_folder=f'{cache_dir}/svd3d')
#     torch.cuda.empty_cache()
#
#     input_size = grm_model_cfg.visual.params.input_res
#     mv_images = video[[0, 4, 8, 12]]
#
#     mv_images = [cv2.resize(pad_image_to_fit_fov(image, 50, 33.8), (input_size, input_size)) for image in mv_images]
#
#     # normalize
#     images = np.stack(mv_images, axis=0)[None]
#     images = (images / 255 - 0.5) * 2
#     images = torch.tensor(images).to(device)
#     # 1, V, C, H, W
#     images = images.permute(0, 1, 4, 2, 3)
#
#     # generate input pose
#     c2ws, fxfycxcy = generate_input_camera(2.7, [[20, 225], [20, 225 + 90], [20, 225 + 180], [20, 225 + 270]], fov=50)
#     c2ws = c2ws[None]
#     fxfycxcy = (fxfycxcy.unsqueeze(0).unsqueeze(0)).repeat(1, c2ws.shape[1], 1)
#
#     name = os.path.splitext(os.path.basename(image_path))[0]
#     images2gaussian(images, c2ws, fxfycxcy, grm_model, grm_model_cfg, f'./{cache_dir}/{name}_gs.ply',
#                     f'{cache_dir}/{name}.mp4', f'{cache_dir}/{name}_mesh.ply', fuse_mesh=True)
#     torch.cuda.empty_cache()


def set_random_seed(seed: int,
                    deterministic: bool = False) -> None:
    random.seed(seed)
    np.random.seed(seed)
    torch.manual_seed(seed)
    torch.cuda.manual_seed(seed)
    torch.cuda.manual_seed_all(seed)
    os.environ['PYTHONHASHSEED'] = str(seed)
    if deterministic:
        torch.backends.cudnn.deterministic = True
        torch.backends.cudnn.benchmark = False


def join_prompts(prompt_1, prompt_2, separator=', '):
    if prompt_1 and prompt_2:
        return f'{prompt_1}{separator}{prompt_2}'
    else:
        return prompt_1 or prompt_2


def do_segmentation(in_imgs, seg_model, sam_predictor=None, padding=0, to_np=False,
                    bg_color=None, color_threshold=0.25, sam_erosion=0):
    """
    Args:
        in_imgs (np.ndarray | torch.Tensor): input images, shape (N, H, W, 3) dtype uint8 for np.ndarray, or
            (N, 3, H, W) dtype float for torch.Tensor
    """
    if isinstance(in_imgs, np.ndarray):
        assert in_imgs.dtype == np.uint8
        in_imgs_torch = torch.from_numpy(in_imgs.transpose(0, 3, 1, 2).astype(np.float32) / 255)
    else:
        in_imgs_torch = in_imgs
    assert in_imgs_torch.size(1) == 3
    in_imgs_torch = in_imgs_torch.to(next(seg_model.parameters()).device)
    if padding > 0:  # padding helps to detect foreground objects
        masks = seg_model(F.pad(
            in_imgs_torch, (padding, padding, padding, padding), mode='replicate'
        ))[:, :, padding:-padding, padding:-padding]
    else:
        masks = seg_model(in_imgs_torch)
    if bg_color is not None:
        bg_color_torch = in_imgs_torch.new_tensor(bg_color)[..., None, None]
        non_fg_mask = torch.all(bg_color_torch - color_threshold <= in_imgs_torch, dim=1) \
                      & torch.all(in_imgs_torch <= bg_color_torch + color_threshold, dim=1)
        masks[~non_fg_mask.unsqueeze(1)] = 1
    if sam_predictor is None:
        if to_np:
            if isinstance(in_imgs, np.ndarray):
                in_imgs_np = in_imgs
            else:
                in_imgs_np = (in_imgs.permute(0, 2, 3, 1) * 255).round().to(torch.uint8).cpu().numpy()
            masks_np = (masks.permute(0, 2, 3, 1) * 255).round().to(torch.uint8).cpu().numpy()
            out_imgs = np.concatenate([in_imgs_np, masks_np], axis=-1)
        else:
            out_imgs = torch.cat([in_imgs_torch, masks], dim=1)
    else:
        masks_sam = []
        if isinstance(in_imgs, np.ndarray):
            in_imgs_np = in_imgs
        else:
            in_imgs_np = (in_imgs.permute(0, 2, 3, 1) * 255).round().to(torch.uint8).cpu().numpy()
        for i, in_img in enumerate(in_imgs_np):
            mask_binary = masks[i, 0] > 0.5
            alpha_x_nonzero = mask_binary.any(dim=0).nonzero()
            alpha_y_nonzero = mask_binary.any(dim=1).nonzero()
            sam_predictor.set_image(in_img)
            x1 = torch.amin(alpha_x_nonzero).item()
            x2 = torch.amax(alpha_x_nonzero).item() + 1
            y1 = torch.amin(alpha_y_nonzero).item()
            y2 = torch.amax(alpha_y_nonzero).item() + 1
            bbox = np.array([x1, y1, x2, y2])
            pred, _, _ = sam_predictor.predict(
                box=bbox,
                multimask_output=True)
            mask = pred[-1].astype(np.uint8)
            if sam_erosion > 0:
                kernel = np.ones((sam_erosion * 2 + 1, sam_erosion * 2 + 1), dtype=np.uint8)
                mask = cv2.erode(mask, kernel, iterations=1)
            masks_sam.append(mask[..., None])
        masks_sam = np.stack(masks_sam, axis=0)
        if bg_color is not None:
            bg_color_255 = np.array(bg_color, dtype=np.float32) * 255
            color_threshold_255 = color_threshold * 255
            in_imgs_np_float = in_imgs_np.astype(np.float32)
            non_fg_mask = np.all(bg_color_255 - color_threshold_255 <= in_imgs_np_float, axis=-1) \
                          & np.all(in_imgs_np_float <= bg_color_255 + color_threshold_255, axis=-1)
            masks_sam[~non_fg_mask] = 1
        if to_np:
            masks_sam = masks_sam * 255
            out_imgs = np.concatenate([in_imgs_np, masks_sam], axis=-1)
        else:
            masks_sam = torch.from_numpy(masks_sam).to(in_imgs_torch)
            out_imgs = torch.cat([in_imgs_torch, masks_sam.squeeze(-1).unsqueeze(1)], dim=1)
    return out_imgs


def do_segmentation_pil(in_imgs, *args, **kwargs):
    in_imgs_np = np.stack([np.asarray(in_img) for in_img in in_imgs], axis=0)
    kwargs['to_np'] = True
    out_imgs = do_segmentation(in_imgs_np, *args, **kwargs)
    return out_imgs


class GRMRunner:
    def __init__(self, device):
        self.pipe_text_to_img = StableDiffusionPipeline.from_pretrained(
            image_defaults['checkpoint'], torch_dtype=torch.bfloat16)
        self.pipe_text_to_img.to(device)
        self.pipe_text_to_img.set_use_memory_efficient_attention_xformers(
            not hasattr(torch.nn.functional, 'scaled_dot_product_attention'))

        grm_uniform_path = 'checkpoints/grm_u.pth'
        self.grm_uniform_model, self.grm_uniform_config = build_grm_model(grm_uniform_path)

        grm_zero123plus_path = 'checkpoints/grm_zero123plus.pth'
        self.grm_zero123plus_model, self.grm_zero123plus_config = build_grm_model(grm_zero123plus_path)

        grm_random_path = 'checkpoints/grm_r.pth'
        self.grm_random_model, self.grm_random_config = build_grm_model(grm_random_path)

        self.zero123plus_pad_ratio = 0.8
        self.zero123plus1_2_pad_ratio = 0.9

        self.zero123plus = Zero123PlusPipeline.from_pretrained(
            "sudo-ai/zero123plus-v1.1",
            torch_dtype=torch.bfloat16,
        )
        self.zero123plus.scheduler = EulerAncestralDiscreteScheduler.from_config(
            self.zero123plus.scheduler.config, timestep_spacing='trailing'
        )
        self.zero123plus.to(device)

        self.zero123plus1_2 = Zero123PlusPipeline.from_pretrained(
            "sudo-ai/zero123plus-v1.2",
            torch_dtype=torch.bfloat16,
        )
        self.zero123plus1_2.scheduler = EulerAncestralDiscreteScheduler.from_config(
            self.zero123plus.scheduler.config, timestep_spacing='trailing'
        )
        self.zero123plus1_2.to(device)

        self.segmentation = TracerUniversalB7().to(device)

        self.instant3d_model = build_instant3d_model(config_path='third_party/generative_models/configs/sd_xl_base.yaml', ckpt_path='checkpoints/instant3d.pth')

        ckpt_path = hf_hub_download(
            'ybelkada/segment-anything',
            'checkpoints/sam_vit_h_4b8939.pth')
        sam = sam_model_registry['vit_h'](checkpoint=ckpt_path).to(device=device)
        self.sam_predictor = SamPredictor(sam)

        self.mesh_renderer = MeshRenderer(
            near=0.01,
            far=100,
            ssaa=1,
            texture_filter='linear-mipmap-linear').to(device)

    def proc_zero123plus(self, seed, in_img, pipe, seg_padding):
        init_images = []
        set_random_seed(seed, deterministic=True)
        mv_result = np.array(
            pipe(in_img, num_inference_steps=30, guidance_scale=4.0).images[0])
        mv_result = mv_result.reshape(3, 320, 2, 320, 3).transpose(0, 2, 1, 3, 4).reshape(6, 320, 320, 3)
        for img in mv_result:
            init_images.append(Image.fromarray(img))
        init_images = do_segmentation_pil(
            init_images, self.segmentation, padding=seg_padding, bg_color=[0.5, 0.5, 0.5])
        init_images = [image.astype(np.float32) / 255 for image in init_images]
        init_images = [image[..., :3] * image[..., 3:] + (1 - image[..., 3:]) for image in init_images]
        return init_images

    def run_text_to_img(self, seed, *args, **kwargs):
        torch.set_grad_enabled(False)
        image_kwargs = parse_2d_args(list(args), kwargs)

        print(f'\nRunning text-to-image with seed {seed}...')
        set_random_seed(seed, deterministic=True)
        out_img = self.pipe_text_to_img(
            height=image_kwargs['height'],
            width=image_kwargs['width'],
            prompt=join_prompts(image_kwargs['prompt'], image_kwargs['aux_prompt']),
            negative_prompt=join_prompts(image_kwargs['negative_prompt'], image_kwargs['aux_negative_prompt']),
            num_inference_steps=image_kwargs['steps'],
            guidance_scale=image_kwargs['cfg_scale'],
            return_dict=False)[0][0]
        print('Text-to-Image finished.')

        torch.cuda.empty_cache()

        return out_img

    def run_segmentation(self, in_img, empty_cache=True):
        torch.set_grad_enabled(False)
        if empty_cache:
            torch.cuda.empty_cache()
        in_img_np = np.asarray(in_img)
        if in_img_np.shape[-1] == 4 and np.any(in_img_np[..., 3] != 255):
            in_img = in_img_np
        else:
            in_img = do_segmentation(
                in_img_np[None, :, :, :3], self.segmentation, sam_predictor=self.sam_predictor, to_np=True)[0]

        torch.cuda.empty_cache()

        return Image.fromarray(in_img)

    def run_img_to_3d(self, seed, image, model, fuse_mesh, cache_dir=None):
        torch.set_grad_enabled(False)
        print(f'\nRunning image-to-3d with seed {seed}...')
        output_dir = os.path.join(cache_dir, f'output_{uuid.uuid4()}')
        # if model == 'SV3D':
        #     img_name = f'input_{uuid.uuid4()}.png'
        #     image_path = os.path.join(cache_dir, img_name)
        #     image.save(image_path)
        #     svd3d_gs(
        #         grm_model=self.grm_uniform_model,
        #         grm_model_cfg=self.grm_uniform_config,
        #         image_path=image_path,
        #         num_steps=30,
        #         cache_dir=output_dir,
        #     )
        #     out_video = os.path.join(output_dir, img_name[:-4] + '.mp4')
        if model == 'Zero123++ v1.1':
            in_img = pad_rgba_image(np.asarray(image), ratio=self.zero123plus_pad_ratio)
            print(f'\nRunning Zero123++ generation with seed {seed}...')
            init_images = self.proc_zero123plus(
                seed, in_img, self.zero123plus, seg_padding=32)
            zero123plus_v11(
                init_images,
                grm_model=self.grm_zero123plus_model,
                grm_model_cfg=self.grm_zero123plus_config,
                num_steps=30,
                cache_dir=output_dir,
                mesh_renderer=self.mesh_renderer,
                fuse_mesh=fuse_mesh)
        elif model == 'Zero123++ v1.2':
            in_img = pad_rgba_image(np.asarray(image), ratio=self.zero123plus1_2_pad_ratio)
            init_images = self.proc_zero123plus(
                seed, in_img, self.zero123plus1_2, seg_padding=64)
            zero123plus_v12(
                init_images,
                grm_model=self.grm_random_model,
                grm_model_cfg=self.grm_random_config,
                num_steps=30,
                cache_dir=output_dir,
                mesh_renderer=self.mesh_renderer,
                fuse_mesh=fuse_mesh, radius=1.75)
        else:
            raise ValueError(f'Unknown model: {model}')
        out_video = os.path.join(output_dir, 'gs.mp4')
        out_gs = os.path.join(output_dir, 'gs.ply')
        out_gs_vis = os.path.join(output_dir, 'gs_vis.ply')
        out_mesh = os.path.join(output_dir, 'mesh.glb') if fuse_mesh else None

        torch.cuda.empty_cache()

        return out_gs_vis, out_gs, out_video, out_mesh

    def run_instant3d(self, seed, prompt, fuse_mesh, cache_dir=None):
        torch.set_grad_enabled(False)
        print(f'\nRunning Instant3D with seed {seed}...')
        set_random_seed(seed, deterministic=True)
        output_dir = os.path.join(cache_dir, f'output_{uuid.uuid4()}')
        instant3d_gs(
            self.instant3d_model,
            grm_model=self.grm_uniform_model,
            grm_model_cfg=self.grm_uniform_config,
            prompt=prompt,
            guidance_scale=5.0,
            num_steps=30,
            gaussian_std=0.1,
            mesh_renderer=self.mesh_renderer,
            fuse_mesh=fuse_mesh,
            cache_dir=output_dir)
        out_video = os.path.join(output_dir, 'gs.mp4')
        out_gs = os.path.join(output_dir, 'gs.ply')
        out_gs_vis = os.path.join(output_dir, 'gs_vis.ply')
        out_mesh = os.path.join(output_dir, 'mesh.glb') if fuse_mesh else None

        torch.cuda.empty_cache()

        return out_gs_vis, out_gs, out_video, out_mesh
