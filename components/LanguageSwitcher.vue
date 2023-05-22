<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { availableLocales } from '~/utils/lang'

// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
})

// state
const currentStyle = toRef(props, 'type')
const localeSetting = useState<string>('locale.setting')
</script>

<template>
  <div class="flex items-center">
    <Listbox
      v-if="currentStyle === 'dropdown-right-top'"
      v-model="localeSetting"
      as="div"
      class="relative flex items-center"
    >
      <ListboxLabel class="sr-only">Theme</ListboxLabel>
      <ListboxButton
        type="button"
        title="Change Language"
        class="transition-colors duration-300"
      >
        <span class="justify-center items-center flex">
          {{ availableLocales[localeSetting].name }}
        </span>
      </ListboxButton>
      <ListboxOptions
        class="p-1 absolute z-50 top-full right-0 outline-none overflow-hidden w-36 py-1 text-sm text-blue-480 dark:text-white"
      >
        <ListboxOption
          v-for="lang in availableLocales"
          :key="lang.iso"
          :value="lang.iso"
          :class="{
            'py-1 flex items-center md:items-end md:text-right text-blue-480 dark:text-white': true,
            'hover:underline cursor-pointer': localeSetting !== lang.iso,
          }"
        >
          <span class="flex-1 truncate">
            {{ lang.name }}
          </span>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
    <select
      v-if="currentStyle === 'select-box'"
      v-model="localeSetting"
      class="w-full py-1 outline-none rounded border bg-transparent text-blue-480 dark:text-white"
    >
      <option
        v-for="lang in availableLocales"
        :key="lang.iso"
        :value="lang.iso"
        class="flex items-center md:items-end md:text-right text-blue-480 dark:md:dark:text-white space-x-2"
      >
        {{ lang.name }}
      </option>
    </select>
  </div>
</template>
