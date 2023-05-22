<script lang="ts" setup>
// import { AppConfigInput } from '@nuxt/schema'

export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
}

// const { t } = useLang()
// const app = useAppConfig() as AppConfigInput
const menus = computed((): IMenuItem[] => [])
</script>

<template>
  <BuilderNavbar>
    <template #menu>
      <div class="relative hidden lg:flex items-center ml-auto">
        <nav
          class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300"
          role="navigation"
        >
          <ul class="flex items-center space-x-8">
            <li v-for="(item, i) in menus" :key="i">
              <Anchor
                v-if="item.type === 'link'"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
                class="hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize"
                >{{ item.text }}</Anchor
              >
              <Button
                v-else-if="item.type === 'button'"
                :text="item.text"
                size="xs"
                class="font-extrabold capitalize"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
              />
            </li>
          </ul>
        </nav>
        <div class="flex space-x-4 ml-6 pl-6">
          <Anchor
            class="hover:no-underline text-lg flex self-center items-center"
            href="https://vimeo.com/bulatsharipov"
            title="Vimeo"
            target="_blank"
          >
            <IconMdi:vimeo />
          </Anchor>
          <Anchor
            class="hover:no-underline text-lg flex self-center items-center"
            href="https://www.instagram.com/bulat_sharipov/"
            title="Instagram"
            target="_blank"
          >
            <IconMdi:instagram />
          </Anchor>
          <Anchor
            class="hover:no-underline text-lg flex self-center items-center"
            href="https://www.linkedin.com/in/bulat-sharipov/"
            title="LinkedIn"
            target="_blank"
          >
            <IconMdi:linkedin />
          </Anchor>
          <LanguageSwitcher />
        </div>
      </div>
    </template>
    <template #options="{ toggleOptions }">
      <ActionSheet @on-close="toggleOptions(false)">
        <ActionSheetBody>
          <div class="flex justify-around">
            <Anchor
              class="hover:no-underline text-lg flex self-center items-center"
              href="https://vimeo.com/bulatsharipov"
              title="Vimeo"
              target="_blank"
            >
              <IconMdi:vimeo />
            </Anchor>
            <Anchor
              class="hover:no-underline text-lg flex self-center items-center"
              href="https://www.instagram.com/bulat_sharipov/"
              title="Instagram"
              target="_blank"
            >
              <IconMdi:instagram />
            </Anchor>
            <Anchor
              class="hover:no-underline text-lg flex self-center items-center"
              href="https://www.linkedin.com/in/bulat-sharipov/"
              title="LinkedIn"
              target="_blank"
            >
              <IconMdi:linkedin />
            </Anchor>
          </div>
          <div class="mt-6 text-sm font-bold capitalize">
            {{ $t('components.language_switcher.change_language') }}
          </div>
          <div class="mt-2">
            <LanguageSwitcher type="select-box" />
          </div>
        </ActionSheetBody>
        <Button
          text="Close"
          type="secondary"
          @click.prevent="toggleOptions(false)"
        />
      </ActionSheet>
    </template>
  </BuilderNavbar>
</template>
