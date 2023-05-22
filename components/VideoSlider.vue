<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const localeSetting = useState<string>('locale.setting')

const props = defineProps<{
  category: {
    name: string
    nameFr: string
  }
}>()

const query: QueryBuilderParams = {
  path: '/video',
  where: [{ category: props.category.name }],
  limit: 3,
  sort: [{ date: -1 }],
}
</script>

<template>
  <ContentList :query="query">
    <template #default="{ list }">
      <PageSection v-if="list">
        <h2 class="text-2xl font-serif mb-12">
          {{
            localeSetting === 'en' ? props.category.name : props.category.nameFr
          }}
        </h2>
        <div class="flex flex-col md:flex-row md:space-x-8">
          <div v-for="video in list" :key="video._path" class="lg:w-1/3">
            <VideoWithThumb :video="video" />
          </div>
        </div>
      </PageSection>
    </template>
    <template #not-found> </template>
  </ContentList>
</template>
