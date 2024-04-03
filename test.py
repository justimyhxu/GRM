import os
import random
import rembg
import sys
from PIL import Image
import numpy as np
import torch
import imageio
import math
import cv2
import fast_simplification
import fpsample
import open3d as o3d
from tqdm import tqdm
from utils import saveload_utils
from diffusers import DiffusionPipeline, EulerAncestralDiscreteScheduler
from webui.base_mesh import Mesh
from webui.base_mesh_renderer import MeshRenderer

current_folder = os.path.dirname(os.path.abspath(__file__))
sys.path.append(f'{current_folder}/third_party/generative_models')

from third_party.generative_models.instant3d import build_instant3d_model, instant3d_pipe
from third_party.generative_models.scripts.sampling.simple_video_sample import build_sv3d_model
from third_party.generative_models.scripts.sampling.simple_video_sample import sample as sv3d_pipe

### set gpu
torch.cuda.set_device(0)
device = torch.device(0)

mesh_renderer = MeshRenderer(
   near=0.01,
   far=100,
   ssaa=1,
   texture_filter='linear-mipmap-linear').to(device)


def dump_video(image_sets, path, **kwargs):
    video_out = imageio.get_writer(path, mode='I', fps=30, codec='libx264')
    for image in image_sets:
        video_out.append_data(image)
    video_out.close()

def generate_cameras(r, num_cameras=20, device='cuda:0', pitch=math.pi/8, use_fibonacci=False):
    def normalize_vecs(vectors): return vectors / (torch.norm(vectors, dim=-1, keepdim=True))

    t = torch.linspace(0, 1, num_cameras).reshape(-1, 1)

    pitch = torch.zeros_like(t) + pitch

    directions = 2*math.pi 
    yaw = math.pi
    yaw = directions*t + yaw

    if use_fibonacci:
        cam_pos = fibonacci_sampling_on_sphere(num_cameras)
        cam_pos = torch.from_numpy(cam_pos).float().to(device)
        cam_pos = cam_pos * r
    else:
        z = r*torch.sin(pitch)
        x = r*torch.cos(pitch)*torch.cos(yaw)
        y = r*torch.cos(pitch)*torch.sin(yaw)
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

    z = r*torch.sin(pitch)
    x = r*torch.cos(pitch)*torch.cos(yaw)
    y = r*torch.cos(pitch)*torch.sin(yaw)
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

    fx = 0.5/np.tan(np.deg2rad(fov/2))
    fxfycxcy = torch.tensor([fx, fx, 0.5, 0.5], dtype=rotate.dtype, device=device)

    return cam2world, fxfycxcy

def build_grm_model(model_path):
    latest_checkpoint_file, _  = saveload_utils.load_checkpoint(model_path, model=None)
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

    pc = model.gs_renderer.gaussian_model.set_data(xyz.to(torch.float32), features.to(torch.float32), scaling.to(torch.float32), rotation.to(torch.float32), opacity.to(torch.float32))
    pc.save_ply(gs_path)

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


def images2gaussian(images, c2ws, fxfycxcy, model, gs_path, video_path, mesh_path=None, fuse_mesh=False, optimize_texture=False):

    if fuse_mesh:
        fib_camera_path = generate_cameras(r=2.9, num_cameras=200, pitch=np.deg2rad(20), use_fibonacci=True)

    camera_path = generate_cameras(r=2.7, num_cameras=120, pitch=np.deg2rad(20))

    with torch.no_grad():
        with torch.cuda.amp.autocast(
                enabled=True,
                dtype=torch.bfloat16 
        ):
            images = images.to(device, dtype=torch.float32, non_blocking=True)
            c2ws = c2ws.to(device, dtype=torch.float32, non_blocking=True)
            fxfycxcy = fxfycxcy.to(device, dtype=torch.float32, non_blocking=True)

            camera_feature =  torch.cat([c2ws.flatten(-2, -1), fxfycxcy], -1)
            gs, _ , _  = model.forward_visual(images, camera=camera_feature, input_fxfycxcy=fxfycxcy, input_c2ws=c2ws)


            filter_mask = torch.nonzero((gs['xyz'].abs() < 1).sum(dim=-1) == 3)
            for key in gs:
                if key == 'depth': continue
                if gs[key] is not None:
                    gs[key] = gs[key][filter_mask[:, 0], filter_mask[:, 1]].unsqueeze(0)

            save_gaussian(gs, gs_path, model, opacity_thr=0.05)

            gs_rendering = model.gs_renderer.render(latent=gs,
                output_c2ws=camera_path.unsqueeze(0),
                output_fxfycxcy=fxfycxcy[:, 0:1].repeat(1, camera_path.shape[0],1))['image']
            dump_video((gs_rendering[0].permute(0,2,3,1).detach().cpu().numpy()*255).astype(np.uint8), video_path) 

            if fuse_mesh:
                print('Start fusing mesh...')
                c_nerf_results = model.gs_renderer.render(latent=gs,
                        output_c2ws=fib_camera_path.unsqueeze(0),
                        output_fxfycxcy=fxfycxcy[:, 0:1].repeat(1, fib_camera_path.shape[0],1))

                cnerf_image = c_nerf_results['image'].permute(0, 1, 3, 4, 2)
                cnerf_alpha = c_nerf_results['alpha'].permute(0, 1, 3, 4, 2)
                cnerf_depth = c_nerf_results['depth'].permute(0, 1, 3, 4, 2)


                images = (cnerf_image[0].detach().cpu().numpy()*255).clip(0, 255).astype(np.uint8)

                depths = cnerf_depth[0].detach().cpu().numpy()

                weights_sum = cnerf_alpha[0].detach().cpu().numpy()
                mask = (weights_sum > 1e-2).astype(np.uint8)
                depths = depths * mask - np.ones_like(depths) * (1 - mask)

                c2ws = fib_camera_path.detach().cpu().numpy()
                fov = 50
                rgbd_to_mesh(images, depths, c2ws, fov, mesh_path)

    if optimize_texture:
        print('Start optimizing texture...')
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
        out_mesh.write(mesh_path[:-4] + '_fine.glb', flip_yz=True)
        print(f"Save optimized mesh at {mesh_path[:-4] + '_fine.glb'}")
    



def pad_image_to_fit_fov(image, new_fov, old_fov):
    img = Image.fromarray(image)

    scale_factor = math.tan(np.deg2rad(new_fov/2)) / math.tan(np.deg2rad(old_fov/2))

    # Calculate the new size
    new_size = (int(img.size[0] * scale_factor), int(img.size[1] * scale_factor))

    # Calculate padding
    pad_width = (new_size[0]-img.size[0]) // 2
    pad_height = (new_size[1] - img.size[1]) // 2

    # Create padding
    padding = (pad_width, pad_height, pad_width+img.size[0], pad_height+img.size[1])

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
              cache_dir='cache',
              fuse_mesh=False,
              optimize_texture=False):

    image = instant3d_pipe(model=instant3d_model,
                       prompt=prompt,
                       guidance_scale=guidance_scale,
                       num_steps=num_steps,
                       gaussian_std=gaussian_std)
    torch.cuda.empty_cache()

    # reshape 2H * 2W * C ---> 4* H * W * C
    image = image.permute(1, 2, 0)
    shape = image.shape[0]
    out_s = int(shape//2)
    image = image.reshape(2, out_s, 2, out_s, 3)
    image = image.permute(0, 2, 1, 3, 4)
    image = image.reshape(4, out_s, out_s, 3)
    # normalize
    image = image[None]
    image = (image - 0.5)*2
    # 1, V, C, H, W
    image = image.permute(0, 1, 4, 2, 3)

    # generate input pose
    c2ws, fxfycxcy = generate_input_camera(2.7, [[20, 225], [20, 225+90], [20, 225+180], [20, 225+270]], fov=50)
    c2ws = c2ws[None]
    fxfycxcy = (fxfycxcy.unsqueeze(0).unsqueeze(0)).repeat(1, c2ws.shape[1], 1)

    prompt = '_'.join(prompt.split())
    images2gaussian(image, c2ws, fxfycxcy, grm_model, f'./{cache_dir}/{prompt}_gs.ply', f'{cache_dir}/{prompt}.mp4', f'{cache_dir}/{prompt}_mesh.ply', fuse_mesh=fuse_mesh, optimize_texture=optimize_texture)
    torch.cuda.empty_cache()

def zero123plus_v11(
          zero123_model,
          grm_model,
          grm_model_cfg,
          image_path,
          num_steps=30,
          cache_dir='cache',
          fuse_mesh=False,
          optimize_texture=False,
          ):
    cond = Image.open(image_path)
    images = zero123_model(cond, num_inference_steps=num_steps).images[0]
    images = np.array(images)

    bg_remover = rembg.new_session()
    shape = images.shape[0]
    out_s = int(shape//3)
    images = images.reshape(3, out_s, 2, out_s, 3)
    images = images.transpose(0, 2, 1, 3, 4)
    images = images.reshape(6, out_s, out_s, 3)

    input_size = grm_model_cfg.visual.params.input_res
    mv_images = []
    for idx in [0, 2, 4, 5]:
        image = rembg.remove(images[idx], session=bg_remover)
        image = image / 255
        image_fg = image[..., :3]*image[..., 3:] + (1-image[..., 3:])
        image_fg = cv2.resize(image_fg, (input_size, input_size))
        mv_images.append(image_fg) 

    # normalize
    images = np.stack(mv_images, axis=0)[None]
    images = (images - 0.5)*2
    images = torch.tensor(images).to(device)
    # 1, V, C, H, W
    images = images.permute(0, 1, 4, 2, 3)

    # generate input pose
    c2ws, fxfycxcy = generate_input_camera(2.7, [[30, 225+30], [30, 225+150], [30, 225+270], [-20, 225+330]], fov=50)
    c2ws = c2ws[None]
    fxfycxcy = (fxfycxcy.unsqueeze(0).unsqueeze(0)).repeat(1, c2ws.shape[1], 1)

    name = os.path.splitext(os.path.basename(image_path))[0]
    images2gaussian(images, c2ws, fxfycxcy, grm_model, f'./{cache_dir}/{name}_gs.ply', f'{cache_dir}/{name}.mp4', f'{cache_dir}/{name}_mesh.ply', fuse_mesh=fuse_mesh, optimize_texture=optimize_texture)
    torch.cuda.empty_cache()
    

def zero123plus_v12(
          zero123_model,
          grm_model,
          grm_model_cfg,
          image_path,
          num_steps=30,
          cache_dir='cache',
          fuse_mesh=False,
          optimize_texture=False,
          ):
    cond = Image.open(image_path)
    images = zero123_model(cond, num_inference_steps=num_steps).images[0]
    images = np.array(images)

    bg_remover = rembg.new_session()
    shape = images.shape[0]
    out_s = int(shape//3)
    images = images.reshape(3, out_s, 2, out_s, 3)
    images = images.transpose(0, 2, 1, 3, 4)
    images = images.reshape(6, out_s, out_s, 3)

    input_size = grm_model_cfg.visual.params.input_res
    mv_images = [] 
    for idx in [0, 2, 4, 5]:
        image = rembg.remove(images[idx], session=bg_remover)
        image = image / 255
        image_fg = image[..., :3]*image[..., 3:] + (1-image[..., 3:])
        image_fg = pad_image_to_fit_fov((image_fg*255).astype(np.uint8), 50, 30)
        image_fg = cv2.resize(image_fg, (input_size, input_size))
        image_fg = image_fg / 255
        mv_images.append(image_fg)

    # normalize
    images = np.stack(mv_images, axis=0)[None]
    images = (images - 0.5)*2
    images = torch.tensor(images).to(device)
    # 1, V, C, H, W
    images = images.permute(0, 1, 4, 2, 3)

    # generate input pose
    c2ws, fxfycxcy = generate_input_camera(2.7, [[20, 225+30], [20, 225+150], [20, 225+270], [-10, 225+330]], fov=50)
    c2ws = c2ws[None]
    fxfycxcy = (fxfycxcy.unsqueeze(0).unsqueeze(0)).repeat(1, c2ws.shape[1], 1)

    name = os.path.splitext(os.path.basename(image_path))[0]
    images2gaussian(images, c2ws, fxfycxcy, grm_model, f'./{cache_dir}/{name}_gs.ply', f'{cache_dir}/{name}.mp4', f'{cache_dir}/{name}_mesh.ply', fuse_mesh=fuse_mesh, optimize_texture=optimize_texture)
    torch.cuda.empty_cache()

def sv3d_gs(
          sv3d_model,
          grm_model,
          grm_model_cfg,
          image_path,
          num_steps=30,
          cache_dir='cache',
          fuse_mesh=False,
          optimize_texture=False,
          ):

    video = sv3d_pipe(model=sv3d_model,
                input_path=image_path,
                version='sv3d_p',
                elevations_deg=20.0,
                azimuths_deg=[0,10,30,50,90,110,130,150,180,200,220,240,270,280,290,300,310,320,330,340,350],
                output_folder=f'{args.cache_dir}/sv3d')
    torch.cuda.empty_cache()

    input_size = grm_model_cfg.visual.params.input_res
    mv_images = video[[0, 4, 8, 12]]
    
    mv_images = [ cv2.resize(pad_image_to_fit_fov(image, 50, 33.8), (input_size, input_size)) for image in mv_images]


    # normalize
    images = np.stack(mv_images, axis=0)[None]
    images = (images/255 - 0.5)*2
    images = torch.tensor(images).to(device)
    # 1, V, C, H, W
    images = images.permute(0, 1, 4, 2, 3)

    # generate input pose
    c2ws, fxfycxcy = generate_input_camera(2.7, [[20, 225], [20, 225+90], [20, 225+180], [20, 225+270]], fov=50)
    c2ws = c2ws[None]
    fxfycxcy = (fxfycxcy.unsqueeze(0).unsqueeze(0)).repeat(1, c2ws.shape[1], 1)

    name = os.path.splitext(os.path.basename(image_path))[0]
    images2gaussian(images, c2ws, fxfycxcy, grm_model, f'./{cache_dir}/{name}_gs.ply', f'{cache_dir}/{name}.mp4', f'{cache_dir}/{name}_mesh.ply', fuse_mesh=fuse_mesh, optimize_texture=optimize_texture)
    torch.cuda.empty_cache()

def main(args):

    seed = args.seed 
    torch.manual_seed(seed)
    random.seed(seed)
    np.random.seed(seed)

    ### init GRM model
    grm_uniform_path = 'checkpoints/grm_u.pth'
    grm_uniform_model, grm_uniform_config = build_grm_model(grm_uniform_path)

    grm_zero123plus_path = 'checkpoints/grm_zero123plus.pth'
    grm_zero123plus_model, grm_zero123plus_config = build_grm_model(grm_zero123plus_path)

    grm_random_path = 'checkpoints/grm_r.pth'
    grm_random_model, grm_random_config = build_grm_model(grm_random_path)

    os.makedirs(args.cache_dir, exist_ok=True)
    if args.prompt:
        ### initial instant3d model
        instant3d_model = build_instant3d_model(config_path='third_party/generative_models/configs/sd_xl_base.yaml', ckpt_path='checkpoints/instant3d.pth')
        instant3d_gs(instant3d_model,
                  grm_model=grm_uniform_model,
                  grm_model_cfg=grm_uniform_config,
                  prompt=args.prompt,
                  guidance_scale=5.0,
                  num_steps=30,
                  gaussian_std=0.1,
                  cache_dir=args.cache_dir,
                  fuse_mesh=args.fuse_mesh,
                  optimize_texture=args.optimize_texture)

    else:
        if args.model == 'sv3d':
            sv3d_model = build_sv3d_model(
                             num_steps=30,
                             device=device,
                             )
            sv3d_gs(
                  sv3d_model=sv3d_model,
                  grm_model=grm_uniform_model,
                  grm_model_cfg=grm_uniform_config,
                  image_path=args.image_path,
                  num_steps=30,
                  cache_dir=args.cache_dir,
                  fuse_mesh=args.fuse_mesh,
                  optimize_texture=args.optimize_texture,
                  )
        elif args.model == 'zero123plus-v1.1':
            zero123 = DiffusionPipeline.from_pretrained(
                "sudo-ai/zero123plus-v1.1", custom_pipeline="sudo-ai/zero123plus-pipeline",
                torch_dtype=torch.float16,
                local_files_only=True,
            )
            zero123.scheduler = EulerAncestralDiscreteScheduler.from_config(
                zero123.scheduler.config, timestep_spacing='trailing'
            )
            zero123.to(device)
            zero123plus_v11(
              zero123,
              grm_model=grm_zero123plus_model,
              grm_model_cfg=grm_zero123plus_config,
              image_path=args.image_path,
              num_steps=30,
              cache_dir=args.cache_dir,
              fuse_mesh=args.fuse_mesh,
              optimize_texture=args.optimize_texture,
              )
        elif args.model == 'zero123plus-v1.2':
            zero123 = DiffusionPipeline.from_pretrained(
                "sudo-ai/zero123plus-v1.2", custom_pipeline="sudo-ai/zero123plus-pipeline",
                torch_dtype=torch.float16,
                local_files_only=True,
            )
            zero123.scheduler = EulerAncestralDiscreteScheduler.from_config(
                zero123.scheduler.config, timestep_spacing='trailing'
            )
            zero123.to(device)
            zero123plus_v12(
              zero123,
              grm_model=grm_random_model,
              grm_model_cfg=grm_random_config,
              image_path=args.image_path,
              num_steps=30,
              cache_dir=args.cache_dir,
              fuse_mesh=args.fuse_mesh,
              optimize_texture=args.optimize_texture,
              )
        else:
            raise NotImplementedError


if __name__ == '__main__':

    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--image_path", type=str, default='examples/image.png',
    )
    parser.add_argument(
        "--prompt", type=str, default=None,
    )
    parser.add_argument(
        "--cache_dir", type=str, default='cache',
        help='The directory to save the output'
    )
    parser.add_argument(
        "--model", type=str, default='zero123plus-v1.1', 
        help='Choose from zero123plus-v1.1/zero123plus-v1.2/sv3d'
    )
    parser.add_argument(
        "--seed", type=int, default=0,
    )
    parser.add_argument(
        "--fuse_mesh", type=bool, default=False, help='Whether to get the mesh.'
    )
    parser.add_argument(
        "--optimize_texture", type=bool, default=False, help='Whether to optimizer texture for the mesh.'
    )
    args = parser.parse_args()

    main(args)

