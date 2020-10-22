<template>
    <div class="StoryInfoSmall" :key="infoList[id - 1].id" :id="id">
        <div class="StoryInfoSmall__image">
            <img :src="infoList[id - 1].image" alt="" />
        </div>

        <div class="StoryInfoSmall__content">
            <div class="StoryInfoSmall__content_name">
                {{ infoList[id - 1].name }} 小檔案
            </div>
            <ul class="StoryInfoSmall__content_list">
                <li v-for="(list, index) in infoList[id - 1].info" :key="index">
                    <ListDot color="#ffffff" />
                    {{ list }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import infoList from '~/mixins/infoList'
import ListDot from '~/components/ListDot'

export default {
    mixins: [infoList],
    props: ['id'],
    components: {
        ListDot,
    },
}
</script>

<style lang="scss" scoped>
.StoryInfoSmall {
    position: relative;
    display: block;
    z-index: 0;
    width: 100%;
    height: 586px;
    background-color: #e0c950;

    &__image {
        overflow: hidden;
        height: 100%;
        img {
            width: 100%;
        }
    }

    &__content {
        background-color: rgba(224, 201, 80, 0.8);
        padding: 16px 29px;

        font-weight: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000000;

        position: absolute;
        bottom: 0;

        &_name {
            font-size: 21px;
            margin-bottom: 10px;
        }

        &_list li {
            font-size: 16px;
            line-height: 1.75;
            text-align: justify;
        }
    }

    @include atSmall {
        display: none;
    }

    ul {
        list-style: none;
    }

    li {
        margin-left: 1rem;
    }
}
</style>
