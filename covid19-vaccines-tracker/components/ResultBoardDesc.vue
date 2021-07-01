<template>
  <div class="result-desc">
    <small class="result-desc__brief">{{ brief }}</small>
    <ul v-if="shouldShowList" class="result-desc__list">
      <li v-for="item in listItems" :key="item">{{ item }}</li>
    </ul>
    <p
      class="result-desc__description"
      :class="{ 'black-text': listItems.length }"
    >
      {{ description }}
    </p>
  </div>
</template>

<script>
import { isArrayEmpty } from '~/utils/array-handler'

export default {
  props: {
    brief: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      required: true,
      default: '',
    },
    listItems: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    shouldShowList() {
      return isArrayEmpty(this.listItems)
    },
  },
}
</script>

<style lang="scss" scoped>
.result-desc {
  &__brief {
    display: block;
    font-size: 16px;
    line-height: 1.5;
    color: #000928;
    opacity: 0.5;
    margin: 0 0 4px;
  }
  &__list {
    li {
      position: relative;
      font-size: 18px;
      line-height: 2;
      color: #04295e;
      padding: 0 0 0 30px;
      margin: 0 0 12px;
      &::after {
        content: '';
        position: absolute;
        top: 16px;
        left: 16px;
        width: 4px;
        height: 4px;
        border-radius: 4px;
        background-color: #04295e;
      }
    }
  }
  &__description {
    font-size: 18px;
    line-height: 2;
    color: #04295e;
    margin: 0 0 12px;
    &.black-text {
      color: #000928;
      opacity: 0.87;
    }
  }
  &__timestamp {
    font-size: 14px;
    line-height: 21px;
    color: #000928;
    opacity: 0.3;
  }
}
</style>
