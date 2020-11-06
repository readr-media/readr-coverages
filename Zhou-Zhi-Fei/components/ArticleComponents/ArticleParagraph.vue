<template>
    <div class="ArticleParagraph">
        <slot />
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.ArticleParagraph {
    width: 100%;
    margin-bottom: 30px;

    p {
        font-size: 1rem;
        line-height: 1.75;
        color: #4a4a4a;
        margin-bottom: 1rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
