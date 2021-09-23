<template>
  <section class="report">
    <ReportArticle class="report__article" @scroll-top="handleScrollTop" />
    <ReportQuiz
      :quizTitle="'閱讀測驗'"
      :quizDescription="'誰負責監督管理臺鐵局？'"
      :quizOptions="QuizOptions"
      :quizDetailTitleCorrect="'答對了！'"
      :quizDetailTitleWrong="'答錯了！'"
      :quizDetailDescription="'交通部鐵道局主要負責辦理全國鐵道、大眾捷運等軌道運輸系統的工程建設及監督管理。《交通部鐵道局組織法》2018 年施行，將鐵路監理業務劃歸鐵道局，但母法《鐵路法》尚未修正，行政院 2021 年 9 月 16 日送出《鐵路法》修正草案，條文中將鐵路監督管理權責由鐵道局執行，並明定鐵道局檢討或調查結果的處置方式，目前尚未完成修法。'"
      class="report__quiz"
    />
    <ReportExtra
      :extraTitle="'如果你關心這個議題，你可以⋯⋯'"
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
          text: '總統府',
          type: 'optionWrong',
        },
        {
          text: '國防部',
          type: 'optionWrong',
        },
        {
          text: '交通部鐵道局',
          type: 'optionCorrect',
        },
        {
          text: '國家運輸安全調查委員會',
          type: 'optionWrong',
        },
      ],
      extraListContents: [
        {
          id: 'content1',
          text:
            '持續追蹤運安會將在明年 4 月推出的太魯閣號出軌意外最終調查報告草案',
        },
        {
          id: 'content2',
          text:
            '持續追蹤臺鐵局「<a href="https://www.railway.gov.tw/tra-tip-web/adr/customized_info?I=BOdk836FNKcj1mQnyA%2BwVMZL6kWlC9PkOcotriieafZ9kbFF90rJd3mTYSThAr14xkXMR6gT0SfAIw%3D%3D&site_preference=normal" target="_blank" rel="noreferrer noopener">0402臺鐵408次事故專區</a>」',
        },
        {
          id: 'content3',
          text:
            '持續追蹤太魯閣事故家屬組織的「<a href="https://www.facebook.com/%E5%A4%AA%E9%AD%AF%E9%96%A3%E7%9A%84%E7%9C%BC%E6%B7%9A-%E5%8F%B0%E9%90%B50402%E5%A4%AA%E9%AD%AF%E9%96%A3%E8%99%9F408%E8%BB%8A%E6%AC%A1-109034311295370" target="_blank" rel="noreferrer noopener">太魯閣的眼淚</a>」粉絲頁訊息',
        },
      ],
      resourceListContents: [
        {
          id: 'resource1',
          text:
            '運安會「<a href="https://www.ttsb.gov.tw/1133/1178/1179/30146/post" target="_blank" rel="noreferrer noopener">0402 臺鐵第 408 次車清水隧道重大鐵道事故事實資料報告</a>」',
        },
        {
          id: 'content2',
          text:
            '交通部「<a href="https://www.motc.gov.tw/ch/home.jsp?id=14&parentpath=0,2&mcustomize=news_view.jsp&dataserno=202107180001&toolsflag=Y" target="_blank" rel="noreferrer noopener">臺鐵太魯閣號出軌事故行政調查報告</a>」',
        },
        {
          id: 'content3',
          text:
            '臺鐵體檢小組「<a href="https://event.motc.gov.tw/home.jsp?id=1986&parentpath=0,1985&websiteid=201812270001" target="_blank" rel="noreferrer noopener">臺鐵總體檢報告</a>」',
        },
        {
          id: 'content4',
          text:
            '臺鐵局「<a href="https://www.railway.gov.tw/tra-tip-web/adr/about-public-info-1?searchText=%E8%87%BA%E9%90%B5%E7%B8%BD%E9%AB%94%E6%AA%A2" target="_blank" rel="noreferrer noopener">臺鐵總體檢改善情形</a>」',
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
