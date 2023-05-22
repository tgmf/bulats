<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import p from './../../package.json'
const app = useAppConfig() as AppConfigInput
const phone = app.phone as String
</script>

<template>
  <footer>
    <section
      class="max-w-8xl mx-auto px-4 lg:px-8 flex-1 flex w-full space-x-20"
    >
      <div class="w-full py-4 text-left flex-initial flex">
        <div class="mb-1 mr-8">
          {{ app.name }}
        </div>
        <div class="text-sm dark:text-white">
          <a
            class="mb-2 block"
            :href="'tel:' + phone.replace(/\s/g, '')"
            target="_blank"
            >{{ phone }}</a
          >
          <a :href="'mailto:' + app.email" target="_blank">{{ app.email }}</a>
        </div>
      </div>
    </section>
  </footer>
</template>
