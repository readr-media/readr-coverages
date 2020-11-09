import {
    SITE_DESCRIPTION,
    SITE_TITLE,
    SITE_URL,
    SITE_OG_IMAGE,
} from './configs/metaConfig'

export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: '周子飛',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
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
        script: [
            {
                src:
                    'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js',
            },
            {
                src:
                    'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.js',
            },
            {
                src:
                    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
            },
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~assets/scss/global.style.scss',
        '~assets/scss/responsiveMixin.scss',
        '~assets/scss/variable.scss',
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [['@nuxtjs/google-analytics']],
    googleAnalytics: {
        id: () => {
            return 'UA-83609754-1'
        },
    },

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: ['@nuxtjs/style-resources'],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
    styleResources: {
        scss: ['./assets/scss/*.scss'],
    },

    router: {
        base: '/project/3/zhou_zhi_fei/',
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'custom',
                path: '*',
                component: resolve(__dirname, 'pages/404.vue'),
            })
        },
    },
}
