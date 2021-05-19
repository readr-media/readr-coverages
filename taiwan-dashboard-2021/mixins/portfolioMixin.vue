<template>
    <div></div>
</template>

<script>
import { fetchPortfolios } from '~/apollo/queries/portfolio.gql'

export default {
    data() {
        return {
            isLoading: false,
            portfolioList: [
                {
                    id: '60600f786c53617e9b95d5d1',
                    name: 'portfolio01',
                    coverPhoto: {
                        urlOriginal:
                            'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f056c53617e9b95d5bf.jpg',
                    },
                    photos: [
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f186c53617e9b95d5c3.jpg',
                        },
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f226c53617e9b95d5c5.jpg',
                        },
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f2b6c53617e9b95d5c7.jpg',
                        },
                    ],
                },
                {
                    id: '60600f906c53617e9b95d5d5',
                    name: 'portfolio02',
                    coverPhoto: {
                        urlOriginal:
                            'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f0f6c53617e9b95d5c1.jpg',
                    },
                    photos: [
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f0f6c53617e9b95d5c1.jpg',
                        },
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f2b6c53617e9b95d5c7.jpg',
                        },
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f346c53617e9b95d5c9.jpg',
                        },
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f576c53617e9b95d5cf.jpg',
                        },
                    ],
                },
                {
                    id: '60600fa86c53617e9b95d5da',
                    name: 'portfolio03',
                    coverPhoto: {
                        urlOriginal:
                            'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f186c53617e9b95d5c3.jpg',
                    },
                    photos: [
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f0f6c53617e9b95d5c1.jpg',
                        },
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f186c53617e9b95d5c3.jpg',
                        },
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f226c53617e9b95d5c5.jpg',
                        },
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f346c53617e9b95d5c9.jpg',
                        },
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f406c53617e9b95d5cb.jpg',
                        },
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f576c53617e9b95d5cf.jpg',
                        },
                    ],
                },
                {
                    id: '60600fbd6c53617e9b95d5e1',
                    name: 'portfolio04',
                    coverPhoto: {
                        urlOriginal:
                            'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f226c53617e9b95d5c5.jpg',
                    },
                    photos: [
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f056c53617e9b95d5bf.jpg',
                        },
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f226c53617e9b95d5c5.jpg',
                        },
                    ],
                },
                {
                    id: '60600fd46c53617e9b95d5e4',
                    name: 'portfolio05',
                    coverPhoto: {
                        urlOriginal:
                            'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f2b6c53617e9b95d5c7.jpg',
                    },
                    photos: [
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f056c53617e9b95d5bf.jpg',
                        },
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f186c53617e9b95d5c3.jpg',
                        },
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f346c53617e9b95d5c9.jpg',
                        },
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f406c53617e9b95d5cb.jpg',
                        },
                    ],
                },
                {
                    id: '60600fed6c53617e9b95d5e9',
                    name: 'portfolio06',
                    coverPhoto: {
                        urlOriginal:
                            'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f346c53617e9b95d5c9.jpg',
                    },
                    photos: [
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f186c53617e9b95d5c3.jpg',
                        },
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f2b6c53617e9b95d5c7.jpg',
                        },
                        {
                            urlOriginal:
                                'https://storage.googleapis.com/chyihaur-statics-01/assets/images/60600f406c53617e9b95d5cb.jpg',
                        },
                    ],
                },
            ],
        }
    },

    methods: {
        // async fetchPortfolioList() {
        //     this.isLoading = true
        //     const result = await this.$apollo.query({
        //         // Query
        //         query: fetchPortfolios,
        //         // Parameters
        //         variables: {
        //             first: 30,
        //             skip: 0,
        //         },
        //     })
        //     this.isLoading = false
        //     console.log(this)
        //     console.log(result)
        // },
    },
}
</script>

<style lang="scss" scoped></style>
