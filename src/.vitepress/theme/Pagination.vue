<script setup lang="ts">
import { withBase } from 'vitepress'
import { useRoute } from 'vitepress'
import { ref, onMounted, computed } from 'vue'

const route = useRoute()

const { numPages, pageIndex } = defineProps<{
  numPages: number
  pageIndex: number
}>()

// 保持分类状态的引用
const currentCategory = ref(null)

// 在客户端加载时获取当前分类
onMounted(() => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search)
    currentCategory.value = urlParams.get('category')
  }
})

// 计算当前分类，同时在SSR和CSR下工作
const categoryParam = computed(() => {
  // 服务端渲染时使用路由参数
  if (typeof window === 'undefined') {
    return route.query.category || null
  }
  // 客户端渲染时使用状态变量
  return currentCategory.value
})

// 生成带分类参数的页面链接
function getPageUrl(pageNum: number) {
  // 基础URL
  const basePath = pageNum === 1 ? '/index.html' : `/pages/${pageNum}.html`

  // 如果有分类且不是'all'，添加到URL
  const category = categoryParam.value
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
