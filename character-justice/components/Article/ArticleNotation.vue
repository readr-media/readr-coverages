<template>
    <span class="ArticleNotation">
        <slot />&emsp;&emsp;
        <span class="ArticleNotation__icon" @click="notationToggle">
            <img
                :src="!notationFlag ? notationIcon : notationIcon_off"
                alt="notationIcon"
        /></span>

        <div v-if="notationFlag" class="ArticleNotation__notation">
            {{ notation }}
        </div>
    </span>
</template>

<script>
import notationIcon from '../../images/notation.svg'
import notationIcon_off from '../../images/notation_off.svg'

export default {
    props: ['notation'],
    data() {
        return {
            notationIcon,
            notationIcon_off,
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
    color: #006eb8;
    position: relative;
    &__icon {
        cursor: pointer;
        position: absolute;
        // right: 6px;
        left: 51px;

        height: 31px;
        img {
            height: 100%;
        }
    }

    &__notation {
        // position: absolute;
        // top: 1rem;
        // width: 480px;
        // right: -130px;
        // background: white;
        // box-sizing: border-box;
        // padding: 15px;
        // border: solid 1px #9b9b9b;
        border-radius: 14px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        border: solid 1px #006db2;
        background-color: #ffffff;
        padding: 13px;
        margin: 1rem auto 2rem;

        font-family: PingFangTC;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        text-align: justify;
        color: #4a4a4a;
    }
}
</style>
