<template>
    <div class="StoryPage" id="StoryPage" ref="StoryPage">
        <StoryNav :fix="scrollPosition <= 0" />

        <div class="StoryPage__story_list">
            <Story1 />
            <Story2 />
            <Story3 />
            <Story4 />
        </div>
    </div>
</template>

<script>
import StoryNav from './StoryNav'

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

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('info-fixed')
                } else {
                    entry.target.classList.remove('info-fixed')
                }
            })
        })

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

    &__story_list {
        padding-top: 32px;
        width: 100%;
        margin: auto;
    }

    @include atLarge {
        &__story_list {
            padding-top: 41px;
            width: 850px;
            margin: auto;
        }
    }
}

.distance {
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    border: 1px red solid;
    padding: 10px;
    z-index: 999;
}
</style>
