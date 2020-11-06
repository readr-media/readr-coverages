<template>
    <div class="Credit">
        <span>監製：簡信昌 製作人：李又如、陳玟諺 </span>
        <span>記者：陳珮瑜 攝影：林煒凱 </span>
        <span>設計：陳怡蒨 工程：呂理詣、熊凱文 </span>
        <span>社群：徐湘芸</span>
        <span>2020-10-31 </span>
    </div>
</template>

<script>
import scrollama from 'scrollama'
import 'intersection-observer'

import gaMixin from '~/mixins/gaMixin'

export default {
    mixins: [gaMixin],

    mounted() {
        const scrollerCredit = scrollama()
        scrollerCredit
            .setup({
                step: '.Credit',
                offset: 1,
            })
            .onStepEnter((response) => {
                if (response.direction === 'up') return
                this.gaScrollHandler('credit')
            })

        window.addEventListener('resize', scrollerCredit.resize)
    },
}
</script>

<style lang="scss" scoped>
.Credit {
    z-index: 3;
    position: relative;
    padding: 23px 0 21px;
    background-color: #006db2;

    font-family: 'PingFang TC';
    font-size: 15px;
    font-weight: normal;
    line-height: 1.6;
    text-align: center;
    color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include atSmall {
        height: 140px;
    }
}
</style>
