<script setup lang="ts">
import { withBase, useRoute } from 'vitepress'
import { ref, onMounted, computed } from 'vue'
import type { Ref } from 'vue'
import { getCurrentCategory } from './utils/categoryUtils.client.js'

const route = useRoute()

const { numPages, pageIndex } = defineProps<{
  numPages: number
  pageIndex: number
}>()

const currentCategory: Ref<string | null> = ref(null)

onMounted(() => {
  currentCategory.value = getCurrentCategory()
})

function getPageLink(pageNum: number) {
  const basePath = pageNum === 1 ? '/' : `/pages/${pageNum}`

  if (currentCategory.value) {
    return withBase(`${basePath}?category=${currentCategory.value}`)
  }

  return withBase(basePath)
}

const pages = computed(() => {
  if (numPages <= 7) {
    return Array.from({ length: numPages }, (_, i) => i + 1)
  }

  if (pageIndex <= 4) {
    return [1, 2, 3, 4, 5, '...', numPages]
  }

  if (pageIndex >= numPages - 3) {
    return [1, '...', numPages - 4, numPages - 3, numPages - 2, numPages - 1, numPages]
  }

  return [1, '...', pageIndex - 1, pageIndex, pageIndex + 1, '...', numPages]
})
</script>

<template>
  <div class="flex justify-center space-x-2 py-4">
    <template v-for="(item, index) in pages" :key="index">
      <a
        v-if="typeof item === 'number'"
        class="px-3 py-2 rounded-md font-bold hover:outline outline-green-700"
        :class="{
          'bg-green-200 dark:bg-green-700': pageIndex === item,
          'text-green-700 dark:text-green-300': pageIndex !== item,
        }"
        :href="getPageLink(item)"
        >{{ item }}</a
      >
      <span v-else class="px-3 py-2 rounded-md font-bold text-green-700 dark:text-green-300">
        ...
      </span>
    </template>
  </div>
</template>
