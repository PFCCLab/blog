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

const extraLiClasses = computed(() => {
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

const extraMessageDivClasses = computed(() => {
  const type_ = messageType.value
  if (type_ === 'left') {
    return {
      'items-start': true,
    }
  } else {
    return {
      'items-end': true,
    }
  }
})
</script>

<template>
  <li class="flex items-start space-y-2" :class="extraLiClasses">
    <img v-if="avatarUrl" :src="avatarUrl" alt="author image" class="w-10 h-10 rounded-md m-0" />
    <div class="flex flex-col px-3 !mt-0" :class="extraMessageDivClasses">
      <span class="text-neutral-500 dark:text-neutral-400">{{ name }}</span>
      <div class="inline-block bg-slate-200 px-2 py-2 rounded-md dark:bg-zinc-700">
        <slot></slot>
      </div>
    </div>
  </li>
</template>
