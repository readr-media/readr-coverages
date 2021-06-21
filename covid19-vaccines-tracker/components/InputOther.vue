<template>
  <div class="input-other">
    <section class="input-other__select county">
      <p class="label">2. 你居住的縣市？</p>
      <div class="input-other__select-input">
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
    </section>
    <section class="input-other__select occupation">
      <p class="label">3. 你的職業？</p>
      <div class="input-other__select-input">
        <div class="mock-input" @click="toggleOccupationIcon">
          {{ occupationInput }}
          <span class="arrow" :class="{ rotate: openOccupationList }" />
        </div>
        <ul v-if="shouldShowOccupationList">
          <li
            v-for="option in mockOptions"
            :key="option"
            @click="setOccupationInput(option)"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </section>
    <section class="input-other__condition">
      <p class="label">4. 你是否符合以下身份或條件？</p>
      <label
        v-for="condition in mockConditions"
        :key="condition"
        class="input-other__condition--checklist"
      >
        {{ condition }}
        <input
          :id="condition"
          v-model="conditionInput"
          :value="condition"
          type="checkbox"
        />
        <span class="checkmark"></span>
      </label>
    </section>
    <section class="input-other__injection">
      <p class="label">5. 你是否已經打過第一劑？</p>
      <label class="input-other__injection--no">
        否，還沒打過
        <input
          v-model="injectionInput"
          type="radio"
          value="n"
          class="injection-input"
        />
        <span class="radiomark"></span>
      </label>
      <label class="input-other__injection--yes">
        是，已經打過
        <input
          v-model="injectionInput"
          type="radio"
          value="y"
          class="injection-input"
        />
        <span class="radiomark"></span>
      </label>
      <div v-if="injectionInput === 'y'" class="input-other__injection--year">
        <label for="yearInput">請輸入注射時間</label>
        <input
          id="yearInput"
          v-model="injectionYearInput"
          type="text"
          placeholder="YYYY / MM / DD"
        />
      </div>
    </section>
    <div class="input-other__btns">
      <button
        type="button"
        :class="[shouldShowNextBtn ? 'g-primary-btn' : 'g-disabled-btn']"
        class="input-other__btns--primary"
        @click="goToNextPage"
      >
        送出
      </button>
      <button type="button" class="g-skip-btn" @click="skipToResultPage">
        我想直接看最新資訊
      </button>
    </div>
  </div>
</template>

<script>
import { COUNTIES } from '~/constants'

export default {
  data() {
    return {
      countyInput: '',
      currentCountyInput: undefined,
      occupationInput: '請選擇',
      injectionInput: undefined,
      injectionYearInput: undefined,
      conditionInput: [],
      openOccupationList: false,
      pageData: {},
      mockOptions: [
        '中央及地方政府防疫人員',
        '國際航空機組員',
        '國際商船船員',
        '防疫車隊駕駛',
        '因外交或公務奉派出國人員、以互惠原則提供我國外交人員接種之該國駐臺員眷等',
      ],
      mockConditions: [
        '無',
        '洗腎患者',
        '重大傷病',
        '原住民',
        '同住者為高風險職業',
        '確診者',
      ],
    }
  },
  computed: {
    matchedCounty() {
      return COUNTIES.filter((county) =>
        county.includes(this.currentCountyInput)
      )
    },
    shouldShowOccupationList() {
      return this.mockOptions.length && this.openOccupationList
    },
    shouldShowNextBtn() {
      return (
        this.countyInput &&
        this.occupationInput &&
        this.conditionInput.length &&
        this.injectionInput
      )
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
    setOccupationInput(option) {
      this.occupationInput = option
      this.openOccupationList = false
    },
    toggleOccupationIcon() {
      this.openOccupationList = !this.openOccupationList
    },
    goToNextPage() {
      this.pageData = {
        county: this.countyInput,
        occupation: this.occupationInput,
        condition: this.conditionInput,
        injection: this.injectionInput,
      }
      this.$emit('finish-other', this.pageData)
    },
    skipToResultPage() {
      this.$emit('skip-to-result')
    },
  },
}
</script>

<style lang="scss" scoped>
.input-other {
  max-width: 320px;
  margin: 0 auto;
  &__select {
    display: flex;
    flex-direction: column;
    margin: 0 0 24px;
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
      .mock-input {
        width: 100%;
        position: relative;
        cursor: pointer;
        padding: 12px 48px 12px 16px;
        .arrow {
          position: absolute;
          top: 42%;
          right: 16px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 10px 10px 0 10px;
          border-color: #04295e transparent transparent transparent;
          transition: all 0.3s ease-in-out;
        }
        .rotate {
          transform: rotate(180deg);
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
  &__condition {
    margin: 0 0 24px;
    &--checklist {
      position: relative;
      display: flex;
      align-items: center;
      font-size: 18px;
      line-height: 2;
      padding: 0 0 0 26px;
      cursor: pointer;
      user-select: none;
      .checkmark {
        position: absolute;
        top: 9px;
        left: 0;
        height: 18px;
        width: 18px;
        border: 2px solid #e0e0e0;
        border-radius: 3px;
        &::after {
          content: '';
          position: absolute;
          display: block;
          left: 3px;
          top: -1px;
          width: 7px;
          height: 12px;
          border: solid #f6f6f5;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
      input[type='checkbox'] {
        position: absolute;
        top: 9px;
        left: 0;
        opacity: 0;
        height: 18px;
        width: 18px;
        &:checked ~ .checkmark {
          background-color: #04295e;
          border: 2px solid #04295e;
        }
      }
    }
  }
  &__injection {
    margin: 0 0 48px;
    @include media-breakpoint-up(md) {
      margin: 0 0 54px;
    }
    &--no,
    &--yes {
      position: relative;
      display: flex;
      align-items: center;
      font-size: 18px;
      line-height: 18px;
      color: #000928;
      padding: 0 0 0 26px;
      cursor: pointer;
      user-select: none;
      .radiomark {
        position: absolute;
        top: 0;
        left: 0;
        height: 18px;
        width: 18px;
        border: 2px solid #e0e0e0;
        border-radius: 18px;
        &::after {
          content: '';
          position: absolute;
          display: none;
          top: 3px;
          left: 3px;
          width: 8px;
          height: 8px;
          border-radius: 8px;
          background-color: #04295e;
        }
      }
      input[type='radio'] {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        height: 18px;
        width: 18px;
        &:checked ~ .radiomark {
          border: 2px solid #04295e;
        }
        &:checked ~ .radiomark::after {
          display: block;
        }
      }
    }
    &--no {
      margin: 0 0 18px;
      @include media-breakpoint-up(md) {
        margin: 0 0 22px;
      }
    }
    &--year {
      display: flex;
      flex-direction: column;
      margin: 12px 0 0;
      label {
        font-size: 18px;
        line-height: 2;
        color: #000928;
        margin: 0 0 4px;
        @include media-breakpoint-up(md) {
          margin: 0 0 8px;
        }
      }
      input[type='text'] {
        font-size: 18px;
        line-height: 1.5;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        padding: 12px 16px;
        &:focus {
          outline: none;
          border: 1px solid #04295e;
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
  .label {
    font-size: 18px;
    line-height: 2;
    color: #000928;
    margin: 0 0 4px;
    @include media-breakpoint-up(md) {
      margin: 0 0 8px;
    }
  }
}
</style>
