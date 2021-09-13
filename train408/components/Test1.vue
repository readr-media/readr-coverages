<template>
  <div class="video">
    <div id="42c8899d-f785-434d-a8a8-1e56234dc10f"></div>
    <UiVideoToTimelineBtn
      v-if="shouldShowEndBtn"
      @clicked-close="handleClose"
    />
  </div>
</template>

<script>
import UiVideoToTimelineBtn from '~/components/UiVideoToTimelineBtn.vue'

export default {
  components: {
    UiVideoToTimelineBtn,
  },
  data() {
    return {
      shouldShowVideo: true,
      shouldShowEndBtn: false,
    }
  },
  head() {
    return {
      script: [
        {
          hid: 'test1',
          async: true,
          innerHTML: `
            (function() {
              var namespace = '__twreporterEmbeddedData';
              var pkg = 'scrollable-video';
              if (typeof window != 'undefined') {
                if (!window.hasOwnProperty(namespace)) {
                  window[namespace] = {};
                }
                if (window[namespace] && !window[namespace].hasOwnProperty(pkg)) {
                  window[namespace][pkg] = [];
                }
                if (Array.isArray(window[namespace][pkg])) {
                  var data = {"video":{"sources":[{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public-public\u002F2021_energy_graphic\u002Fenergy_graphic_1280.mp4","width":1280,"height":720},{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021_energy_graphic\u002Fenergy_graphic_1440.mp4","width":1440,"height":810},{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021_energy_graphic\u002Fenergy_graphic_1920.mp4","width":1920,"height":1080},{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021_energy_graphic\u002Fenergy_graphic_720.mp4","width":720,"height":1080},{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021_energy_graphic\u002Fenergy_graphic_960.mp4","width":960,"height":1440}]},"captions":[{"text":"作為電業管理主管機關，能源局每年會評估經濟發展、社會現況、以及逐漸老舊要退役的發電機組，去預測未來用電需求，並決定未來要新增多少發電機組。<br/>如能源局 2013 年 12 月發布的報告，就希望未來 10 年能增加 1611.8 萬瓩裝置容量（發電機可以發的電），主要增量最多的會在 2017 年，包括 3 個火力機組與 1 個核電機組。<br/>但實際現況時時在變化，2013 年的規劃迄今也有很多變化。這 10 年來，政府如何規劃臺灣電力的來源？實際執行的狀況又是如何？","time":2},{"text":"2013 年，再生能源已是重要發展目標。在當年的規劃中，預計增加的太陽能、風電等再生能源共佔 1\u002F4 以上。","time":4},{"text":"除了待改建、商轉的新火力機組以外，當年爭議頻頻的核四，同樣也在 2015、2017 年規劃新增商轉的行列中。","time":10},{"text":"另一方面，接續幾年也有不少中、大型機組即將除役。<br/>這些除役規劃大多是電廠改建，例如大林電廠、林口電廠、通霄複循環都開始了「除舊佈新」，也就是先除役舊有機組，再新設機組。<br/>隨著除役容量升高，能源局也拉高後續幾年的新增規劃量，以求供電無虞。<br/>以 2017 年為例，理想中當年會新增 4 個機組，包括林口與大林電廠新火力 2 號機、通霄新複循環 1 號機、核四 2 號機。","time":14},{"text":"但僅僅過了一年，因應當時反核意識興起，馬政府於 2014 年 4 月 27 日正式宣布核四封存。<br/>為了儘早達成裝置容量 15% 要求，填補原本預計新增的核四機組缺口、且舊有核電廠不延役的情況下，能源局在 2021 至 2023 年間規劃 6~10 台 9<br/>0 萬瓩燃氣機組。<br/>這也反應在圖表上，能源局修正前一年報告中的核四數據，並拉高了後 5 年的規劃增量值。","time":19},{"text":"但即便扣除了核四額度、下修了目標，實際增量仍不如預期。<br/>有好幾座預計要新增的機組，不約而同地因為各種原因延後商轉時間：如通霄新機組先是執照取得卡關，拆除廠商又喬不攏，後又因排水淤積而延後時程；大林新火力機組施工進度遲緩，經濟部與台電還因此被監察院提案糾正。","time":24},{"text":"幾年下來的商轉時程延宕，也讓備用容量率節節下降，2016 年至 2017 年一度跌破 10%。<br/>備用容量率是指備用發電量。發電機組需要維修，政府要確保有足夠的發電量可供調度。備用容量率只要小於 10% 就有限電的風險。<br/>2015 年台電表示如果核電如期除役，2018 年將有限電風險，隔年甚至可能跌破 7.4 % 的安全標準。","time":30},{"text":"但 2019 年的備用容量率卻沒有像當年台電預言般「發生限電危機」，反而一路從 10％ 爬升到了 16%。<br/>臺灣如何一度從限電危機中脫逃？從此就能源無虞了嗎？這跟接下來幾年的能源規劃與執行狀況有關。","time":34},{"text":"2016 年政黨輪替，幾年來累積許多進度不如預期的新設機組容量，只能塞進接下來的能源規劃裡。<br/>在新的規劃中，未依計畫完成、需要延遲到 2018 年商轉的機組量，超過 2018 年一半規劃量。","time":40},{"text":"但執行狀況仍不如預期。例如前面提到 2018 年遭監察院糾正的大林新火力機組；另外因應夏季供電，大潭新複循環 7 號機也只裝了 60 萬瓩的 GT 單循環機就緊急上線，之後才會停機再把剩餘的 40 萬瓩 ST 氣渦輪裝完。<br/>不過，即便進度延宕，2018 、2019 年實際增量值仍高於目標。","time":44},{"text":"但高於目標的「好成績」只是因為前幾年未達的目標延後商轉。實際上，若扣除延遲機組，能源增量其實並沒有達成規劃目標。<br/>舉例來說，扣除延遲量，以及原本不在先前規劃中的民營燃氣機組，2018 年能源實際增量，實際上仍低於 2017 年的原訂目標，執行情形仍有待加強。","time":49},{"text":"由於反核是民進黨的重要政策，2016 年政黨輪替後，變戮力推動再生能源。行政院啟動「太陽光電 2 年推動計畫」，訂出階段性目標。<br/>相較舊版規劃，能源局 2017 年的新規劃中大幅提高了光電的增值目標，成長 4 至 6 倍不等，佔總規劃比例也越來越高。<br/>隔年，蔡政府也訂出能源轉型目標：2025 年再生能源要佔總發電量 20%。（延伸閱讀）","time":54},{"text":"由於反核是民進黨的重要政策，2016 年政黨輪替後，變戮力推動再生能源。行政院啟動「太陽光電 2 年推動計畫」，訂出階段性目標。<br/>相較舊版規劃，能源局 2017 年的新規劃中大幅提高了光電的增值目標，成長 4 至 6 倍不等，佔總規劃比例也越來越高。<br/>隔年，蔡政府也訂出能源轉型目標：2025 年再生能源要佔總發電量 20%。（延伸閱讀）","time":59},{"text":"2017 年，即便原訂光電目標未達標、機組進度也略有延遲，儘管如此，為因應用電需求越來越高，能源局仍持續拉高能源增量目標。<br/>但這個能源新增量持續上升的美夢，2020 年卻遇上武漢肺炎疫情。<br/>以 2019 發布的供需報告規劃來看，2020 年達成量甚至不到原本規劃的一半，又以再生能源最為明顯。能源局指出，疫情衝擊下使得光電設備零組件、人力等資源供應不足。<br/>離岸風電也遇到同樣問題，負責臺灣允能風場的達德能源董事長王雲怡就表示，離岸風電進度須引入國外技術人才，受疫情影響而延誤進度。<br/>但 2020 年，作為規劃能源發展的重要依據〈2019 年供需報告〉，並沒有如期發表，無從得知政府在能源上的因應與調整；直到 2021 年 5 月，藻礁公投對於能源替代的討論愈演愈烈，問題才浮上檯面。經濟部長王美花受立院質詢時遭到質疑「近期公佈」的說法一再跳票。<br/>儘管經濟部解釋，2020 年受到疫情影響難預測電力供應，無法發表供需報告；而 2021 年又因藻礁公投的影響，須另行納入「三接方案」的評估，因此延遲公告。<br/>立委王婉諭批評，「還在調整」不應成為經濟部連年未公告評估報告的理由，即使出現變數，也應盡快提供大眾可檢視的數據。","time":65},{"text":"立委質詢後一週，2021 年 5 月 12 日能源局召開記者會發布〈108\u002F109 年全國電力供需報告〉。<br/>2020 年，距離原訂新增的能源目標，達成率不到 4 成。","time":70},{"text":"對比時隔三年發布的兩份供需報告，可以看到能源局也回頭調整過去兩年（2020、2020）規劃值，其中受疫情影響工程進度的風電降幅最為明顯。<br/>為了補回差值，能源局提高對未來（尤其是 2022 年以後）的規劃增量。","time":75},{"text":"同時，能源局也重新調整除役規劃，如通霄 3、4 號機就決定延役至 2024 年。<br/>而整體除役規劃預計在 2024 年達到高峰，除了通霄電廠 3、4 號機外，當年還有核三 1 號機、協和 3、4 號機等機組要除役，2024 年成為供電穩定的關鍵時刻。","time":80},{"text":"受本土疫情爆發影響， 2021 上半年即使有民營電廠嘉惠二期的加入，增量未達全年目標的一半，下半年是否能如期達標，仍是未知數。<br/>回到近 10 年能源規劃，儘管備用容量率自 2018 年後有回升趨勢，但隨著台灣用電逐年增加，這 2 年又受疫情影響，維持供電穩定仍不簡單。<br/>備註：此部分資料來自各年度「全國長期負載預測與電源開發規劃」或是後期的「全國電力資源供需報告」，不過其中缺乏 104、105 年評估報告數據，從 2017 年的網頁快取推測，遲至 2017 年能源局也未在網站上公告更新版的電源開發規劃報告。","time":85}],"appProps":{"captionsSetting":{"xBoxAlign":"right","xPosition":"8.7%","yBoxAlign":"bottom","yPosition":"20px"},"captionSetting":{"textAlign":"right"},"secondsPer100vh":1.5,"skipLoadLocationRegExp":"editor","forcedPreloadVideo":true,"gsapVersion":"3.5.1","scrollTriggerVersion":"3.5.1","pollingTimeout":700,"preloadCacheType":"force-cache"},"theme":{"mq":{"mobileMaxWidth":"767px"},"captions":{"color":"#fff","link":{"color":"#a67a44","underlineColor":"#a67a44"},"lineHieght":"1.7","mobileLineHeight":"1.7","fontStyle":"normal","fontWeight":"bold","fontSize":"24px","mobile":{"fontSize":"22px"},"fontFamily":"ff-tisa-web-pro, source-han-sans-traditional, Noto Sans TC, PingFang TC, Apple LiGothic Medium, Roboto, Microsoft JhengHei, Lucida Grande, Lucida Sans Unicode, sans-serif","box":{"background":"#404040","width":"450px","mobileWidth":"77%","spanPadding":"6px 15px","mobilePadding":"12px 12px 14px 18px"}}},"uuid":"42c8899d-f785-434d-a8a8-1e56234dc10f"};
                  window[namespace][pkg].push(data);
                }
              }
            })()
          `,
        },
        {
          hid: 'test1-2',
          id: 'test1-2',
          type: 'text/javascript',
          async: true,
          crossOrigin: true,
          body: true,
          src:
            'https://unpkg.com/@twreporter/scrollable-video@1.0.0-rc.3/dist/main.142ef5f0d6d2dfdb8b8d.bundle.js',
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        test1: ['innerHTML'],
      },
    }
  },
  mounted() {
    this.addScrollDetector()
  },
  methods: {
    addScrollDetector() {
      window.onscroll = () => {
        if (
          window.pageYOffset &&
          window.innerHeight + window.pageYOffset >= document.body.offsetHeight
        ) {
          this.shouldShowEndBtn = true
        }
      }
    },
    handleClose() {
      this.$emit('close-video')
      this.shouldShowEndBtn = false
      window.scrollTo(0, window.innerHeight * 2)
    },
  },
}
</script>
