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
        font-family: PingFang TC;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.75;
        letter-spacing: normal;
        text-align: justify;
    }
}
</style>
