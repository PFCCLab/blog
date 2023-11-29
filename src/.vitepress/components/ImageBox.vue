<script setup lang="ts">
import { computed } from 'vue'

const { url, description, centerStyle, legendStyle } = defineProps<{
  url: string
  description: string
  centerStyle?: string
  legendStyle?: string
}>()

const centerstyle = computed(() => {
  const centerStyle_ = centerStyle ?? null
  if (centerStyle_ == null) {
    return 'text-align: center'
  } else {
    return centerStyle + 'text-align: center'
  }
})

const legendstyles = computed(() => {
  return (
    legendStyle ??
    'color: orange;border-bottom: 1px solid #d9d9d9;display: inline-block;color: #999;padding: 2px;'
  )
})
</script>

<template>
  <figure :style="centerstyle">
    <img :src="url" :alt="description" />
    <figcaption :style="legendstyles">{{ description }}</figcaption>
  </figure>
</template>
