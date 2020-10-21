const { app } = require('./configs/config')
import {
    SITE_DESCRIPTION,
    SITE_TITLE,
    SITE_URL,
    SITE_OG_IMAGE,
} from './configs/metaConfig'
export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    ssr: false,
    target: 'static',
    head: {
        title: '轉型正義-人物篇',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'robots',
                name: 'robots',
                content: 'index',
            },
            {
                hid: 'description',
                name: 'description',
                content: SITE_DESCRIPTION,
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: SITE_TITLE,
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: SITE_DESCRIPTION,
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: SITE_OG_IMAGE,
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: SITE_URL,
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~assets/scss/global.style.scss',
        '~assets/scss/responsiveMixin.scss',
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [{ src: '~/plugins/VueSmoothScroll', ssr: false }],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: ['@nuxtjs/style-resources', 'nuxt-purgecss'],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    styleResources: {
        scss: ['./assets/scss/*.scss'],
    },

    purgeCSS: {
        mode: 'webpack',
        enabled: ({ isDev, isClient }) => !isDev && isClient, // or `false` when in dev/debug mode
        paths: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
        ],
        styleExtensions: ['.css'],
        whitelist: ['body', 'html', 'nuxt-progress'],
        extractors: [
            {
                extractor: (content) => content.match(/[A-z0-9-:\\/]+/g) || [],
                extensions: ['html', 'vue', 'js'],
            },
        ],
    },

    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'custom',
                path: '*',
                component: resolve(__dirname, 'pages/404.vue'),
            })
        },
    },
}
