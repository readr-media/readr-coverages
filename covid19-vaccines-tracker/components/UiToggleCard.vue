<template>
  <div class="toggle-card">
    <div class="toggle-card__title" @click="toggleContent">
      <p>{{ title }}</p>
      <div class="toggle-card__title-img">
        <img
          v-if="shouldShowContent"
          src="~static/images/open-icon.svg"
          alt="toggle icon"
        />
        <img v-else src="~static/images/close-icon.svg" alt="toggle icon" />
      </div>
    </div>
    <div v-if="shouldShowContent" class="toggle-card__content">
      <div
        v-if="isGraph === 'y'"
        v-html="content"
        class="toggle-card__content-graph"
      ></div>
      <p v-else class="toggle-card__content-text">{{ content }}</p>
    </div>
  </div>
</template>

<script>
import gaMixin from '~/mixins/gaMixin'
// import UiFlourish from '~/components/UiFlourish.vue'

export default {
  // components: {
  //   UiFlourish,
  // },
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    content: {
      type: String,
      required: true,
      default: '',
    },
    isGraph: {
      type: String,
      default: '',
    },
    isFirstItem: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [gaMixin],
  data() {
    return {
      shouldShowContent: false,
    }
  },
  mounted() {
    this.shouldShowContent = this.isFirstItem
  },
  methods: {
    toggleContent() {
      this.gaClickHandler(this.title)
      this.shouldShowContent = !this.shouldShowContent
    },
  },
}
</script>

<style lang="scss" scoped>
.toggle-card {
  background-color: #fff;
  border-radius: 6px;
  padding: 12px 16px;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.1);
  @include media-breakpoint-up(md) {
    padding: 20px 24px;
  }
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    cursor: pointer;
    p {
      max-width: 90%;
      font-size: 16px;
      line-height: 1.5;
      color: #000928;
      opacity: 0.87;
    }
    &-img {
      width: 22px;
      height: 24px;
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
  &__content {
    margin: 12px 0 0;
    padding: 12px 0 0;
    border-top: 1px solid #e0e0e0;
    &-graph {
      width: 100%;
      background-color: #c4c4c4;
      margin: 0 0 12px;
    }
    &-text {
      font-size: 16px;
      line-height: 2;
      color: #000928;
      opacity: 0.66;
    }
  }
}
</style>
