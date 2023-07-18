// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Rail Welding Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Rail Welding Solutions' 
        },
        { name: 'format-detection', content: 'telephone=yes' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in' // default
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    // '@sidebase/nuxt-auth',
    'nuxt-lodash',
    'nuxt-gtag',
    '@artmizu/yandex-metrika-nuxt',
    '@pinia/nuxt',
    'nuxt-swiper',
    '@nuxtjs/i18n',
  ],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    // baseUrl: 'https://my-nuxt-app.com',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json'
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru-RU.json'
      }
    ],
    lazy: true,
    langDir: 'lang/',
  },

  imports: {
    dirs: ['stores'],
  },

  css: [
    '@/assets/css/main.css',
    '@/assets/css/tailwind.css',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  colorMode: {
    classSuffix: ''
  },

  // auth: {
  //   origin: 'process.env.ORIGIN',
  //   enableGlobalAppMiddleware: true
  // },

  plugins: [
    { src: '~/plugins/bg-scroll.js', mode: 'client' },
    { src: '~/plugins/navbar.js', mode: 'client' },
  ],

  lodash: {
    prefix: "_",
    prefixSkip: ["string"],
    upperAfterPrefix: false,
    exclude: ["map"],
    alias: [
      ["camelCase", "stringToCamelCase"], // => stringToCamelCase
      ["kebabCase", "stringToKebab"], // => stringToKebab
      ["isDate", "isLodashDate"], // => _isLodashDate
    ],
  },

  // gtag: {
  //   id: 'G-XXXXXXXXXX'
  // },

  // yandexMetrika: {
  //   id: 'G-XXXXXXXXXX'
  // }

  // loading: {
  //   color: '#22c55e',
  //   height: '1px',
  // },

})
