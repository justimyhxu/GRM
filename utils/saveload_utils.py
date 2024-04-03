import os
import torch
import torch.distributed as dist
import numpy as np
from easydict import EasyDict

from torch.cuda.amp import GradScaler
import torch.nn.functional as F
from torchvision import transforms


def load_checkpoint(load_from, model=None, max_results=None, optimizer=None, lr_scheduler=None, 
                    fp16_scaler: GradScaler=None,
                    return_kwargs=False, **unsed):
    if load_from is None:
        return 0

    if isinstance(load_from, str):
        if load_from.startswith('https'):
            checkpoint = torch.hub.load_state_dict_from_url(
                load_from, map_location='cpu', check_hash=True)
        else:
            checkpoint = torch.load(load_from, map_location='cpu')
    else:
        checkpoint = load_from 

    if isinstance(load_from, str):
        print(f"=> readed  successfully '{load_from}'")

    if model is not None:
        state_dict = checkpoint['model']
        # If the model is saved with DDP wrapper, we remove the wrapper's prefix "module." from the state dict.
        state_dict = {(key[len("module."):] if key.startswith("module.") else key): value for key, value in state_dict.items()}

        msg = model.load_state_dict(state_dict, strict=False)

        print("Loading message")
        print(f"\t{msg}")

    if max_results is not None:
        # We here directly update the dict with the results saved in the checkpoint
        max_results.update(checkpoint['max_results'])

    if optimizer is not None:
        state_dict = checkpoint['optimizer']
        print("Loading optimizer successfully")
        optimizer.load_state_dict(state_dict)

    if lr_scheduler is not None:
        print("Loading  lr scheduler successfully")
        lr_scheduler.load_state_dict(checkpoint['lr_scheduler'])

    if fp16_scaler is not None:
        print("Loading  fp16 scaler successfully")
        fp16_scaler.load_state_dict(checkpoint['amp'])
        
    torch.cuda.empty_cache()
    if "epoch" in checkpoint:
        epoch = checkpoint["epoch"]
    else:
        epoch = 0

    if model is None:
        if return_kwargs:
            return checkpoint, epoch, checkpoint.get("other", {})
        else:
            return checkpoint, epoch
    else:
        if return_kwargs:
            return epoch, checkpoint.get("other", {})
        else:
            return epoch


