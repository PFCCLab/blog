<script setup lang="ts">
import { computed, defineProps } from 'vue'

const { name, github, avatar } = defineProps<{
  name: string
  github: string
  avatar?: string
}>()

const avatarUrl = computed(() => {
  return avatar ?? (github ? `https://github.com/${github}.png` : undefined)
})

const githubUrl = computed(() => {
  return github ? `https://github.com/${github}` : undefined
})
</script>

<template>
  <li class="flex items-center space-x-2">
    <img v-if="avatarUrl" :src="avatarUrl" alt="author image" class="w-10 h-10 rounded-full" />
    <dl class="text-sm font-medium leading-5 whitespace-nowrap">
      <dt class="sr-only">Name</dt>
      <dd class="text-gray-900 dark:text-white">{{ name }}</dd>
      <dt v-if="githubUrl" class="sr-only">GitHub</dt>
      <dd v-if="githubUrl">
        <a :href="githubUrl" target="_blank" rel="noopnener noreferrer" class="link"
          >@{{ github }}</a
        >
      </dd>
    </dl>
  </li>
</template>
