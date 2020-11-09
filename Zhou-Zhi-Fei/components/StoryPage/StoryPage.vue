<template>
    <div class="StoryPage">
        <MobileStoryNav />

        <div class="StoryPage__container">
            <StoryNav class="StoryPage__nav" :currentChapter="currentChapter" />
            <div class="StoryPage__story_container">
                <Story1 />
            </div>
        </div>
    </div>
</template>

<script>
import StoryNav from './StoryNav'
import MobileStoryNav from './MobileStoryNav'
import Story1 from './Story1'
export default {
    components: {
        MobileStoryNav,
        StoryNav,
        Story1,
    },
    data() {
        return {
            currentChapter: 1,
        }
    },
}
</script>

<style lang="scss" scoped>
.StoryPage {
    min-height: 100vh;
    background: white;
    padding: 0 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

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
        .MobileStoryNav {
            display: none;
        }
        &__container {
            flex-direction: row;
            align-items: flex-start;
        }

        &__nav {
            display: block;

            width: 28%;
        }

        &__story_container {
            padding-left: 10%;
            width: 72%;
        }
    }

    @include atLarge {
        &__container {
            width: 720px;
        }
        &__nav {
            width: 192px;
        }

        &__story_container {
            width: 528px;
            padding-left: 128px;
        }
    }
}
</style>
