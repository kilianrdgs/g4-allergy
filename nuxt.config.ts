// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  server: {
    port: 3000 ,
    host: '0.0.0.0'
  },
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
