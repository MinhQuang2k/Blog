export default {
  target: "static",

  ssr: false,

  generate: {
    fallback: true,
  },

  head: {
    title: "Quiz test",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Quiz test",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "//fonts.googleapis.com/css?family=Roboto:300,400,500",
      },
    ],
  },

  // Global CSS
  css: [
    "ant-design-vue/dist/antd.css",
    "@/assets/css/global.scss"
  ],

  plugins: [
    '@/plugins/antd-ui',
    "~/plugins/axios.js",
    { src: "~/plugins/mask", ssr: false },
    // { src: "~/plugins/vuex-persist.js", ssr: false },
  ],


  components: true,

  modules: ["@nuxtjs/dotenv", "@nuxtjs/axios", "@nuxtjs/auth-next", "@nuxtjs/pwa"],

  axios: {
    baseURL: "http://localhost:8080",
    credentials: false,
    headers: {
      Accept: "application/json",
    },
  },

  auth: {
    // Options
    redirect: {
      login: "/login/",
      logout: "/login/",
      callback: "/",
      home: "/",
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
          },
          user: {
            url: "/auth/me",
            method: "get",
          },
          logout: false,
        },
        token: {
          property: "access_token",
          global: true,
        },
        user: {
          property: false,
        },
      },
    },
  },

  router: {
    middleware: ["authenticated", "auth"],
    trailingSlash: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  loaders: {
    cssModules: {
      camelCase: true,
      localIdentName: "[local]_[hash:base64:5]",
    },
  },

  vue: {
    config: {
      productionTip: false,
      devtools: false,
    },
  },
};
