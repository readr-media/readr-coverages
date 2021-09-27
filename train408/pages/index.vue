<template>
  <div class="tr">
    <Navbar />
    <div v-show="!isFullVideo" class="tr__cover">
      <UiVideoOpening v-if="!hasSkip" class="tr__cover__video" />
      <div id="cover-start-anchor" />
      <Cover class="tr__cover__text" @skip-content="handleSkipContent" />
    </div>
    <div v-show="shouldShowContent" class="tr__content">
      <LazyRenderer>
        <UiVideoPart1
          v-show="!isFullVideo"
          v-if="!hasSkip"
          class="tr__content__video"
        />
      </LazyRenderer>
      <SelectContent
        class="tr__content__select"
        @close-all="handleCloseAll"
        @open-all="handleOpenAll"
      />
      <LazyRenderer>
        <UiVideoPart2 v-show="!isFullVideo" class="tr__content__video" />
      </LazyRenderer>
    </div>
    <div v-show="!isFullVideo" class="tr__remain">
      <Report
        class="tr__remain__report"
        @reset-skip="handleResetSkip"
        @hide-down-icon="handleHideScrollIcon"
      />
      <Donate class="tr__remain__donate" />
      <Credit class="tr__remain__credit" />
      <LatestList class="tr__remain__latest-list" />
      <Footer />
    </div>
    <UiScrollDownBtn v-show="shouldShowScrollBtn" />
  </div>
</template>

<script>
import scrollama from 'scrollama'
import 'intersection-observer'
import Navbar from '~/components/Navbar.vue'
import UiVideoOpening from '~/components/UiVideoOpening.vue'
import UiVideoPart1 from '~/components/UiVideoPart1.vue'
import UiVideoPart2 from '~/components/UiVideoPart2.vue'
import Cover from '~/components/Cover.vue'
import SelectContent from '~/components/SelectContent.vue'
import Report from '~/components/Report.vue'
import Credit from '~/components/Credit.vue'
import Donate from '~/components/Donate.vue'
import LatestList from '~/components/LatestList.vue'
import Footer from '~/components/Footer.vue'
import UiScrollDownBtn from '~/components/UiScrollDownBtn.vue'
import gaMixin from '~/mixins/gaMixin'

export default {
  components: {
    Navbar,
    UiVideoOpening,
    UiVideoPart1,
    UiVideoPart2,
    Cover,
    SelectContent,
    Report,
    Credit,
    Donate,
    LatestList,
    Footer,
    UiScrollDownBtn,
  },
  mixins: [gaMixin],
  data() {
    return {
      isFullVi: true,
      isFullVideo: false,
      shouldShowContent: true,
      shouldShowReport: true,
      shouldShowScrollBtn: true,
      hasSkip: false,
      coverDepth: 0,
    }
  },
  mounted() {
    const scrollerCredit = scrollama()
    scrollerCredit
      .setup({
        step: '#cover-start-anchor',
      })
      .onStepExit((response) => {
        if (response.direction === 'down') {
          this.coverDepth = window.pageYOffset
        }
      })
    window.addEventListener('resize', scrollerCredit.resize)
  },
  methods: {
    handleSkipContent() {
      this.shouldShowContent = false
      this.hasSkip = true
    },
    handleResetSkip() {
      // window.location.href = '#cover-start'
      this.hasSkip = false
      setTimeout(() => {
        window.scrollTo(0, this.coverDepth + 400)
      }, 5)
      this.shouldShowContent = true
      this.shouldShowScrollBtn = true
    },
    handleHideScrollIcon() {
      this.shouldShowScrollBtn = false
    },
    handleCloseAll() {
      this.isFullVideo = true
    },
    handleOpenAll() {
      this.isFullVideo = false
    },
  },
}
</script>

<style lang="scss" scoped>
.tr {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #111;
  &__cover {
    width: 100%;
    &__video {
      width: 100%;
      min-height: 100vh;
    }
    &__text {
      width: 100%;
      min-height: 200vh;
    }
  }
  &__content {
    width: 100%;
    min-height: 200vh;
    &__select {
      width: 100%;
      min-height: 100vh;
      margin: 0 auto;
    }
    &__video {
      width: 100%;
      min-height: 100vh;
    }
    &__timeline-anchor {
      margin: 0 0 200px;
    }
  }
  &__remain {
    width: 100%;
    &__donate {
      margin: 0 auto 72px;
      @include media-breakpoint-up(md) {
        margin: 0 auto 108px;
      }
    }
    &__credit {
      margin: 0 0 72px;
      @include media-breakpoint-up(md) {
        margin: 0 0 108px;
      }
    }
    &__latest-list {
      margin: 0 auto 72px;
    }
  }
}
</style>
