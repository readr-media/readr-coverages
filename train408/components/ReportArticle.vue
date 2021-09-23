<template>
  <section class="article">
    <div id="article-start" class="article-start-anchor" />
    <div>
      <h2>5 秒鐘：太魯閣號出軌事件完整還原</h2>
      <p>
        事故發生不到 1
        個月，花蓮地檢署偵查顯示，包商李義祥借牌投標台鐵工程，因施工進度落後，4
        月 2 日違規趕工，導致他過失致死等行為起訴包商李義祥等 7
        人以及東新營造公司，<UiAnnotation
          :text="'字裡行間'"
          :pureAnnotationText="'註解如我，以下是假字。很息不，息大手年自完年的清代已到火此子做看，世口他風停有。'"
        />
        都可以看出她對於孩子的教育考量謹慎。
      </p>
      <div id="article-middle" class="article-middle-anchor" />
      <p>
        兩個月後，花檢再以過失致死、偽造文書罪追加起訴 1
        名台鐵花蓮工務段人員、以及負責工程專案管理的中棪公司專案經理。但台鐵的責任只有這樣嗎？旅客與家屬依舊渴望更多的事故真相。家屬第一時間詢問台鐵內部的調查結果，得到的回應是：「因為疫情，還沒有辦法處理，」罹難者家屬潘麗如描述。
      </p>
      <UiReportTable class="article__graph" />
      <p>
        兩個月後，花檢再以過失致死、偽造文書罪追加起訴 1
        名台鐵花蓮工務段人員、以及負責工程專案管理的中棪公司專案經理。但台鐵的責任只有這樣嗎？旅客與家屬依舊渴望更多的事故真相。家屬第一時間詢問台鐵內部的調查結果，得到的回應是：「因為疫情，還沒有辦法處理，」罹難者家屬潘麗如描述。
      </p>
      <h3>縱觀所有論壇資料</h3>
      <p>
        事實上，交通部早在 5 月 21 日就完成了內部的行政調查報告。但直到 2
        個月後，交通部才在 7 月 18
        日公布該份報告。根據這份行政調查，從施工計劃、工地人員安全教育到邊坡防護措施，台鐵花蓮工務段、專案管理單位和監造單位「顯有疏漏」，12
        名台鐵相關人員僅被申誡或記過。
      </p>
      <UiReportHideTable class="article__graph" />
      <p>
        事實上，交通部早在 5 月 21 日就完成了內部的行政調查報告。但直到 2
        個月後，交通部才在 7 月 18
        日公布該份報告。根據這份行政調查，從施工計劃、工地人員安全教育到邊坡防護措施，台鐵花蓮工務段、專案管理單位和監造單位「顯有疏漏」，12
        名台鐵相關人員僅被申誡或記過。
      </p>
      <div class="article__image">
        <img src="~/static/images/og.jpg" alt="image one" />
      </div>
      <p>
        8 月 23 日，獨立調查單位國家運輸安全委員會發布「0402 台鐵第 408
        次車清水隧道重大鐵道事故第一階段事實報告」，總算揭露更多關鍵訊息：一連串人為失誤，台鐵難辭其咎。
      </p>
      <!-- eslint-disable vue/no-v-html -->
      <div class="article__graph iframe" v-html="iframeSrc" />
      <p>
        8 月 23 日，獨立調查單位國家運輸安全委員會發布「0402 台鐵第 408
        次車清水隧道重大鐵道事故第一階段事實報告」，總算揭露更多關鍵訊息：一連串人為失誤，台鐵難辭其咎。
      </p>
    </div>
  </section>
</template>

<script>
import scrollama from 'scrollama'
import 'intersection-observer'
import UiAnnotation from '~/components/UiAnnotation.vue'
import UiReportTable from '~/components/UiReportTable.vue'
import UiReportHideTable from '~/components/UiReportHideTable.vue'

export default {
  components: {
    UiAnnotation,
    UiReportTable,
    UiReportHideTable,
  },
  data() {
    return {
      iframeSrc: `
        <iframe
          src='https://flo.uri.sh/visualisation/7285118/embed'
          title='Interactive or visual content'
          class='flourish-embed-iframe'
          frameborder='0'
          scrolling='no'
          style='width:100%;height:100%'
          sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
        ></iframe>
      `,
    }
  },
  mounted() {
    const scrollerCredit = scrollama()
    scrollerCredit
      .setup({
        step: '#article-middle',
      })
      .onStepEnter((response) => {
        if (response.direction === 'up') {
          this.$emit('scroll-top')
        }
      })
    window.addEventListener('resize', scrollerCredit.resize)
  },
}
</script>

<style lang="scss" scoped>
.article {
  width: 100%;
  max-width: 600px;
  padding: 0 20px;
  .article-start-anchor {
    padding: 96px 0 0;
    @include media-breakpoint-up(md) {
      padding: 120px 0 0;
    }
  }
  .article-middle-anchor {
    margin: 16px 0 0;
    @include media-breakpoint-up(md) {
      margin: 32px 0 0;
    }
  }
  h2 {
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;
    color: #e0e0e0;
    text-align: center;
    margin: 0 0 24px;
    @include media-breakpoint-up(md) {
      font-size: 32px;
      line-height: 44px;
      margin: 0 0 40px;
    }
  }
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    color: #e0e0e0;
    text-align: center;
    margin: 48px 0 16px;
    @include media-breakpoint-up(md) {
      font-size: 28px;
      line-height: 40px;
      margin: 60px 0 20px;
    }
  }
  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 36px;
    color: #e0e0e0;
  }
  p + p {
    margin: 16px 0 0;
    @include media-breakpoint-up(md) {
      margin: 32px 0 0;
    }
  }
  &__image {
    width: calc(100% + 40px);
    height: 100vw;
    max-height: 640px;
    transform: translateX(-20px);
    margin: 32px 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__graph {
    width: calc(100% + 40px);
    transform: translateX(-20px);
    margin: 32px 0 16px;
    &.iframe {
      height: 920px;
      @include media-breakpoint-up(md) {
        height: 1060px;
      }
    }
  }
}
</style>
