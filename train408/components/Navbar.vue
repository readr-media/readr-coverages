<template>
  <div class="Navbar">
    <readr-header
      class="readr-header"
      @readrLogoLinkClick="gaClickHandler('back to home')"
      @shareFacebookLinkClick="gaClickHandler('share to fb')"
      @shareLineLinkClick="gaClickHandler('share to line')"
    />
    <div class="Navbar__anchor"></div>
  </div>
</template>

<script>
import gaMixin from '~/mixins/gaMixin'

export default {
  mixins: [gaMixin],
}
</script>

<style lang="scss" scoped>
.Navbar {
  position: relative;
  z-index: 1000;
  background: transparent;
  width: 100%;
  .readr-header {
    &::v-deep {
      .sc-readr-header {
        g {
          fill: #e0e0e0;
        }
      }
      .sc-share-nav {
        svg {
          path {
            fill: #e0e0e0;
          }
        }
      }
    }
  }
}
</style>
