// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  server: {
    port: 3000 
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.BACKEND_URL
    }
  }
})
