<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import Author from './Author.vue'

const { frontmatter } = useData()

const authors = computed(() => {
  const coAuthors = frontmatter.value.co_authors ?? []
  return [frontmatter.value.author, ...coAuthors]
})
</script>

<template>
  <dl class="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 dark:xl:border-slate-200/5">
    <dt class="sr-only">Authors</dt>
    <dd>
      <ul
        class="flex flex-col pl-10 space-y-5 md:justify-center md:flex-row md:space-y-0 md:space-x-12 md:pl-0 xl:block xl:space-x-0 xl:space-y-8"
      >
        <template v-for="author in authors" :key="author.name">
          <Author :name="author.name" :github="author.github" :avatar="author.avatar" />
        </template>
      </ul>
    </dd>
  </dl>
</template>
