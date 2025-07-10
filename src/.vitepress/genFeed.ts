import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'

const baseUrl = `https://pfcc.blog`

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: '飞桨开源社区博客',
    description: 'Wonderful stories from PaddlePaddle contributors',
    id: baseUrl,
    link: baseUrl,
    language: 'zh-CN',
    image: 'https://pfcc.blog/logo.png',
    favicon: `${baseUrl}/favicon.ico`,
    copyright: 'Copyright (c) 2023-present, PaddlePaddle contributors',
  })

  const posts = await createContentLoader('posts/*.md', {
    excerpt: true,
    render: true,
  }).load()

  posts.sort(
    (a, b) => +new Date(b.frontmatter.date as string) - +new Date(a.frontmatter.date as string)
  )

  const formatAuthor = (author: {
    name: string
    github?: string
  }): { name: string; link?: string } => {
    return {
      name: author.name,
      link: author.github ? `https://github.com/${author.github}` : undefined,
    }
  }

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt,
      content: html?.replaceAll('&ZeroWidthSpace;', ''),
      author: [
        formatAuthor(frontmatter.author),
        ...(frontmatter.co_authors?.map(formatAuthor) ?? []),
      ],
      date: new Date(frontmatter.date as string),
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
}
