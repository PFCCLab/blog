import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

export const siteConfig = {
  title: '飞桨开源社区博客',
  description: 'Wonderful stories from PaddlePaddle contributors',
  gtagId: 'G-7XR50K1YRK',
  postsPerPage: 2,
}

export default withPwa(
  defineConfig({
    title: siteConfig.title,
    description: siteConfig.description,
    lang: 'zh-CN',
    cleanUrls: true,
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
        { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${siteConfig.gtagId}` },
      ],
      [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${siteConfig.gtagId}');`,
      ],
    ],
    pwa: {
      outDir: '.vitepress/dist',
      registerType: 'autoUpdate',
      manifest: {
        id: '/',
        name: siteConfig.title,
        short_name: siteConfig.title,
        description: siteConfig.description,
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
    async transformPageData(pageData, { siteConfig: _ }) {
      return {
        postsPerPage: siteConfig.postsPerPage,
      }
    },
  })
)
