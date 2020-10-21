<template>
    <div class="StoryNav" id="StoryNav" :class="{ fixTop: fix }">
        <div
            class="StoryNav__list"
            v-for="list in characterList"
            :key="list.id"
            @click="clickHandler(list.id)"
        >
            {{ list.name }} {{ list.info.content }}
        </div>
    </div>
</template>

<script>
import characterList from '~/mixins/characterList'

export default {
    mixins: [characterList],
    props: ['fix'],

    data() {
        return {}
    },
    methods: {
        clickHandler(id) {
            const myEl = document.getElementById(`${id}`)

            this.$smoothScroll({
                scrollTo: myEl,
                // hash: '#StoryNav', // required if updateHistory is true
            })
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

        font-family: PingFangTC;
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
}

.nuxt-link-active {
    color: #000000 !important;
}

.fixTop {
    position: fixed;
}
</style>
