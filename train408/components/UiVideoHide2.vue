<template>
  <div class="video">
    <div id="1b3e777a-1cfb-49ec-aa03-1c8b3c757ba2"></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          hid: 'hide2',
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
                  var data = {"video":{"sources":[{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021_train\u002Ftrain_hide2_1280.mp4","width":1280,"height":720},{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021_train\u002Ftrain_hide2_1440.mp4","width":1440,"height":810},{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021_train\u002Ftrain_hide2_1920.mp4","width":1920,"height":1080},{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021-pigs\u002Fpigs720.mp4","width":720,"height":1080},{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021-pigs\u002Fpigs960.mp4","width":960,"height":1440}]},"captions":[{"text":"事故當天貨車不慎掉落的邊坡，其實在過往工程期間也曾發生事故。","time":0,"textAlign":"justify"},{"text":"2021 年 1 月，施工過程中曾發生過 2 次混凝土預拌車在施工便道轉彎處，因為打滑而陷入邊坡的事件。","time":2,"textAlign":"justify"},{"text":"第一次是下雨天，司機準備前往工區下方灌漿，在轉彎時踩煞車，輪胎打滑，造成前方車輪落入邊坡，後來是司機自行將車輛開回水泥路面。","time":4,"textAlign":"justify"},{"text":"該司機回公司時，向公司提醒邊坡很危險，建議應該要加裝水泥護欄，但營造公司表示工程沒有這類設計。","time":6,"textAlign":"justify"},{"text":"第二次同樣是下雨天。另一名司機同樣在駕駛混凝土預拌車時，於轉彎處輪胎打滑，前輪落入邊坡。司機當場求救，請營造公司人員協助用怪手將車子拉回水泥地面。","time":8,"textAlign":"justify"},{"text":"台鐵人員在場拍照紀錄，司機向台鐵人員反應此處很危險，應該要加設護欄，台鐵人員沒有回應。","time":9,"textAlign":"justify"},{"text":"為什麼沒有裝護欄？東欣營造安全衛生管理人員表示，「多次向老闆建議該轉彎處要加設紐澤西護欄，但老闆說，設計圖並無此設計、相關經費也未包括該項目，所以一直沒有進行。」","time":10,"textAlign":"justify"},{"text":"中棪工程人員表示，「那個施工便道是既有道路，已通行多年，不是工區範圍，就不會在上面進行施工。」","time":11,"textAlign":"justify"},{"text":"聯合大地專案經理表示，依照混凝土車滑落的經驗，滑落時會被植被擋住，「而且依照合約，台鐵不希望在軌道旁有太多額外設施，萬一掉落到軌道上會有危險。」","time":12,"textAlign":"justify"},{"text":"另外，由於事故地點曾發生過落石，台鐵有派員監視落石。直至 3 月 10 日，台鐵局認為已經完成明隧道頂混凝土鋼板模拆除作業，可以取消派員監視。","time":13,"textAlign":"justify"},{"text":"監視員於事發前一日（4 月 1 日）便不再至現場。","time":15,"textAlign":"justify"}],"appProps":{"captionsSetting":{"xBoxAlign":"right","xPosition":"8.7%","yBoxAlign":"bottom","yPosition":"20px"},"captionSetting":{"textAlign":"right"},"secondsPer100vh":1.5,"skipLoadLocationRegExp":"editor","forcedPreloadVideo":true,"gsapVersion":"3.5.1","scrollTriggerVersion":"3.5.1","pollingTimeout":700,"preloadCacheType":"force-cache"},"theme":{"mq":{"mobileMaxWidth":"767px"},"captions":{"color":"#fff","link":{"color":"#a67a44","underlineColor":"#a67a44"},"lineHieght":"1.7","mobileLineHeight":"1.7","fontStyle":"normal","fontWeight":"bold","fontSize":"24px","mobile":{"fontSize":"22px"},"fontFamily":"ff-tisa-web-pro, source-han-sans-traditional, Noto Sans TC, PingFang TC, Apple LiGothic Medium, Roboto, Microsoft JhengHei, Lucida Grande, Lucida Sans Unicode, sans-serif","box":{"background":"#404040","width":"450px","mobileWidth":"77%","spanPadding":"6px 15px","mobilePadding":"12px 12px 14px 18px"}}},"uuid":"1b3e777a-1cfb-49ec-aa03-1c8b3c757ba2"};
                  window[namespace][pkg].push(data);
                }
              }
            })()
          `,
        },
        {
          hid: 'hide2-2',
          id: 'hide2-2',
          type: 'text/javascript',
          async: true,
          crossOrigin: true,
          body: true,
          src:
            'https://unpkg.com/@twreporter/scrollable-video@1.0.0-rc.3/dist/main.142ef5f0d6d2dfdb8b8d.bundle.js',
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        hide2: ['innerHTML'],
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
          this.$emit('close-video')
        }
      }
    },
  },
}
</script>
