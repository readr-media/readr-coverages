<template>
    <div class="StoryNav" id="StoryNav">
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
import characterList from '~/mixins/characterList'
export default {
    mixins: [characterList],
}
</script>

<style lang="scss" scoped>
.StoryNav {
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
</style>
