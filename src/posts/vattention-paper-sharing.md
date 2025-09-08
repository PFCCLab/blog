---
title: 【论文分享】| vAttention: Dynamic Memory Management for Serving LLMs without PagedAttention
date: 2025-09-02
author:
   name: 陈煜彦
   github: cyy536
category: insights
---

- 论文链接：[vAttention: Dynamic Memory Management for Serving LLMs without PagedAttention | Proceedings of the 30th ACM International Conference on Architectural Support for Programming Languages and Operating Systems, Volume 1](https://dl.acm.org/doi/10.1145/3669940.3707256)
- 关键词：KV cache, CUDA
  
  <!-- more -->

---

# 背景

## KV cache

推理过程分为两部分：prefill阶段，处理所有的输入，生成一个token；decode阶段，输入上次迭代生成的token，输出一个新token，不断重复这个过程，直到生成结束符

![alt text](../images/vattention-paper-sharing/attention.jpg)

K, V是所有token的，q是本次迭代的输入。KV随着迭代次数的增加逐渐累积，旧token生成的KV是可复用，不需要每次重新计算，是一个存储换计算的策略

KV的大小：

$$
2*N*(B*L*H*D*P)
$$
上面的字母分别对应层数、batch size、context length、head num、dim、sizeof(dtype)

## KV管理的演进

### 连续预分配

Orca和FasterTransformer 为所有的请求分配maximum context length大小的KV（Yi-34B model supports context length of up to 200K）。这有两个问题：

1. 实际上并没有使用这么多的空间，浪费了显存

2. 一次性分配所有显存，但token的生成是逐步的，可能导致一些请求显存不足，一些请求的显存空闲，显存闲置

这两个因素限制了batch size，进而限制了吞吐。

### 不连续按需分配

PagedAttention按需分配显存，成为目前推理系统的事实标准。

PagedAttention按需分配显存，导致KV cache的虚拟地址不连续，不连续的原因在于cudaMalloc是同时分配虚拟空间和物理空间，虚拟空间和物理空间的映射是固定的，物理空间的不连续导致虚拟空间的不连续

不连续导致一些问题：

1. 编程困难：PagedAtten的KV是分块的，不同块的虚拟地址往往是不连续的，需要修改Attention kernel的实现，可移植性较低

2. 内存管理模块：推理系统需要维护KV cahce和显存块之间的映射关系

![alt text](../images/vattention-paper-sharing/blockmap.jpg)

3. kernel开销：基于PagedAttention实现的Attention版本比FasterTransformer原生版本慢20 − 26%，比FlashAttention-2慢37%，比FlashInfer慢42%。原因：指令数量增加7 − 13%（主要来自查找映射表和一些新增的分支），寄存器溢出

![alt text](../images/vattention-paper-sharing/kernelcost.jpg)

![alt text](../images/vattention-paper-sharing/kernelcost1.jpg)

4. cpu开销：需要将映射表传给Attention kernel，占decode阶段10%的时间

# vAttention

## 设计

vAttention在按需分配显存的同时，保障了虚拟地址的连续性，达到PagedAttention的目的，去掉了缺点。做法和操作系统是一样的。

![alt text](../images/vattention-paper-sharing/mapping.jpg)

1. 一开始就连续分配足够大的虚拟空间
   
   1. ﻿$2*N*(B*L*H*D*P)$﻿
   
   2. 层数、maximum batch size、maximum context length、head num、dim、sizeof(dtype)
   
   3. 括号里的代表一个虚拟tensor的大小，是虚拟空间的分配单元，即内部是连续的

2. 显存按需分配：CUDA virtual memory management APIs允许单独分配虚拟空间和物理空间，物理空间分配单位是page-group(数个物理页)

![alt text](../images/vattention-paper-sharing/vmm.jpg)

3. 扩展PyTorch caching allocator，给KV对应tensor分配虚拟tensor(没有物理空间)

![alt text](../images/vattention-paper-sharing/pytorch.jpg)

4. 初始化的时候就分配了虚拟空间和物理空间，只在推理前建立映射

![alt text](../images/vattention-paper-sharing/inference.jpg)

![alt text](../images/vattention-paper-sharing/inference1.jpg)

## 性能上的优化

### 时延

在运行时进行map延迟比较高，每次迭代每个请求都可能需要增加物理空间

cuMemMap+cuMemSetAccess要花费40us。如果模型有60层，一个请求要花费4.8ms

总时间:$40*B*N*2$﻿

decode：decode阶段每次只会生成一个token，所以可以判断下个迭代是否需要申请显存，提前map。开一个线程提前map和计算重叠，一次迭代计算花费几十毫秒到几百毫秒

prefill：采用延迟unmap，可以把推理结束的tensor给新请求复用。为虚拟tensor中的一个空闲请求预分配一定的物理空间

### 显存碎片

原生API显存分配粒度比较大（2MB），导致碎片较多

修改了开源CUDA驱动，支持64KB, 128KB and 256KB分配粒度

# 实验

推理框架：vLLM v0.2.7

kernel：FlashAttention-2 v2.5.9, FlashInfer v0.4.0

prefill 吞吐量：每秒处理的输入token数量

decode 吞吐量：每秒生成的token数量

系统吞吐量：每分钟完成的请求数量

![alt text](../images/vattention-paper-sharing/setup.jpg)

## prefill 吞吐量

当 context length==192K 时，FA2_vAttention 吞吐量是 FA2_Paged 的 1.24×, 1.26×, 1.24× 倍

![alt text](../images/vattention-paper-sharing/prefill.jpg)

![alt text](../images/vattention-paper-sharing/prefill1.jpg)

## decode 吞吐量

对 Yi-6B，当batch size==12 时，FA2_vAttention 吞吐量是 FI_Paged 的 1.23× 倍。相比FA2_Paged，提升较小。因为decode阶段是memory bound，PagedAttention额外的计算开销被 memory stalls 隐藏

![alt text](../images/vattention-paper-sharing/decode.jpg)

## offline

FA2_vAttention 吞吐量是 FA2_Paged 的 1.18×, 1.15× and 1.13×倍，是 FI_Paged 的 1.19×, 1.23×, and 1.14×倍

![alt text](../images/vattention-paper-sharing/offline.jpg)

## online

FA2_vAttention 请求时延的中位数比 FA2_Paged 减少 42%(QPS 0.25)

![alt text](../images/vattention-paper-sharing/online.jpg)

## 可移植性

FA3还未支持PagedAttention，vAttention不需要修改就可使用

![alt text](../images/vattention-paper-sharing/fa3.jpg)

## 缺点

只有特定版本的CUDA驱动开源，如果设置不了物理显存分配粒度，2MB造成较多显存碎片，限制了batch size

2MB粒度可以支持187，203，56大小的batch，64KB只能支持240，258，68

![alt text](../images/vattention-paper-sharing/batchsize.jpg)
