<script setup lang="ts">
import { useData } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import NotFound from './NotFound.vue'
import About from './About.vue'
import { useCopyCode } from './composables/useCopyCode'

const { page, frontmatter, site } = useData()
useCopyCode()

// 添加重置分类的函数，确保回到首页时不带all参数
function resetCategory() {
  window.location.href = window.location.origin
}
</script>

<template>
  <div class="antialiased dark:bg-neutral-900 min-h-screen">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <!-- 修改首页链接，添加 @click 事件 处理器 -->
        <a class="text-xl" href="/" @click="resetCategory" :aria-label="site.title">
          <!-- TODO(SigureMo): Update this logo -->
          <img class="inline-block mr-2" style="width: 120px" alt="logo" src="/logo.png" />
          <span v-if="!frontmatter.index" class="hidden md:inline dark:text-white">{{
            site.title
          }}</span>
        </a>
        <div class="text-sm text-gray-500 dark:text-white leading-5">
          <a
            class="hover:text-gray-700 dark:hover:text-gray-200"
            href="https://github.com/PFCCLab/blog"
            target="_blank"
            rel="noopener"
            ><span class="hidden sm:inline">GitHub </span>Source</a
          >
          <!-- TODO(SigureMo): Add RSS Feed -->
          <span class="mr-2 ml-2">·</span>
          <a class="hover:text-gray-700 dark:hover:text-gray-200" href="/about.html" rel="noopener"
            >About</a
          >
          <span class="mr-2 ml-2">·</span>
          <a
            class="hover:text-gray-700 dark:hover:text-gray-200"
            href="https://github.com/PFCCLab"
            target="_blank"
            rel="noopener"
            >PFCCLab →</a
          >
        </div>
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="frontmatter.layout === 'home'" />
      <About v-else-if="frontmatter.layout === 'about'" />
      <NotFound v-else-if="page.isNotFound" />
      <Article v-else />
    </main>
  </div>
</template>
