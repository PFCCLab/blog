<script setup lang="ts">
import { useData } from 'vitepress'
import Author from './Author.vue'

const { frontmatter } = useData()

const coAuthors = frontmatter.value.co_authors ?? []
const authors = [frontmatter.value.author, ...coAuthors]
</script>

<template>
  <dl class="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 dark:xl:border-slate-200/5">
    <dt class="sr-only">Authors</dt>
    <dd>
      <ul class="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
        <template v-for="author in authors">
          <Author :name="author.name" :github="author.github" :avatar="author.avatar" />
        </template>
      </ul>
    </dd>
  </dl>
</template>
