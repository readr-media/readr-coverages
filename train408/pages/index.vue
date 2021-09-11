<template>
  <div class="vt">
    <Navbar />
    <div class="vt__test">
      <span>測試標題</span>
    </div>
    <div class="vt__test">
      <button type="button" @click="toggleTest2">豬瘟</button>
      <button type="button" @click="toggleTest1">發電</button>
    </div>
    <Test2 v-if="shouldShowTest2" class="vt__content" />
    <Test1 v-if="shouldShowTest1" class="vt__content" />
    <Article v-if="shouldShowArticle" class="vt__article" />
    <AlsoConcern class="vt__also-concern" />
    <Resource class="vt__resource" />
    <Credit />
    <Donate />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Article from '~/components/Article.vue'
import Test1 from '~/components/Test1.vue'
import Test2 from '~/components/Test2.vue'
import AlsoConcern from '~/components/AlsoConcern.vue'
import Resource from '~/components/Resource.vue'
import Credit from '~/components/Credit.vue'
import Donate from '~/components/Donate.vue'
import Footer from '~/components/Footer.vue'
import gaMixin from '~/mixins/gaMixin'

export default {
  components: {
    Navbar,
    Article,
    Test1,
    Test2,
    AlsoConcern,
    Resource,
    Credit,
    Donate,
    Footer,
  },
  mixins: [gaMixin],
  data() {
    return {
      shouldShowTest1: false,
      shouldShowTest2: false,
      shouldShowArticle: true,
    }
  },
  methods: {
    toggleTest1() {
      this.shouldShowTest1 = !this.shouldShowTest1
      console.log('gg', this.shouldShowTest1)
    },
    toggleTest2() {
      this.shouldShowTest2 = !this.shouldShowTest2
      console.log('dd', this.shouldShowTest2)
    },
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
    min-height: 30vh;
    font-size: 70px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin: 0 40px;
    }
  }
  &__article {
    margin: 0 auto 24px;
  }
  &__also-concern {
    margin: 0 auto 96px;
    @include media-breakpoint-up(md) {
      margin: 0 auto 120px;
    }
  }
  &__resource {
    margin: 0 auto 72px;
    @include media-breakpoint-up(md) {
      margin: 0 auto 120px;
    }
  }
}
</style>
