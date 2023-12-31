// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-gtag'],
  gtag: {
    id: 'G-MM60XR69RN',
    config: {
      page_title: 'AI Image Generator | Free Online Text-to-Image Neural Network',
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})