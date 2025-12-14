# PFCC 博客编码代理指南

本文件旨在帮助编码代理（Coding Agent）快速理解本仓库的结构、构建方式及开发规范。请仔细阅读以下内容，以确保你的修改能够顺利通过验证并符合项目标准。

## 项目概览

- **项目简介**: 本仓库是 PFCC (PaddlePaddle Framework Contributor Club) 社区的官方博客源码。
- **技术栈**:
   - **核心框架**: [VitePress](https://vitepress.dev/) (静态网站生成器)
   - **语言**: TypeScript、Markdown、Vue
   - **包管理器**: [pnpm](https://pnpm.io/)
   - **样式**: TailwindCSS
   - **部署**: Netlify (通过 GitHub Actions 触发)
- **主要功能**: 展示社区文章、活动总结、技术分享等。

## 构建与验证

在进行任何修改后，请务必按照以下步骤进行验证。

### 环境准备

- **Node.js**：需要 Node.js 18+。
- **pnpm**：必须使用 `pnpm` 进行包管理。如果未安装，请先运行 `corepack enable` 或 `npm install -g pnpm`。

### 常用命令序列

1. **安装依赖**
   - **命令**：`pnpm install`
   - **说明**：首次接手任务或 `package.json` 变更时必须运行。

2. **启动本地开发服务器**
   - **命令**：`pnpm dev`
   - **说明**：用于实时预览修改。默认地址为 `http://localhost:5173`。

3. **代码格式化与检查**
   - **命令（检查）**：`pnpm fmt:check`
   - **命令（修复）**：`pnpm fmt`
   - **说明**：本项目使用 `prettier` 和 `lint-md`。**提交代码前必须运行 `pnpm fmt`** 以自动修复格式问题。CI 会检查格式，如果不通过会导致构建失败。

4. **文件名检查**
   - **命令**：`pnpm lint:filename`
   - **说明**：检查文件名是否符合规范（通常是小写、连字符分隔）。新增文件时务必运行此检查。

5. **构建项目**
   - **命令**：`pnpm build`
   - **说明**：生成静态文件到 `src/.vitepress/dist`。此命令会先运行 `beforeBuild` 钩子。
   - **验证**：提交前请运行此命令确保构建成功，无报错。

6. **图片压缩**
   - **命令**：`pnpm img:compress`
   - **说明**：如果添加了新的图片资源，请运行此命令进行压缩。

### 推荐的验证流程

在提交 Pull Request 之前，请按顺序运行以下命令：

```bash
pnpm install       # 确保依赖最新
pnpm fmt           # 自动修复格式
pnpm lint:filename # 检查文件名规范
pnpm build         # 确保能成功构建
```

## 项目结构

### 核心目录与文件

- **`src/`**: 源码目录，所有的内容都在这里。
   - **`posts/`**: 博客文章存放处。所有新的博客文章 (`.md`) 应放在这里。
   - **`pages/`**: 静态页面（如关于页等）。
   - **`images/`**: 图片资源目录。文章中的图片应按文章主题建立子文件夹存放于此。
   - **`.vitepress/`**: VitePress 配置与主题。
      - **`config.ts`**: 网站主配置文件（导航栏、侧边栏、插件配置等）。
      - **`theme/`**: 自定义主题样式和组件。
   - **`index.md`**: 首页内容。
- **`scripts/`**: 维护脚本。
   - `check-filename.mts`: 文件名检查脚本。
   - `compress-image.mts`: 图片压缩脚本。
- **`public/`**: 静态资源（如 `favicon`, `icons` 等），构建时会直接复制到根目录。
- **`.github/workflows/`**: CI/CD 配置。
   - `lint-and-fmt.yml`: 检查代码格式。
   - `vitepress-deploy.yml`: 构建并部署。

### 关键配置文件

- **`package.json`**: 定义了脚本命令和依赖。
- **`tsconfig.json`**: TypeScript 配置。
- **`.prettierrc` / `.prettierignore`**: 代码格式化配置。

## 开发注意事项

1. **新建文章**:
   - 在 `src/posts/` 下创建 `.md` 文件。
   - 文件名应使用英文、小写、连字符（kebab-case）。
   - 必须包含 Frontmatter（元数据），例如：
      ```yaml
      ---
      title: 文章标题
      date: 2023-10-27
      author: 作者名
      ---
      ```
2. **图片引用**:
   - 将图片放在 `src/images/<文章名>/` 目录下。
   - 在 Markdown 中使用相对路径引用，例如 `../../images/<文章名>/image.png`。
3. **依赖管理**:
   - 不要使用 `npm` 或 `yarn`，**必须使用 `pnpm`**。
   - 如果遇到 `lockfile` 相关错误，尝试运行 `pnpm install --no-frozen-lockfile` 更新锁文件。

请严格遵循以上指南进行开发，以减少不必要的错误和返工。

## 代码规范

由于本项目主要内容为 Markdown 文件，代码规范主要体现在以下几个方面：

- 中英文之间（语法层面）需要使用空格分隔，比如：
   - `飞桨PaddlePaddle` 应写为 `飞桨 PaddlePaddle`。
   - `[飞桨](https://www.paddlepaddle.org.cn)PaddlePaddle` 应写为 `[飞桨](https://www.paddlepaddle.org.cn) PaddlePaddle`。
- 中文文档中尽量避免使用英文标点符号，如逗号、句号、引号等，均应使用中文标点符号，英文文档中则相反，比如：
   - 英文文档中 `PaddlePaddle，is a deep learning framework。` 应写为 `PaddlePaddle, is a deep learning framework.`。
   - 中文文档中 `PaddlePaddle, 是一个深度学习框架.` 应写为 `PaddlePaddle，是一个深度学习框架。`。
- 在 Markdown 中应当适当为变量名、代码片段等添加反引号（`` ` ``）标记以示区分，比如：
   - `使用 paddle.to_tensor 创建张量` 应写为 ``使用 `paddle.to_tensor` 创建张量``。
   - `变量 x 的值为 10` 应写为 ``变量 `x` 的值为 10``。
- 所有链接应该严格有效，避免出现死链，比如：
   - 使用相对路径或绝对路径链接到有效页面，如 `[飞桨官网](https://www.paddlepaddle.org.cn)`。

## 资源规范

- 博客不应添加过大的文件，如视频文件等，建议使用外链方式引用，如 YouTube、Bilibili 等。
- 博客中图片建议压缩至合理大小，避免过大影响加载速度。可以使用 `pnpm img:compress` 命令进行图片压缩。

## Review 指南

在审查代码或文档更改时，请同时遵守以下内容：

### PR 标题检查

- PR 标题应尽可能使用 `[<type>] <description>` 的格式，其中 `<type>` 包括但不限于 `Blog`、`CI`、`Theme`、`CodeStyle` 等，便于快速识别 PR 类型。
- PR 标题应简洁明了地描述所做更改，避免使用模糊或通用的标题，如 `Update docs` 或 `Fix typos`，可以考虑改为 ``[Typos] Fix typos (`liunx` -> `linux`) in installation guide``。 <!-- typos: disable-line -->
- 如果 PR 涉及多个方面的更改（比如多篇不同的博客），建议拆分为多个 PR，每个 PR 专注于一个主题，以便于审查和合并。
- 具体 PR 具体分析，请为每个 PR 提供参考的 PR 标题，标题尽可能保持纯英文。

### PR 描述检查

- 如果 PR 中包含描述中未提及的更改，审查时可根据上下文进行补充说明，确保其他审查者了解所有更改内容，如果上下文不明确，请在评论中请求作者补充说明。

### 回复方式

- 审查时请尽量使用中文回复，确保所有审查者都能理解评论内容，但在涉及具体代码片段或技术术语时，可以适当使用英文以确保准确表达。

### 风格检查

- 请重点检查以下几个方面：
   - **文件名规范**：确保所有新增或修改的文件名符合小写、连字符分隔（kebab-case）的规范。
   - **代码格式**：确保所有代码和文档符合项目的代码格式规范，特别是中英文标点、变量名标记等。
   - **链接有效性**：检查所有链接是否有效，避免出现死链。
   - **图片资源**：确保新增的图片资源经过压缩，且存放在正确的目录下。
- 建议运行 以下命令进行自动检查：
   - `pnpm fmt:check`：检查代码格式。
   - `pnpm lint:filename`：检查文件名规范。

   上述命令在 CI [lint-and-format](.github/workflows/lint-and-fmt.yml) 中也会运行，如果流水线失败，请提示作者根据日志修复相关问题。
