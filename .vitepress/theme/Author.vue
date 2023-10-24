<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { frontmatter } = useData()

const avatarUrl = computed(() => {
  return (
    frontmatter.value.author.avatar ??
    (frontmatter.value.author.github
      ? `https://github.com/${frontmatter.value.author.github}.png`
      : undefined)
  )
})

const githubUrl = computed(() => {
  return frontmatter.value.author.github
    ? `https://github.com/${frontmatter.value.author.github}`
    : undefined
})

// TODO(SigureMo):
// 1. Support multiple authors / co-authors
// 2. Support title
</script>

<template>
  <dl class="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 dark:xl:border-slate-200/5">
    <dt class="sr-only">Authors</dt>
    <dd>
      <ul class="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
        <li class="flex items-center space-x-2">
          <img
            v-if="avatarUrl"
            :src="avatarUrl"
            alt="author image"
            class="w-10 h-10 rounded-full"
          />
          <dl class="text-sm font-medium leading-5 whitespace-nowrap">
            <dt class="sr-only">Name</dt>
            <dd class="text-gray-900 dark:text-white">{{ frontmatter.author.name }}</dd>
            <dt v-if="githubUrl" class="sr-only">GitHub</dt>
            <dd v-if="githubUrl">
              <a :href="githubUrl" target="_blank" rel="noopnener noreferrer" class="link"
                >@{{ frontmatter.author.github }}</a
              >
            </dd>
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
</template>
