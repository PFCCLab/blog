<script setup lang="ts">
import { withBase } from 'vitepress'
import { useRoute } from 'vitepress'
import { ref, onMounted } from 'vue'  
import { getCurrentCategory } from './utils/categoryUtils.client.js'

const route = useRoute()

const { numPages, pageIndex } = defineProps<{
  numPages: number
  pageIndex: number
}>()

const currentCategory = ref(null)

onMounted(() => {
  currentCategory.value = getCurrentCategory()
})

function getPageLink(pageNum) {
  const basePath = pageNum === 1 ? '/' : `/pages/${pageNum}`
  
  if (currentCategory.value) {
    return withBase(`${basePath}?category=${currentCategory.value}`)
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
