<template>
  <div class="podcast-player">
    <div class="podcast-meta">
      <span class="podcast-badge">🎧</span>
      <div>
        <p class="podcast-title">{{ title }}</p>
        <p v-if="subtitle" class="podcast-desc">{{ subtitle }}</p>
      </div>
    </div>
    <audio class="podcast-audio" controls preload="none">
      <source :src="src" type="audio/mpeg" />
      您的浏览器暂不支持音频播放，可以
      <a :href="src">点击下载</a>
      收听。
    </audio>
    <p v-if="duration || note" class="podcast-note">
      <span v-if="duration">⏱️ 时长约 {{ duration }}</span>
      <span v-if="duration && note"> · </span>
      <span v-if="note">{{ note }}</span>
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  src: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    default: '',
  },
  note: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.podcast-player {
  margin: 2rem 0;
  padding: 1.25rem;
  border-radius: 14px;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.15);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.podcast-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.podcast-badge {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background: rgba(30, 64, 175, 0.14);
}
.podcast-title {
  margin: 0;
  font-weight: 600;
  font-size: 1.04rem;
}
.podcast-desc {
  margin: 0.3rem 0 0;
  color: #4a5568;
  font-size: 0.94rem;
}
.podcast-audio {
  width: 100%;
}
.podcast-note {
  margin: 0;
  color: #5f6b7c;
  font-size: 0.87rem;
}
@media (max-width: 640px) {
  .podcast-player {
    padding: 1rem;
  }
  .podcast-badge {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    font-size: 22px;
  }
  .podcast-meta {
    align-items: flex-start;
  }
}
</style>
