<script lang="ts" setup>
// import { AppConfigInput } from '@nuxt/schema'
const localeSetting = useState<string>('locale.setting')

// state
// const app = useAppConfig() as AppConfigInput
// composable
// const { t } = useLang()
// meta
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper class="flex-1 flex">
    <PageBody class="flex-1 flex flex-col">
      <PageSection
        class="flex flex-col md:flex-row items-start justify-between"
      >
        <div class="w-full md:w-3/8 mb-8 md:pr-8">
          <h2 v-if="localeSetting === 'en'" class="text-3xl font-serif">
            Filmmaker, creative video producer
          </h2>
          <h2 v-if="localeSetting === 'fr'" class="text-3xl font-serif">
            Cinéaste, producteur audiovisuel créatif
          </h2>
        </div>
        <div v-if="localeSetting === 'en'" class="intro w-full md:w-1/2">
          <PageContentDoc path="/page/intro-en" />
        </div>
        <div v-if="localeSetting === 'fr'" class="intro w-full md:w-1/2">
          <PageContentDoc path="/page/intro-fr" />
        </div>
      </PageSection>
      <VideoList />
      <PageSection class="flex flex-col md:flex-row items-start">
        <h2
          v-if="localeSetting === 'en'"
          class="w-100 text-3xl md:text-4xl md:w-1/2 md:pr-8 md:text-right font-serif"
        >
          Get in touch
        </h2>
        <h2
          v-if="localeSetting === 'fr'"
          class="w-100 text-3xl md:text-4xl md:w-1/2 md:pr-8 md:text-right font-serif"
        >
          Prendre contact
        </h2>
        <div class="w-full md:w-1/2">
          <PageForm />
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style>
p {
  letter-spacing: 0.1rem;
  line-height: 1.3;
}

.intro p {
  margin-bottom: 1.3em;
  font-size: 1.25em;
}
</style>
