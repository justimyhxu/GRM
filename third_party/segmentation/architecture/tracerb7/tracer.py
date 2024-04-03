"""
Source url: https://github.com/Karel911/TRACER
Author: Min Seok Lee and Wooseok Shin
Modified by Nikita Selin (OPHoperHPO)[https://github.com/OPHoperHPO].
License: Apache License 2.0
Changes:
    - Refactored code
    - Removed unused code
    - Added comments
"""

import torch
import torch.nn as nn
import torch.nn.functional as F
from typing import List, Optional

from torch import Tensor

from .efficientnet import EfficientEncoderB7
from .att_modules import (
    RFB_Block,
    Aggregation,
    ObjectAttention,
)


class TracerDecoder(nn.Module):
    """Tracer Decoder"""

    def __init__(
        self,
        encoder: EfficientEncoderB7,
        features_channels: Optional[List[int]] = None,
        rfb_channel: Optional[List[int]] = None,
    ):
        """
        Initialize the tracer decoder.

        Args:
            encoder: The encoder to use.
            features_channels: The channels of the backbone features at different stages. default: [48, 80, 224, 640]
            rfb_channel: The channels of the RFB features. default: [32, 64, 128]
        """
        super().__init__()
        if rfb_channel is None:
            rfb_channel = [32, 64, 128]
        if features_channels is None:
            features_channels = [48, 80, 224, 640]
        self.encoder = encoder
        self.features_channels = features_channels

        # Receptive Field Blocks
        features_channels = rfb_channel
        self.rfb2 = RFB_Block(self.features_channels[1], features_channels[0])
        self.rfb3 = RFB_Block(self.features_channels[2], features_channels[1])
        self.rfb4 = RFB_Block(self.features_channels[3], features_channels[2])

        # Multi-level aggregation
        self.agg = Aggregation(features_channels)

        # Object Attention
        self.ObjectAttention2 = ObjectAttention(
            channel=self.features_channels[1], kernel_size=3
        )
        self.ObjectAttention1 = ObjectAttention(
            channel=self.features_channels[0], kernel_size=3
        )

    def forward(self, inputs: torch.Tensor) -> Tensor:
        """
        Forward pass of the tracer decoder.

        Args:
            inputs: Preprocessed images.

        Returns:
            Tensors of segmentation masks and mask of object edges.
        """
        features = self.encoder(inputs)
        x3_rfb = self.rfb2(features[1])
        x4_rfb = self.rfb3(features[2])
        x5_rfb = self.rfb4(features[3])

        D_0 = self.agg(x5_rfb, x4_rfb, x3_rfb)

        ds_map0 = F.interpolate(D_0, scale_factor=8, mode="bilinear")

        D_1 = self.ObjectAttention2(D_0, features[1])
        ds_map1 = F.interpolate(D_1, scale_factor=8, mode="bilinear")

        ds_map = F.interpolate(D_1, scale_factor=2, mode="bilinear")
        D_2 = self.ObjectAttention1(ds_map, features[0])
        ds_map2 = F.interpolate(D_2, scale_factor=4, mode="bilinear")

        final_map = (ds_map2 + ds_map1 + ds_map0) / 3

        return torch.sigmoid(final_map)
