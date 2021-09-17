<template>
  <div class="report-table">
    <h3 class="report-table__title">
      <span>太魯閣出軌案</span>
      <span>臺鐵局犯了哪些錯？</span>
    </h3>
    <table class="report-table__content">
      <thead>
        <tr>
          <td class="td-category">類別</td>
          <td class="td-fault">缺失</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableList" :key="item.category">
          <td class="td-category">
            <span>{{ item.category }}</span>
          </td>
          <td class="td-fault">
            <ol>
              <li v-for="str in item.list" :key="str">
                <span>{{ str }}</span>
              </li>
            </ol>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="report-table__credit">
      資料來源／交通部臺鐵太魯閣號出軌事故行政調查報告
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableList: [
        {
          category: '文件審核',
          list: [
            '工地主任李義祥兼任「鋼筋領班」和「品管人員」，臺鐵局沒查到',
            '李義祥是其他營造業的負責人，臺鐵局沒查到',
            '承包商再把工程轉包給其他業者，臺鐵局沒做好監督',
            '外包進度可能有浮報',
          ],
        },
        {
          category: '督導工程',
          list: [
            '監造和施工廠商沒有每天填寫「鐵路沿線工程施工確保行車安全檢查表」',
            '停止施工前，李義祥沒有在「清明連續假期收工前交通安全設施檢查表」簽名',
            '連假停止施工期間，臺鐵局沒有稽查工地',
            '工程外包給專案管理商後，臺鐵局沒有制定稽核的機制',
            '承包商在工地出現疏失，臺鐵局沒做好監督',
          ],
        },
        {
          category: '工地人員管理',
          list: [
            '工程違法僱用外籍勞工',
            '工地出現不屬於施工廠商的員工，門禁鬆散',
          ],
        },
        {
          category: '行車安全教育訓練',
          list: [
            '沒有在開工前對施工人員做「鐵路行車安全觀念講習」',
            '沒有告知工地人員緊急聯絡電話',
            '沒有督導承包商把緊急聯絡電話製成卡片，要求工程人員帶在身上',
            '沒有提供行車調度無線電話給承包商使用',
          ],
        },
        {
          category: '工地防護',
          list: [
            '沒有落實鐵路行車安全觀念講習',
            '沒有督導承包商對東正線做好防護',
            '沒有督導承包商做好施工安全防護措施',
            '工區內既有便道」只拉警示帶，沒有足夠的防護，臺鐵沒做好監督',
            '承包商沒有在「工區內既有便道」鋪設 AC 路面，臺鐵沒做好監督',
            '「工區內既有便道」附近的邊坡禁停車輛機械，臺鐵局沒做好監督',
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scpoed>
.report-table {
  background-color: #292929;
  padding: 16px;
  @include media-breakpoint-up(md) {
    padding: 32px;
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
        .td-category {
          width: 80px;
          padding: 12px 8px;
          @include media-breakpoint-up(md) {
            width: 88px;
            padding: 12px;
          }
        }
        .td-fault {
          padding: 12px 8px;
          @include media-breakpoint-up(md) {
            padding: 12px;
          }
        }
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        .td-category {
          width: 80px;
          font-size: 16px;
          line-height: 1.5;
          color: #ffa644;
          vertical-align: top;
          padding: 12px 8px;
          @include media-breakpoint-up(md) {
            width: 88px;
            padding: 12px;
          }
        }
        .td-fault {
          padding: 12px 8px;
          @include media-breakpoint-up(md) {
            padding: 12px;
          }
          ol {
            padding: 0 0 0 16px;
            li {
              font-size: 14px;
              line-height: 21px;
              color: #fff;
              @include media-breakpoint-up(md) {
                font-size: 16px;
                line-height: 24px;
              }
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
}
</style>
