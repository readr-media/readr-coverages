<template>
    <div class="RelativeArticles">
        <div class="RelativeArticles__title">|相關文章|</div>

        <div class="RelativeArticles__container">
            <Article
                v-for="article in relativeArticles"
                :key="article.id"
                :article="article"
            />
        </div>
    </div>
</template>

<script>
import Article from './Article'
export default {
    components: {
        Article,
    },
    data() {
        return {
            relativeArticles: [
                {
                    id: 1,
                    title: '美版周子飛──教科書上的悲劇：Genie Wiley的故事',
                    description:
                        '描述描述描述描述描述描述描述描述描述描述，描述描述描述描述，描述描述描述描述',
                    imageUrl: '',
                },
                {
                    id: 2,
                    title: '番外篇 2：獸的標籤──狼童、豬童與其他',
                    description:
                        '描述描述描述描述描述描述描述描述描述描述，描述描述描述描述，描述描述描述描述',
                    imageUrl: '',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.RelativeArticles {
    background: $lightBlue;
    padding: 40px 20px 37px;

    &__title {
        text-align: center;

        font-size: 20px;
        font-weight: 500;
        letter-spacing: 5px;
        color: #ffffff;

        margin-bottom: 20px;
    }

    &__container {
        display: flex;
        flex-direction: column;
    }
}
</style>
