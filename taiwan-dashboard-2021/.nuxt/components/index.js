export { default as ScrollamaExample } from '../../components/ScrollamaExample.vue'

export const LazyScrollamaExample = import('../../components/ScrollamaExample.vue' /* webpackChunkName: "components/scrollama-example" */).then(c => c.default || c)
