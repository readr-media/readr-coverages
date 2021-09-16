<template>
  <div class="tr">
    <Navbar />
    <UiVideoOpening v-show="!isFullVideo" class="tr__video" />
    <Cover v-show="!isFullVideo" @skip-content="handleSkipContent" />
    <UiVideoPart1 v-show="!isFullVideo" class="tr__video" />
    <Content
      v-show="shouldShowContent"
      @close-all="handleCloseAll"
      @open-all="handleOpenAll"
    />
    <UiVideoPart2 v-show="!isFullVideo" />
    <Report v-show="!isFullVideo" class="tr__report" />
    <Donate v-show="!isFullVideo" class="tr__donate" />
    <Credit v-show="!isFullVideo" class="tr__credit" />
    <LatestList v-show="!isFullVideo" class="tr__latest-list" />
    <Footer v-show="!isFullVideo" />
    <UiScrollDownBtn />
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
import Content from '~/components/Content.vue'
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
    Content,
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
      shouldShowContent: false,
      shouldSkipContent: false,
      shouldShowReport: true,
    }
  },
  mounted() {
    const scrollerCredit = scrollama()
    scrollerCredit
      .setup({
        step: '#cover-end',
      })
      .onStepEnter((response) => {
        if (response.direction === 'down' && !this.shouldSkipContent) {
          this.shouldShowContent = true
        }
      })
    window.addEventListener('resize', scrollerCredit.resize)
  },
  methods: {
    handleSkipContent() {
      this.shouldSkipContent = true
    },
    // handleResetSkip() {
    //   this.shouldSkipContent = true
    //   this.shouldShowContent = false
    // },
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
  min-height: 100vh;
  background: #111;
  &__video {
    min-height: 100vh;
  }
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
</style>
