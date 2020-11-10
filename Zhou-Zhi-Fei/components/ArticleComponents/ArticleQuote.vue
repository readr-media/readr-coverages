<template>
    <div class="ArticleQuote">
        <div class="ArticleQuote__mark"></div>

        <div class="ArticleQuote__quote"><slot /></div>
    </div>
</template>

<script>
import mark from '~/static/images/markNew.png'
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
    align-items: stretch;
    justify-content: flex-start;

    &__mark {
        margin-right: 19px;
        flex-basis: 16px;
        flex-grow: 0;
        flex-shrink: 0;

        border: 4px solid #e0c950;
        border-right: none;
    }

    &__quote {
        flex-grow: 1;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.75;

        text-align: justify;
        color: #000000;
    }
}
</style>
