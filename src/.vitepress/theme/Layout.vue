<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import NotFound from './NotFound.vue'
import About from './About.vue'

const { page, frontmatter, site } = useData()

// 添加一个函数来处理回到首页的点击事件
function goToHomePage(event) {
  // 仅在客户端环境执行
  if (typeof window !== 'undefined') {
    // 总是导航到不带任何参数的首页
    window.location.href = withBase('/');
    event.preventDefault();
  }
}
</script>

<template>
  <div class="antialiased dark:bg-neutral-900 min-h-screen">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a class="text-xl" :href="withBase('/')" :aria-label="site.title" @click="goToHomePage">
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
