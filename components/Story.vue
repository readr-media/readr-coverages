<template>
    <div class="Story">
        <div
            class="Story__left_image"
            :style="{ backgroundImage: `url(${leftImg})` }"
        ></div>
        <div class="Story__article">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: ['leftImg'],
}
</script>

<style lang="scss" scoped>
.Story {
    display: flex;
    flex-direction: row;
    width: 850px;
    margin: auto;

    &__left_image {
        width: 250px;
        margin-right: 60px;

        // background-attachment: fixed;
        background-size: 250px auto;
    }
    &__article {
        width: 480px;

        padding: 89px 0;
    }
}
</style>
