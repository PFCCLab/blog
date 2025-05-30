<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useData, useRoute, useRouter } from 'vitepress'
import { data as postsData } from './loaders/posts.data.js'
import Date from './Date.vue'
import Pagination from './Pagination.vue'
import BlogCategories from './BlogCategories.vue'
import {
  getCurrentCategory,
  updateCategoryInUrl,
  navigateToCategory,
} from './utils/categoryUtils.client.js'

const route = useRoute()
const { posts, postsPerPage } = postsData

const { frontmatter, site } = useData()

// 博客分类相关功能
const activeCategory = ref('all')

const filteredPosts = computed(() => {
  if (activeCategory.value === 'all') {
    return posts
  }
  return posts.filter((post) => post.category === activeCategory.value)
})

onMounted(() => {
  const categoryParam = getCurrentCategory()
  if (
    categoryParam &&
    ['all', 'community-activity', 'developer-story', 'insights'].includes(categoryParam)
  ) {
    activeCategory.value = categoryParam
  }
})

// 修改分类切换函数
const changeCategory = (category: string) => {
  activeCategory.value = category

  // 更新URL参数，不刷新页面
  updateCategoryInUrl(category)

  // 如果不在首页，跳转回首页
  if (route.path !== '/') {
    navigateToCategory(category)
  }
}

const pageIndex = computed(() => {
  return route.path === '/' ? 1 : Number(route.path.split('/')[2])
})

const postsInPage = computed(() => {
  const start = (pageIndex.value - 1) * postsPerPage
  const end = start + postsPerPage
  return filteredPosts.value.slice(start, end)
})
</script>

<template>
  <div class="divide-y divide-gray-200 dark:divide-slate-200/5">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1
        class="text-3xl leading-9 font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        {{ frontmatter.title || site.title }}
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-white">
        {{ frontmatter.subtext || site.description }}
      </p>

      <!-- 添加分类选项组件 -->
      <BlogCategories :active-category="activeCategory" :on-change="changeCategory" />
    </div>
    <ul class="divide-y divide-gray-200 dark:divide-slate-200/5">
      <li class="py-12" v-for="{ title, url, date, excerpt, pinned } of postsInPage">
        <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
          <Date :date="date" />
          <div class="space-y-5 xl:col-span-3">
            <div class="space-y-6">
              <h2 class="text-2xl leading-8 font-bold tracking-tight">
                <span class="text-red-600" v-if="pinned">[置顶]</span>
                <a class="text-gray-900 dark:text-white" :href="url">{{ title }}</a>
              </h2>
              <div
                v-if="excerpt"
                class="prose dark:prose-invert max-w-none text-gray-500 dark:text-gray-300"
                v-html="excerpt"
              ></div>
            </div>
            <div class="text-base leading-6 font-medium">
              <a class="link" aria-label="read more" :href="url">Read more →</a>
            </div>
          </div>
        </article>
      </li>
    </ul>
    <Pagination
      :num-pages="Math.ceil(filteredPosts.length / postsPerPage)"
      :page-index="pageIndex"
      v-if="filteredPosts.length > postsPerPage"
    />
  </div>
</template>
