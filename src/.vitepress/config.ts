import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hi, PFCC!',
  description: 'PFCC 社区博客～',
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
  ],
})
