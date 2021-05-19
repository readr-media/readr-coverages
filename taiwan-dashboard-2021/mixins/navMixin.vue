<template>
    <div></div>
</template>

<script>
export default {
    data() {
        return {
            navList: [
                {
                    id: 0,
                    title: '關於淇豪',
                    engTitle: 'ABOUT US',
                    link: 'about',
                    key: 'about',
                    logoUrl: require('@/static/images/logos/0.png'),
                },
                {
                    id: 1,
                    title: '服務項目',
                    engTitle: 'SERVICE',
                    link: '#service',
                    key: 'our-service',
                    logoUrl: require('@/static/images/logos/1.png'),
                },
                {
                    id: 2,
                    title: '流程介紹',
                    engTitle: 'WORKFLOW',
                    link: '#workflow',
                    key: 'workflow',
                    logoUrl: require('@/static/images/logos/2.png'),
                },
                {
                    id: 3,
                    title: '作品範例',
                    engTitle: 'PORTFOLIO',
                    link: 'portfolio',
                    key: 'portfolio',
                    logoUrl: require('@/static/images/logos/3.png'),
                },
                {
                    id: 4,
                    title: '聯絡我們',
                    engTitle: 'CONTACT',
                    link: 'contact',
                    key: 'contact',
                    logoUrl: require('@/static/images/logos/4.png'),
                },
                {
                    id: 5,
                    title: '七號倉庫',
                    engTitle: 'WEARHOUSE #7',
                    link: '',
                    key: 'n07-warehouse',
                    logoUrl: require('@/static/images/logos/4.png'),
                },
            ],
        }
    },

    methods: {
        chooseChapter(link) {
            if (!link) return

            const linkArray = link.split('#')
            const linkIsAnId = linkArray.length > 1
            if (linkIsAnId) {
                if (this.$route.name !== 'index') this.$router.push('/')

                const myEl = document.getElementById(`${linkArray[1]}`)
                this.$smoothScroll({
                    scrollTo: myEl,
                })
                return
            }

            this.$router.push(`/${link}`)
        },
    },
}
</script>

<style lang="scss" scoped></style>
