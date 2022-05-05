export default {
  head: {
    title: 'FastQC-Frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/toast', '@nuxtjs/dayjs'
  ],
    axios: {
    baseURL: 'http://127.0.0.1:8080/fastqc/api/v1/'
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        localStorage: {
          prefix: 'auth.'
        },
        token: {
          prefix: 'access_token.',
          property: 'access_token',
          maxAge: 86400,
          type: 'Bearer'
        },
        refreshToken: {
          prefix: 'refresh_token.',
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 15
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: 'login', method: 'post'},
          refresh: { url: 'token/refresh/', method: 'post' },
          user: { url: 'user', method: 'get' },
          logout: { url: 'logout', method: 'post'}
        },
      }
    }
  },
  toast: {
      position: 'top-center',
      duration: 6000,
      register: [ // Register custom toasts
        {
          name: 'my-error',
          message: 'Oops...Something went wrong',
          options: {
            type: 'error'
          }
        }
      ]
    },
  build: {
  },
  server: {
    port: 3001,
  },
  router: {
    base: '/fastqc/'
  }
}
