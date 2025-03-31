---
layout: post
title: vanilla 3DGS 学习笔记
subtitle: 
categories: [科研笔记]
tags: [3DGS]
---

## 原理
### 算法流程

1. 实现从输入数据（multi view images）得到 SfM 初始化点云。
2. 从 SfM 初始化点云得到 初始 3D 高斯椭球。
3. 预测和优化 3D 高斯椭球各属性的 network。
4. 从 3D 高斯投影产生特定视角下的 renders。

### 1. 输入





## 代码

代码包括四个部分：
1. A PyTorch-based optimizer to produce a 3D Gaussian model from SfM inputs.
2. A network viewer that allows to connect to and visualize the optimization process.
3. An OpenGL-based real-time viewer to render trained models in real-time.
4. A script to help you turn your own images into optimization-ready SfM data sets.

### 1. Images to SfM data.

原始数据是关于场景的 multi view images, 通过 **convert.py** 即可获得 3DGS 的 initialized SfM data.

运行程序前需下载 colmap：

```cpu版本
conda install conda-forge::colmap
```

### 2. SfM data to 3DGS model.


