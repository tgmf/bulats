<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/categories', sort: [{ order: 1 }] }
</script>

<template>
  <ContentList :query="query">
    <template #default="{ list }">
      <div v-for="category in list" :key="category._path" class="mb-18">
        <VideoSlider :category="category" />
      </div>
    </template>
    <template #not-found> </template>
  </ContentList>
</template>
