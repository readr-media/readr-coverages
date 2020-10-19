<template>
    <span class="ArticleNotation" @click="notationToggle">
        <slot />&emsp;&emsp;
        <span class="ArticleNotation__icon">
            <img :src="notationIcon" alt="notationIcon"
        /></span>

        <div v-if="notationFlag" class="ArticleNotation__notation">
            {{ notation }}
        </div>
    </span>
</template>

<script>
import notationIcon from '../../images/notation.svg'
export default {
    props: ['notation'],
    data() {
        return {
            notationIcon,
            notationFlag: false,
        }
    },
    methods: {
        notationToggle() {
            this.notationFlag = !this.notationFlag
        },
    },
}
</script>

<style lang="scss" scoped>
.ArticleNotation {
    cursor: pointer;
    color: #006eb8;
    position: relative;
    &__icon {
        position: absolute;
        right: 6px;

        height: 31px;
        img {
            height: 100%;
        }
    }

    &__notation {
        position: absolute;
        top: 1.5rem;
        width: 300px;
        right: -130px;
        background: white;
        box-sizing: border-box;
        padding: 15px;
        border: solid 1px #9b9b9b;
    }
}
</style>
