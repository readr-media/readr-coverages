<template>
    <div class="container">
        <Navbar />
        <Hero />
        <HeroVideo />
        <StoryPage />
        <Video />
        <RelativeArticles />
        <Credit />
    </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Hero from '~/components/Hero'
import HeroVideo from '~/components/HeroVideo'
import StoryPage from '~/components/StoryPage/StoryPage'
import Video from '~/components/Video'
import RelativeArticles from '~/components/RelativeArticles/RelativeArticles'
import Credit from '~/components/Credit'
export default {
    components: {
        Navbar,
        Hero,
        HeroVideo,
        StoryPage,
        Video,
        RelativeArticles,
        Credit,
    },
}
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
}
</style>
