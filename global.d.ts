import { IntlifyModuleOptions } from '@intlify/nuxt3'
import { VueUseNuxtOptions } from '@vueuse/nuxt'
import { ModuleOptions as NuxtWindiCssModuleOptions } from 'nuxt-windicss'
import { ModuleOptions as NuxtContentModuleOptions } from '@nuxt/content'

declare module '@nuxt/schema' {
  interface AppConfigInput {
    name: string
    description: string
    author: {
      name: string
      link: string
    }
    phone: string
    email: string
  }
}

declare module 'nuxt/config' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
    vueuse?: VueUseNuxtOptions
    windicss?: NuxtWindiCssModuleOptions
    content?: Partial<NuxtContentModuleOptions>
  }
}

export {}
