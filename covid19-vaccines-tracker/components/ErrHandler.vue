<template>
  <small v-if="errText">{{ errText }}</small>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      required: true,
      default: '',
    },
    currentInput: {
      type: null,
      required: true,
    },
    cityList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    errText() {
      let msg = ''
      if (this.currentInput === undefined) {
        this.sendErrMsg(!!msg)
        return msg
      }
      if (this.target === 'age') {
        msg = this.handleTargetAge()
      }
      if (this.target === 'county') {
        msg = this.handleTargetCounty()
      }
      if (this.target === 'injectTime') {
        msg = this.handleTargetInjectTime()
      }
      this.sendErrMsg(!!msg)
      return msg
    },
  },
  methods: {
    handleTargetAge() {
      const regex = /^(?:[1-9]\d?|1[0-2]\d|130)$/
      return regex.test(parseInt(this.currentInput))
        ? ''
        : '請輸入 1-130 以內的數字'
    },
    handleTargetCounty() {
      const findItem = this.cityList.find((item) =>
        item.includes(this.currentInput)
      )
      return this.currentInput === 'matched' || findItem ? '' : '找不到這個縣市'
    },
    handleTargetInjectTime() {
      const now = new Date()
      const nowMonth = now.getMonth() + 1
      const [year, month, date] = this.currentInput.split(' / ')
      const yearInt = parseInt(year)
      const monthInt = parseInt(month)
      const dateInt = parseInt(date)
      const Da = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      const interval =
        now.getTime() - new Date(yearInt, monthInt - 1, dateInt).getTime()
      if (yearInt === 2020) {
        Da[1] = 29
      }
      return this.currentInput.length === 14 &&
        monthInt &&
        dateInt &&
        interval > 0 &&
        ((yearInt === 2020 && monthInt <= 12 && dateInt <= Da[monthInt - 1]) ||
          (yearInt === 2021 &&
            monthInt <= nowMonth &&
            dateInt <= Da[monthInt - 1]))
        ? ''
        : '請填寫有效時間，例如 2021/02/06'
    },
    sendErrMsg(payload) {
      this.$emit('has-err', payload)
    },
  },
}
</script>

<style lang="scss" scoped>
small {
  font-size: 16px;
  line-height: 1.5;
  color: #db2f24;
  margin: 4px 0 0;
}
</style>
