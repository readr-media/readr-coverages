<template>
    <div class="intro">
        <!-- <video :src="heroVideo"></video> -->
        <Navbar />
        <Hero />
    </div>
</template>

<script>
import Navbar from '~/components/Navbar'

import Hero from '~/components/Hero'

// import ScrollMagic from 'scrollMagic'
export default {
    components: { Navbar, Hero },
    data() {
        return {}
    },
    mounted() {
        const intro = document.querySelector('.intro')
        // const video = intro.querySelector('video')
        //END SECTION
        const section = document.querySelector('.CharacterAbout')

        //SCROLLMAGIC
        const controller = new ScrollMagic.Controller()

        //Scenes
        let scene = new ScrollMagic.Scene({
            duration: 1300,
            triggerElement: intro,
            triggerHook: 0,
        })
            // .addIndicators()

            .setPin(intro)
            .addTo(controller)

        // Video Animation
        // let accelamount = 0.1
        // let scrollpos = 0
        // let delay = 0

        scene.on('end', (e) => {
            // scrollpos = e.scrollPos / 1000
            const cards = document.querySelectorAll('.Card')
            cards.forEach((card) => {
                card.classList.remove('hideCard')
            })
        })

        // setInterval(() => {
        //     delay += (scrollpos - delay) * accelamount
        //     // console.log(scrollpos, delay)

        //     video.currentTime = delay
        // }, 33.3)
    },
}
</script>

<style lang="scss" scoped>
.intro {
    z-index: 1;
    position: relative;
}
.scrollmagic-pin-spacer {
    background: black;
}

@include atMedium {
}
</style>
