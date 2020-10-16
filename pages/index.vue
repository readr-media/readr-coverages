<template>
    <div class="app">
        <Hero />
        <CharacterAbout />
        <StoryNav />
        <nuxt-child />
    </div>
</template>

<script>
import Hero from '../components/Hero'
import CharacterAbout from '../components/CharacterAbout/CharacterAbout'
import StoryNav from '../components/StoryNav'

export default {
    components: {
        Hero,
        CharacterAbout,
        StoryNav,
    },
}
</script>

<style></style>
