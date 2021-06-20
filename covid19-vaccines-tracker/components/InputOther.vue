<template>
  <div class="input-other">
    <div class="input-other__county">
      <label for="county">2. 你居住的縣市？</label>
      <div class="input-other__county-input">
        <input
          id="county"
          v-model="countyInput"
          type="text"
          placeholder="台北市"
          autocomplete="off"
          @input.prevent="getCurrentCountyInput"
        />
        <ul v-if="matchedCounty.length">
          <li
            v-for="county in matchedCounty"
            :key="county"
            @click="setCountyInput(county)"
          >
            {{ county }}
          </li>
        </ul>
      </div>
    </div>
    <div class="input-other__btns">
      <button
        type="button"
        :class="[shouldShowNextBtn ? 'g-primary-btn' : 'g-disabled-btn']"
        class="input-other__btns--primary"
      >
        送出
      </button>
      <button type="button" class="g-skip-btn">我想直接看最新資訊</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countyInput: '',
      currentCountyInput: undefined,
      counties: [
        '台北市',
        '台中市',
        '台南市',
        '新北市',
        '基隆市',
        '桃園市',
        '高雄市',
        '新竹縣',
        '苗栗縣',
        '彰化縣',
        '南投縣',
        '雲林縣',
        '嘉義縣',
        '屏東縣',
        '宜蘭縣',
        '台東縣',
        '花蓮縣',
        '澎湖縣',
        '金門縣',
        '連江縣',
        '臺北市',
        '臺中市',
        '臺南市',
        '臺東縣',
      ],
    }
  },
  computed: {
    matchedCounty() {
      return this.counties.filter((county) =>
        county.includes(this.currentCountyInput)
      )
    },
    shouldShowNextBtn() {
      return this.county !== ''
    },
  },
  methods: {
    getCurrentCountyInput(e) {
      this.currentCountyInput = e.target.value.length
        ? e.target.value
        : undefined
    },
    setCountyInput(county) {
      this.currentCountyInput = undefined
      this.countyInput = county
    },
  },
}
</script>

<style lang="scss" scoped>
.input-other {
  max-width: 320px;
  margin: 0 auto;
  &__county {
    display: flex;
    flex-direction: column;
    margin: 0 0 48px;
    label {
      font-size: 18px;
      line-height: 2;
      color: #000928;
      margin: 0 0 4px;
    }
    &-input {
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      font-size: 18px;
      background-color: #fff;
      &:focus-within {
        outline: none;
        border: 1px solid #04295e;
      }
      input {
        width: 100%;
        border: none;
        padding: 12px 16px;
        background-color: transparent;
        &:focus {
          border: none;
          outline: none;
        }
      }
      ul {
        position: relative;
        margin: 4px 0;
        li {
          padding: 8px 16px;
          color: #000928;
          text-align: left;
          &:hover {
            color: #fff;
            background-color: #04295e;
            cursor: pointer;
          }
        }
        &::before {
          content: '';
          position: absolute;
          top: -4px;
          right: 16px;
          left: 16px;
          height: 1px;
          background-color: #e0e0e0;
        }
      }
    }
  }
  &__btns {
    width: 100%;
    text-align: center;
    &--primary {
      margin: 0 auto 12px;
    }
    &--secondary {
      margin: 0 auto 24px;
    }
  }
}
</style>
