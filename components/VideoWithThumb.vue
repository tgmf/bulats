<script lang="ts" setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
const localeSetting = useState<string>('locale.setting')

const props = defineProps<{
  video: {
    title: string
    titleFr: string
    description: string
    descriptionFr: string
    url: string
    thumbnail: string
  }
}>()

const iframe = ref<HTMLIFrameElement | null>(null)
const showThumbnail = ref(true)
const iframeSrc = ref('') // Start with an empty src

const { stop } = useIntersectionObserver(
  iframe,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      iframeSrc.value = props.video.url // Load video when iframe is in view
    }
  }
)

const onIframeLoad = () => {
  showThumbnail.value = false
}

onUnmounted(() => {
  stop() // Disconnect observer when component is unmounted
})
</script>

<template>
  <div class="video-wrapper relative mb-4">
    <iframe
      v-if="props.video.url"
      ref="iframe"
      :src="iframeSrc"
      width="480"
      height="320"
      allow="fullscreen"
      class="max-w-full top-0"
      :class="{ absolute: showThumbnail }"
      @load="onIframeLoad"
    ></iframe>
    <img
      v-if="props.video.thumbnail"
      v-show="showThumbnail"
      :src="props.video.thumbnail"
      :alt="localeSetting === 'en' ? props.video.title : props.video.titleFr"
      width="480"
      height="320"
      class="video-thumbnail h-[320px] ar-auto object-cover top-0"
    />
  </div>
  <p
    v-if="localeSetting === 'en'"
    class="max-w-full"
    v-html="props.video.description"
  />
  <p
    v-if="localeSetting === 'fr'"
    class="max-w-full"
    v-html="props.video.descriptionFr"
  />
</template>

<style>
.video-wrapper p a {
  text-decoration: underline;
}
</style>
