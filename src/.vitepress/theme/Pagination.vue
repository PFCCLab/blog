<script setup lang="ts">
import { withBase } from 'vitepress'
import { useRoute } from 'vitepress'

const route = useRoute()

const { numPages, pageIndex } = defineProps<{
  numPages: number
  pageIndex: number
}>()

// 生成带分类参数的页面链接
function getPageUrl(pageNum: number) {
  // 从当前URL获取分类参数
  const urlParams = new URLSearchParams(window.location.search)
  const category = urlParams.get('category')

  // 基础URL
  const basePath = pageNum === 1 ? '/index.html' : `/pages/${pageNum}.html`

  // 如果有分类且不是'all'，添加到URL
  return category && category !== 'all'
    ? withBase(`${basePath}?category=${category}`)
    : withBase(basePath)
}
</script>

<template>
  <div class="flex justify-center space-x-2 py-4">
    <a
      class="px-3 py-2 rounded-md font-bold hover:outline outline-green-700"
      :class="{
        'bg-green-200 dark:bg-green-700': pageIndex === i,
        'text-green-700 dark:text-green-300': pageIndex !== i,
      }"
      v-for="i in numPages"
      :key="i"
      :href="getPageUrl(i)"
      >{{ i }}</a
    >
  </div>
</template>
