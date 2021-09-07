<template>
  <div class="vt">
    <Navbar />
    <div class="vt__test">
      <span>測試標題</span>
    </div>
    <div id="42c8899d-f785-434d-a8a8-1e56234dc10f" class="vt__content"></div>
    <Credit />
    <Donate />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Credit from '~/components/Credit.vue'
import Donate from '~/components/Donate.vue'
import Footer from '~/components/Footer.vue'
import gaMixin from '~/mixins/gaMixin'

export default {
  components: {
    Navbar,
    Credit,
    Donate,
    Footer,
  },
  mixins: [gaMixin],
  mounted() {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.crossOrigin = true
    script.src =
      'https://unpkg.com/@twreporter/scrollable-video@1.0.0-rc.3/dist/main.142ef5f0d6d2dfdb8b8d.bundle.js'
    document.body.appendChild(script)
  },
}
</script>

<style lang="scss" scoped>
.vt {
  position: relative;
  min-height: 100vh;
  background: #000;
  &__content {
    padding: 0 20px;
    margin: 0 0 48px;
    min-height: calc(100vh - 224px - 72px);
    @include media-breakpoint-up(md) {
      margin: 0 0 40px;
      min-height: calc(100vh - 240px - 132px);
    }
    @include media-breakpoint-up(lg) {
      min-height: calc(100vh - 152px - 132px);
    }
  }
  &__test {
    min-height: 80vh;
    font-size: 70px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
