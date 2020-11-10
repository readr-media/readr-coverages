<template>
    <div
        class="StoryNav"
        id="StoryNav"
        :class="{ fixTopStoryNav: !notFixStoryNav }"
    >
        {{ currentChapter }}
        <div
            v-for="list in characterList"
            class="StoryNav__list"
            :class="{ current: currentChapter === list.id }"
            :key="list.id"
            @click="clickHandler(list)"
        >
            <span> {{ list.name }}</span>
            <span class="small-hide">{{ list.info.content }}</span>
        </div>
    </div>
</template>

<script>
import characterList from '~/mixins/characterList'
import gaMixin from '~/mixins/gaMixin'

export default {
    mixins: [characterList, gaMixin],
    props: ['notFixStoryNav', 'currentChapter'],

    data() {
        return {}
    },
    methods: {
        clickHandler(list) {
            this.gaClickHandler(`索引${list.gaLabel}`)

            const myEl = document.getElementById(`${list.id}`)
            this.$smoothScroll({
                scrollTo: myEl,
                // hash: '#StoryNav', // required if updateHistory is true
            })

            // this.$router.push(`/#${list.id}`)
        },
    },
}
</script>

<style lang="scss" scoped>
.StoryNav {
    position: absolute;
    z-index: 10;
    background: white;
    top: 0;
    left: 0;
    height: 41px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-bottom: solid 1px #9b9b9b;

    &__list {
        border-right: solid 1px #9b9b9b;
        padding: 0 14px;
        cursor: pointer;

        font-family: 'PingFang TC';
        font-size: 0.875rem;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 2;
        letter-spacing: normal;
        color: #9b9b9b;

        &:last-child {
            border: none;
        }
    }

    .small-hide {
        display: none;
    }

    @include atLarge {
        .small-hide {
            display: inline-block;
        }
    }
}

.nuxt-link-active {
    color: #000000 !important;
}

.fixTopStoryNav {
    position: fixed;
}

.current {
    color: black;
}
</style>
