<script lang="ts" setup>
// import { defineEmits } from 'vue'
// import { ref } from 'vue'
// import { useIntersectionObserver } from '@vueuse/core'
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

const emit = defineEmits(['select'])

const selectVideo = function (videolink: string) {
  emit('select', videolink)
}
// const iframe = ref<HTMLIFrameElement | null>(null)
const showThumbnail = ref(true)
// const iframeSrc = ref('') // Start with an empty src

// const { stop } = useIntersectionObserver(
//   iframe,
//   ([{ isIntersecting }], observerElement) => {
//     if (isIntersecting) {
//       iframeSrc.value = props.video.url // Load video when iframe is in view
//     }
//   }
// )

// const onIframeLoad = () => {
//   showThumbnail.value = false
// }

// onUnmounted(() => {
//   stop() // Disconnect observer when component is unmounted
// })
</script>

<template>
  <div class="video-wrapper relative mb-4">
    <img
      v-if="props.video.thumbnail"
      :src="props.video.thumbnail"
      :alt="localeSetting === 'en' ? props.video.title : props.video.titleFr"
      width="480"
      height="270"
      class="video-thumbnail h-[270px] ar-auto object-cover top-0"
      :class="{ 'cursor-pointer': props.video.url }"
      @click="emit('select', props.video.url)"
    />
    <iframe
      v-else-if="props.video.url"
      ref="iframe"
      :src="props.video.url"
      width="480"
      height="270"
      allow="fullscreen"
      class="max-w-full top-0"
    ></iframe>
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
