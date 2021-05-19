// plugins/vue-lazyload.js
import VueLazyload from 'vue-lazyload'
import Vue from 'vue'
// const loadimage = require('~/static/images/loading.gif')

Vue.use(VueLazyload, {
  preLoad: 1.3,
  // loading: loadimage,
  attempt: 1,
})

// nuxt.config.js
// {
//     ...
//     plugins: [{
//       src: '~plugins/vue-lazyload.js',
//       ssr: false
//     }]
//     ...
//   }
