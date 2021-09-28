<template>
  <div class="report-table" :class="{ hide: shouldHide }">
    <h3 class="report-table__title">
      <span>兩次重大出軌意外期間</span>
      <span>臺鐵重大鐵道事故</span>
    </h3>
    <table class="report-table__content">
      <thead>
        <tr>
          <td class="td-info">日期</td>
          <td class="td-fault">事故</td>
          <td class="td-tag">疏失類別</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableList" :key="item.date">
          <td class="td-info">
            <span class="td-info__time">{{ item.year }}</span>
            <span class="td-info__time date">{{ item.date }}</span>
            <span class="td-info__state">{{ item.state }}</span>
          </td>
          <td class="td-fault">
            <span>{{ item.text }}</span>
          </td>
          <td class="td-tag">
            <ul>
              <li v-for="tag in item.tags" :key="tag.name">
                <span :style="{ color: tag.color }">#{{ tag.name }}</span>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="report-table__credit">
      資料來源／國家運輸安全調查委員會、交通部臺灣鐵路局
    </p>
    <div v-if="shouldHide" class="report-table__hide">
      <div class="report-table__hide__btn" @click="openTable">
        <span>展開全部</span>
        <SvgArrowDown />
      </div>
    </div>
  </div>
</template>

<script>
import SvgArrowDown from '~/assets/images/arrow-down.svg?inline'

export default {
  components: {
    SvgArrowDown,
  },
  data() {
    return {
      shouldHide: false,
      tableList: [
        {
          year: '2018/',
          date: '10/21',
          state: '已結案',
          text: '普悠瑪號在蘇澳新馬車站脫軌翻覆，18死215傷',
          tags: [
            {
              name: '員工訓練',
              color: '#ffa644',
            },
            {
              name: '車輛檢修',
              color: '#ff44cb',
            },
          ],
        },
        {
          year: '2019/',
          date: '8/6',
          state: '已結案',
          text:
            '區間車經過高雄三塊厝站忘記停車，倒退回站時差點撞上後方的自強號',
          tags: [
            {
              name: '員工訓練',
              color: '#ffa644',
            },
          ],
        },
        {
          year: '2019/',
          date: '8/28',
          state: '已結案',
          text:
            '屏東佳冬站外包商測試完線路，忘記把電纜線切回正確位置，差點讓區間車與自強號對撞',
          tags: [
            {
              name: '外包疏失',
              color: '#69c5cb',
            },
            {
              name: '員工訓練',
              color: '#ffa644',
            },
          ],
        },
        {
          year: '2019/',
          date: '12/31',
          state: '已結案',
          text: '開往基隆七堵的自強號行經社頭至員林間撞及堆高機，列車出軌',
          tags: [
            {
              name: '設備檢修',
              color: '#ff4444',
            },
            {
              name: '平交道安全',
              color: '#69cb73',
            },
          ],
        },
        {
          year: '2020/',
          date: '3/18',
          state: '已結案',
          text:
            '一輛貨物列車抵達苗栗通霄站前，司機員沒有依照行車調度員的要求停站，差點撞上鄰軌的區間車',
          tags: [
            {
              name: '員工訓練',
              color: '#ffa644',
            },
            {
              name: '外包疏失',
              color: '#69c5cb',
            },
          ],
        },
        {
          year: '2020/',
          date: '4/10',
          state: '調查中',
          text: '區間車行經高雄市楠梓平交道時撞及一輛大貨車，車體出軌 5 傷',
          tags: [
            {
              name: '平交道安全',
              color: '#69cb73',
            },
          ],
        },
        {
          year: '2020/',
          date: '5/19',
          state: '調查中',
          text:
            '區間車行經臺中市成功站時，司機員發現有重大撞擊異音，之後確認是軌道內軌斷裂 44 公分',
          tags: [
            {
              name: '設備檢修',
              color: '#ff4444',
            },
            {
              name: '員工訓練',
              color: '#ffa644',
            },
          ],
        },
        {
          year: '2020/',
          date: '6/1',
          state: '調查中',
          text:
            '區間車行經源泉站至濁水站間，司機員察覺駕駛臺「機油壓力燈」熄滅，檢查後發現第一節車廂底部失火',
          tags: [
            {
              name: '設備檢修',
              color: '#ff4444',
            },
          ],
        },
        {
          year: '2020/',
          date: '6/10',
          state: '調查中',
          text:
            '一輛貨物列車在調車時，其中一節車廂脫離，從新左營站滑到內惟站北端才停下，滑行約 4 公里',
          tags: [
            {
              name: '員工訓練',
              color: '#ffa644',
            },
          ],
        },
        {
          year: '2020/',
          date: '6/25',
          state: '調查中',
          text: '從彰化開往屏東的自強號在抵達嘉義站時，車體冒出大量濃煙',
          tags: [
            {
              name: '設備檢修',
              color: '#ff4444',
            },
          ],
        },
        {
          year: '2021/',
          date: '4/2',
          state: '調查中',
          text:
            '由樹林開往臺東的太魯閣號駛出和仁隧道後，撞及一輛從施工便道邊坡滑落的大貨車，8 節車廂出軌，49 死 213 傷',
          tags: [
            {
              name: '外包疏失',
              color: '#69c5cb',
            },
            {
              name: '工地管理',
              color: '#ecf033',
            },
          ],
        },
      ],
    }
  },
  mounted() {
    if (window.innerWidth < 768) {
      this.shouldHide = true
    }
  },
  methods: {
    openTable() {
      this.shouldHide = false
    },
  },
}
</script>

<style lang="scss" scpoed>
.report-table {
  position: relative;
  background-color: #292929;
  padding: 16px;
  @include media-breakpoint-up(md) {
    padding: 24px 32px;
  }
  &.hide {
    height: 524px;
    overflow: hidden;
  }
  &__title {
    margin: 0 0 24px;
    span {
      display: block;
      font-size: 24px;
      font-weight: 500;
      line-height: 36px;
      letter-spacing: 0.032em;
      color: #ffa644;
      @include media-breakpoint-up(md) {
        font-size: 28px;
        line-height: 40px;
      }
    }
  }
  &__content {
    margin: 0 0 4px;
    @include media-breakpoint-up(md) {
      margin: 0 0 12px;
    }
    thead {
      tr {
        font-size: 14px;
        line-height: 21px;
        color: #fff;
        border-bottom: 1px solid #fff;
        .td-info {
          width: 60px;
          padding: 12px 8px;
          @include media-breakpoint-up(md) {
            width: 108px;
            padding: 12px;
          }
        }
        .td-fault {
          padding: 12px 8px;
          @include media-breakpoint-up(md) {
            padding: 12px;
          }
        }
        .td-tag {
          width: 84px;
          padding: 12px 8px;
          @include media-breakpoint-up(md) {
            width: 100px;
            padding: 12px;
          }
        }
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        font-size: 14px;
        line-height: 21px;
        @include media-breakpoint-up(md) {
          font-size: 16px;
          line-height: 24px;
        }
        .td-info {
          width: 60px;
          vertical-align: top;
          padding: 12px 8px;
          @include media-breakpoint-up(md) {
            width: 108px;
            padding: 12px;
          }
          &__time {
            width: 100%;
            color: #fff;
            display: block;
            @include media-breakpoint-up(md) {
              display: inline;
            }
            &.date {
              @include media-breakpoint-up(md) {
                margin-left: -4px;
              }
            }
          }
          &__state {
            color: #fff;
            opacity: 0.5;
            display: block;
          }
        }
        .td-fault {
          padding: 12px 8px;
          color: #fff;
          vertical-align: top;
          @include media-breakpoint-up(md) {
            padding: 12px;
          }
        }
        .td-tag {
          width: 84px;
          vertical-align: top;
          padding: 12px 8px;
          @include media-breakpoint-up(md) {
            width: 100px;
            padding: 12px;
          }
          ul {
            width: 100%;
            list-style: none;
            padding: 0;
            li {
              width: 100%;
            }
          }
        }
        &:nth-child(even) {
          background-color: #111;
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
  &__credit {
    font-size: 14px;
    line-height: 21px;
    opacity: 0.5;
    color: #fff;
  }
  &__hide {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 200px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(17, 17, 17, 0.15) 10%,
      rgba(17, 17, 17, 0.3) 20%,
      rgba(17, 17, 17, 0.5) 35%,
      rgba(17, 17, 17, 0.7) 65%,
      rgba(17, 17, 17, 0.85) 70%,
      #111
    );
    padding: 0 16px;
    &__btn {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      padding: 80px 0 0;
      span {
        font-size: 14px;
        line-height: 21px;
        color: #fff;
        margin: 0 0 4px;
      }
      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>
