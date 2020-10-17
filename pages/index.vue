<template>
    <div class="app">
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
}
</script>

<style></style>
