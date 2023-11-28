<script setup lang="ts">
import { withBase } from 'vitepress'

const { numPages, pageIndex } = defineProps<{
  numPages: number
  pageIndex: number
}>()
</script>

<template>
  <div class="flex justify-center space-x-2 py-4">
    <a
      class="px-3 py-2 rounded-md font-bold"
      :class="{
        'bg-green-200 dark:bg-green-700': pageIndex === i,
        'text-green-700 dark:text-green-300': pageIndex !== i,
      }"
      v-for="i in numPages"
      :key="i"
      :href="withBase(i === 1 ? '/index.html' : `/pages/${i}.html`)"
      >{{ i }}</a
    >
  </div>
</template>
