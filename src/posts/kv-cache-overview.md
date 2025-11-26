---
title: 【论文分享】| KV 压缩技术综述：高效LLM推理的 KV Cache 优化
date: 2025-10-16
author:
   name: 刘思然
   github: VAthree
category: insights
---

本文梳理近期主流的 KV 压缩/驱逐思路（Prefill vs. Decoding），对比 H2O、PyramidKV、SnapKV、Quest 等代表方法的策略与表现。

<!-- more -->

## 引言与背景

大型语言模型 (Large Language Models, LLMs) 在处理长上下文任务时，面临着严重的内存和计算开销问题。其中，Key-Value (KV) Cache 是 Transformer 架构中自注意力机制的核心组件，用于存储先前 token 的 Key 和 Value 表示，以避免在生成阶段重复计算。然而，随着上下文长度的增加，KV Cache 的内存占用呈线性增长，通常占 GPU 内存的 70% 以上。这限制了模型处理长序列的能力，并导致推理延迟增加。

KV Cache 压缩/驱逐技术旨在通过识别和保留高重要性的 KV 条目，减少缓存大小，同时尽可能保持模型性能。核心观察是：注意力分数矩阵高度稀疏（通常超过 95%），即大多数 KV 条目对当前查询的贡献很小。这些技术通常分为两类：

- **Prefill/Prompt 阶段压缩**：针对输入提示的 KV Cache 进行压缩，减少初始内存占用。
- **Decoding 阶段压缩**：在生成过程中动态驱逐或选择 KV 条目，提高效率。

这些方法利用注意力模式的稀疏性、层级差异和查询相关性，实现内存节省和吞吐提升。根据KV Cache Compression for Inference Efficiency in LLMs，常见trade-off 包括压缩率与性能损失的平衡，以及是否需要微调模型。

## 代表性工作

### 1. H2O: Heavy-Hitter Oracle for Efficient Generative Inference of Large Language Models

- **论文链接**：https://arxiv.org/abs/2306.14048﻿
- **针对阶段**：Decoding
- **核心思想**：尽管 LLMs 是稠密训练的，但注意力分数矩阵高度稀疏（所有层稀疏度 >95%）。这表明在生成下一个 token 时，无需访问所有历史 KV，注意力模块的稀疏性说明生成下一个 token 时访问此前所有的 key 和 value 的 embedding 是没有必要的，只需保留“重击者”（Heavy Hitters, H₂）——那些贡献大部分注意力分数的 token。
- **方法**：将 KV 驱逐建模为动态子模优化问题。驱逐策略：基于累积注意力分数，驱逐分数最低的 token，同时保留最近 token 和部分 H₂ token（例如 20%）。这利用了 token 共现的自然模式，确保驱逐低贡献token不会显著影响性能。
- **性能**：在 OPT、LLaMA 和 GPT-NeoX 模型上，吞吐提升高达 29x（相比 DeepSpeed Zero-Inference），延迟降低 1.9x。理论上证明了驱逐算法的保证。
- **理解**：H2O 是早期 KV 驱逐的典范，强调动态性和稀疏利用。它简单高效，但可能忽略层级差异，导致在复杂长上下文任务中性能波动。适用于长内容生成如对话系统。

### 2. PyramidKV: Dynamic KV Cache Compression based on Pyramidal Information Funneling

- **论文链接**：https://arxiv.org/abs/2406.02069﻿
- **针对阶段**：Prefill/Decoding
- **核心思想**：传统方法对所有 Transformer 层统一压缩 KV Cache，“一视同仁”地用相同的压缩设置，压缩到同样的长度，忽略了层级注意力模式的差异。研究 Llama 模型进行多文档问答的逐层注意力图，观察到“金字塔型信息汇聚”：底层注意力稠密（均匀分布），中间层局部聚焦，上层极度稀疏（Attention Sink 和 Massive Activation）。结论：**可能在较高层的稀疏注意力中保留许多不重要的 tokens，而忽略较低层密集注意力中的许多重要的 tokens**。
- **方法**：层级动态分配 KV 预算——底层分配更多缓存，上层减少。确定预算后，根据注意力分数选择 KV token，始终保留 instruction token（类似窗口模式）。这避免了在高层保留过多无关 token，并在底层保留关键全局信息。
- **性能**：在 Llama-3-8B 和 Mistral-7B 上，仅用 2.5% KV Cache 保持 90% 性能。在 LongBench 等任务中，优于基线 20% ACC（size=128 时）。
- **理解**：PyramidKV 巧妙利用层级稀疏梯度，提高压缩效率。它比“一视同仁”方法更智能，但计算预算分配可能增加开销。适合多文档 QA 等需要层级信息聚合的任务。

### 3. SnapKV: LLM Knows What You are Looking for Before Generation

- **论文链接**：https://arxiv.org/abs/2404.14469﻿
- **针对阶段**：Prefill
- **核心思想**：在生成过程中，注意力头一致关注提示中的特定位置。这可以通过提示末尾的“观察窗口”（Observation Window）捕捉。
- **方法**：两步过程：1) 基于观察窗口（e.g., 最后 16 token）的注意力分布，通过投票算法选出重要 KV 位置（对 softmax 后分数求和，选择 top-k）；2) 将选出 KV（L_prefix）与观察窗口拼接，形成压缩 KV Cache。针对 Prefill 阶段压缩提示 KV。
   - 假设Prompt序列长度为1000，Observation Window大小为16，我们希望将KV缓存压缩至256。SnapKV首先基于最后16个Token的注意力分布，通过Voting算法选出最重要的240个位置。然后将这240个位置对应的Key和Value与Observation Window拼接，形成大小为256的新KV缓存。这样,后续的生成过程就只需在显著缩减的KV缓存上进行注意力计算，从而大幅提升了效率。
- **性能**：对于 16K token 输入，生成速度提升 3.6x，内存效率 8.2x。在 16 个长序列数据集上性能相当，可处理 380K 上下文（A100 GPU）。
- **理解**：SnapKV 无需微调，简单高效，专注于提示压缩。它假设注意力模式稳定，但可能在动态变化的上下文中（如交互式生成）效果减弱。

### 4. Quest: Query-Aware Sparsity for Efficient Long-Context LLM Inference

- **论文链接**：https://arxiv.org/abs/2406.10774﻿
- **针对阶段**：Decoding
- **核心思想**：token 重要性高度依赖当前查询/最新的Q（Query）。前两层注意力重要，后层稀疏度高。Quest 针对 Decoding 阶段，不压缩 Prefill KV，而是动态选择相关 KV。
- **方法**：块级处理：将 KV Cache 分块（pages），跟踪每个块的 min/max Key 值。与当前 Query 逐元素乘积，计算块分数（sum of max elements），选择 top-k 块进行注意力计算。前两层保持稠密计算。
- **性能**：自注意力加速 2.23x，总推理延迟降低 7.03x。在长依赖任务上准确率损失 negligible。
- **理解**：Quest 的查询感知性使其在动态生成中出色，避免了静态压缩的局限。但块级计算增加少量开销，早层处理确保基础信息完整。适用于长上下文推理如总结或 QA。

### 5. Can LLMs Maintain Fundamental Abilities under KV Cache Compression?

- **论文链接**：https://arxiv.org/abs/2502.01941﻿
- **针对阶段**：Prefill/Decoding
- **核心思想**：现有压缩方法（如 SnapKV、PyramidKV）在长上下文基准上表现好，但对模型基础能力（如世界知识、常识推理、数学、代码生成、安全和长上下文理解）的影响未充分研究。
- **方法**：引入 KVFundaBench 基准，评估压缩对基础能力的任务依赖降解。发现：任务依赖、模型类型鲁棒性、提示长度脆弱性、块级优越性、提示增益敏感性和长上下文生成敏感性。提出 ShotKV 方法：分开处理 Prefill 和 Decoding，保持 shot-level 语义一致。
- **性能**：ShotKV 在激进压缩下，长上下文生成提升 9%-18%。比 SnapKV 和 PyramidKV 更鲁棒。
- **理解**：这篇更像是评估框架，强调压缩不能牺牲核心能力。揭示了方法局限，如长提示更易降级。建议在设计时考虑多任务鲁棒性。

### 6. ChunkKV: Semantic-Preserving KV Cache Compression for Efficient Long-Context LLM Inference

- **论文链接**：https://arxiv.org/abs/2502.00299﻿
- **针对阶段**：Prefill
- **核心思想**：针对 Prefill 阶段，传统 token-level 压缩可能破坏语义。使用语义块（chunks）作为单位，保留完整语言结构。
- **方法**：Chunk-based：流程和snapkv差不多，基于最后 w token 的 Query 计算 score，按 chunksize c 分块，求和选 top-k 块保存 KV。Decoding 时替换最后的 w KV。Layer-Wise Index Reuse：每 N_reuse 层共享压缩索引，减少计算。（算法：if l % N_reuse == 0，就由这层来计算压缩的KV索引，剩下的N_reuse - 1层共用相同的kv索引。）
   - Target：提高吞吐、小幅度降低精度。
- **性能**：比 SnapKV、PyramidKV 精度高 8.7%，吞吐提升 26.5%。在 LongBench 等基准上优异。
- **理解**：ChunkKV 强调语义保存，避免碎片化上下文。层级复用平衡延迟和吞吐，效果微降。适合需要语义完整性的任务，如长上下文生成。

## 技术比较与理解

总结这些技术的关键特征：

| 技术               | 针对阶段         | 核心机制                  | 压缩率/性能提升            | 优势与局限             |
| ------------------ | ---------------- | ------------------------- | -------------------------- | ---------------------- |
| H2O                | Decoding         | 注意力分数驱逐 H₂ token   | 吞吐 29x，内存线性减少     | 简单动态；忽略层级差异 |
| PyramidKV          | Prefill/Decoding | 层级预算分配 + 注意力选择 | 2.5% KV 保持 90% 性能      | 层级优化；预算计算开销 |
| SnapKV             | Prefill          | 观察窗口投票 + 拼接       | 生成 3.6x，内存 8.2x       | 无微调；假设模式稳定   |
| Quest              | Decoding         | 查询感知块选择            | 自注意力 2.23x，延迟 7.03x | 动态相关；早层处理复杂 |
| ShotKV (from eval) | Prefill/Decoding | 分阶段 + 语义一致         | 长生成 9-18%               | 鲁棒评估；非独立方法   |
| ChunkKV            | Prefill          | 块级 score + 层复用       | 精度 +8.7%，吞吐 +26.5%    | 语义保存；共享索引高效 |

**整体理解**：这些技术共同利用注意力稀疏性，但侧重点不同：H2O 和 Quest 更注重动态驱逐，PyramidKV 和 ChunkKV 强调层级/语义优化，SnapKV 简单高效。挑战在于平衡压缩率与性能，尤其在长上下文下。未来方向可能包括结合量化（如 CacheGen）和分布式缓存（如 ShadowKV）。
