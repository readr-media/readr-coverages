<template>
    <div class="ArticleTitle">
        <slot />
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.ArticleTitle {
    width: 100%;
    // margin-bottom: 40px;
    font-family: PingFang TC;
    font-size: 28px;
    font-weight: normal;
    line-height: 1.29;
    color: #4a4a4a;

    @include atSmall {
        line-height: 1.79;
    }
}
</style>
