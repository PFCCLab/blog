---
title: PaddlePaddle 社区新人手册：从零开始的开源之旅
date: 2025-04-08
author:
   name: 刘卓鑫
   github: mattheliu
---

无论你是深度学习领域的新手，还是经验丰富的开发者，飞桨开源社区都欢迎你的加入！在这里，你可以学习最前沿的 AI 技术，结交志同道合的朋友，并为开源社区贡献自己的力量。

<!-- more -->

<style>
figure {
   text-align: center;
}
figcaption {
   color: orange;
   border-bottom: 1px solid #d9d9d9;
   display: inline-block;
   color: #999;
   padding: 2px;
}
</style>

---

## 👋 欢迎来到飞桨社区

**亲爱的开发者朋友**

**无论你是深度学习领域的新手，还是经验丰富的开发者，飞桨开源社区都欢迎你的加入！在这里，你可以学习最前沿的 AI 技术，结交志同道合的朋友，并为开源社区贡献自己的力量**

**这份手册将指引你如何根据自己的时间和能力，找到最适合自己的参与方式。无论你是全职投入还是碎片化时间参与，是刚入门的新手还是技术大牛，我们都为你准备了合适的参与路径**

## 🧭 如何使用这份手册

### 本手册按照不同场景和问题提供指引，你可以根据自己的情况选择适合的参与方式

- 技术基础薄弱？ 👉 查看[学习资源指南](#learning-resources)
- 想全方位参与社区？ 👉 参考[完整参与路径](#full-participation-path)
- 可以进行非代码贡献吗？ 👉 [我们鼓励多种形式的贡献](#various-contributions)

## 🔍 了解飞桨社区

### 飞桨（PaddlePaddle）是百度开源的深度学习平台，拥有丰富的生态系统，包括

- [PaddlePaddle 核心框架](https://github.com/PaddlePaddle/Paddle)：深度学习基础框架
- [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)：文字识别工具集
- [PaddleNLP](https://github.com/PaddlePaddle/PaddleNLP)：自然语言处理工具库
- [PaddleSpeech](https://github.com/PaddlePaddle/PaddleSpeech)：语音技术工具库
- [PaddleMIX](https://github.com/PaddlePaddle/PaddleMIX)：多模态大模型开发套件
- [PaddleX](https://github.com/PaddlePaddle/PaddleX)：低代码开发工具
- [PaddleScience](https://github.com/PaddlePaddle/PaddleScience)：科学计算套件

## 🎯 了解你在社区中的位置

### 飞桨社区采用五层成长模型，每个人都可以根据自己的兴趣和能力，选择合适的参与路径

```bash
                                  -------------
                                 /             \
SIG 负责人、技术布道官 →           /   引领层 👑    \ → 指导项目方向，带领新成员成长
                               /                  \
                              ----------------------
                              /                     \
核心开发者、项目维护者 →         /      贡献层 💎         \ → 经常贡献代码或内容，积极解决问题
                            /                          \
                           ------------------------------
                           /                             \
积极贡献者、定期参与者 →      /         参与层 🌟              \ → 已经做出一些贡献，希望更深入参与
                         /                                  \
                         ------------------------------------
                       /                                      \
初次贡献者、学习者 →     /              兴趣层 🌱                  \ → 学习相关技术，尝试做出第一次贡献
                     /                                          \
                    ----------------------------------------------
                   /                                              \
观望者、潜在贡献者 → /                  认知层 👀                      \ → 刚刚了解飞桨，对开源社区感兴趣但还没参与
                 /                                                   \
                 -----------------------------------------------------

```

## ⏱ 我的开源性格测试（快速自测）

### Q1. 你更喜欢写代码，还是分享知识？

- 💻 我喜欢编码，愿意修 Bug、优化代码 → 技术贡献者（代码流）
- ✍️ 我更擅长写文档，整理教程 → 文档贡献者（文档流）
- 📢 我喜欢社交、组织活动 → 社区运营（推广流）

### Q2. 你有多少时间投入到开源？

- 🕒 时间有限（< 2 小时/周） → 轻量贡献（答疑、翻译、文档优化）
- ⏳ 有一定空闲（3-5 小时/周） → 定期贡献（代码 PR、社区运营）
- 🔥 充裕时间（> 5 小时/周） → 深度参与（SIG 组、项目开发、赛事）

## 🎉 <span id="various-contributions">我们鼓励多种形式的贡献</span>

### 📚 文档贡献（可参考 [docs](https://github.com/PaddlePaddle/docs/pulls) 仓库的 pr 贡献）

- 改进用户指南
- 编写教程和示例
- 翻译文档

### 🔍 质量保障（我们鼓励直接沟通，请直接给我们提 issue！）

- 测试功能并反馈 bug
- 改进测试用例
- 验证修复结果

### 🙋 社区支持

- 在论坛回答问题（以 PaddleOCR 为例，可在 [discussions](https://github.com/PaddlePaddle/PaddleOCR/discussions) 回答问题）
- 帮助新手上手
- 参与技术讨论

### 📣 内容创作

- 撰写博客文章（博客官网：[https://pfcc.blog](https://pfcc.blog)）
- 制作教学视频
- 分享使用经验（我们鼓励大家在任何第三方平台分享在学习、贡献等等的过程中分享自己的经验～）

## 🌈 <span id="full-participation-path">完整参与路径</span>

### 第一步：认知与兴趣阶段 🌱

#### 1. 浏览官方网站和文档

- [PaddlePaddle 官网](https://www.paddlepaddle.org.cn/)
- [GitHub 仓库](https://github.com/PaddlePaddle)

#### 2. 关注社区动态

- 关注飞桨官方微信公众号
- 加入飞桨社区快乐开源微信交流群

#### 3. 参与线上活动

- 关注黑客松等活动宣传
- 参加网络直播和技术分享

### 第二步：初步参与 🌿

#### 1. 学习基础知识

- 学习[星河社区](https://aistudio.baidu.com/course/list)入门课程
- [阅读《动手学深度学习（飞桨版）》](https://aistudio.baidu.com/course/introduce/25851)
- [学习《PaddlePaddle 深度学习实战》](https://aistudio.baidu.com/course/introduce/32290)

#### 2. 尝试简单贡献

- 参与[启航计划中的快乐开源](https://github.com/PaddlePaddle/Paddle/issues/71491) 新手任务
- 修复文档中的错误
- 提交简单的 bug 修复

### 第三步：深度参与 🌲

#### 1. 系统学习

- 学习星河社区进阶课程
- 参与特定领域（如 OCR、NLP 等）的专项课程

#### 2. 持续贡献

- 参与启航计划或集训营
- 解决更复杂的社区任务
- 参加星河社区比赛

### 第四步：成为核心贡献者 🌳

#### 1. 深入参与开发

- 参与护航计划集训营
- 挑战个人挑战赛
- 参与 Fundable Projects

#### 2. 贡献原创内容

- 撰写技术博客
- 制作教程视频
- 提出功能改进建议
- 贡献 AI Studio 精品项目（不限于可执行代码、心得文章等贡献我们强烈欢迎～）

### 第五步：成为社区领导者 🌟

#### 1. 担任重要角色

- 成为 SIG 组负责人
- 担任技术布道官
- 参与社区规划和决策

#### 2. 引领技术方向

- 提出创新性技术方案
- 主导重要功能开发
- 指导新成员成长

## 📚 <span id="learning-resources">学习资源指南</span>

不同水平的开发者可以选择不同的学习路径：

### 参与层初学者 👶

#### 1. 基础知识学习

- 官方文档：
   - Paddle：[https://www.paddlepaddle.org.cn/documentation/docs/zh/guides/index_cn.html](https://www.paddlepaddle.org.cn/documentation/docs/zh/guides/index_cn.html)
   - PaddleOCR：[https://paddlepaddle.github.io/PaddleOCR/main/](https://paddlepaddle.github.io/PaddleOCR/main/)
   - PaddleMIX：[https://github.com/PaddlePaddle/PaddleMIX/tree/develop/docs](https://github.com/PaddlePaddle/PaddleMIX/tree/develop/docs)
   - PaddleSpeech：[https://paddlespeech.readthedocs.io/en/latest/](https://paddlespeech.readthedocs.io/en/latest/)
   - PaddleNLP：[https://paddlenlp.readthedocs.io/zh/latest/](https://paddlenlp.readthedocs.io/zh/latest/)
   - PaddleX：[https://paddlexdocs.readthedocs.io/en/stable/](https://paddlexdocs.readthedocs.io/en/stable/)
   - PaddleScience：[https://paddlescience-docs.readthedocs.io/zh-cn/latest/](https://paddlescience-docs.readthedocs.io/zh-cn/latest/)
- 课程：
   - Paddle：
      - [飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/education/group/info/25302)
      - [动手学深度学习（飞桨版） - 飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/course/introduce/25851)
   - PaddleOCR：
      - [AI 快车道 2020-PaddleOCR - 飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/course/introduce/1519)
      - [AI 快车道 2020-PaddleCV - 飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/course/introduce/1282)
   - PaddleMIX：[飞桨多模态大模型开发套件 PaddleMIX 系列课程 - 飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/course/introduce/32178)
   - PaddleSpeech：[飞桨 PaddleSpeech 语音技术课程 - 飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/course/introduce/25130)
   - PaddleNLP：
      - [飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/education/group/info/24902)
      - [飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/education/group/info/25604)
   - PaddleX：[飞桨 AI 套件【PaddleX】系列课程 - 飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/course/introduce/29686)
- 项目：
   - Paddle：
      - [【PaddlePaddle】基础理论教程 - 深度学习中的数学基础 - 飞桨 AI Studio 星河社区](https://aistudio.baidu.com/projectdetail/8742265?channelType=0&channel=0)
      - [【PaddlePaddle】基础理论教程 - 算子与机器学习概述 - 飞桨 AI Studio 星河社区](https://aistudio.baidu.com/projectdetail/8748375?channelType=0&channel=0)
      - [【PaddlePaddle】基础理论教程 - 卷积神经网络概论 - 飞桨 AI Studio 星河社区](https://aistudio.baidu.com/projectdetail/8800876?channelType=0&channel=0)
      - [【PaddlePaddle】基础理论教程 - 前馈神经网络概论 - 飞桨 AI Studio 星河社区](https://aistudio.baidu.com/projectdetail/8766547?channelType=0&channel=0)

#### 2. 实践练习

- 参与星河社区入门项目
- 参与新手级别的[启航计划中的快乐开源](https://github.com/PaddlePaddle/Paddle/issues/71491)任务

### 贡献层进阶学习者 👨‍🎓

#### 1. 专项知识提升

- 课程：
   - Paddle：
      - 贡献指南：[https://www.paddlepaddle.org.cn/documentation/docs/zh/dev_guides/index_cn.html](https://www.paddlepaddle.org.cn/documentation/docs/zh/dev_guides/index_cn.html)
      - [生成对抗网络七日打卡营 - 飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/course/introduce/16651)
      - [手把手教你实现序列召回推荐模型 - 飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/course/introduce/27783)
      - [使用 PaddlePaddle 与 TensorRT 完成深度学习优化与部署 - 飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/course/introduce/27647)
      - [PaddlePaddle 程序设计实习 - 飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/course/introduce/29096)
   - PaddleOCR：[飞桨 PaddleOCR 系列直播课 - 飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/course/introduce/6758)
   - PaddleNLP：
      - [飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/education/group/info/32177)
      - [AI 快车道-PaddleNLP - 飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/course/introduce/792)
   - PaddleX：[飞桨低代码开发工具 PaddleX 系列课程 - 飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/course/introduce/32160)
   - PaddleScience：
      - [飞桨 AI for Science 流体力学公开课第一期 - 飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/course/introduce/27926)
      - [AI 前沿-飞桨博士会分享 - 飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/course/introduce/25717)
- 项目：
   - Paddle：
      - [Paddle MultiMarginLoss 算子开发 - 飞桨 AI Studio 星河社区](https://aistudio.baidu.com/projectdetail/5036315?channelType=0&channel=0)
      - [为神经网络编译器 CINN 增加 one_hot 算子 - 飞桨 AI Studio 星河社区](https://aistudio.baidu.com/projectdetail/5239548?channelType=0&channel=0)
- 比赛：
   - PaddleOCR：[飞桨学习赛：中文场景文字识别\_飞桨学习赛-飞桨 AI Studio 星河社区](https://aistudio.baidu.com/competition/detail/820/0/introduction)
   - PaddleSpeech：[龙源电力第二届新能源智能算法竞赛\_飞桨大赛-飞桨 AI Studio 星河社区](https://aistudio.baidu.com/competition/detail/1287/0/introduction)
   - PaddleNLP：
      - [2025 AIREA 国际人工智能教育大赛飞桨赛道——在线视频课程智能推荐\_飞桨大赛-飞桨 AI Studio 星河社区](https://aistudio.baidu.com/competition/detail/1271/0/introduction)
      - [基于文心 NLP 大模型的阅读理解可解释评测\_飞桨学习赛-飞桨 AI Studio 星河社区](https://aistudio.baidu.com/competition/detail/780/0/leaderboard)
   - PaddleX：[第二十届全国大学生智能汽车竞赛：百度智慧交通组创意赛\_飞桨大赛-飞桨 AI Studio 星河社区](https://aistudio.baidu.com/competition/detail/1297/0/submit-result)
   - PaddleScience：[飞桨学习赛：螺旋桨 RNA 结构预测竞赛\_飞桨学习赛-飞桨 AI Studio 星河社区](https://aistudio.baidu.com/competition/detail/801/0/introduction)

#### 2. 参与实战项目

- 学习星河社区项目
- 参加飞桨学习赛
- 参与飞桨黑客松
- 挑战 Fundable Projects

### 👨‍💻 无法参与启航计划？别担心！

#### 时间不足？

1. 参与快乐开源

- 挑选标有 [启航计划中的快乐开源](https://github.com/PaddlePaddle/Paddle/issues/71491) 的任务
- 利用碎片时间完成小型贡献

2. 远程自学

- 按照自己节奏学习星河社区课程
- 参与不受时间限制的学习赛

#### 技术基础薄弱？

1. 系统学习

- 从基础课程开始：[PaddlePaddle 基础理论教程](https://aistudio.baidu.com/projectdetail/8748375?channelType=0&channel=0)
- 学习特定领域入门课程，参考学习资源指南

2. 以非代码方式贡献

- 改进文档
- 编写教程
- 提供使用反馈

#### 不确定如何开始？

1. 寻求帮助

- 加入社区快乐开源交流群
- 参与社区问答
- 向导师请教

2. 观摩学习

- 观看社区直播课程
- 学习他人的 PR 和代码提交

### 🏆 参与社区的激励机制

#### 物质激励 🎁

- 快乐开源礼品：完成任务获得周边礼品
- 证书认证：课程证书、比赛证书
- 现金奖励：参与高级项目和比赛的奖金

#### 能力提升 📈

- 技术成长：接触前沿技术
- 社区认可：获得 PFCC 身份认证
- 职业发展：增加简历亮点

#### 社区荣誉 🏅

- SIG PMC 成员资格
- 技术峰会参与机会
- 社区领导者身份

### 📞 联系我们

- 进群联系：<img src="../images/Newcomers-Manual/QR.jpg" alt="入群二维码"/>
- GitHub: [PaddlePaddle/Paddle](https://github.com/PaddlePaddle/Paddle)
- 飞桨主页： [飞桨官网](https://www.paddlepaddle.org.cn)
- 星河社区： [AI Studio 星河社区](https://aistudio.baidu.com/community)
- 邮件联系：[ext_paddle_oss@baidu.com](mailto:ext_paddle_oss@baidu.com)

### 🌟 开源之旅，从这里起航！

无论你有多少时间，具备什么样的技术基础，飞桨社区都欢迎你的参与！记住，每一个伟大的贡献者都是从第一步开始的。今天，就迈出你的第一步吧！
飞桨社区期待与你一起，共同构建开源深度学习的美好未来！

### 📌 附录：实用资源 & 常见问题（FAQ）

- Q：我没时间长期参与，可以做什么？A：可以参与答疑、翻译、内容创作，每周 1-2 小时也能有贡献！
- Q：如何快速找到适合我的任务？A：根据你的技能和时间，从[启航计划中的快乐开源](https://github.com/PaddlePaddle/Paddle/issues/71491)开始。
- Q：贡献后如何被认可？A：提交 PR、完成任务后，我们会记录你的贡献，达到标准后可获得开源小礼品。

#### 本手册由飞桨社区团队编写，持续更新中

- PS：也可以一起参与本手册共建哦～
- 致谢文中引用的 AI Studio 项目贡献用户：魔术师、IvanAXu、yanggh、恭喜发财
