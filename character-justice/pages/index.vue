<template>
    <div class="app">
        <!-- <Navbar /> -->

        <!-- <PixiHero /> -->

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
import Navbar from '~/components/Navbar'

import PixiHero from '~/components/PixiHero'

import AnimateHero from '~/components/AnimateHero'
import Hero from '~/components/Hero'
import CharacterAbout from '~/components/CharacterAbout/CharacterAbout'
import NextStep from '~/components/NextStep/NextStep'
import Credit from '~/components/Credit'
import More from '~/components/More/More'
import Footer from '~/components/Footer'
import StoryPage from '~/components/StoryPage/StoryPage'

export default {
    components: {
        Navbar,

        AnimateHero,
        Hero,
        CharacterAbout,
        NextStep,
        Credit,
        More,
        Footer,
        StoryPage,
    },

    mounted() {
        // this.$ga.send('send', 'pageview')

        const hashId = $nuxt.$route.hash
        if (!hashId) return

        const storyId = parseInt(hashId.charAt(hashId.length - 1))
        const myEl = document.getElementById(`${storyId}`)

        setTimeout(() => {
            this.$smoothScroll({
                scrollTo: myEl,
            })
        }, 1500)
    },
}
</script>

<style>
.app {
    z-index: 0;
}

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
