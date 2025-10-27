import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-ignore
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
      "@pinia/nuxt",
  ],
  vite: {
    server: {
      hmr: {
        overlay: false
      }
    },
    optimizeDeps: {
      include: ['vuetify']
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ 'http-equiv': 'Accept-CH', content: 'Viewport-Width' }]
    },
    rootId: 'pro-vision',
    rootTag: 'div'
  },
})
