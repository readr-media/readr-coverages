<template>
    <div class="Article">
        <div class="Article__image_container"></div>

        <div class="Article__text">
            <div class="Article__text_title">{{ article.title }}</div>

            <div class="Article__text_description">
                {{ article.description }}
            </div>
        </div>
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
    width: 100%;
    &:last-child {
        margin-bottom: 0px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    &__image_container {
        // width: 280px;
        // height: 187px;
        width: 280px;
        height: 187px;
        border: solid 1px #ffffff;

        margin-bottom: 20px;
    }

    &__text {
        &_title {
            font-size: 16px;
            font-weight: 500;
            text-align: justify;
            color: #ffffff;

            margin-bottom: 10px;
        }

        &_description {
            font-size: 16px;
            font-weight: normal;
            text-align: justify;
            color: #ffffff;
        }
    }

    @include atSmall {
        &__image_container {
            width: 480px;
            height: 320.571px;
        }
    }

    @include atMedium {
        flex-direction: row;
        align-items: flex-start;
        margin-bottom: 20px;

        &__image_container {
            width: 180px;
            height: 120px;
            margin-right: 20px;
            margin-bottom: 0;
        }

        &__text {
            width: 400px;
        }
    }
}
</style>
