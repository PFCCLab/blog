import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hi, PFCCLab!',
  description: 'PFCC 社区博客～',
  cleanUrls: true,
  head: [
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://vuejs.org/images/logo.png',
      },
    ],
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
