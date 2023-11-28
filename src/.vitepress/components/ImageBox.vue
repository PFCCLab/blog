<script setup lang="ts">

import {computed} from "vue";

const { url, describe, centerStyle, legendStyle } = defineProps<{
  url: string
  describe: string
  centerStyle?: string
  legendStyle?: string
}>()

const src = computed(() => {
  return url
})

const alt = computed(() =>{
  return describe
})

const centerstyle = computed(() =>{
  const centerStyle_ = centerStyle ?? null
  if (centerStyle_ == null){
    return 'text-align: center'
  } else {
    return centerStyle + 'text-align: center'
  }
})

const legendstyles = computed(() =>{
  return legendStyle ?? "color: orange;border-bottom: 1px solid #d9d9d9;display: inline-block;color: #999;padding: 2px;"
})
</script>

<template>
  <div :style="centerstyle">
    <img :src="src" :alt="alt" />
    <div :style="legendstyles">{{ alt }}</div>
  </div>
</template>
