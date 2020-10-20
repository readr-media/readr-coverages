<template>
    <div class="StoryNav" id="StoryNav" :class="{ fixTop: fix }">
        <div
            class="StoryNav__list"
            v-for="list in characterList"
            :key="list.id"
        >
            <router-link :to="list.url"
                >{{ list.name }} {{ list.info.content }}</router-link
            >
        </div>
    </div>
</template>

<script>
import characterList from '../../mixins/characterList'

function debounce(func, wait = 20, immediate = true) {
    var timeout
    return function () {
        var context = this,
            args = arguments
        var later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}
export default {
    mixins: [characterList],
    props: ['fix'],

    data() {
        return {}
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
        a {
            font-family: PingFangTC;
            font-size: 0.875rem;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 2;
            letter-spacing: normal;
            color: #9b9b9b;
        }

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
