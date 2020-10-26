<template>
    <div class="StoryPage" id="StoryPage" ref="StoryPage">
        <StoryNav :fix="scrollPosition <= 0" />

        <div class="StoryPage__wrapper">
            <transition name="fade">
                <StoryInfo :id="currentId" :notFixInfo="scrollPosition > 0" />
            </transition>
            <div
                class="StoryPage__story_list"
                :class="{ notFix: scrollPosition > 0 }"
            >
                <Story1 />
                <Story2 />
                <Story3 />
                <Story4 />
            </div>
        </div>
    </div>
</template>

<script>
import StoryNav from './StoryNav'
import StoryInfo from './StoryInfo'

import Story1 from '~/components/StoryPage/Story1'
import Story2 from '~/components/StoryPage/Story2'
import Story3 from '~/components/StoryPage/Story3'
import Story4 from '~/components/StoryPage/Story4'

import leftImg1 from '~/static/images/1_3.jpg'
import leftImg2 from '~/static/images/2_3.jpg'
import leftImg3 from '~/static/images/3_3.jpg'
import leftImg4 from '~/static/images/4_3.jpg'

import 'intersection-observer'
import scrollama from 'scrollama'

// reduce scroll eventListener count
function debounce(func, wait = 20, immediate = true) {
    var timeout
    return function () {
        var context = this,
            args = arguments
        var later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}
export default {
    components: {
        StoryNav,
        StoryInfo,

        Story1,
        Story2,
        Story3,
        Story4,
        leftImg1,
        leftImg2,
        leftImg3,
        leftImg4,
    },
    data() {
        return {
            currentId: 1,
            leftImg1,
            leftImg2,
            leftImg3,
            leftImg4,
            scrollPosition: 1000,
        }
    },
    methods: {
        updateScroll() {
            //get the element
            var elem = this.$refs.StoryPage
            //create viewport offset object
            var elemRect = elem.getBoundingClientRect()
            //get the offset from the element to the viewport
            var elemViewportOffset = elemRect.top

            this.scrollPosition = elemViewportOffset
        },
    },
    mounted() {
        // activate StoryNav scroll event listener
        window.addEventListener('scroll', debounce(this.updateScroll))

        // ---------------Handle storyNav fix-----------------
        // const scrollerStoryNav = scrollama()
        //    scrollerStoryInfo
        //     .setup({
        //         step: '.Story',
        //         offset: 0.5,
        //     })
        //     .onStepEnter((response) => {
        //         const { element, index, direction } = response

        //         this.currentId = parseInt(element.id)
        //     })
        //     .onStepExit((response) => {
        //         // { element, index, direction }
        //     })

        // ---------------Handle story info change effect-----------------
        const scrollerStoryInfo = scrollama()

        scrollerStoryInfo
            .setup({
                step: '.Story',
                offset: 0.5,
            })
            .onStepEnter((response) => {
                const { element, index, direction } = response

                this.currentId = parseInt(element.id)
            })
            .onStepExit((response) => {
                // { element, index, direction }
            })

        // ---------------Handle scene 3 hover scene2 effect-----------------
        // instantiate the scrollama
        const scrollerHover = scrollama()
        const characterAboutDOM = document.querySelectorAll(
            '.CharacterAbout__container'
        )
        const storyPageDOM = document.querySelector('.StoryPage')

        // setup the instance, pass callback functions
        scrollerHover
            .setup({
                step: '.StoryPage',
                offset: 1,
            })
            .onStepEnter((response) => {
                // { element, index, direction }
                const { element, index, direction } = response
                // console.log(characterAboutDOM)
                characterAboutDOM.forEach((characterAbout) => {
                    characterAbout.classList.add('fixScreen')
                })
            })
            .onStepExit((response) => {
                characterAboutDOM.forEach((characterAbout) => {
                    characterAbout.classList.remove('fixScreen')
                })
                // { element, index, direction }
            })
    },
}
</script>

<style lang="scss" scoped>
.StoryPage {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    background: white;
    z-index: 2;

    &__wrapper {
        width: 100%;
        display: flex;
        padding: $storyNavHeight 0;
    }

    &__story_list {
        width: 100%;
    }

    @include atSmall {
        &__story_list {
            width: 70%;
            margin-left: 30%;
        }
    }

    @include atLarge {
        &__wrapper {
            width: 850px;
            margin: auto;
            overflow: hidden;

            // padding-top: 41px;
        }

        &__story_list {
            width: 600px;
            margin-left: 250px;
        }
    }

    .idShow {
        position: fixed;
        top: 0;
        left: 0;
        padding: 10px;
        border: 1px red solid;
        background: wheat;
        z-index: 999;
    }
}
.notFix {
    margin-left: 0% !important;
}
</style>
