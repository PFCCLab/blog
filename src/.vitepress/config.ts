import { defineConfigWithTheme } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import tailwindcss from '@tailwindcss/vite'
import { genFeed } from './genFeed.js'
import mathjax3 from 'markdown-it-mathjax3'

interface ThemeConfig {
  postsPerPage?: number
}

export const themeConfig: ThemeConfig = {
  postsPerPage: 10,
}

export const metaInfo = {
  title: '飞桨开源社区博客',
  description: 'Wonderful stories from PaddlePaddle contributors',
  gtagId: 'G-7XR50K1YRK',
}

export default withPwa(
  defineConfigWithTheme<ThemeConfig>({
    title: metaInfo.title,
    description: metaInfo.description,
    lang: 'zh-CN',
    cleanUrls: true,
    markdown: {
      math: true,
      theme: {
        light: 'github-light',
        dark: 'github-dark',
      },
      codeTransformers: [
        {
          postprocess(code) {
            return code
          },
        },
      ],
      config: (md) => {
        md.use(mathjax3)
      },
    },
    head: [
      [
        'link',
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
      // PWA
      [
        'meta',
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1',
        },
      ],
      // TODO(SigureMo): Change theme color
      [
        'meta',
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ],
      [
        'link',
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/icons/apple-touch-icon-180x180.png',
        },
      ],
      [
        'link',
        {
          rel: 'mask-icon',
          href: '/icons/mask-icon.svg',
          color: '#ffffff',
        },
      ],
      // Google Analytics
      [
        'script',
        { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${metaInfo.gtagId}` },
      ],
      [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${metaInfo.gtagId}');`,
      ],
    ],
    srcExclude: ['eggs/**/*.md'],
    vite: {
      plugins: [tailwindcss()],
    },
    pwa: {
      outDir: '.vitepress/dist',
      registerType: 'autoUpdate',
      manifest: {
        id: '/',
        name: metaInfo.title,
        short_name: metaInfo.title,
        description: metaInfo.description,
        theme_color: '#ffffff',
        start_url: '/',
        lang: 'zh-CN',
        icons: [
          {
            src: 'icons/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    },
    themeConfig: themeConfig,
    buildEnd: genFeed,
  })
)
