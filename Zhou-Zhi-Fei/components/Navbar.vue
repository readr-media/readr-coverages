<template>
    <div class="Navbar" :class="{ showNavbar: showNavbar }">I am Navbar</div>
</template>

<script>
export default {
    data() {
        return {
            showNavbar: true,
            lastScrollPosition: 0,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll() {
            // Get the current scroll position
            const currentScrollPosition =
                window.pageYOffset || document.documentElement.scrollTop
            // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (currentScrollPosition < 0) {
                return
            }
            // Here we determine whether we need to show or hide the navbar
            this.showNavbar = currentScrollPosition < this.lastScrollPosition
            // Set the current scroll position as the last scroll position
            this.lastScrollPosition = currentScrollPosition
        },
    },
}
</script>

<style lang="scss" scoped>
.Navbar {
    height: 78px;
    width: 100%;
    position: fixed;
    background: rgba(255, 255, 255, 0.9);
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;

    top: -78px;
    transition: top 0.2s ease-in-out;
}

.showNavbar {
    top: 0;
}
</style>
