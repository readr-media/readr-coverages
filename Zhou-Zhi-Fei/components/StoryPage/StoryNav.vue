<template>
    <div class="StoryNav">
        <RoundMarker
            class="RoundMarker_open"
            :showBar="true"
            @click.native="toggleHandler"
            >17</RoundMarker
        >
        <div v-if="expandFlag" class="StoryNav__container">
            <div
                v-for="item in chapterList"
                :key="item.id"
                class="StoryNav__container_item"
            >
                {{ item.title }}
            </div>

            <RoundMarker
                class="RoundMarker_close"
                :showBar="false"
                @click.native="toggleHandler"
                >X</RoundMarker
            >
        </div>
    </div>
</template>

<script>
import chaperMixin from '~/mixins/chapterMixin'
import RoundMarker from '~/components/RoundMarker'
export default {
    components: {
        RoundMarker,
    },
    mixins: [chaperMixin],
    data() {
        return {
            expandFlag: true,
            currentChapter: '',
        }
    },
    methods: {
        toggleHandler() {
            this.expandFlag = !this.expandFlag
        },
    },
}
</script>

<style lang="scss" scoped>
.StoryNav {
    position: fixed;
    top: 0;
    z-index: 500;

    &__container {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 501;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &_item {
            width: 100%;
            height: calc(100vh / 6);
            background: $lightBlue;
            border-bottom: solid 1px #ffffff;

            font-size: 18px;
            line-height: 1.67;
            color: #ffffff;

            display: flex;
            align-items: center;
            justify-content: center;

            &:last-child {
                border-bottom: none;
            }
        }
    }

    .RoundMarker_open {
        z-index: 500;
        position: fixed;
        bottom: 21px;
        right: 0;
    }

    .RoundMarker_close {
        position: fixed;
        top: 0;
        right: 0;
    }
}
</style>
