<template>
  <div class="tr">
    <Navbar />
    <Cover @skip-content="handleSkipContent" />
    <Content v-if="shouldShowContent" class="tr__content" />
    <Article
      v-if="shouldShowArticle"
      class="tr__article"
      @reset-skip="handleResetSkip"
    />
    <Quiz
      :quizTitle="'閱讀測驗'"
      :quizDescription="'根據 Dcard 歷年累積使用中國流行語最頻繁討論版的資料，不包括以下哪一個討論版？'"
      :quizOptions="QuizOptions"
      :quizDetailTitleCorrect="'答對了！'"
      :quizDetailTitleWrong="'答錯了 ：('"
      :quizDetailDescription="'Dcard 歷年累積使用中國流行語最頻繁的討論版前三名，分別是 BL版、追星版、戲劇綜藝，並不包含閒聊版。'"
      class="tr__quiz"
    />
    <AlsoConcern class="tr__also-concern" />
    <Resource class="tr__resource" />
    <Donate />
    <Credit />
    <Footer />
    <UiScrollDownBtn />
  </div>
</template>

<script>
import scrollama from 'scrollama'
import 'intersection-observer'
import Navbar from '~/components/Navbar.vue'
import Cover from '~/components/Cover.vue'
import Article from '~/components/Article.vue'
import Quiz from '~/components/Quiz.vue'
import AlsoConcern from '~/components/AlsoConcern.vue'
import Resource from '~/components/Resource.vue'
import Credit from '~/components/Credit.vue'
import Donate from '~/components/Donate.vue'
import Footer from '~/components/Footer.vue'
import UiScrollDownBtn from '~/components/UiScrollDownBtn.vue'
import gaMixin from '~/mixins/gaMixin'

export default {
  components: {
    Navbar,
    Cover,
    Quiz,
    Article,
    AlsoConcern,
    Resource,
    Credit,
    Donate,
    Footer,
    UiScrollDownBtn,
  },
  mixins: [gaMixin],
  data() {
    return {
      QuizOptions: [
        {
          text: '追星版',
          type: 'optionWrong',
        },
        {
          text: '戲劇綜藝版',
          type: 'optionWrong',
        },
        {
          text: '閒聊版',
          type: 'optionCorrect',
        },
        {
          text: 'BL(Boys Love)版',
          type: 'optionWrong',
        },
      ],
      shouldShowContent: false,
      shouldSkipContent: false,
      shouldShowArticle: true,
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
  background: #000;
  &__content {
    padding: 0 20px;
    margin: 0 0 48px;
    min-height: calc(100vh - 224px);
    @include media-breakpoint-up(md) {
      margin: 0 0 40px;
      min-height: calc(100vh - 240px);
    }
    @include media-breakpoint-up(lg) {
      min-height: calc(100vh - 152px);
    }
  }
  &__article {
    margin: 24px auto;
  }
  &__quiz {
    margin: 0 auto 60px;
    @include media-breakpoint-up(md) {
      margin: 0 auto 120px;
    }
  }
  &__also-concern {
    margin: 0 auto 96px;
    @include media-breakpoint-up(md) {
      margin: 0 auto 120px;
    }
  }
  &__resource {
    margin: 0 auto 60px;
  }
}
</style>
