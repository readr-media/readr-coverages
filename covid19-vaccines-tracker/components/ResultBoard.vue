<template>
  <div class="result-board">
    <h2>你在最新一批公費疫苗的施打對象名單內，但實際接種日期待公佈。</h2>
    <div class="result-board__list-wrapper">
      <ul>
        <li>
          <span class="list-items__title">疫苗廠牌</span>
          <div class="list-items__list">
            <span
              v-for="brand in mockData.brands"
              :key="brand"
              class="list-items__items"
            >
              {{ brand }}
            </span>
          </div>
        </li>
        <li>
          <span class="list-items__title">疫苗來源</span>
          <div class="list-items__list">
            <span
              v-for="source in mockData.sources"
              :key="source"
              class="list-items__items"
            >
              {{ source }}
            </span>
          </div>
        </li>
        <li>
          <span class="list-items__title">疫苗到貨時間</span>
          <div class="list-items__list">
            <span
              v-for="item in mockData.time"
              :key="item"
              class="list-items__items"
            >
              {{ item }}
            </span>
          </div>
        </li>
      </ul>
      <div class="second-injection">
        <p>預計施打第二劑的時間</p>
        <div class="second-injection__time">
          <span v-for="item in mockData.secTime" :key="item">
            {{ item }}
          </span>
        </div>
        <small>僅為推估，實際情況以指揮中心為主</small>
        <small class="second-injection__timestamp">2021/6/22 更新</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mockData: {
        brands: ['AstraZeneca(AZ)', 'Moderna(莫德納)'],
        sources: ['COVEX', '直接與廠商購買'],
        time: ['2021 / 05 / 19', '2021 / 05 / 28'],
        secTime: ['2021 年 8 月初', '2021 年 8 月中旬'],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.result-board {
  border-bottom: 2px solid #000928;
  padding: 20px 20px 24px;
  @include media-breakpoint-up(md) {
    padding: 32px 40px;
  }
  h2 {
    margin: 0 0 24px;
  }
  &__list-wrapper {
    @include media-breakpoint-up(md) {
      display: flex;
    }
    ul {
      margin: 0 0 12px;
      @include media-breakpoint-up(md) {
        min-width: 260px;
        max-width: 260px;
        margin: 0;
      }
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
          .list-items__items + .list-items__items {
            margin: 4px 0 0;
          }
        }
      }
    }
    .second-injection {
      @include media-breakpoint-up(md) {
        margin: 0 0 0 40px;
        padding: 12px 0 0;
      }
      p {
        font-size: 16px;
        line-height: 1.5;
        color: #000928;
        opacity: 0.87;
        margin: 0 0 4px;
      }
      small {
        font-size: 14px;
        line-height: 21px;
        color: #000928;
        opacity: 0.3;
      }
      &__time {
        margin: 0 0 12px;
        span {
          font-size: 18px;
          line-height: 1.5;
          color: #04295e;
          display: block;
        }
        span + span {
          margin: 4px 0 0;
        }
      }
      &__timestamp {
        margin: 4px 0 0;
      }
    }
  }
}
</style>
