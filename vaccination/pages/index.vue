<template>
  <div class="vt">
    <Navbar />
    <div id="758f9b6b-e4ec-42a3-a283-f1a907be632e" class="vt__content" />
    <Donate />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Donate from '~/components/Donate.vue'
import Footer from '~/components/Footer.vue'
import gaMixin from '~/mixins/gaMixin'

export default {
  components: {
    Navbar,
    Donate,
    Footer,
  },
  mixins: [gaMixin],
  mounted() {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.crossOrigin = true
    script.src =
      'https://unpkg.com/@twreporter/dual-channel@2.1.2-rc.3/dist/main.7aad321840e7ae014aa8.bundle.js'
    document.body.appendChild(script)
  },
}
</script>

<style lang="scss" scoped>
.vt {
  position: relative;
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
