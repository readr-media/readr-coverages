<template>
  <section class="latest-list">
    <readr-latest-coverages class="readr-latest" />
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.latest-list {
  width: 100%;
  max-width: 600px;
  padding: 0 8px;
  @include media-breakpoint-up(md) {
    width: 600px;
    padding: 0;
  }
  .readr-latest {
    &::v-deep {
      h2 {
        background-color: #292929;
        color: #fff;
      }
      a {
        h3 {
          font-size: 15px;
          line-height: 22px;
          color: #e0e0e0;
          @include media-breakpoint-up(md) {
            font-size: 18px;
            line-height: 27px;
          }
        }
        p {
          font-size: 13px;
          line-height: 19px;
          color: #e0e0e0;
          margin: 12px 0 0;
          @include media-breakpoint-up(md) {
            font-size: 15px;
            line-height: 21px;
            margin: 16px 0 0;
          }
        }
      }
      .coverage {
        padding: 0 8px;
        @include media-breakpoint-up(md) {
          padding: 0;
        }
      }
      .coverage + .coverage {
        margin: 24px 0 0;
      }
    }
  }
}
</style>
