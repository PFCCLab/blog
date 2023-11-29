import { readdirSync } from 'node:fs'
import { siteConfig } from '../.vitepress/config.js'

const postDir = 'src/posts'
const postsPerPage = siteConfig.postsPerPage ?? Number.MAX_SAFE_INTEGER
const numPages = Math.ceil(readdirSync(postDir).length / postsPerPage)

export default {
  paths() {
    return Array.from({ length: numPages }).map((_, i) => ({
      params: { page: String(i + 1) },
    }))
  },
}
