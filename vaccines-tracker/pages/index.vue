<template>
  <div class="homepage">
    <Navbar />
    <Hero />
    <div class="homepage__diagram_wrapper"></div>
    <Donate />
    <Credit />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import Donate from '~/components/Donate.vue'
import Credit from '~/components/Credit.vue'
import Footer from '~/components/Footer.vue'
import gaMixin from '~/mixins/gaMixin'

export default {
  components: {
    Navbar,
    Hero,
    Donate,
    Credit,
    Footer,
  },
  mixins: [gaMixin],
  data() {
    return {
      isLoadingData: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.homepage {
  min-height: 100vh;
  background: #f6f6f5;

  &__diagram_wrapper {
    padding: 0 12px;

    // tablet range
    @include media-breakpoint-up(md) {
      padding: 0 40px;
    }
  }
}
</style>
