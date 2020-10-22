<template>
    <div class="StoryPage" id="StoryPage" ref="StoryPage">
        <div class="idShow">{{ currentId }}</div>

        <StoryNav :fix="scrollPosition <= 0" />

        <div class="StoryPage__wrapper">
            <transition name="fade">
                <StoryInfo :id="currentId" />
            </transition>
            <div class="StoryPage__story_list">
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

        // activate each story's position observer
        // if story's position reach to top, then set left info to fixed(class:info-fixed)
        const storys = document.querySelectorAll('.Story')

        const observer = new IntersectionObserver(
            (entries) => {
                console.log(entries[0].intersectionRatio)
                console.log(entries[0].target.id)

                entries.forEach((entry, index) => {
                    // component in view
                    if (entry.intersectionRatio > 0) {
                        this.currentId = parseInt(entry.target.id)

                        // component out of view
                    } else {
                        // first one:do nothing
                        if (this.currentId === 1) return

                        //srcoll up, then current -1
                        // scroll down & prev disappear wont trigger this callback
                        if (parseInt(entry.target.id) === this.currentId) {
                            console.log('FUCK')
                            this.currentId = this.currentId - 1
                        }
                    }
                })
            },
            {
                rootMargin: '200px 0px 200px 0px',
            }
        )

        storys.forEach((story) => {
            observer.observe(story)
        })
    },
}
</script>

<style lang="scss" scoped>
.StoryPage {
    position: relative;
    width: 100%;

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
            width: 800px;
            margin: auto;
            overflow: hidden;

            // padding-top: 41px;
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
</style>
