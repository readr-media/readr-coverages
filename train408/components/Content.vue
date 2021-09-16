<template>
  <section class="content">
    <UiTimeLine
      v-show="shouldShowTimeline"
      id="time-line"
      class="time-line"
      @click-item="handleClick"
    />

    <UiVideoHide1
      v-if="shouldShowVideo1"
      class="content__video"
      @close-video="handleCloseVideo1"
    />
    <UiVideoHide2
      v-if="shouldShowVideo2"
      class="content__video"
      @close-video="handleCloseVideo2"
    />
    <UiVideoHide3
      v-if="shouldShowVideo3"
      class="content__video"
      @close-video="handleCloseVideo3"
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
      shouldShowTimeline: true,
      shouldShowVideo1: false,
      shouldShowVideo2: false,
      shouldShowVideo3: false,
      scrollDepth: 0,
    }
  },
  methods: {
    handleClick(i) {
      this.scrollDepth = document.body.offsetHeight
      console.log('hh', this.scrollDepth)
      this.shouldShowTimeline = false
      this.$emit('close-all')
      this[`shouldShowVideo${i + 1}`] = true
    },
    handleCloseVideo1() {
      this.shouldShowVideo1 = false
      this.$emit('open-all')
      this.shouldShowTimeline = true
      window.location.href = '#time-line'
    },
    handleCloseVideo2() {
      this.shouldShowVideo2 = false
      this.$emit('open-all')
      this.shouldShowTimeline = true
      window.location.href = '#time-line'
    },
    handleCloseVideo3() {
      this.shouldShowVideo3 = false
      this.$emit('open-all')
      this.shouldShowTimeline = true
      window.location.href = '#time-line'
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  min-height: 100vh;
  margin: auto;
  &__video {
    width: 100vw;
    min-height: 100vh;
  }
}
</style>
