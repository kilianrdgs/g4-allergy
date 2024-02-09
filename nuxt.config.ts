export default defineNuxtConfig({
  security: {
    headers: {
      xFrameOptions: 'SAMEORIGIN', 
    },
  },
  devtools: { enabled: true },
  css: [
    '~/assets/global.css',
  ],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.BACKEND_URL
    }
  },
  render: {
    csp: {
      reportOnly: false, 
      hashAlgorithm: 'sha256',
      policies: {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://apis.google.com"],
        'style-src': ["'self'", "'unsafe-inline'"],
        'img-src': ["'self'"],
        'connect-src': ["'self'"], 
        'frame-src': ["'none'"],
        'block-all-mixed-content': [], 
      },
      reportUri: '/csp-report', 
    },
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'referrer', content: 'no-referrer' }, 
    ],
  },
});
