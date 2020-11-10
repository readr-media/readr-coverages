<template>
    <div class="StoryPage" :class="{ fixMobileStoryNav: isStoryPageFull }">
        <MobileStoryNav />

        <StoryNav class="StoryPage__nav" />

        <div class="StoryPage__story_container">
            <Story1 />
        </div>
    </div>
</template>

<script>
import scrollama from 'scrollama'

import StoryNav from './StoryNav'
import MobileStoryNav from './MobileStoryNav'
import Story1 from './Story1'

// import 'intersection-observer'
export default {
    components: {
        MobileStoryNav,
        StoryNav,
        Story1,
    },

    data() {
        return {
            isStoryPageFull: false,
        }
    },

    mounted() {
        // ---------------Handle storyNav fix-----------------
        const scrollerStoryNav = scrollama()
        scrollerStoryNav
            .setup({
                step: '.StoryPage',
                offset: 0,
            })
            .onStepEnter((response) => {
                this.isStoryPageFull = true
            })
            .onStepExit((response) => {
                this.isStoryPageFull = false
            })

        window.addEventListener('resize', scrollerStoryNav.resize)
    },
}
</script>

<style lang="scss" scoped>
.StoryPage {
    z-index: 10;
    min-height: 100vh;
    background: white;
    padding: 0 20px 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    &__nav {
        display: none;
    }

    &__story_container {
        width: 100%;
        padding: 100px 0 40px;
    }

    .MobileStoryNav {
        display: block;
    }

    @include atMedium {
        padding: 0 0 40px;

        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-end;

        .MobileStoryNav {
            display: none;
        }

        &__nav {
            display: flex;

            width: 30%;
        }

        &__story_container {
            padding-left: 128px;
            width: 70%;
        }
    }

    @include atLarge {
        padding: 0 0 40px;

        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-end;

        .MobileStoryNav {
            display: none;
        }

        &__nav {
            display: flex;

            width: 36%;
        }

        &__story_container {
            padding-left: 128px;
            width: 64%;
        }
    }
}

.fixMobileStoryNav {
    @include atMedium {
        .StoryPage__nav {
            position: fixed;
            top: 0%;
            left: 0;

            width: 30%;
        }
    }

    @include atLarge {
        .StoryPage__nav {
            position: fixed;
            top: 0%;
            left: 0;

            width: 36%;
        }
    }
}
</style>
