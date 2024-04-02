import math
import torch
import torch.nn as nn
import torch.nn.functional as F
import nvdiffrast.torch as dr


def get_ray_directions(h, w, intrinsics, norm=False, device=None):
    """
    Args:
        h (int)
        w (int)
        intrinsics: (*, 4), in [fx, fy, cx, cy]

    Returns:
        directions: (*, h, w, 3), the direction of the rays in camera coordinate
    """
    batch_size = intrinsics.shape[:-1]
    x = torch.linspace(0.5, w - 0.5, w, device=device)
    y = torch.linspace(0.5, h - 0.5, h, device=device)
    # (*, h, w, 2)
    directions_xy = torch.stack(
        [((x - intrinsics[..., 2:3]) / intrinsics[..., 0:1])[..., None, :].expand(*batch_size, h, w),
         ((y - intrinsics[..., 3:4]) / intrinsics[..., 1:2])[..., :, None].expand(*batch_size, h, w)], dim=-1)
    # (*, h, w, 3)
    directions = F.pad(directions_xy, [0, 1], mode='constant', value=1.0)
    if norm:
        directions = F.normalize(directions, dim=-1)
    return directions


def edge_dilation(img, mask, radius=3, iter=7):
    """
    Args:
        img (torch.Tensor): (n, c, h, w)
        mask (torch.Tensor): (n, 1, h, w)
        radius (float): Radius of dilation.

    Returns:
        torch.Tensor: Dilated image.
    """
    n, c, h, w = img.size()
    int_radius = round(radius)
    kernel_size = int(int_radius * 2 + 1)
    distance1d_sq = torch.linspace(-int_radius, int_radius, kernel_size, dtype=img.dtype, device=img.device).square()
    kernel_distance = (distance1d_sq.reshape(1, -1) + distance1d_sq.reshape(-1, 1)).sqrt()
    kernel_neg_distance = kernel_distance.max() - kernel_distance + 1

    for _ in range(iter):

        mask_out = F.max_pool2d(mask, kernel_size, stride=1, padding=int_radius)
        do_fill_mask = ((mask_out - mask) > 0.5).squeeze(1)
        # (num_fill, 3) in [ind_n, ind_h, ind_w]
        do_fill = do_fill_mask.nonzero()

        # unfold the image and mask
        mask_unfold = F.unfold(mask, kernel_size, padding=int_radius).reshape(
            n, kernel_size * kernel_size, h, w).permute(0, 2, 3, 1)

        fill_ind = (mask_unfold[do_fill_mask] * kernel_neg_distance.flatten()).argmax(dim=-1)
        do_fill_h = do_fill[:, 1] + fill_ind // kernel_size - int_radius
        do_fill_w = do_fill[:, 2] + fill_ind % kernel_size - int_radius

        img_out = img.clone()
        img_out[do_fill[:, 0], :, do_fill[:, 1], do_fill[:, 2]] = img[
            do_fill[:, 0], :, do_fill_h, do_fill_w]

        img = img_out
        mask = mask_out

    return img


def depth_to_normal(depth, directions, format='opengl'):
    """
    Args:
        depth: shape (*, h, w), inverse depth defined as 1 / z
        directions: shape (*, h, w, 3), unnormalized ray directions, under OpenCV coordinate system

    Returns:
        out_normal: shape (*, h, w, 3), in range [0, 1]
    """
    out_xyz = directions / depth.unsqueeze(-1).clamp(min=1e-6)
    dx = out_xyz[..., :, 1:, :] - out_xyz[..., :, :-1, :]
    dy = out_xyz[..., 1:, :, :] - out_xyz[..., :-1, :, :]
    right = F.pad(dx, (0, 0, 0, 1, 0, 0), mode='replicate')
    up = F.pad(-dy, (0, 0, 0, 0, 1, 0), mode='replicate')
    left = F.pad(-dx, (0, 0, 1, 0, 0, 0), mode='replicate')
    down = F.pad(dy, (0, 0, 0, 0, 0, 1), mode='replicate')
    out_normal = F.normalize(
        F.normalize(torch.cross(right, up, dim=-1), dim=-1)
        + F.normalize(torch.cross(up, left, dim=-1), dim=-1)
        + F.normalize(torch.cross(left, down, dim=-1), dim=-1)
        + F.normalize(torch.cross(down, right, dim=-1), dim=-1),
        dim=-1)
    if format == 'opengl':
        out_normal[..., 1:3] = -out_normal[..., 1:3]  # to opengl coord
    elif format == 'opencv':
        out_normal = out_normal
    else:
        raise ValueError('format should be opengl or opencv')
    out_normal = out_normal / 2 + 0.5
    return out_normal


def make_divisible(x, m=8):
    return int(math.ceil(x / m) * m)


def interpolate_hwc(x, scale_factor, mode='area'):
    batch_dim = x.shape[:-3]
    y = x.reshape(batch_dim.numel(), *x.shape[-3:]).permute(0, 3, 1, 2)
    y = F.interpolate(y, scale_factor=scale_factor, mode=mode).permute(0, 2, 3, 1)
    return y.reshape(*batch_dim, *y.shape[1:])


def compute_edge_to_face_mapping(attr_idx):
    with torch.no_grad():
        # Get unique edges
        # Create all edges, packed by triangle
        all_edges = torch.cat((
            torch.stack((attr_idx[:, 0], attr_idx[:, 1]), dim=-1),
            torch.stack((attr_idx[:, 1], attr_idx[:, 2]), dim=-1),
            torch.stack((attr_idx[:, 2], attr_idx[:, 0]), dim=-1),
        ), dim=-1).view(-1, 2)

        # Swap edge order so min index is always first
        order = (all_edges[:, 0] > all_edges[:, 1]).long().unsqueeze(dim=1)
        sorted_edges = torch.cat((
            torch.gather(all_edges, 1, order),
            torch.gather(all_edges, 1, 1 - order)
        ), dim=-1)

        # Elliminate duplicates and return inverse mapping
        unique_edges, idx_map = torch.unique(sorted_edges, dim=0, return_inverse=True)

        tris = torch.arange(attr_idx.shape[0]).repeat_interleave(3).cuda()

        tris_per_edge = torch.zeros((unique_edges.shape[0], 2), dtype=torch.int64).cuda()

        # Compute edge to face table
        mask0 = order[:,0] == 0
        mask1 = order[:,0] == 1
        tris_per_edge[idx_map[mask0], 0] = tris[mask0]
        tris_per_edge[idx_map[mask1], 1] = tris[mask1]

        return tris_per_edge


@torch.cuda.amp.autocast(enabled=False)
def normal_consistency(face_normals, t_pos_idx):

    tris_per_edge = compute_edge_to_face_mapping(t_pos_idx)

    # Fetch normals for both faces sharind an edge
    n0 = face_normals[tris_per_edge[:, 0], :]
    n1 = face_normals[tris_per_edge[:, 1], :]

    # Compute error metric based on normal difference
    term = torch.clamp(torch.sum(n0 * n1, -1, keepdim=True), min=-1.0, max=1.0)
    term = (1.0 - term)

    return torch.mean(torch.abs(term))


def laplacian_uniform(verts, faces):

    V = verts.shape[0]
    F = faces.shape[0]

    # Neighbor indices
    ii = faces[:, [1, 2, 0]].flatten()
    jj = faces[:, [2, 0, 1]].flatten()
    adj = torch.stack([torch.cat([ii, jj]), torch.cat([jj, ii])], dim=0).unique(dim=1)
    adj_values = torch.ones(adj.shape[1], device=verts.device, dtype=torch.float)

    # Diagonal indices
    diag_idx = adj[0]

    # Build the sparse matrix
    idx = torch.cat((adj, torch.stack((diag_idx, diag_idx), dim=0)), dim=1)
    values = torch.cat((-adj_values, adj_values))

    # The coalesce operation sums the duplicate indices, resulting in the
    # correct diagonal
    return torch.sparse_coo_tensor(idx, values, (V,V)).coalesce()


@torch.cuda.amp.autocast(enabled=False)
def laplacian_smooth_loss(verts, faces):
    with torch.no_grad():
        L = laplacian_uniform(verts, faces.long())
    loss = L.mm(verts)
    loss = loss.norm(dim=1)
    loss = loss.mean()
    return loss


class DMTet:

    def __init__(self, device):
        self.device = device
        self.triangle_table = torch.tensor([
            [-1, -1, -1, -1, -1, -1],
            [1, 0, 2, -1, -1, -1],
            [4, 0, 3, -1, -1, -1],
            [1, 4, 2, 1, 3, 4],
            [3, 1, 5, -1, -1, -1],
            [2, 3, 0, 2, 5, 3],
            [1, 4, 0, 1, 5, 4],
            [4, 2, 5, -1, -1, -1],
            [4, 5, 2, -1, -1, -1],
            [4, 1, 0, 4, 5, 1],
            [3, 2, 0, 3, 5, 2],
            [1, 3, 5, -1, -1, -1],
            [4, 1, 2, 4, 3, 1],
            [3, 0, 4, -1, -1, -1],
            [2, 0, 1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1]
        ], dtype=torch.long, device=device)
        self.num_triangles_table = torch.tensor([0, 1, 1, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1, 1, 0], dtype=torch.long,
                                                device=device)
        self.base_tet_edges = torch.tensor([0, 1, 0, 2, 0, 3, 1, 2, 1, 3, 2, 3], dtype=torch.long, device=device)

    def sort_edges(self, edges_ex2):
        with torch.no_grad():
            order = (edges_ex2[:, 0] > edges_ex2[:, 1]).long()
            order = order.unsqueeze(dim=1)

            a = torch.gather(input=edges_ex2, index=order, dim=1)
            b = torch.gather(input=edges_ex2, index=1 - order, dim=1)

        return torch.stack([a, b], -1)

    def __call__(self, pos_nx3, sdf_n, tet_fx4):
        # pos_nx3: [N, 3]
        # sdf_n:   [N]
        # tet_fx4: [F, 4]

        with torch.no_grad():
            occ_n = sdf_n > 0
            occ_fx4 = occ_n[tet_fx4.reshape(-1)].reshape(-1, 4)
            occ_sum = torch.sum(occ_fx4, -1)  # [F,]
            valid_tets = (occ_sum > 0) & (occ_sum < 4)
            # occ_sum = occ_sum[valid_tets]

            # find all vertices
            all_edges = tet_fx4[valid_tets][:, self.base_tet_edges].reshape(-1, 2)
            all_edges = self.sort_edges(all_edges)
            unique_edges, idx_map = torch.unique(all_edges, dim=0, return_inverse=True)

            unique_edges = unique_edges.long()
            mask_edges = occ_n[unique_edges.reshape(-1)].reshape(-1, 2).sum(-1) == 1
            mapping = torch.ones((unique_edges.shape[0]), dtype=torch.long, device=self.device) * -1
            mapping[mask_edges] = torch.arange(mask_edges.sum(), dtype=torch.long, device=self.device)
            idx_map = mapping[idx_map]  # map edges to verts

            interp_v = unique_edges[mask_edges]

        edges_to_interp = pos_nx3[interp_v.reshape(-1)].reshape(-1, 2, 3)
        edges_to_interp_sdf = sdf_n[interp_v.reshape(-1)].reshape(-1, 2, 1)
        edges_to_interp_sdf[:, -1] *= -1

        denominator = edges_to_interp_sdf.sum(1, keepdim=True)

        edges_to_interp_sdf = torch.flip(edges_to_interp_sdf, [1]) / denominator
        verts = (edges_to_interp * edges_to_interp_sdf).sum(1)

        idx_map = idx_map.reshape(-1, 6)

        v_id = torch.pow(2, torch.arange(4, dtype=torch.long, device=self.device))
        tetindex = (occ_fx4[valid_tets] * v_id.unsqueeze(0)).sum(-1)
        num_triangles = self.num_triangles_table[tetindex]

        # Generate triangle indices
        faces = torch.cat((
            torch.gather(input=idx_map[num_triangles == 1], dim=1,
                         index=self.triangle_table[tetindex[num_triangles == 1]][:, :3]).reshape(-1, 3),
            torch.gather(input=idx_map[num_triangles == 2], dim=1,
                         index=self.triangle_table[tetindex[num_triangles == 2]][:, :6]).reshape(-1, 3),
        ), dim=0)

        return verts, faces


class MeshRenderer(nn.Module):
    def __init__(self,
                 near=0.1,
                 far=10,
                 ssaa=1,
                 texture_filter='linear-mipmap-linear',
                 opengl=False):
        super().__init__()
        self.near = near
        self.far = far
        assert isinstance(ssaa, int) and ssaa >= 1
        self.ssaa = ssaa
        self.texture_filter = texture_filter
        self.glctx = dr.RasterizeGLContext() if opengl else dr.RasterizeCudaContext()

    def forward(self, meshes, poses, intrinsics, h, w, shading_fun=None,
                dilate_edges=0, normal_bg=[0.5, 0.5, 1.0], aa=True, render_vc=False):
        """
        Args:
            meshes (list[Mesh]): list of Mesh objects
            poses: Shape (num_scenes, num_images, 3, 4)
            intrinsics: Shape (num_scenes, num_images, 4) in [fx, fy, cx, cy]
        """
        num_scenes, num_images, _, _ = poses.size()

        if self.ssaa > 1:
            h = h * self.ssaa
            w = w * self.ssaa
            intrinsics = intrinsics * self.ssaa

        r_mat_c2w = torch.cat(
            [poses[..., :3, :1], -poses[..., :3, 1:3]], dim=-1)  # opencv to opengl conversion

        proj = poses.new_zeros([num_scenes, num_images, 4, 4])
        proj[..., 0, 0] = 2 * intrinsics[..., 0] / w
        proj[..., 0, 2] = -2 * intrinsics[..., 2] / w + 1
        proj[..., 1, 1] = -2 * intrinsics[..., 1] / h
        proj[..., 1, 2] = -2 * intrinsics[..., 3] / h + 1
        proj[..., 2, 2] = -(self.far + self.near) / (self.far - self.near)
        proj[..., 2, 3] = -(2 * self.far * self.near) / (self.far - self.near)
        proj[..., 3, 2] = -1

        # (num_scenes, (num_images, num_vertices, 3))
        v_cam = [(mesh.v - poses[i, :, :3, 3].unsqueeze(-2)) @ r_mat_c2w[i] for i, mesh in enumerate(meshes)]
        # (num_scenes, (num_images, num_vertices, 4))
        v_clip = [F.pad(v, pad=(0, 1), mode='constant', value=1.0) @ proj[i].transpose(-1, -2) for i, v in enumerate(v_cam)]

        if num_scenes == 1:
            # (num_images, h, w, 4) in [u, v, z/w, triangle_id] & (num_images, h, w, 4 or 0)
            rast, rast_db = dr.rasterize(
                self.glctx, v_clip[0], meshes[0].f, (h, w), grad_db=torch.is_grad_enabled())

            fg = (rast[..., 3] > 0).unsqueeze(0)  # (num_scenes, num_images, h, w)
            alpha = fg.float().unsqueeze(-1)

            depth = 1 / dr.interpolate(
                -v_cam[0][..., 2:3].contiguous(), rast, meshes[0].f)[0].reshape(num_scenes, num_images, h, w)
            depth.masked_fill_(~fg, 0)

            normal = dr.interpolate(
                meshes[0].vn.unsqueeze(0).contiguous(), rast, meshes[0].fn)[0].reshape(num_scenes, num_images, h, w, 3)
            normal = F.normalize(normal, dim=-1)
            # (num_scenes, num_images, h, w, 3) = (num_scenes, num_images, h, w, 3) @ (num_scenes, num_images, 1, 3, 3)
            rot_normal = (normal @ r_mat_c2w.unsqueeze(2)) / 2 + 0.5
            rot_normal[~fg] = rot_normal.new_tensor(normal_bg)

            if meshes[0].vt is not None and meshes[0].albedo is not None:
                # (num_images, h, w, 2) & (num_images, h, w, 4)
                texc, texc_db = dr.interpolate(
                    meshes[0].vt.unsqueeze(0).contiguous(), rast, meshes[0].ft, rast_db=rast_db, diff_attrs='all')
                # (num_scenes, num_images, h, w, 3)
                albedo = dr.texture(
                    meshes[0].albedo.unsqueeze(0)[..., :3].contiguous(), texc, uv_da=texc_db, filter_mode=self.texture_filter).unsqueeze(0)
                albedo[~fg] = 0
            elif meshes[0].vc is not None:
                rgba = dr.interpolate(
                    meshes[0].vc.contiguous(), rast, meshes[0].f)[0].reshape(num_scenes, num_images, h, w, 4)
                alpha = alpha * rgba[..., 3:4]
                albedo = rgba[..., :3] * alpha
            else:
                albedo = torch.zeros_like(rot_normal)

            prev_grad_enabled = torch.is_grad_enabled()
            torch.set_grad_enabled(True)
            if shading_fun is not None:
                xyz = dr.interpolate(
                    meshes[0].v.unsqueeze(0).contiguous(), rast, meshes[0].f)[0].reshape(num_scenes, num_images, h, w, 3)
                rgb_reshade = shading_fun(
                    world_pos=xyz[fg],
                    albedo=albedo[fg],
                    world_normal=normal[fg],
                    fg_mask=fg)
                albedo = torch.zeros_like(albedo)
                albedo[fg] = rgb_reshade

            # (num_scenes, num_images, h, w, 4)
            rgba = torch.cat([albedo, alpha], dim=-1)

            if dilate_edges > 0:
                rgba = rgba.reshape(num_scenes * num_images, h, w, 4).permute(0, 3, 1, 2)
                rgba = edge_dilation(rgba, rgba[:, 3:], dilate_edges)
                rgba = rgba.permute(0, 2, 3, 1).reshape(num_scenes, num_images, h, w, 4)

            if aa:
                rgba, depth, rot_normal = dr.antialias(
                    torch.cat([rgba, depth.unsqueeze(-1), rot_normal], dim=-1).squeeze(0),
                    rast, v_clip[0], meshes[0].f).unsqueeze(0).split([4, 1, 3], dim=-1)
                depth = depth.squeeze(-1)

        else:  # concat and range mode
            # v_cat = []
            v_clip_cat = []
            v_cam_cat = []
            vn_cat = []
            vt_cat = []
            f_cat = []
            fn_cat = []
            ft_cat = []
            v_count = 0
            vn_count = 0
            vt_count = 0
            f_count = 0
            f_ranges = []
            for i, mesh in enumerate(meshes):
                num_v = v_clip[i].size(1)
                num_vn = mesh.vn.size(0)
                num_vt = mesh.vt.size(0)
                # v_cat.append(mesh.v.unsqueeze(0).expand(num_images, -1, -1).reshape(num_images * num_v, 3))
                v_clip_cat.append(v_clip[i].reshape(num_images * num_v, 4))
                v_cam_cat.append(v_cam[i].reshape(num_images * num_v, 3))
                vn_cat.append(mesh.vn.unsqueeze(0).expand(num_images, -1, -1).reshape(num_images * num_vn, 3))
                vt_cat.append(mesh.vt.unsqueeze(0).expand(num_images, -1, -1).reshape(num_images * num_vt, 2))
                for _ in range(num_images):
                    f_cat.append(mesh.f + v_count)
                    fn_cat.append(mesh.fn + vn_count)
                    ft_cat.append(mesh.ft + vt_count)
                    v_count += num_v
                    vn_count += num_vn
                    vt_count += num_vt
                    f_ranges.append([f_count, mesh.f.size(0)])
                    f_count += mesh.f.size(0)
            # v_cat = torch.cat(v_cat, dim=0)
            v_clip_cat = torch.cat(v_clip_cat, dim=0)
            v_cam_cat = torch.cat(v_cam_cat, dim=0)
            vn_cat = torch.cat(vn_cat, dim=0)
            f_cat = torch.cat(f_cat, dim=0)
            f_ranges = torch.tensor(f_ranges, device=poses.device, dtype=torch.int32)
            # (num_scenes * num_images, h, w, 4) in [u, v, z/w, triangle_id] & (num_scenes * num_images, h, w, 4 or 0)
            rast, rast_db = dr.rasterize(
                self.glctx, v_clip_cat, f_cat, (h, w), ranges=f_ranges, grad_db=torch.is_grad_enabled())

            fg = (rast[..., 3] > 0).reshape(num_scenes, num_images, h, w)

            depth = 1 / dr.interpolate(
                -v_cam_cat[..., 2:3].contiguous(), rast, f_cat)[0].reshape(num_scenes, num_images, h, w)
            depth.masked_fill_(~fg, 0)

            normal = dr.interpolate(
                vn_cat, rast, fn_cat)[0].reshape(num_scenes, num_images, h, w, 3)
            normal = F.normalize(normal, dim=-1)
            # (num_scenes, num_images, h, w, 3) = (num_scenes, num_images, h, w, 3) @ (num_scenes, num_images, 1, 3, 3)
            rot_normal = (normal @ r_mat_c2w.unsqueeze(2)) / 2 + 0.5
            rot_normal[~fg] = rot_normal.new_tensor(normal_bg)

            # (num_scenes * num_images, h, w, 2) & (num_scenes * num_images, h, w, 4)
            texc, texc_db = dr.interpolate(
                vt_cat, rast, ft_cat, rast_db=rast_db, diff_attrs='all')
            albedo = dr.texture(
                torch.cat([mesh.albedo.unsqueeze(0)[..., :3].expand(num_images, -1, -1, -1) for mesh in meshes], dim=0),
                texc, uv_da=texc_db, filter_mode=self.texture_filter
            ).reshape(num_scenes, num_images, h, w, 3)

            prev_grad_enabled = torch.is_grad_enabled()
            torch.set_grad_enabled(True)
            if shading_fun is not None:
                raise NotImplementedError

            # (num_scenes, num_images, h, w, 4)
            rgba = torch.cat([albedo, fg.float().unsqueeze(-1)], dim=-1)

            if dilate_edges > 0:
                rgba = rgba.reshape(num_scenes * num_images, h, w, 4).permute(0, 3, 1, 2)
                rgba = edge_dilation(rgba, rgba[:, 3:], dilate_edges)
                rgba = rgba.permute(0, 2, 3, 1).reshape(num_scenes, num_images, h, w, 4)

            if aa:
                # Todo: depth/normal antialiasing
                rgba = dr.antialias(
                    rgba.reshape(num_scenes * num_images, h, w, 4), rast, v_clip_cat, f_cat
                ).reshape(num_scenes, num_images, h, w, 4)

        if self.ssaa > 1:
            rgba = interpolate_hwc(rgba, 1 / self.ssaa)
            depth = interpolate_hwc(depth.unsqueeze(-1), 1 / self.ssaa).squeeze(-1)
            rot_normal = interpolate_hwc(rot_normal, 1 / self.ssaa)

        results = dict(
            rgba=rgba,
            depth=depth,
            normal=rot_normal)

        torch.set_grad_enabled(prev_grad_enabled)

        return results

    def bake_xyz_shading_fun(self, meshes, shading_fun, map_size=1024, force_auto_uv=False):
        assert len(meshes) == 1, 'only support one mesh'
        mesh = meshes[0]

        if mesh.vt is None or force_auto_uv:
            mesh.auto_uv()
        assert len(mesh.ft) == len(mesh.f)

        vt_clip = torch.cat([mesh.vt * 2 - 1, mesh.vt.new_tensor([[0., 1.]]).expand(mesh.vt.size(0), -1)], dim=-1)

        rast = dr.rasterize(self.glctx, vt_clip[None], mesh.ft, (map_size, map_size), grad_db=False)[0]
        valid = (rast[..., 3] > 0).reshape(map_size, map_size)

        xyz = dr.interpolate(mesh.v[None], rast, mesh.f)[0].reshape(map_size, map_size, 3)
        rgb_reshade = shading_fun(world_pos=xyz[valid])
        new_albedo_map = xyz.new_zeros((map_size, map_size, 3))
        new_albedo_map[valid] = rgb_reshade
        torch.cuda.empty_cache()
        new_albedo_map = edge_dilation(
            new_albedo_map.permute(2, 0, 1)[None], valid[None, None].float(),
        ).squeeze(0).permute(1, 2, 0)
        mesh.albedo = torch.cat(
            [new_albedo_map.clamp(min=0, max=1),
             torch.ones_like(new_albedo_map[..., :1])], dim=-1)

        mesh.textureless = False
        return [mesh]

    def bake_multiview(self, meshes, images, alphas, poses, intrinsics, map_size=1024, cos_weight_pow=4.0):
        assert len(meshes) == 1, 'only support one mesh'
        mesh = meshes[0]
        images = images[0]  # (n, h, w, 3)
        alphas = alphas[0]  # (n, h, w, 1)
        n, h, w, _ = images.size()

        r_mat_c2w = torch.cat(
            [poses[..., :3, :1], -poses[..., :3, 1:3]], dim=-1)[0]  # opencv to opengl conversion

        proj = poses.new_zeros([n, 4, 4])
        proj[..., 0, 0] = 2 * intrinsics[..., 0] / w
        proj[..., 0, 2] = -2 * intrinsics[..., 2] / w + 1
        proj[..., 1, 1] = -2 * intrinsics[..., 1] / h
        proj[..., 1, 2] = -2 * intrinsics[..., 3] / h + 1
        proj[..., 2, 2] = -(self.far + self.near) / (self.far - self.near)
        proj[..., 2, 3] = -(2 * self.far * self.near) / (self.far - self.near)
        proj[..., 3, 2] = -1

        # (num_images, num_vertices, 3)
        v_cam = (mesh.v.detach() - poses[0, :, :3, 3].unsqueeze(-2)) @ r_mat_c2w
        # (num_images, num_vertices, 4)
        v_clip = F.pad(v_cam, pad=(0, 1), mode='constant', value=1.0) @ proj.transpose(-1, -2)

        rast, rast_db = dr.rasterize(self.glctx, v_clip, mesh.f, (h, w), grad_db=False)
        texc, texc_db = dr.interpolate(
            mesh.vt.unsqueeze(0).contiguous(), rast, mesh.ft, rast_db=rast_db, diff_attrs='all')

        with torch.enable_grad():
            dummy_maps = torch.ones((n, map_size, map_size, 1), device=images.device, dtype=images.dtype).requires_grad_(True)
            # (num_images, h, w, 1)
            albedo = dr.texture(
                dummy_maps, texc, uv_da=texc_db, filter_mode=self.texture_filter)
            visibility_grad = torch.autograd.grad(albedo.sum(), dummy_maps, create_graph=False)[0]

        fg = rast[..., 3] > 0  # (num_images, h, w)
        depth = 1 / dr.interpolate(
            -v_cam[..., 2:3].contiguous(), rast, mesh.f)[0].reshape(n, h, w)
        depth.masked_fill_(~fg, 0)

        # # save all the depth maps for visualization debug
        # import matplotlib.pyplot as plt
        # for i in range(n):
        #     plt.imshow(depth[i].cpu().numpy())
        #     plt.savefig(f'depth_{i}.png')
        # # also save the alphas
        # for i in range(n):
        #     plt.imshow(alphas[i].cpu().numpy())
        #     plt.savefig(f'alpha_{i}.png')

        directions = get_ray_directions(
            h, w, intrinsics.squeeze(0), norm=True, device=intrinsics.device)

        normals_opencv = depth_to_normal(
            depth, directions, format='opencv') * 2 - 1
        normals_cos_weight = (normals_opencv[..., None, :] @ directions[..., :, None]).squeeze(-1).neg().clamp(min=0)

        img_space_weight = (normals_cos_weight ** cos_weight_pow) * alphas
        img_space_weight = -F.max_pool2d(  # alleviate edge effect
            -img_space_weight.permute(0, 3, 1, 2), 5, stride=1, padding=2).permute(0, 2, 3, 1)

        # bake texture
        vt_clip = torch.cat([mesh.vt * 2 - 1, mesh.vt.new_tensor([[0., 1.]]).expand(mesh.vt.size(0), -1)], dim=-1)

        rast, rast_db = dr.rasterize(self.glctx, vt_clip[None], mesh.ft, (map_size, map_size), grad_db=False)
        valid = (rast[..., 3] > 0).reshape(map_size, map_size)
        rast = rast.expand(n, -1, -1, -1)
        rast_db = rast_db.expand(n, -1, -1, -1)
        v_img = v_clip[..., :2] / v_clip[..., 3:] * 0.5 + 0.5
        # print(v_img.min(), v_img.max())
        texc, texc_db = dr.interpolate(
            v_img.contiguous(), rast.contiguous(), mesh.f, rast_db=rast_db.contiguous(), diff_attrs='all')
        # (n, map_size, map_size, 4)
        tex = dr.texture(
            torch.cat([images, img_space_weight], dim=-1), texc, uv_da=texc_db, filter_mode=self.texture_filter)

        weight = tex[..., 3:4] * visibility_grad

        new_albedo_map = (tex[..., :3] * weight).sum(dim=0) / weight.sum(dim=0).clamp(min=1e-6)

        new_albedo_map = edge_dilation(
            new_albedo_map.permute(2, 0, 1)[None], valid[None, None].float(),
        ).squeeze(0).permute(1, 2, 0)
        mesh.albedo = torch.cat(
            [new_albedo_map.clamp(min=0, max=1),
             torch.ones_like(new_albedo_map[..., :1])], dim=-1)

        mesh.textureless = False
        return [mesh]
