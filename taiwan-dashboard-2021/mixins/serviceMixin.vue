<template>
    <div></div>
</template>

<script>
export default {
    data() {
        return {
            serviceGroupList: [
                {
                    id: 0,
                    title: '設計',
                    backgroundUrl: require('@/static/images/portfolio/3.png'),
                    serviceList: [
                        {
                            id: 0,
                            group: 0,
                            title: '招牌設計',
                            icon: require('@/static/images/service/service_1.png'),
                            url: '',
                        },
                        {
                            id: 1,
                            group: 0,
                            title: '指標設計',
                            icon: require('@/static/images/service/service_2.png'),
                            url: '',
                        },
                        {
                            id: 2,
                            group: 0,
                            title: '平面視覺設計',
                            icon: require('@/static/images/service/service_3.png'),
                            url: '',
                        },
                        {
                            id: 3,
                            group: 0,
                            title: '環境視覺設計',
                            icon: require('@/static/images/service/service_4.png'),
                            url: '',
                        },
                    ],
                },
                {
                    id: 1,
                    title: '工程',
                    backgroundUrl: require('@/static/images/portfolio/2.png'),

                    serviceList: [
                        {
                            id: 4,
                            group: 1,
                            title: '招牌工程',
                            icon: require('@/static/images/service/service_5.png'),
                            url: '',
                        },
                        {
                            id: 5,
                            group: 1,
                            title: '指標工程',
                            icon: require('@/static/images/service/service_6.png'),
                            url: '',
                        },
                        {
                            id: 6,
                            group: 1,
                            title: '意象工程',
                            icon: require('@/static/images/service/service_7.png'),
                            url: '',
                        },
                    ],
                },
                {
                    id: 2,
                    title: '影像',
                    backgroundUrl: require('@/static/images/portfolio/1.png'),

                    serviceList: [
                        {
                            id: 7,
                            group: 2,
                            title: '商用攝影',
                            icon: require('@/static/images/service/service_8.png'),
                            url: '',
                        },
                        {
                            id: 8,
                            group: 2,
                            title: '意象攝影',
                            icon: require('@/static/images/service/service_9.png'),
                            url: '',
                        },
                    ],
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped></style>
