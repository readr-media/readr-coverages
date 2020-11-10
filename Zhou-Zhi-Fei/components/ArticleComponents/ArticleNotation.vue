<template>
    <span class="ArticleNotation">
        <span class="ArticleNotation__title">
            <slot />
            <div class="ArticleNotation__title_icon" @click="notationToggle">
                <img
                    :src="!notationFlag ? notationIcon : notationIcon_off"
                    alt="notationIcon"
                />
            </div>
        </span>

        <div v-if="notationFlag" class="ArticleNotation__notation">
            {{ notation }}
        </div>
    </span>
</template>

<script>
import notationIcon from '~/static/images/notation.png'
import notationIcon_off from '~/static/images/notation_off.png'

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

    &__title {
        display: inline-block;
        &_icon {
            height: 24px;
            width: 24px;
            cursor: pointer;
            // position: absolute;
            // right: 6px;
            // left: 51px;
            display: inline-block;
            img {
                height: 100%;
                margin-bottom: -5px;
            }
        }
    }

    &__notation {
        border-radius: 14px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        border: solid 1px #006db2;
        background-color: #ffffff;
        padding: 13px;
        margin: 1rem auto 2rem;

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
