<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  activeCategory: string;
  onChange: (category: string) => void;
}>();

const categories = [
  { id: 'all', name: 'ALL' },
  { id: 'community-activity', name: '飞桨开源社区动态' },
  { id: 'developer-story', name: '飞桨社区开发者访谈' },
  { id: 'insights', name: '前沿洞察' }
];
</script>

<template>
  <div class="blog-categories mb-8">
    <div class="flex flex-wrap gap-2">
      <button
        v-for="category in categories"
        :key="category.id"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium transition-colors',
          activeCategory === category.id
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
        ]"
        @click="onChange(category.id)"
      >
        {{ category.name }}
      </button>
    </div>
  </div>
</template>