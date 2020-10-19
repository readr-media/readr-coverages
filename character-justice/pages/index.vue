<template>
    <div class="app">
        YOYO
        <Hero />

        <CharacterAbout />

        <StoryNav />

        <nuxt-child />

        <NextStep />
        <Credit />
        <More />
        <Footer />
    </div>
</template>

<script>
import Hero from '../components/Hero'
import CharacterAbout from '../components/CharacterAbout/CharacterAbout'
import StoryNav from '../components/StoryNav'
import NextStep from '../components/NextStep/NextStep'
import Credit from '../components/Credit'
import More from '../components/More/More'
import Footer from '../components/Footer'

export default {
    components: {
        Hero,
        CharacterAbout,
        StoryNav,
        NextStep,
        Credit,
        More,
        Footer,
    },

    // mounted() {
    //     this.$router.push('/1')
    // },
}
</script>

<style>
.fixContainer {
    width: 100%;
    position: fixed;
}

.moveContainer {
    position: relative;
    width: 100%;
    /* margin-top: 1365.38px; */
    z-index: 10;
    /* background: white; */
}
</style>
