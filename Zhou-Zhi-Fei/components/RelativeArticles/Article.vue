<template>
    <div class="Article">
        <div class="Article__image_container"></div>

        <div class="Article__title">{{ article.title }}</div>

        <div class="Article__description">{{ article.description }}</div>
    </div>
</template>

<script>
export default {
    props: ['article'],
}
</script>

<style lang="scss" scoped>
.Article {
    margin-bottom: 40px;
    &:last-child {
        margin-bottom: 0px;
    }

    &__image_container {
        width: 280px;
        height: 187px;
        border: solid 1px #ffffff;

        margin-bottom: 20px;
    }

    &__title {
        font-size: 16px;
        font-weight: 500;
        text-align: justify;
        color: #ffffff;

        margin-bottom: 10px;
    }

    &__description {
        font-size: 16px;
        font-weight: normal;
        text-align: justify;
        color: #ffffff;
    }
}
</style>
