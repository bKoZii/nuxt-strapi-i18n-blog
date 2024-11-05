// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/strapi',
    '@nuxt/eslint',
    '@nuxt/image',
    'nuxt-typed-router',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    '@nuxtjs/mdc',
    '@nuxtjs/google-fonts',
  ],
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  mdc: {
    highlight: false,
    headings: {
      anchorLinks: false,
    },
  },
  compatibilityDate: '2024-11-05',
  dayjs: {
    locales: ['th', 'en'],
    defaultLocale: 'th',
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        commaDangle: 'always-multiline',
        quotes: 'single',
        jsx: false,
        semi: false,
        blockSpacing: true,
        braceStyle: '1tbs',
        arrowParens: true,
      },
    },
  },
  googleFonts: {
    families: {
      'Space Grotesk': [400, 500, 600, 700],
      'Noto Sans Thai Looped': [400, 500, 600, 700],
    },
  },
  i18n: {
    defaultLocale: 'th',
    strategy: 'no_prefix',
    lazy: true,
    locales: [
      {
        code: 'th',
        name: 'ภาษาไทย',
        file: 'th.json',
        isCatchallLocale: true,
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
    ],
    vueI18n: 'i18n.config.ts',
  },
  strapi: {
    version: 'v5',
    devtools: true,
  },
  tailwindcss: {
    configPath: '~/tailwind.config.ts',
    cssPath: '~/assets/main.css',
  },
})
