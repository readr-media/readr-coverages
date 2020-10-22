<template>
    <div class="intro">
        <h1>The New Dev Ed Pro</h1>
        <video :src="heroVideo"></video>
    </div>
</template>

<script>
import heroVideo from '~/static/videos/Hero.mp4'
// import ScrollMagic from 'scrollMagic'
export default {
    data() {
        return {
            heroVideo,
        }
    },
    mounted() {
        const intro = document.querySelector('.intro')
        const video = intro.querySelector('video')
        const text = intro.querySelector('h1')
        //END SECTION
        const section = document.querySelector('.CharacterAbout')
        const end = section.querySelector('h1')

        //SCROLLMAGIC
        const controller = new ScrollMagic.Controller()

        //Scenes
        let scene = new ScrollMagic.Scene({
            duration: 1000,
            triggerElement: intro,
            triggerHook: 0,
        })
            .addIndicators()
            .setPin(intro)
            .addTo(controller)

        //Text Animation
        const textAnim = TweenMax.fromTo(
            text,
            3,
            { opacity: 1 },
            { opacity: 0 }
        )

        let scene2 = new ScrollMagic.Scene({
            duration: 3000,
            triggerElement: intro,
            triggerHook: 0,
        })
            .setTween(textAnim)
            .addTo(controller)

        // Video Animation
        let accelamount = 0.1
        let scrollpos = 0
        let delay = 0

        scene.on('update', (e) => {
            scrollpos = e.scrollPos / 1000
        })

        setInterval(() => {
            delay += (scrollpos - delay) * accelamount
            // console.log(scrollpos, delay)

            video.currentTime = delay
        }, 33.3)
    },
}
</script>

<style lang="scss" scoped>
.intro {
    height: 100vh;
    position: relative;
    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 40px;
        color: white;
    }

    video {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
</style>
