<template>
  <div class="diagram-title">
    <div class="diagram-title__container">
      <div class="diagram-title__icon">
        <img :src="icon" />
      </div>

      <h3 class="diagram-title__text">
        <span class="eng">
          {{ engText }}
        </span>

        <span>
          {{ text }}
        </span>
      </h3>
    </div>

    <div class="diagram-title__devider" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      isRequired: true,
      default: '',
    },
    engText: {
      type: String,
      isRequired: true,
      default: '',
    },
    text: {
      type: String,
      isRequired: true,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.diagram-title {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 12px;
  }

  &__devider {
    border: 1px solid #000928;
    width: 60px;

    // tablet range
    @include media-breakpoint-up(md) {
      width: 80px;
    }
  }

  &__icon {
    width: 24px;
    height: 29px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  // &__text {
  //   // font-family: 'Roboto';
  //   font-style: normal;
  //   font-weight: bold;
  //   font-size: 36px;
  //   line-height: 42px;
  //   color: #000928;
  // }
}
</style>
