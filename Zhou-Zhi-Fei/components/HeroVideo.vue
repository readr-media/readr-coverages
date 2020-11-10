<template>
    <div class="HeroVideo">
        I am HeroVideo
        <div class="HeroVideo__footer">
            <span>照片來源：蔡明德攝影</span>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.HeroVideo {
    height: 100vh;
    background: black;
    position: relative;

    &__footer {
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        z-index: 20;
        position: relative;

        font-size: 14px;

        color: white;

        position: absolute;
        bottom: 20px;
        right: 20px;
    }
}
</style>
