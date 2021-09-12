<template>
  <div class="tr">
    <Navbar />
    <Cover @skip-content="handleSkipContent" />
    <Content v-if="shouldShowContent" />
    <Report v-if="shouldShowReport" class="tr__report" />
    <Donate class="tr__donate" />
    <Credit class="tr__credit" />
    <LatestList class="tr__latest-list" />
    <Footer />
    <UiScrollDownBtn />
  </div>
</template>

<script>
import scrollama from 'scrollama'
import 'intersection-observer'
import Navbar from '~/components/Navbar.vue'
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
    handleResetSkip() {
      this.shouldSkipContent = true
      this.shouldShowContent = false
    },
  },
}
</script>

<style lang="scss" scoped>
.tr {
  position: relative;
  min-height: 100vh;
  background: #111;
  &__donate {
    margin: 0 0 72px;
    @include media-breakpoint-up(md) {
      margin: 108px;
    }
  }
  &__credit {
    margin: 0 0 72px;
    @include media-breakpoint-up(md) {
      margin: 108px;
    }
  }
  &__latest-list {
    margin: 0 auto 72px;
  }
}
</style>
