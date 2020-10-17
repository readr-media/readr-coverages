<template>
    <div class="app">
        <Hero />
        <CharacterAbout />
        <StoryNav />
        <nuxt-child />
        <NextStep />
    </div>
</template>

<script>
import Hero from '../components/Hero'
import CharacterAbout from '../components/CharacterAbout/CharacterAbout'
import StoryNav from '../components/StoryNav'
import NextStep from '../components/NextStep/NextStep'

export default {
    components: {
        Hero,
        CharacterAbout,
        StoryNav,
        NextStep,
    },
}
</script>

<style></style>
