<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'

// state
const app = useAppConfig() as AppConfigInput
// composable
// const { t } = useLang()

// meta
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper class="flex-1 flex">
    <PageBody class="flex-1 flex">
      <PageSection class="flex-1 flex items-center">
        <div class="flex-1 md:w-3/8 flex flex-col z-10">
          <h2 class="text-center md:text-left mt-4 text-3xl">
            {{ app.competences }}
          </h2>
        </div>
        <div class="intro md:w-1/2">
          <PageContentRenderer path="/page/intro" />
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style lang="scss"></style>
