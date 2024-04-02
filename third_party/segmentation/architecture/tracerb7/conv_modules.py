"""
Source url: https://github.com/Karel911/TRACER
Author: Min Seok Lee and Wooseok Shin
License: Apache License 2.0
"""
import torch.nn as nn


class BasicConv2d(nn.Module):
    def __init__(
        self,
        in_channel,
        out_channel,
        kernel_size,
        stride=(1, 1),
        padding=(0, 0),
        dilation=(1, 1),
    ):
        super(BasicConv2d, self).__init__()
        self.conv = nn.Conv2d(
            in_channel,
            out_channel,
            kernel_size=kernel_size,
            stride=stride,
            padding=padding,
            dilation=dilation,
            bias=False,
        )
        self.bn = nn.BatchNorm2d(out_channel)
        self.selu = nn.SELU()

    def forward(self, x):
        x = self.conv(x)
        x = self.bn(x)
        x = self.selu(x)

        return x


class DWConv(nn.Module):
    def __init__(self, in_channel, out_channel, kernel, dilation, padding):
        super(DWConv, self).__init__()
        self.out_channel = out_channel
        self.DWConv = nn.Conv2d(
            in_channel,
            out_channel,
            kernel_size=kernel,
            padding=padding,
            groups=in_channel,
            dilation=dilation,
            bias=False,
        )
        self.bn = nn.BatchNorm2d(out_channel)
        self.selu = nn.SELU()

    def forward(self, x):
        x = self.DWConv(x)
        out = self.selu(self.bn(x))

        return out


class DWSConv(nn.Module):
    def __init__(self, in_channel, out_channel, kernel, padding, kernels_per_layer):
        super(DWSConv, self).__init__()
        self.out_channel = out_channel
        self.DWConv = nn.Conv2d(
            in_channel,
            in_channel * kernels_per_layer,
            kernel_size=kernel,
            padding=padding,
            groups=in_channel,
            bias=False,
        )
        self.bn = nn.BatchNorm2d(in_channel * kernels_per_layer)
        self.selu = nn.SELU()
        self.PWConv = nn.Conv2d(
            in_channel * kernels_per_layer, out_channel, kernel_size=1, bias=False
        )
        self.bn2 = nn.BatchNorm2d(out_channel)

    def forward(self, x):
        x = self.DWConv(x)
        x = self.selu(self.bn(x))
        out = self.PWConv(x)
        out = self.selu(self.bn2(out))

        return out
