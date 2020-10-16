<template>
    <div class="PictureContainer">
        <div class="PictureContainer__img">
            <img :src="imageUrl[selected]" alt="" />
        </div>

        <div class="PictureContainer__content">
            <slot />
        </div>

        <div v-if="imageUrl.length > 1" class="PictureContainer__navigation">
            <div
                v-for="(selection, index) in imageUrl"
                :key="index"
                class="PictureContainer__navigation_selection"
                :class="{ selected: selected === index }"
                @click="selectionHandler(index)"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['imageUrl'],
    data() {
        return {
            selected: 0,
        }
    },
    methods: {
        selectionHandler(index) {
            this.selected = index
        },
    },
}
</script>

<style lang="scss" scoped>
.PictureContainer {
    width: 360px;
    margin: auto;
    margin-bottom: 40px;
    &__img {
        width: 100%;
        display: flex;
        flex-direction: row;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
    &__content {
        font-family: PingFang TC;
        font-size: 15px;
        font-weight: normal;

        color: #4a4a4a;
    }

    a {
        color: #006db2;
    }

    &__navigation {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        &_selection {
            width: 14px;
            height: 14px;
            border: solid 1px #e0c950;
            background-color: #ffffff;
            border-radius: 7px;

            margin-right: 20px;
            &:last-child {
                margin-right: 0;
            }
            cursor: pointer;
        }
    }

    .selected {
        background-color: #e0c950;
    }
}
</style>
