<template>
    <div class="ListDot">
        <div class="dot" :style="{ background: `${color}` }" />
    </div>
</template>

<script>
export default {
    props: ['color'],
}
</script>

<style lang="scss" scoped>
.ListDot {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 16px;

    margin-left: -20px;

    .dot {
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background: #006db2;

        margin: auto;
        transform: translateY(8px);

        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    }
}
</style>
