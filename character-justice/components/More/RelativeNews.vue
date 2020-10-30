<template>
    <div class="RelativeNews">
        <div class="RelativeNews__container">
            <latest-coverages />
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.RelativeNews {
    margin: auto;
    box-sizing: border-box;
    width: 100%;
    padding: 0 10px;

    &__title {
        background: rgb(224, 232, 254);
        display: block;
        padding: 14px 0 12px;
        text-align: center;
        font-size: 1.125rem;
        font-weight: 800;
        color: rgb(0, 39, 84);
        margin-bottom: 14px;
    }
    @include atSmall {
        width: 500px;
    }
    @include atMedium {
        width: 600px;
    }
}
</style>
