<template>
    <div class="app">
        <AnimateHero />

        <CharacterAbout />

        <StoryPage />

        <NextStep />
        <Credit />
        <More />
        <Footer />
    </div>
</template>

<script>
import AnimateHero from '~/components/AnimateHero/AnimateHero'

import Hero from '~/components/Hero'
import CharacterAbout from '~/components/CharacterAbout/CharacterAbout'
import NextStep from '~/components/NextStep/NextStep'
import Credit from '~/components/Credit'
import More from '~/components/More/More'
import Footer from '~/components/Footer'
import StoryPage from '~/components/StoryPage/StoryPage'

export default {
    components: {
        AnimateHero,
        Hero,
        CharacterAbout,
        NextStep,
        Credit,
        More,
        Footer,
        StoryPage,
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
