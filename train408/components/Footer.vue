<template>
  <div class="footer">
    <div class="footer__anchor_point"></div>
    <readr-footer class="readr-footer" />
  </div>
</template>

<script>
import scrollama from 'scrollama'
import 'intersection-observer'
import gaMixin from '~/mixins/gaMixin'

export default {
  mixins: [gaMixin],
  mounted() {
    const scrollerCredit = scrollama()
    scrollerCredit
      .setup({
        step: '.footer__anchor_point',
        offset: 1,
      })
      .onStepEnter((response) => {
        if (response.direction === 'up') return
        this.gaScrollHandler('footer')
      })

    window.addEventListener('resize', scrollerCredit.resize)
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background: transparent;
  .readr-footer {
    &::v-deep {
      ul {
        padding: 0;
        li {
          &::before {
            @include media-breakpoint-up(md) {
              background-color: #e0e0e0;
            }
          }
        }
      }
      .sc-readr-footer {
        color: #e0e0e0;
        .media-links {
          svg {
            path {
              fill: #fff;
              opacity: 0.75;
            }
          }
        }
      }
      .company-info {
        .sc-readr-footer + .sc-readr-footer {
          &::before {
            @include media-breakpoint-up(md) {
              background-color: rgba(255, 255, 255, 0.1);
            }
          }
        }
      }
    }
  }
}
</style>
