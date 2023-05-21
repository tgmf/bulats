<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const localeSetting = useState<string>('locale.setting')

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
          <h2
            v-if="localeSetting === 'en'"
            class="text-center md:text-left mt-4 text-3xl"
          >
            Filmmaker, creative video producer
          </h2>
          <h2
            v-if="localeSetting === 'fr'"
            class="text-center md:text-left mt-4 text-3xl"
          >
            Cinéaste, producteur audiovisuel créatif
          </h2>
        </div>
        <div v-if="localeSetting === 'en'" class="intro md:w-1/2">
          <PageContentRenderer path="/page/intro-en" />
        </div>
        <div v-if="localeSetting === 'fr'" class="intro md:w-1/2">
          <PageContentRenderer path="/page/intro-fr" />
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style lang="scss"></style>
