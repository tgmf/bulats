<script lang="ts" setup>
const props = defineProps<{
  video: string
}>()
</script>
<template>
  <iframe
    v-if="props.video"
    ref="iframe"
    :src="props.video"
    width="960"
    allow="fullscreen; autoplay"
    class="max-w-full top-0"
    allowfullscreen
    asp
  ></iframe>
</template>

<style>
iframe {
  aspect-ratio: 16/9;
}
</style>
