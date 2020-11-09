<template>
    <div class="Logo">
        <a v-if="!notLink" :href="logo.url" target="_blank">
            <img :src="logo.imageUrl" :alt="logo.alt" />
        </a>

        <img v-else :src="logo.imageUrl" :alt="logo.alt" />
    </div>
</template>

<script>
export default {
    props: ['logo', 'notLink'],
}
</script>

<style lang="scss" scoped>
.Logo {
    width: 40px;
    height: 40px;
    cursor: pointer;
    img,
    a {
        width: 100%;
        height: 100%;
    }
}
</style>
