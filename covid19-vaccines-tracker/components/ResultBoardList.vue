<template>
  <ul v-if="shouldShowList" class="result-list">
    <li v-if="hasBrands" :class="{ 'li-a1': isA1 }">
      <span class="list-items__title">疫苗廠牌</span>
      <div class="list-items__list">
        <span
          v-for="(brand, i) in brands"
          :key="`${brand}-${i}`"
          class="list-items__items"
        >
          {{ brand }}
        </span>
      </div>
    </li>
    <li v-if="hasSources" :class="{ 'li-a1': isA1 }">
      <span class="list-items__title">疫苗來源</span>
      <div class="list-items__list">
        <span
          v-for="(source, i) in sources"
          :key="`${source}-${i}`"
          class="list-items__items"
        >
          {{ source }}
        </span>
      </div>
    </li>
    <li v-if="hasReadyTime">
      <span class="list-items__title">疫苗到貨時間</span>
      <div class="list-items__list">
        <span
          v-for="(item, i) in readyTime"
          :key="`${item}-${i}`"
          class="list-items__items"
        >
          {{ item }}
        </span>
      </div>
    </li>
    <li v-if="hasStartTime">
      <span class="list-items__title">開始接種時間</span>
      <div class="list-items__list">
        <span
          v-for="(item, i) in startTime"
          :key="`${item}-${i}`"
          class="list-items__items"
        >
          {{ item }}
        </span>
      </div>
    </li>
    <li v-if="hasEndTime" class="li-end-time">
      <div class="li-end-time__wrapper">
        <span class="list-items__title">預計結束時間</span>
        <div class="list-items__list">
          <span
            v-for="(item, i) in endTime"
            :key="`${item}-${i}`"
            class="list-items__items"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <small v-if="isExpired">
        原本預計安排的時間已過，但您仍可以致電衛生局處詢問其他可接種的方式和時間。
      </small>
    </li>
  </ul>
</template>

<script>
import { isArrayEmpty } from '~/utils/array-handler'

export default {
  props: {
    brands: {
      type: Array,
      default: () => [],
    },
    sources: {
      type: Array,
      default: () => [],
    },
    readyTime: {
      type: Array,
      default: () => [],
    },
    startTime: {
      type: Array,
      default: () => [],
    },
    endTime: {
      type: Array,
      default: () => [],
    },
    isExpired: {
      type: Boolean,
      default: false,
    },
    isA1: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    shouldShowList() {
      return (
        this.hasBrands ||
        this.hasSources ||
        this.hasReadyTime ||
        this.hasStartTime ||
        this.hasEndTime
      )
    },
    hasBrands() {
      return isArrayEmpty(this.brands)
    },
    hasSources() {
      return isArrayEmpty(this.sources)
    },
    hasReadyTime() {
      return isArrayEmpty(this.readyTime)
    },
    hasStartTime() {
      return isArrayEmpty(this.startTime)
    },
    hasEndTime() {
      return isArrayEmpty(this.endTime)
    },
  },
}
</script>

<style lang="scss" scoped>
.result-list {
  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e0e0e0;
    padding: 12px 0;
    .list-items__title {
      font-size: 16px;
      line-height: 1.5;
    }
    .list-items__list {
      font-size: 18px;
      line-height: 1.5;
      color: #04295e;
      text-align: right;
      .list-items__items {
        display: block;
      }
    }
  }
  .li-a1 {
    @include media-breakpoint-up(md) {
      min-width: 260px;
      max-width: 260px;
      border-bottom: none;
    }
  }
  .li-end-time {
    display: block;
    &__wrapper {
      display: flex;
      justify-content: space-between;
    }
    small {
      display: block;
      margin: 4px 0 0;
      font-size: 16px;
      line-height: 1.5;
      color: #000928;
      opacity: 0.5;
    }
  }
}
</style>
