<template>
    <a :href="news.url" target="_blank" @click="gaClickHandler('分析篇')">
        <div class="AnalyzePreview">
            <div class="AnalyzePreview__image">
                <img :src="news.image" alt="" />
            </div>
            <div class="AnalyzePreview__text">
                <div class="AnalyzePreview__text_title">{{ news.title }}</div>
                <div v-if="news.date" class="AnalyzePreview__text_date">
                    {{ news.date }}
                </div>
            </div>
        </div>
    </a>
</template>

<script>
import gaMixin from '~/mixins/gaMixin'

export default {
    props: ['news'],
    mixins: [gaMixin],
}
</script>

<style lang="scss" scoped>
.AnalyzePreview {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    // margin-top: 14px;

    &__image {
        width: 100%;
        height: 100%;
        overflow: hidden;
        img {
            width: 100%;
        }
    }

    &__text {
        width: 100%;
        padding: 0 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        color: black;

        &_title {
            font-size: 21px;
            font-weight: 500;

            line-height: 1.52;
        }

        &_date {
            margin-bottom: 19px;
            opacity: 0.6;
            font-size: 0.75px;
        }
    }

    @include atSmall {
        flex-direction: row;
        &__image {
            width: 40%;
        }
        &__text {
            width: 60%;
            &_title {
                font-size: 1rem;
            }
        }
    }
}
</style>
