<template>
    <div class="ArticleQuote">
        <div class="ArticleQuote__mark">
            <!-- <img :src="mark" alt="" /> -->
        </div>

        <div class="ArticleQuote__quote"><slot /></div>
    </div>
</template>

<script>
import mark from '~/static/images/mark.svg'
export default {
    data() {
        return {
            mark,
        }
    },
}
</script>

<style lang="scss" scoped>
.ArticleQuote {
    width: 100%;
    margin-bottom: 30px;

    display: flex;
    flex-direction: row;

    &__mark {
        margin-right: 19px;
        width: 29px;
        height: auto;
        // img {
        //     width: 100%;
        //     height: 100%;
        // }
        background-image: url('~static/images/mark.svg');
        background-position: center;
        background-size: 100% 100%;
    }

    &__quote {
        font-family: PingFang TC;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.75;

        text-align: justify;
        color: #000000;
        // height: 60px;
    }
}
</style>
