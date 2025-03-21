<script setup lang="ts">
import { withBase } from 'vitepress'
import { useRoute } from 'vitepress'

const route = useRoute()

const { numPages, pageIndex } = defineProps<{
  numPages: number
  pageIndex: number
}>()

// 新增函数：生成带有当前类别参数的链接
function getPageLink(pageNum) {
  // 基础链接
  const basePath = pageNum === 1 ? '/' : `/pages/${pageNum}`
  
  // 如果在服务器端渲染，无法获取查询参数，直接返回基础链接
  if (typeof window === 'undefined') {
    return withBase(basePath)
  }
  
  // 获取当前URL中的category参数
  const urlParams = new URLSearchParams(window.location.search)
  const category = urlParams.get('category')
  
  // 如果有category参数，添加到链接中
  if (category) {
    return withBase(`${basePath}?category=${category}`)
  }
  
  return withBase(basePath)
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
      :href="getPageLink(i)"
      >{{ i }}</a
    >
  </div>
</template>
