import { type SiteConfig } from 'vitepress'
import { type PostsData } from './posts.js'
import createPostsLoader from './posts.js'

declare const data: PostsData

export { data }

function getPostsPerPageAtRuntime(): number {
  const config: SiteConfig = (globalThis as any).VITEPRESS_CONFIG
  return config.userConfig.themeConfig?.postsPerPage ?? Number.MAX_SAFE_INTEGER
}

export default createPostsLoader(getPostsPerPageAtRuntime)
