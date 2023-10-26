# 参与贡献

## 如何撰写博客

PFCC blog 采用了 [VitePress](https://vitepress.dev/) 作为静态网站生成工具，以提供最佳的博客撰写体验，你可以基本上实时地从网页上看到自己的的修改效果。

为了获得最佳的开发体验，希望你能跟随我进行一些简单的设置。

### 编辑器集成<sup>optional</sup>

我们推荐你使用 [VS Code](https://code.visualstudio.com/) 作为编辑器，它可以提供本博客最佳的开发体验。

之后在项目根目录创建 `.vscode/settings.json`，并添加以下配置项：

```jsonc
{
   "[html][markdown][javascript][typescript][vue][jsonc][json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
   },
   "editor.formatOnSave": true
}
```

并安装 [Prettier 扩展](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)以实现自动代码格式化。

### 本地开发

本 blog 基于 Node.js 生态，因此需要你事先安装 [Node.js](https://nodejs.org/) 18+，并安装 [pnpm](https://pnpm.io/) 作为包管理器。

如果你使用的是 macOS + Homebrew，可以使用如下命令安装：

```bash
brew install node corepack # 安装 Node.js 和 corepack
corepack enable            # 启用 corepack，corepack 会自动根据 package.json 中的 packageManager 字段来安装合适版本的 pnpm
```

之后只需要运行如下命令安装所有依赖项：

```bash
pnpm i
```

安装完成后，运行如下命令启动本地开发服务器：

```bash
pnpm dev
```

此时可按照提示打开相应的网址（默认为 [http://localhost:5173/](http://localhost:5173/)）查看预览效果啦～

## 博客开发规范

### 博客文件

博客文件统一放置在 [`src/posts`](./src/posts) 目录下，每篇博客对应一个 `.md` 文件，文件名即为博客的 URL。

文件名统一使用 kebab-case，如 `hello-world.md`。

### 图片文件

图片文件统一放置在 [`src/images`](./src/images) 目录下，每篇博客对应一个子目录，子目录名即为博客的文件名，比如 `hello-world.md` 对应的图片目录为 `src/images/hello-world`。

## 博客主题开发指南

TODO...
