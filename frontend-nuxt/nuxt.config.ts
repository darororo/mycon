// https://nuxt.com/docs/api/configuration/nuxt-config

// import { options } from '#build/eslint.config.mjs'
import Aura from '@primeuix/themes/aura'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  routeRules: {
    '/': {
      redirect: '/dashboard',
    },
  },
  // alias: {
  //   "~": "/",
  //   "@": "/<srcDir>",
  //   "~~": "/<rootDir>",
  //   "@@": "/<rootDir>",
  //   "#shared": "/<rootDir>/shared",
  //   assets: "/<srcDir>/assets",
  //   public: "/<srcDir>/public",
  //   "#build": "/<rootDir>/.nuxt",
  //   "#internal/nuxt/paths": "/<rootDir>/.nuxt/paths.mjs",
  // },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['/assets/css/main.css'],

  // components: [
  //   {
  //     pathPrefix: false,
  //   },
  // ],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@primevue/nuxt-module',
    '@nuxtjs/leaflet',
    '@pinia/nuxt',
  ],

  fonts: {
    families: [{ name: 'Montserrat', provider: 'google' }, { name: 'Montserrat Subrayada' }],
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          // darkModeSelector: 'none',
        },
      },
    },
    components: {
      include: ['Button', 'InputText', 'Avatar', 'Popover', 'DataTable', 'Toast', 'Upload'],
    },
  },
})
