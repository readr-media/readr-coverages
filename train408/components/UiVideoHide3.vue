<template>
  <div class="video">
    <div id="0d9b0965-4101-4632-8179-54b50ed9e4e4"></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          hid: 'hide3',
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
                  var data = {"video":{"sources":[{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021_train\u002Ftrain_hide3_1280.mp4","width":1280,"height":720},{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021_train\u002Ftrain_hide3_1440.mp4","width":1440,"height":810},{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021_train\u002Ftrain_hide3_1920.mp4","width":1920,"height":1080},{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021-pigs\u002Fpigs720.mp4","width":720,"height":1080},{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021-pigs\u002Fpigs960.mp4","width":960,"height":1440}]},"captions":[{"text":"事發當天是清明連假，台鐵在去年 11 月 24 日就發過行車電報，表示連續假期疏運期間一律停止施工。","time":1,"textAlign":"justify"},{"text":"3 月 31 日，營造公司的 LINE 群組出現訊息，廠商再次被提醒清明連假要停止施工。","time":4,"textAlign":"justify"},{"text":"3 月 31 日晚上 11 點 30 分，工地主任至工地進行斜撐工程夜間施工。","time":9,"textAlign":"justify"},{"text":"4 月 1 日，東新營造與聯合大地共同派員進行工區安全維護複查，檢查結果全部填寫合格。<br>因為工地主任夜間施工至凌晨，沒有出席。","time":11,"textAlign":"justify"},{"text":"4 月 2 日早上，工地主任心想，「輪胎已經放在大貨車上很久了，常常滋生蚊蟲，加上大貨車也很久沒動了，利用連續假期將輪胎移到工地好了⋯⋯」","time":13,"textAlign":"justify"},{"text":"早上 8 點，工地主任與一名移工駕駛一輛柴油大貨車，載著「輪胎緩衝工程」的廢輪胎，預計前往工地置放，卻發現大貨車因為鑰匙轉在「ACC」位，一整夜電已耗盡，無法啟動。","time":15,"textAlign":"justify"},{"text":"工地主任聯絡機電商接電完成，但機電商同時提醒，電瓶目前的蓄電能力不佳，要小心行駛。","time":19,"textAlign":"justify"}],"appProps":{"captionsSetting":{"xBoxAlign":"right","xPosition":"8.7%","yBoxAlign":"bottom","yPosition":"20px"},"captionSetting":{"textAlign":"right"},"secondsPer100vh":1.5,"skipLoadLocationRegExp":"editor","forcedPreloadVideo":true,"gsapVersion":"3.5.1","scrollTriggerVersion":"3.5.1","pollingTimeout":700,"preloadCacheType":"force-cache"},"theme":{"mq":{"mobileMaxWidth":"767px"},"captions":{"color":"#fff","link":{"color":"#a67a44","underlineColor":"#a67a44"},"lineHieght":"1.7","mobileLineHeight":"1.7","fontStyle":"normal","fontWeight":"bold","fontSize":"24px","mobile":{"fontSize":"22px"},"fontFamily":"ff-tisa-web-pro, source-han-sans-traditional, Noto Sans TC, PingFang TC, Apple LiGothic Medium, Roboto, Microsoft JhengHei, Lucida Grande, Lucida Sans Unicode, sans-serif","box":{"background":"#404040","width":"450px","mobileWidth":"77%","spanPadding":"6px 15px","mobilePadding":"12px 12px 14px 18px"}}},"uuid":"0d9b0965-4101-4632-8179-54b50ed9e4e4"};
                  window[namespace][pkg].push(data);
                }
              }
            })()
          `,
        },
        {
          hid: 'hide3-2',
          id: 'hide3-2',
          type: 'text/javascript',
          async: true,
          crossOrigin: true,
          body: true,
          src:
            'https://unpkg.com/@twreporter/scrollable-video@1.0.0-rc.3/dist/main.142ef5f0d6d2dfdb8b8d.bundle.js',
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        hide3: ['innerHTML'],
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
          // window.location.href = '/'
          this.$emit('close-video')
        }
      }
    },
  },
}
</script>
