<template>
    <div class="Credit">
        <span>監製：簡信昌 製作人：李又如、陳玟諺 </span>
        <span>記者：陳珮瑜 攝影：林煒凱 </span>
        <span>設計：陳怡蒨 工程：熊凱文 </span>
        <span>2020-10-31 </span>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.Credit {
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
