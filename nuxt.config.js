import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - template-gen',
    title: 'template-gen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      {
        src: '/js/tiny-slider.min.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/headers/base.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/headers/template.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/headers/foundation.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/headers/plugins.css' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/getModules.server.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/vuetify'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
            '@nuxtjs/apollo',
           ['nuxt-highlightjs', { style: 'atom-one-dark'}],
           "nuxt-clipboard2"
           ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.HASURA_ENDPOINT
      }
    }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
