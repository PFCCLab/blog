<script setup lang="ts">
import { computed } from 'vue'

const { name, github, avatar, type } = defineProps<{
  name: string
  github: string
  avatar?: string
  type?: string
}>()

const avatarUrl = computed(() => {
  return avatar ?? (github ? `https://github.com/${github}.png` : undefined)
})

const messageType = computed(() => {
  const type_ = type ?? 'left'
  if (!['left', 'right'].includes(type_)) {
    console.warn(`Message type must be 'left' or 'right', but got '${type_}'`)
    return 'left'
  }
  return type_
})

const extraClasses = computed(() => {
  const type_ = messageType.value
  if (type_ === 'left') {
    return {
      'mr-10': true,
    }
  } else {
    return {
      'flex-row-reverse': true,
      'ml-10': true,
    }
  }
})
</script>

<template>
  <li class="flex items-center" :class="extraClasses">
    <img v-if="avatarUrl" :src="avatarUrl" alt="author image" class="w-10 h-10 rounded-md" />
    <div class="inline-block bg-slate-200 px-2 py-2 rounded-md mx-2 dark:bg-zinc-700">
      <slot></slot>
    </div>
  </li>
</template>
