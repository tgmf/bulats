<script lang="ts" setup>
import { ref } from 'vue'
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/categories', sort: [{ order: 1 }] }
const selectedVideo = ref('')

const selectVideo = (video: string) => {
  selectedVideo.value = video
}
</script>

<template>
  <ContentList :query="query">
    <template #default="{ list }">
      <div v-for="category in list" :key="category._path" class="mb-18">
        <VideoSlider :category="category" @select="selectVideo" />
      </div>
    </template>
    <template #not-found> </template>
  </ContentList>
  <div
    v-if="selectedVideo"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
    @click="() => (selectedVideo = '')"
  >
    <div @click.stop>
      <VideoFrame :video="selectedVideo" />
    </div>
  </div>
</template>
