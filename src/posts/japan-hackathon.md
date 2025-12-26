---
title: 我们在海外的第一场黑客松，开发者都做了什么？
date: 2025-12-24
author:
   name: Erin
   github: yiranr
category: community-activity
---

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

2025 年 11 月 30 日，我们带着 ERNIE 和 PaddleOCR 走进东京本土开发者社区，落地了一场 9 小时的线下黑客松，让我们看到了海外本地化场景与模型结合的无限潜力。

<!-- more -->

以下是来自活动现场的一手实录。

<video src="https://blog-video.bj.bcebos.com/tmp-pm/%E4%B8%9C%E4%BA%AC%E6%B4%BB%E5%8A%A8%E8%8A%B1%E7%B5%AE.mp4" controls preload="metadata" style="display:block;margin:0 auto;width:60%;height:auto;"></video>

## 01. 多元背景开发者齐聚，围绕真实问题展开技术冲刺

本次活动吸引了相当多元的开发者，他们中既有寻找技术落地商业化场景的创业者，有擅长边缘计算的硬核极客，也有为了 Networking 跨界尝鲜的 AI 初学者。他们带着具体的场景诉求而来，期待利用大模型与 OCR 能力解决实际问题：

> “我目前在一家公司从事自动评分服务，之前尝试过使用大型视觉模型处理 OCR 任务，但成本一直很高。这次特别想试试能否通过轻量化的 PaddleOCR 微调，解决竖排国语试卷和连续多行识别的难题。”

> “我父亲从事居家医疗，十几年来这个行业里手动管理治疗日程的方式完全没变，很想用 AI 帮他带来改变。”

在 Tech Session 环节，文心飞桨开发者技术专家、PFCC 成员秦浩然（@[unseenme](https://github.com/unseenme)），地瓜机器人应用开发工程师张晓烨和百度产品运营经理张子彧组成的讲师团，围绕模型特性、微调方式、硬件部署几个核心主题展开深度的实操课程，指导开发者们基于形形色色的真实诉求，围绕文心大模型、PaddleOCR 和地瓜机器人 RDK X5 开发板，在半天时间里跑通一个解决实际问题的 Demo。

## 02. 9 小时极限开发的高光时刻

![图片1](../images/japan-hackathon/image1.jpg)
![图片2](../images/japan-hackathon/image2.jpg)
![图片3](../images/japan-hackathon/image3.png)
![图片4](../images/japan-hackathon/image4.png)

经过几小时的不间断开发，7 支队伍将模型能力嵌入到实实在在的工作流中，其中两个项目在全场投票中获得最受欢迎奖。

### 效率至上：Receipt Clip 报税助手

此项目旨在解决该国自由职业者非常头疼的报税问题（如票据整理与税务申报流程等）。虽然市面上有众多 OCR 软件，但必须逐个拍照上传，效率极低。

**Receipt Clip 报税助手**支持通过视频流一次性采集多张票据并完成抽帧筛选，由 PaddleOCR 识别后进行聚类去重提取，再经由文心大模型 ERNIE 进行结构化提取，最终输出 JSON/CSV 标准化格式数据，可直接对接报销/报税等财务流程，实现了“**一次视频扫描即可批量生成报税文件**”。

演示中，开发者拿着手机对多个收据录制了一段视频并上传，屏幕右侧瞬间生成了工整的报表。

<img src="https://blog-video.bj.bcebos.com/tmp-pm/demo1.gif" alt="活动demo1" style="display:block;margin:0 auto;width:82%;height:auto;">

<div style="display:flex;gap:16px;align-items:flex-start;justify-content:center;">
  <img src="../images/japan-hackathon/image5.png" alt="图片5" style="width:40%;height:auto;">
  <img src="../images/japan-hackathon/image6.png" alt="图片6" style="width:40%;height:auto;">
</div>

### 最具温情：Dr.Paddle 家庭用药管家

当地医疗机构每年发行超过 8 亿张处方笺，在居家医疗场景中，药单管理主要依赖人工手动输入，繁琐且易遗漏。

Dr.Paddle 通过精准识别处方信息、服用指示与禁忌，利用 PaddleOCR 和 ERNIE 完成关键信息识别提取和日程映射，并调用 Google Calendar API 自动创建个性化用药提醒日程，帮助用户尤其是长者更安全、便捷地管理服药计划。

演示中，一张药单被扫描，几秒钟后，Google 日历上自动弹出了对应时间的提醒事项。

<img src="https://blog-video.bj.bcebos.com/tmp-pm/demo2.gif" alt="活动demo2" style="display:block;margin:0 auto;width:82%;height:auto;">

<div style="display:flex;gap:16px;align-items:flex-start;justify-content:center;">
  <img src="../images/japan-hackathon/image7.png" alt="图片7" style="width:40%;height:auto;">
  <img src="../images/japan-hackathon/image8.png" alt="图片8" style="width:40%;height:auto;">
</div>

## 03. 更多创意，看见本土 AI 场景的无限潜力

除了上述两个项目，现场开发者还挖掘了更多潜在应用场景，以下是简要项目介绍：

### 数字白板 · Whiteboard DX

通过地瓜机器人 RDK X5 开发板和摄像头实时拍摄白板手写内容，结合 PaddleOCR 快速提取信息并同步云端，实现团队远程实时协作与信息无缝共享。

<div style="display:flex;gap:16px;align-items:flex-start;justify-content:center;">
  <img src="../images/japan-hackathon/image9.png" alt="图片9" style="width:40%;height:auto;">
  <img src="../images/japan-hackathon/image10.png" alt="图片10" style="width:40%;height:auto;">
</div>

### 教师的批改助手 · AI Grading System

借助 PaddleOCR 精准识别手写答案与复杂公式，涵盖竖排日语、数学/化学公式混合识别，实现试卷全自动批改，并使用文心大模型 ERNIE 生成智能评分与个性化学习反馈，让教师从重复性批改工作中解放。

<div style="display:flex;gap:16px;align-items:flex-start;justify-content:center;">
  <img src="../images/japan-hackathon/image11.png" alt="图片11" style="width:40%;height:auto;">
  <img src="../images/japan-hackathon/image12.png" alt="图片12" style="width:40%;height:auto;">
</div>

### 居酒屋文化桥梁 · Tegaki-Translator

基于 PaddleOCR 精准提取手写菜单内容，结合文心大模型实现多语言翻译、菜品解读与点餐建议，更可与你畅聊“这道菜的来历”，成为一位深谙美食与文化的随身向导。

<div style="display:flex;gap:16px;align-items:flex-start;justify-content:center;">
  <img src="../images/japan-hackathon/image13.png" alt="图片13" style="width:40%;height:auto;">
  <img src="../images/japan-hackathon/image14.png" alt="图片14" style="width:40%;height:auto;">
</div>

### 处方安全守护者 · Medecine

通过 PaddleOCR 实现手写处方实时文字转化，并自动联网核验药品信息，为用药安全嵌入“防错机制”，精准解决手写处方难辨识与药品真伪难验的痛点。

<div style="display:flex;gap:16px;align-items:flex-start;justify-content:center;">
  <img src="../images/japan-hackathon/image15.png" alt="图片15" style="width:40%;height:auto;">
  <img src="../images/japan-hackathon/image16.png" alt="图片16" style="width:40%;height:auto;">
</div>

### 通勤族的舒适度先知 · Easy Living

基于地瓜机器人 RDK X5 开发板与 USB 摄像头实时采集列车车厢视频，通过飞桨人体检测算法动态分析乘客密度，并实现拥挤度的可视化呈现，为通勤者提供实时决策支持。

<div style="display:flex;gap:16px;align-items:flex-start;justify-content:center;">
  <img src="../images/japan-hackathon/image17.png" alt="图片17" style="width:40%;height:auto;">
  <img src="../images/japan-hackathon/image18.png" alt="图片18" style="width:40%;height:auto;">
</div>

从手写菜单到医疗处方，从报税痛点到教师减负，模型能力被日本开发者们丝滑地嵌入到了他们独特的社会文化场景中。

### 04. 技术的开放，跨越语言和国界——让 AI 成为每个人的生产力工具

这场活动是 ERNIE AI Developer Challenge 全球挑战赛的线下系列活动之一。自赛事启动以来，已吸引全球近千名开发者报名参赛，基于**文心与飞桨**的最新模型、工具及生态资源，构建兼具前瞻视野与实用价值的 AI 项目，赛事任务覆盖**模型微调、多模态应用、多智能体系统与机器人开发**等前沿领域。当开发和协作可以跨越语言和国界、当每个有价值的创意都能在真实需求中打磨成长，AI 才能真正成为普惠全球的生产力革命。

![图片19](../images/japan-hackathon/image19.png)

> **赛事持续进行中，欢迎全球开发者参与共建**。点击查看[赛事主页](https://baiduernieai.devpost.com)。
