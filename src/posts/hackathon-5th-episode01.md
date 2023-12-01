---
title: PaddlePaddle Hackathon Episode 01 | 第五期活动上线 4 周，直播圆满收官，三大赛道进展顺利
date: 2023-11-03
author:
   name: 梦师傅
   github: Ligoml
co_authors:
   - name: 花花
     github: Tulip-hua
---

向大家快速介绍飞桨黑客松第五期活动上线以来的进展（9.25-11.3）

<!-- more -->

为了吸引社区开发者了解与参与飞桨深度学习开源项目与文心大模型开发实践，为飞桨框架、套件、大模型、合作伙伴等生态进行开源贡献，进一步扩大飞桨开源生态与文心大模型应用生态，我们组织了 **PaddlePaddle Hackathon 飞桨黑客松第五期活动**。活动开展 4 周的进展速览如下：

-  **开源贡献个人挑战赛**：发布 111 个开源贡献任务，包括框架、科学计算、套件和合作伙伴方向，与 OpenVINO™、海光、Arm、高通、Zilliz、开放麒麟社区、9#AISoft 等合作项目共同出品，**109 个任务完成认领，60 个任务提交作品，13 个任务已经完成**，感谢各位开发者的积极参与，感谢各位导师的及时 review。
-  **大模型应用与创意赛**：作为飞桨星河社区五周年预热活动，目标挖掘优质文心一言应用，共发布趣味创意与生产力工具 2 个方向的任务，**已有 12 名开发者产出基于 EB SDK 的应用 18 个，均已部署至飞桨星河社区**。
-  **飞桨护航计划集训营**：发布 18 个框架与套件开发项目，1 对 1 带教形式，已完成 18 名学员招募，并提交第一期周报，**是飞桨开源社区首次 Code Camp 形式的开源活动，由开发者担任助教**。

### 赛道一：开源贡献个人挑战赛

#### 进度看板

|     任务方向      | 任务数量 | 提交作品 / 任务认领 | 提交率 | 完成 | 完成率 |
| :---------------: | :------: | :-----------------: | :----: | :--: | :----: |
|      热身赛       |    11    |       7 / 11        | 63.64% |  2   | 18.18% |
| 框架 API 开发任务 |    31    |       22 / 31       | 70.97% |  1   | 3.23%  |
| 框架其他开发任务  |    16    |       14 / 16       | 87.5%  |  6   | 37.5%  |
| 科学计算模型复现  |    11    |       7 / 11        | 63.64% |  1   | 9.09%  |
|   套件开发任务    |    24    |       5 / 23        | 20.83% |  2   | 8.33%  |
|   合作伙伴任务    |    18    |       5 / 17        | 27.78% |  1   | 5.56%  |

#### 赛道亮点

-  社区开发者参与热情高，活动发布 1 周认领率接近 100%，提交率 50%+；
-  [Tomoko-hjf](https://github.com/Tomoko-hjf) 开发黑客松小助手，自动更新任务榜单与看板，提升社区活动自动化水平；
-  直播活动圆满收官，已形成完整的飞桨开源贡献视频资料，详见 [issues#58125](https://github.com/PaddlePaddle/Paddle/issues/58125)；
-  本次活动英特尔作为赞助方，并与 OpenVINO™、海光、Arm、高通、Zilliz、开放麒麟社区、9#AISoft 等合作项目共同出品。

#### 参与提示

-  在上面的看板中能看出来，套件开发任务和合作伙伴开发任务，提交率相对较低，欢迎社区的开发者选择这些任务来挑战~~

更多详情请查看 issue：https://github.com/PaddlePaddle/Paddle/issues/57262

### 赛道二： 大模型应用与创意赛

我们收到了 127 人报名，提交了 18 个应用，加精项目 10 个。

#### 赛道亮点

-  全新赛道，作为飞桨星河社区五周年预热活动，推广重点产品星河社区 ERNIE Bot SDK；
-  完成情况符合预期，上线 4 周即提交 18 个 EB SDK 应用，作品种类多样，涵盖游戏娱乐、办公助手、知识科普等多领域，符合赛道初衷；
-  社群气氛活跃，新老选手积极交流，且建立了沟通产研的 EB SDK 反馈文档。

#### 参与提示

-  欢迎大家继续发挥创意，提交更多有趣的应用。

更多详情请查看 issue：https://github.com/PaddlePaddle/Paddle/issues/57585

### 赛道三：飞桨护航计划集训营

18 个任务已全部完成招募，名单公示如下：

| **项目编号** | **开源贡献 repo** | **项目标题&介绍（点击链接跳转）**                                                                                                                                                                                                                                                                                                                                                                                                                                   | **导师**         | **学员**         |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------- |
| 1            | Paddle            | [算子规范和 ProgramTranslator 功能优化](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E4%B8%80%E7%AE%97%E5%AD%90%E8%A7%84%E8%8C%83%E5%92%8C-programtranslator-%E5%8A%9F%E8%83%BD%E4%BC%98%E5%8C%96)                                     | @kangguangli     | @xingmingyyj     |
| 2            | Paddle            | [新 IR Pass 建设和依赖的核心组件完善](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E4%BA%8C%E6%96%B0-ir-pass-%E5%BB%BA%E8%AE%BE%E5%92%8C%E4%BE%9D%E8%B5%96%E7%9A%84%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6%E5%AE%8C%E5%96%84)             | @zyfncg          | @zhangyuqin1998  |
| 3            | Paddle            | [新 IR API + 自动微分推全和核心组件完善](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E4%B8%89%E6%96%B0-ir-api--%E8%87%AA%E5%8A%A8%E5%BE%AE%E5%88%86%E6%8E%A8%E5%85%A8%E5%92%8C%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6%E5%AE%8C%E5%96%84) | @Aurelius84      | @MarioLulab      |
| 4            | Paddle            | [组合机制前反向架构统一](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E5%9B%9B%E7%BB%84%E5%90%88%E6%9C%BA%E5%88%B6%E5%89%8D%E5%8F%8D%E5%90%91%E6%9E%B6%E6%9E%84%E7%BB%9F%E4%B8%80)                                                     | @cyber-pioneer   | @kevincheng2     |
| 5            | Paddle            | [算子支持复数计算专项](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E4%BA%94%E7%AE%97%E5%AD%90%E6%94%AF%E6%8C%81%E5%A4%8D%E6%95%B0%E8%AE%A1%E7%AE%97%E4%B8%93%E9%A1%B9)                                                                | @GGBond8488      | @zyt1024         |
| 6            | Paddle            | [量化算子集成](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E5%85%AD%E9%87%8F%E5%8C%96%E7%AE%97%E5%AD%90%E9%9B%86%E6%88%90)                                                                                                            | @RichardWooSJTU  | @Wanglongzhi2001 |
| 7            | Paddle            | [开源模型加速复现](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E4%B8%83%E5%BC%80%E6%BA%90%E6%A8%A1%E5%9E%8B%E5%8A%A0%E9%80%9F%E5%A4%8D%E7%8E%B0)                                                                                      | @xiaoxiaohehe001 | @DanGuge         |
| 8            | Paddle            | [CPU 融合算子 / GPU 算子融合 pass](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E5%85%ABcpu%E8%9E%8D%E5%90%88%E7%AE%97%E5%AD%90--gpu%E7%AE%97%E5%AD%90%E8%9E%8D%E5%90%88pass)                                                          | @yuanlehome      | @Xinyu302        |
| 9            | Paddle            | [动态图半自动并行架构研发](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E4%B9%9D%E5%8A%A8%E6%80%81%E5%9B%BE%E5%8D%8A%E8%87%AA%E5%8A%A8%E5%B9%B6%E8%A1%8C%E6%9E%B6%E6%9E%84%E7%A0%94%E5%8F%91)                                          | @LiYuRio         | @HermitSun       |
| 10           | Paddle            | [静态图半自动并行执行架构升级](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E5%8D%81%E9%9D%99%E6%80%81%E5%9B%BE%E5%8D%8A%E8%87%AA%E5%8A%A8%E5%B9%B6%E8%A1%8C%E6%89%A7%E8%A1%8C%E6%9E%B6%E6%9E%84%E5%8D%87%E7%BA%A7)                    | @From00          | @AndSonder       |
| 11           | Paddle            | [分布式能力矩阵建设](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E5%8D%81%E4%B8%80%E5%88%86%E5%B8%83%E5%BC%8F%E8%83%BD%E5%8A%9B%E7%9F%A9%E9%98%B5%E5%BB%BA%E8%AE%BE)                                                                  | @zhangting2020   | @SecretXV        |
| 12           | Paddle            | [全自动并行架构升级](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E5%8D%81%E4%BA%8C%E5%85%A8%E8%87%AA%E5%8A%A8%E5%B9%B6%E8%A1%8C%E6%9E%B6%E6%9E%84%E5%8D%87%E7%BA%A7)                                                                  | @Caozhou1995     | @Corle-hyz       |
| 13           | PaddleScience     | [科学计算领域拓展专项](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E5%8D%81%E4%B8%89%E7%A7%91%E5%AD%A6%E8%AE%A1%E7%AE%97%E9%A2%86%E5%9F%9F%E6%8B%93%E5%B1%95%E4%B8%93%E9%A1%B9)                                                       | @HydrogenSulfate | @xusuyong        |
| 14           | PaddleClas        | [Clas 套件全流程建设](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E5%8D%81%E5%9B%9Bclas%E5%A5%97%E4%BB%B6%E5%85%A8%E6%B5%81%E7%A8%8B%E5%BB%BA%E8%AE%BE)                                                                               | @cuicheng01      | @psky1111        |
| 15           | Paddle3D          | [3D 方向模型全流程建设](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E5%8D%81%E4%BA%943d%E6%96%B9%E5%90%91%E6%A8%A1%E5%9E%8B%E5%85%A8%E6%B5%81%E7%A8%8B%E5%BB%BA%E8%AE%BE)                                                             | @juncaipeng      | @kongdebug       |
| 16           | PaddleOCR         | [Nougat 复现及优化](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E5%8D%81%E5%85%ADnougat%E5%A4%8D%E7%8E%B0%E5%8F%8A%E4%BC%98%E5%8C%96)                                                                                                 | @tink2123        | @Frida-a         |
| 17           | PaddleNLP         | [NLP 大模型复现](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E5%8D%81%E4%B8%83nlp%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%A4%8D%E7%8E%B0)                                                                                                       | @w5688414        | @rampage0303     |
| 18           | PaddleSlim        | [套件压缩能力建设](https://github.com/PaddlePaddle/community/blob/master/hackathon/hackathon_5th/%E3%80%90PaddlePaddle%20Hackathon%205th%E3%80%91%E9%A3%9E%E6%A1%A8%E6%8A%A4%E8%88%AA%E8%AE%A1%E5%88%92%E9%9B%86%E8%AE%AD%E8%90%A5%E9%A1%B9%E7%9B%AE%E5%90%88%E9%9B%86.md#%E9%A1%B9%E7%9B%AE%E5%8D%81%E5%85%AB%E5%A5%97%E4%BB%B6%E5%8E%8B%E7%BC%A9%E8%83%BD%E5%8A%9B%E5%BB%BA%E8%AE%BE)                                                                             | @shiyutang       | @ranchongzhi     |

#### 集训营亮点

-  飞桨社区首次以 Code Camp 的形式招募远程开发者，吸引到很多新人，2 周时间迅速完成学员招募与开营仪式；
-  学员 [MarioLulab](https://github.com/MarioLulab) 兼任助教，搭建开源项目 [PFCCLab/Camp](https://github.com/PFCCLab/Camp) 管理开发进度与周报提交，已完成第一期，周报详见 [[WeeklyReports] 2023.10.10~2023.10.24](https://github.com/PFCCLab/Camp/issues/34)；
-  搭建技术分享平台：每周一次源码解读，顺利完成第一期，分享人 [DrRyanHuang](https://github.com/DrRyanHuang)。

#### 参与提示

-  欢迎大家到代码仓库: [Camp](https://github.com/PFCCLab/Camp) 里围观集训营的同学们的工作。

更多详情请查看 issue：https://github.com/PaddlePaddle/Paddle/issues/57264

## 活动运营与推广

### 联合宣传

与开源中国、启智、OpenVINO、思否、开源社、示说、InfoQ、白玉兰开源、开源之夏等合作伙伴以及海光、Arm、高通、Zilliz、开放麒麟社区、9#AISoft 等合作项目联合宣传。

### 直播

多平台同步直播，10 场直播共计约 1.4 万人次观看，直播信息与学习资料已发布在开源社区，并整理成 AI Studio 专题课程： [深度学习开发指南——黑客松 5.0 - 飞桨 AI Studio 星河社区-人工智能学习与实训社区](https://aistudio.baidu.com/course/introduce/30009)

| **日期**      | **主题**                                | **观看总人次** |
| ------------- | --------------------------------------- | -------------- |
| 10.16（周一） | 第五期飞桨黑客松来啦！                  | 1956           |
| 10.17（周二） | 新 IR Python API 适配升级               | 967            |
| 10.18（周三） | 模型复现和贡献指南                      | 975            |
| 10.19（周四） | OpenVINO 开源生态建设与贡献任务解析     | 884            |
| 10.20（周五） | 动转静全套件适配任务                    | 989            |
| 10.23（周一） | Arm 虚拟硬件助力边缘人工智能软件开发    | 1887           |
| 10.27（周五） | 跨平台推理框架 InfiniTensor             | 2049           |
| 10.30（周一） | 拓展 LLM 边界：使用向量数据库构建知识库 | 2193           |
| 10.31（周二） | Paddle 框架在昇腾平台上的推理优化分享   | 1097           |
| 11.1（周三）  | 飞桨硬件生态伙伴任务介绍                | 420            |
