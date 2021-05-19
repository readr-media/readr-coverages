// plugins/vue-scrollmagic.js
import VueScrollmagic from 'vue-scrollmagic'
import Vue from 'vue'
Vue.use(VueScrollmagic, {
  vertical: true,
  globalSceneOptions: {},
  loglevel: 2,
  refreshInterval: 100,
})

// nuxt.config.js
// {
//     ...
//     plugins: [{
//       src: '~plugins/vue-scrollmagic.js',
//       ssr: false
//     }]
//     ...
//   }
