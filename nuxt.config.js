export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "k-porfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

      { rel: "stylesheet", href: "/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/css/owl.carousel.css" },
      { rel: "stylesheet", href: "/css/magnific-popup.css" },
      { rel: "stylesheet", href: "/css/owl.theme.css" },
      { rel: "stylesheet", href: "/css/style.css" },
      { rel: "stylesheet", href: "/css/responsive.css" },
    ],
    script: [
      {
        src: "/js/jquery-1.9.1.min.js",
        body: true,
      },
      {
        src: "/js/jquery.appear.js",
        body: true,
      },
      {
        src: "/js/jquery.magnific-popup.min.js",
        body: true,
      },
      {
        src: "/js/masonry.pkgd.min.js",
        body: true,
      },
      {
        src: "/js/masonry.js",
        body: true,
      },
      {
        src: "/js/owl.carousel.min.js",
        body: true,
      },
      {
        src: "/js/bootstrap.min.js",
        body: true,
      },
      {
        src: "/js/smooth-scroll.min.js",
        body: true,
      },
      {
        src: "/js/classie.js",
        body: true,
      },
      {
        src: "/js/main.js",
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/animatedOnScroll.client.ts"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  target: "serverless",
};
