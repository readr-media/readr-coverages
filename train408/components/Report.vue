<template>
  <section class="report">
    <ReportArticle class="report__article" @scroll-top="handleScrollTop" />
    <ReportQuiz
      :quizTitle="'閱讀測驗'"
      :quizDescription="'根據 Dcard 歷年累積使用中國流行語最頻繁討論版的資料，不包括以下哪一個討論版？'"
      :quizOptions="QuizOptions"
      :quizDetailTitleCorrect="'答對了！'"
      :quizDetailTitleWrong="'答錯了 ：('"
      :quizDetailDescription="'Dcard 歷年累積使用中國流行語最頻繁的討論版前三名，分別是 BL版、追星版、戲劇綜藝，並不包含閒聊版。'"
      class="report__quiz"
    />
    <ReportExtra
      :extraTitle="'如果你關心這個議題'"
      :extraListContents="extraListContents"
      class="report__extra"
    />
    <ReportResource
      :resourceTitle="'這個報導所用到的資料'"
      :resourceDescription="'兼任教師薪資計算公式由高教工會提供，利用教育部公開資料102-108年度大專院校課程表（來源：大學校院課程資源網）及大專院校教師專長彙整表（來源：教育部108學年度大專校院一覽表資訊網），經彙整後總計有3,942,121筆，再經過比較並排除無法辨識之資料，計算出每一位教師於各學年度的課堂數及鐘點數，並計算出預估薪資（不包含課程人數加給）。'"
      :resourceListContents="resourceListContents"
      class="report__resource"
    />
  </section>
</template>

<script>
import ReportArticle from '~/components/ReportArticle.vue'
import ReportQuiz from '~/components/ReportQuiz.vue'
import ReportExtra from '~/components/ReportExtra.vue'
import ReportResource from '~/components/ReportResource.vue'

export default {
  components: {
    ReportArticle,
    ReportQuiz,
    ReportExtra,
    ReportResource,
  },
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
      extraListContents: [
        {
          id: 'content1',
          text:
            '主動了解學校及系所聘雇專案與兼任教師的情形，尊重專業並肯定教師的付出',
        },
        {
          id: 'content2',
          text:
            '閱讀《兼任下流：流浪博士何處去？直擊高教崩壞現場，揭發兼任教師血汗、低薪、難以翻身的真相，從美國經驗反思大學院校公司化、教師商品化的巨大影響》相關出版書目',
        },
        {
          id: 'content3',
          text:
            '關注<a href="https://www.readr.tw/" target="_blank">高等教育產業工會</a>、私校工會等維護教師權益組織的訊息',
        },
      ],
      resourceListContents: [
        {
          id: 'resource1',
          text:
            '<a href="https://www.readr.tw/" target="_blank">主動了解學校及系所聘雇專案與兼任教師的情形，尊重專業並肯定教師的付出</a>',
        },
        {
          id: 'content2',
          text:
            '<a href="https://www.readr.tw/" target="_blank">閱讀《兼任下流：流浪博士何處去？直擊高教崩壞現場，揭發兼任教師血汗、低薪、難以翻身的真相，從美國經驗反思大學院校公司化、教師商品化的巨大影響》相關出版書目</a>',
        },
        {
          id: 'content3',
          text:
            '關注<a href="https://www.readr.tw/" target="_blank">高等教育產業工會</a>、私校工會等維護教師權益組織的訊息',
        },
      ],
    }
  },
  methods: {
    handleScrollTop() {
      this.$emit('reset-skip')
    },
  },
}
</script>

<style lang="scss" scoped>
.report {
  &__article {
    margin: 24px auto;
  }
  &__quiz {
    margin: 0 auto 60px;
    @include media-breakpoint-up(md) {
      margin: 0 auto 120px;
    }
  }
  &__extra {
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
