---
layout: post
title: Notes for Experiment
subtitle: 
categories: [科研工具]
tags: [experiment, visualization]
---

## 运行代码

### cuda:x

不需要在代码中修改 cuda:x，在命令行中写入以下语句：

```console
export CUDA_VISIBLE_DEVICES=x1,x2,..
```

作用是把cuda的逻辑id（比如默认是0）映射到实际物理id上（改成的x）

## 可视化

### tensorboard

进入 events.out.tfevents 所在的forder

```console
tensorboard --logdir ./ --port 22223 --host 59.77.18.21
```

