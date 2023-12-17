import fs from 'node:fs/promises'
import { createPagesDynamicRoutes } from '../loaders/posts.js'
import { themeConfig } from '../../config.js'

async function main() {
  const postsPerPage = themeConfig.postsPerPage ?? Number.MAX_SAFE_INTEGER
  const posts = await fs.readdir('src/posts')
  const numPages = Math.ceil(posts.length / postsPerPage)
  await createPagesDynamicRoutes(numPages)
}

await main()
