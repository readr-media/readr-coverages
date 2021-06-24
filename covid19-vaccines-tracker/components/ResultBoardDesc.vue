<template>
  <div class="result-desc">
    <small class="result-desc__brief">{{ brief }}</small>
    <ul class="result-desc__list">
      <li v-for="item in listItems" :key="item">{{ item }}</li>
    </ul>
    <p
      class="result-desc__description"
      :class="{ 'black-text': listItems.length }"
    >
      {{ description }}
    </p>
    <small class="result-desc__timestamp">{{ timeStamp }}</small>
    <div v-if="graphUrl" class="result-desc__graph"></div>
  </div>
</template>

<script>
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
    timeStamp: {
      type: String,
      required: true,
      default: '',
    },
    listItems: {
      type: Array,
      default: () => [],
    },
    graphUrl: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.result-desc {
  &__brief {
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
  &__graph {
    width: 100%;
    height: 400px;
    background-color: #c4c5c6;
    margin: 12px 0 0;
  }
}
</style>
