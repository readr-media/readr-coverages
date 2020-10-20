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

import Story1 from './Story1'
import Story2 from './Story2'
import Story3 from './Story3'
import Story4 from './Story4'

import leftImg1 from '../../images/1_3.jpg'
import leftImg2 from '../../images/2_3.jpg'
import leftImg3 from '../../images/3_3.jpg'
import leftImg4 from '../../images/4_3.jpg'

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
            console.log('YOYO')

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
        window.addEventListener('scroll', this.updateScroll)

        // window.addEventListener('scroll', debounce(this.updateScroll))
    },
}
</script>

<style lang="scss" scoped>
.StoryPage {
    position: relative;

    &__story_list {
        padding-top: 41px;
        width: 850px;
        margin: auto;
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
