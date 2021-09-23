<template>
  <section class="select-content">
    <UiVideoHide1
      v-if="shouldShowVideo1"
      class="select-content__video"
      @close-video="handleCloseVideo1"
    />
    <UiVideoHide2
      v-if="shouldShowVideo2"
      class="select-content__video"
      @close-video="handleCloseVideo2"
    />
    <UiVideoHide3
      v-if="shouldShowVideo3"
      class="select-content__video"
      @close-video="handleCloseVideo3"
    />
    <UiTimeLine
      v-show="shouldShowTimeline"
      class="select-content__timeline"
      @click-item="handleClick"
    />
  </section>
</template>

<script>
import UiTimeLine from '~/components/UiTimeLine.vue'
import UiVideoHide1 from '~/components/UiVideoHide1.vue'
import UiVideoHide2 from '~/components/UiVideoHide2.vue'
import UiVideoHide3 from '~/components/UiVideoHide3.vue'

export default {
  components: {
    UiTimeLine,
    UiVideoHide1,
    UiVideoHide2,
    UiVideoHide3,
  },
  data() {
    return {
      depth: 0,
      shouldShowTimeline: true,
      shouldShowVideo1: false,
      shouldShowVideo2: false,
      shouldShowVideo3: false,
    }
  },
  methods: {
    handleClick(i) {
      this.depth = window.pageYOffset
      console.log('depth', this.depth)
      this.shouldShowTimeline = false
      this.$emit('close-all')
      this[`shouldShowVideo${i + 1}`] = true
    },
    handleCloseVideo1() {
      this.shouldShowVideo1 = false
      this.$emit('open-all')
      this.shouldShowTimeline = true
      console.log('depth 1', this.depth)
      setTimeout(() => {
        window.scrollTo(0, this.depth - 500)
      }, 5)
      // window.location.href = '#timeline'
    },
    handleCloseVideo2() {
      this.shouldShowVideo2 = false
      this.$emit('open-all')
      this.shouldShowTimeline = true
      console.log('depth 2', this.depth)
      setTimeout(() => {
        window.scrollTo(0, this.depth - 500)
      }, 5)
      // window.location.href = '#timeline'
    },
    handleCloseVideo3() {
      this.shouldShowVideo3 = false
      this.$emit('open-all')
      this.shouldShowTimeline = true
      console.log('depth 3', this.depth)
      setTimeout(() => {
        window.scrollTo(0, this.depth - 500)
      }, 5)
      // window.location.href = '#timeline'
    },
  },
}
</script>

<style lang="scss" scoped>
.select-content {
  &__timeline {
    width: 100%;
    min-height: 100vh;
  }
  &__video {
    width: 100%;
    min-height: 100vh;
  }
}
</style>
