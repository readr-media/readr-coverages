<template>
  <div class="result-desc">
    <small class="result-desc__brief">{{ brief }}</small>
    <ul v-if="shouldShowList" class="result-desc__list">
      <li v-for="item in Object.keys(listItems)" :key="item">
        <span>{{ item }}</span>
        <p v-for="sub in listItems[item]" :key="sub">{{ sub }}</p>
      </li>
    </ul>
    <template v-if="shouldShowDesc">
      <p
        v-for="paragraph in description"
        :key="paragraph"
        class="result-desc__description"
        :class="{ 'black-text': shouldShowList }"
      >
        {{ paragraph }}
      </p>
    </template>
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
      type: Array,
      required: true,
      default: () => [],
    },
    listItems: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    shouldShowList() {
      return this.listItems && Object.keys(this.listItems).length
    },
    shouldShowDesc() {
      return isArrayEmpty(this.description)
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
    margin: 0 0 12px;
    li {
      position: relative;
      color: #04295e;
      padding: 0 0 0 30px;
      &::before {
        content: '';
        position: absolute;
        top: 16px;
        left: 16px;
        width: 6px;
        height: 6px;
        border-radius: 5px;
        background-color: #04295e;
      }
      span {
        font-size: 18px;
        line-height: 2;
        margin: 0 0 12px;
      }
      p {
        position: relative;
        font-size: 16px;
        line-height: 2;
        padding: 0 0 0 18px;
        margin: 0 0 2px;
        &::before {
          content: '';
          position: absolute;
          top: 14px;
          left: 4px;
          width: 6px;
          height: 6px;
          border: 1px solid #04295e;
          border-radius: 6px;
        }
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
