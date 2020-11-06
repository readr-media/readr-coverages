<template>
    <div class="StoryPage">
        <StoryNav />
        <Story1 />
    </div>
</template>

<script>
import StoryNav from './StoryNav'
import Story1 from './Story1'
export default {
    components: {
        StoryNav,
        Story1,
    },
}
</script>

<style lang="scss" scoped>
.StoryPage {
    min-height: 100vh;
    background: white;
    padding: 100px 20px 40px;
}
</style>
