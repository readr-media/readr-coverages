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
      <ErrHandler
        :target="'county'"
        :currentInput="currentCountyInput"
        :cityList="Object.keys(counties)"
        @has-err="handleHasErr"
      />
    </section>
    <section class="input-other__select job">
      <p class="label">3. 你的職業？</p>
      <div class="input-other__select-input">
        <div class="mock-input" @click="toggleJobIcon">
          {{ jobInput.major }}
          <span class="arrow" :class="{ rotate: openJobList.major }" />
        </div>
        <ul v-if="shouldShowJobList">
          <li @click="setJobInput('都不是')">都不是</li>
          <li
            v-for="job in Object.keys(jobs.major)"
            :key="job"
            @click="setJobInput(job)"
          >
            {{ job }}
          </li>
        </ul>
      </div>
      <div v-if="hasSecond" class="input-other__select-input">
        <div class="mock-input" @click="toggleSecondIcon">
          {{ jobInput.second }}
          <span class="arrow" :class="{ rotate: openJobList.second }" />
        </div>
        <ul v-if="shouldShowSecondList">
          <li
            v-for="job in Object.keys(jobs.second)"
            :key="job"
            @click="setSecondInput(job)"
          >
            {{ job }}
          </li>
          <li @click="setSecondInput('以上皆非')">以上皆非</li>
          <li @click="setSecondInput('我不確定')">我不確定</li>
        </ul>
      </div>
      <div v-if="hasThird" class="input-other__select-input">
        <div class="mock-input" @click="toggleThirdIcon">
          {{ jobInput.third }}
          <span class="arrow" :class="{ rotate: openJobList.third }" />
        </div>
        <ul v-if="shouldShowThirdList">
          <li
            v-for="job in Object.keys(jobs.third)"
            :key="job"
            @click="setThirdInput(job)"
          >
            {{ job }}
          </li>
          <li @click="setThirdInput('以上皆非')">以上皆非</li>
          <li @click="setThirdInput('我不確定')">我不確定</li>
        </ul>
      </div>
    </section>
    <section class="input-other__condition">
      <p class="label">4. 你是否符合以下身份或條件？</p>
      <label class="input-other__condition--checklist">
        無
        <input
          :id="'無'"
          v-model="conditionInput"
          :value="'無'"
          type="checkbox"
          @change="removeOtherCheck"
        />
        <span class="checkmark"></span>
      </label>
      <label
        v-for="condition in Object.keys(conditions)"
        :key="condition"
        class="input-other__condition--checklist"
      >
        {{ condition }}
        <input
          :id="condition"
          v-model="conditionInput"
          :value="condition"
          type="checkbox"
          @change="removeNoCheck"
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
          :value="false"
          class="injection-input"
        />
        <span class="radiomark"></span>
      </label>
      <label class="input-other__injection--yes">
        是，已經打過
        <input
          v-model="injectionInput"
          type="radio"
          :value="true"
          class="injection-input"
        />
        <span class="radiomark"></span>
      </label>
      <div v-if="injectionInput" class="input-other__injection--year">
        <label for="yearInput">請輸入注射時間</label>
        <input
          id="yearInput"
          v-model="injectionYearInput"
          type="text"
          autocomplete="off"
          placeholder="YYYY / MM / DD"
          maxlength="14"
          @input.prevent="handleTimeInput"
        />
        <ErrHandler
          :target="'injectTime'"
          :currentInput="injectionYearInput"
          @has-err="handleHasErr"
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
import _ from 'lodash'
import ErrHandler from '~/components/ErrHandler.vue'

export default {
  components: {
    ErrHandler,
  },
  props: {
    questions: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      counties: {},
      conditions: {},
      jobs: {
        major: {},
        second: {},
        third: {},
      },
      jobInput: {
        major: '都不是',
        second: '都不是',
        third: '都不是',
      },
      openJobList: {
        major: false,
        second: false,
        third: false,
      },
      countyInput: '',
      conditionInput: ['無'],
      currentCountyInput: undefined,
      injectionInput: false,
      injectionYearInput: '',
      shouldAddInputBorder: false,
      yearInputLastLength: 0,
      hasErr: true,
      pageData: {},
    }
  },
  computed: {
    hasSecond() {
      return Object.keys(this.jobs.second).length
    },
    hasThird() {
      return Object.keys(this.jobs.third).length
    },
    matchedCounty() {
      if (this.currentCountyInput === 'matched') {
        return []
      }
      return Object.keys(this.counties).filter((county) =>
        county.includes(this.currentCountyInput)
      )
    },
    shouldShowJobList() {
      return Object.keys(this.jobs.major).length && this.openJobList.major
    },
    shouldShowSecondList() {
      return Object.keys(this.jobs.second).length && this.openJobList.second
    },
    shouldShowThirdList() {
      return Object.keys(this.jobs.third).length && this.openJobList.third
    },
    shouldShowNextBtn() {
      return (
        !this.hasErr &&
        this.countyInput &&
        this.jobInput.major &&
        this.conditionInput.length &&
        this.injectionInput !== undefined
      )
    },
  },
  mounted() {
    Object.entries(this.questions).forEach((item) => {
      if (item[0] === '你是否有這些身份或符合這些條件') {
        this.conditions = this.formatOptions(item[1], 'major_option')
      }
      if (item[0] === '你的職業') {
        this.jobs.major = this.formatOptions(item[1], 'major_option')
      }
      if (item[0] === '你居住的縣市') {
        this.counties = this.formatOptions(item[1], 'major_option')
      }
    })
  },
  methods: {
    getCurrentCountyInput(e) {
      this.currentCountyInput = e.target.value.length
        ? this.formatTai(e.target.value)
        : undefined
    },
    setCountyInput(county) {
      this.currentCountyInput = 'matched'
      this.countyInput = county
    },
    setJobInput(option) {
      this.jobInput.second = '都不是'
      this.jobs.second = {}
      this.jobs.third = {}
      this.jobInput.major = option
      this.jobs.second = this.formatOptions(this.jobs.major[option], 'option2')
      this.openJobList.major = false
    },
    setSecondInput(option) {
      this.jobInput.third = '都不是'
      this.jobs.third = {}
      this.jobInput.second = option
      this.jobs.third = this.formatOptions(this.jobs.second[option], 'option3')
      this.openJobList.second = false
    },
    setThirdInput(option) {
      this.jobInput.third = option
      this.openJobList.third = false
    },
    toggleJobIcon() {
      this.openJobList.major = !this.openJobList.major
    },
    toggleSecondIcon() {
      this.openJobList.second = !this.openJobList.second
    },
    toggleThirdIcon() {
      this.openJobList.third = !this.openJobList.third
    },
    removeOtherCheck() {
      this.conditionInput = ['無']
    },
    removeNoCheck() {
      const index = this.conditionInput.indexOf('無')
      if (index !== -1) {
        this.conditionInput.splice(index, 1)
      }
    },
    handleTimeInput() {
      const length = this.injectionYearInput.length
      const dif = this.yearInputLastLength - length
      if (dif >= 0 && (length === 6 || length === 11)) {
        this.injectionYearInput = this.injectionYearInput.slice(0, -3)
      }
      if (dif <= 0 && (length === 4 || length === 9)) {
        this.injectionYearInput = this.injectionYearInput + ' / '
      }
      this.yearInputLastLength = this.injectionYearInput.length
    },
    handleHasErr(payload) {
      this.hasErr = payload
    },
    goToNextPage() {
      this.pageData = {
        county: this.countyInput,
        job: {
          major: this.jobInput.major,
          option1: this.jobInput.second,
          option2: this.jobInput.third,
        },
        condition: this.conditionInput,
        injection: {
          isInjection: this.injectionInput,
          injectionTime: this.injectionYearInput,
        },
      }
      this.$emit('finish-other', this.pageData)
    },
    skipToResultPage() {
      this.$emit('skip-to-result')
    },
    formatTai(str) {
      return str.replace('臺', '台')
    },
    formatOptions(arr, aim) {
      if (!arr || !arr.length) {
        return {}
      }
      const data = arr.filter((item) => item[aim])
      return _.groupBy(data, aim)
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
      position: relative;
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
        padding: 4px 0;
        max-height: 240px;
        overflow-y: auto;
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
          top: 0;
          right: 16px;
          left: 16px;
          height: 1px;
          background-color: #e0e0e0;
        }
      }
    }
    &-input + &-input {
      margin: 8px 0 0;
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
      position: relative;
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
        -moz-appearance: textfield;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
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
