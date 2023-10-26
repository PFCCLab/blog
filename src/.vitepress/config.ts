import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

const metaInfo = {
  title: 'Hi, PFCC!',
  description: 'PFCC 社区博客～',
}

export default withPwa(
  defineConfig({
    title: metaInfo.title,
    description: metaInfo.description,
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
    ],
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
  })
)
