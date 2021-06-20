<template>
  <div class="homepage">
    <Navbar />
    <div class="homepage__content">
      <LandingPage v-if="shouldShowLandingPage" />
      <Credit v-if="shouldShowCredit" />
      <Donate v-if="shouldShowDonate" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import LandingPage from '~/components/LandingPage.vue'
import Donate from '~/components/Donate.vue'
import Credit from '~/components/Credit.vue'
import Footer from '~/components/Footer.vue'
import gaMixin from '~/mixins/gaMixin'

export default {
  components: {
    Navbar,
    LandingPage,
    Donate,
    Credit,
    Footer,
  },
  mixins: [gaMixin],
  data() {
    return {
      isLoadingData: true,
      shouldShowLandingPage: true,
      shouldShowInquiryPage: false,
      shouldShowResultPage: false,
      shouldShowCredit: false,
      shouldShowDonate: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.homepage {
  min-height: 100vh;
  background: #f6f6f5;
  &__content {
    padding: 0 20px;
    margin: 24px 0 48px;
    min-height: calc(100vh - 224px - 72px);
    @include media-breakpoint-up(md) {
      margin: 60px 0 72px;
      min-height: calc(100vh - 240px - 132px);
    }
    @include media-breakpoint-up(lg) {
      min-height: calc(100vh - 152px - 132px);
    }
  }
}
</style>
