<template>
    <div class="Navbar">
        <readr-header />
        <div class="Navbar__anchor"></div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.Navbar {
    position: relative;
    z-index: 1;
    background: white;
    width: 100%;
    // height: 85px;

    &__anchor {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 0;
    }
}
</style>
