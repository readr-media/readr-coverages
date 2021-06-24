<template>
  <ul class="result-list">
    <li v-if="hasBrands">
      <span class="list-items__title">疫苗廠牌</span>
      <div class="list-items__list">
        <span v-for="brand in brands" :key="brand" class="list-items__items">
          {{ brand }}
        </span>
      </div>
    </li>
    <li v-if="hasSources">
      <span class="list-items__title">疫苗來源</span>
      <div class="list-items__list">
        <span v-for="source in sources" :key="source" class="list-items__items">
          {{ source }}
        </span>
      </div>
    </li>
    <li v-if="hasReadyTime">
      <span class="list-items__title">疫苗到貨時間</span>
      <div class="list-items__list">
        <span v-for="item in readyTime" :key="item" class="list-items__items">
          {{ item }}
        </span>
      </div>
    </li>
    <li v-if="hasStartTime">
      <span class="list-items__title">開始施打時間</span>
      <div class="list-items__list">
        <span v-for="item in startTime" :key="item" class="list-items__items">
          {{ item }}
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
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
  },
  computed: {
    hasBrands() {
      return this.brands && this.brands?.length
    },
    hasSources() {
      return this.sources && this.sources?.length
    },
    hasReadyTime() {
      return this.readyTime && this.readyTime?.length
    },
    hasStartTime() {
      return this.startTime && this.startTime?.length
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
}
</style>
