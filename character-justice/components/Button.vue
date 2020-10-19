<template>
    <div class="Button" :class="{ fitDiv: fitDiv }">
        <div>{{ title }}</div>
    </div>
</template>

<script>
export default {
    props: ['title', 'fitDiv'],
}
</script>

<style lang="scss" scoped>
.Button {
    cursor: pointer;
    display: inline-block;
    border-radius: 20px;
    background-color: #006db2;

    div {
        pointer-events: none;
        font-family: PingFangTC;
        font-size: 16px;
        font-weight: normal;
        line-height: 2;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
    }
    padding: 4px 16px;
}
.fitDiv {
    width: 100%;
    margin: auto;
}
</style>
