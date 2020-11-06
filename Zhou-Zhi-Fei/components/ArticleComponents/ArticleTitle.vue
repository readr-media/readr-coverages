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
    font-size: 28px;
    font-weight: 600;
    text-align: justify;
    color: #4a4a4a;

    margin-bottom: 20px;
    @include atSmall {
    }
}
</style>
