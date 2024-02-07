// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/global.css',
  ],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.BACKEND_URL
    }
  }
})