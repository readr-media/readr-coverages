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
  position: fixed;
  z-index: 1000;
  background: linear-gradient(
    to bottom,
    #111,
    rgba(17, 17, 17, 0.95) 50%,
    rgba(17, 17, 17, 0.7) 70%,
    transparent 90%
  );
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
