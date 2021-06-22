<template>
  <div class="toggle-category">
    <div class="toggle-category__title" @click="toggleContent">
      <h3>{{ name }}</h3>
      <div class="toggle-category__title-img">
        <img
          v-if="shouldShowContent"
          src="~static/images/open-icon.svg"
          alt="toggle icon"
        />
        <img v-else src="~static/images/close-icon.svg" alt="toggle icon" />
      </div>
    </div>
    <ul v-if="shouldShowContent" class="toggle-category__content">
      <li
        v-for="item in items"
        :key="item.title"
        class="toggle-category__content-items"
      >
        <UiToggleCard
          :title="item.title"
          :content="item.content"
          :graphUrl="item.url"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import UiToggleCard from '~/components/UiToggleCard.vue'

export default {
  components: {
    UiToggleCard,
  },
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      shouldShowContent: false,
    }
  },
  methods: {
    toggleContent() {
      this.shouldShowContent = !this.shouldShowContent
    },
  },
}
</script>

<style lang="scss" scoped>
.toggle-category {
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    cursor: pointer;
    padding: 12px 16px 8px;
    border-bottom: 1px solid #e0e0e0;
    @include media-breakpoint-up(md) {
      padding: 12px 24px 12px 0;
    }
    h3 {
      max-width: 90%;
    }
    &-img {
      width: 22px;
      height: 24px;
      display: flex;
      align-items: center;
      margin: 4px 0 0;
      @include media-breakpoint-up(md) {
        margin: 9px 0 0;
      }
      img {
        width: 100%;
      }
    }
  }
  &__content {
    margin: 12px 0 24px;
    @include media-breakpoint-up(md) {
      margin: 16px 0 32px;
    }
    &-items {
      margin: 0 0 8px;
      @include media-breakpoint-up(md) {
        margin: 0 0 16px;
      }
    }
  }
}
</style>
