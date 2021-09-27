<template>
  <div id="video-part1" class="video">
    <div id="7a2d83ae-a362-4eee-b71e-865c5d27d98e"></div>
  </div>
</template>

<script>
import scrollama from 'scrollama'
import 'intersection-observer'
import gaMixin from '~/mixins/gaMixin'

export default {
  mixins: [gaMixin],
  head() {
    return {
      script: [
        {
          hid: 'part1',
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
                  var data = {"video":{"sources":[{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021_train\u002Ftuned_half_resolution\u002Ftrain_part1_1280.mp4","width":1280,"height":720},{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021_train\u002Ftuned_half_resolution\u002Ftrain_part1_1440.mp4","width":1440,"height":810},{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021_train\u002Ftuned_half_resolution\u002Ftrain_part1_1920.mp4","width":1920,"height":1080},{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021_train\u002Ftuned_half_resolution\u002Ftrain_part1_720.mp4","width":720,"height":1080},{"type":"video\u002Fmp4","src":"https:\u002F\u002Fstorage.googleapis.com\u002Fdata-journalism-public\u002F2021_train\u002Ftuned_half_resolution\u002Ftrain_part1_960.mp4","width":960,"height":1440}]},"captions":[{"text":"還原事故發生的瞬間⋯⋯","time":0,"textAlign":"justify"},{"text":"來自邊坡工地的移工曾向列車大力揮手，示意前方軌道上有從邊坡滑落的大貨車。","time":4.8,"textAlign":"justify"},{"text":"但從列車駛出隧道到撞擊大貨車之間，僅經過 7 秒。還未考慮司機雙眼適應隧道出口光亮的時間。","time":6.8,"textAlign":"justify"},{"text":"還原整起事故，究竟是怎麼發生的？","time":8.3,"textAlign":"justify"}],"appProps":{"captionsSetting":{"xBoxAlign":"right","xPosition":"8.7%","yBoxAlign":"bottom","yPosition":"20px"},"captionSetting":{"textAlign":"right"},"secondsPer100vh":1.5,"skipLoadLocationRegExp":"editor","forcedPreloadVideo":true,"gsapVersion":"3.5.1","scrollTriggerVersion":"3.5.1","pollingTimeout":700,"preloadCacheType":"force-cache"},"theme":{"mq":{"mobileMaxWidth":"767px"},"captions":{"color":"#fff","link":{"color":"#a67a44","underlineColor":"#a67a44"},"lineHieght":"1.7","mobileLineHeight":"1.7","fontStyle":"normal","fontWeight":"bold","fontSize":"24px","mobile":{"fontSize":"22px"},"fontFamily":"ff-tisa-web-pro, source-han-sans-traditional, Noto Sans TC, PingFang TC, Apple LiGothic Medium, Roboto, Microsoft JhengHei, Lucida Grande, Lucida Sans Unicode, sans-serif","box":{"background":"#404040","width":"450px","mobileWidth":"77%","spanPadding":"6px 15px","mobilePadding":"12px 12px 14px 18px"}}},"uuid":"7a2d83ae-a362-4eee-b71e-865c5d27d98e"};
                  window[namespace][pkg].push(data);
                }
              }
            })()
          `,
        },
        {
          hid: 'part1-2',
          id: 'part1-2',
          type: 'text/javascript',
          async: true,
          crossOrigin: true,
          body: true,
          src:
            'https://unpkg.com/@twreporter/scrollable-video@1.0.0-rc.3/dist/main.142ef5f0d6d2dfdb8b8d.bundle.js',
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        part1: ['innerHTML'],
      },
    }
  },
  mounted() {
    const scrollerCredit = scrollama()
    scrollerCredit
      .setup({
        step: '#video-part1',
      })
      .onStepExit((response) => {
        if (response.direction === 'down') {
          this.gaScrollHandler('還原整起事故，究竟是怎麼發生的？影片結束')
        }
      })
    window.addEventListener('resize', scrollerCredit.resize)
  },
}
</script>
