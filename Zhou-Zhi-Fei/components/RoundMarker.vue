<template>
    <div class="RoundMarker">
        <div class="RoundMarker__body">
            <div class="RoundMarker__inner_body">
                <slot />
            </div>
        </div>

        <div :class="{ showBar: showBar }" class="RoundMarker__bar" />
    </div>
</template>

<script>
export default {
    props: ['showBar'],
}
</script>

<style lang="scss" scoped>
.RoundMarker {
    display: flex;
    flex-direction: row;
    align-items: center;

    &__body {
        width: 40px;
        height: 40px;

        cursor: pointer;

        background: $darkBlue;
        border-radius: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__inner_body {
        width: 38px;
        height: 38px;

        border-radius: 19px;
        border: 4px white solid;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 20px;
        color: white;
        font-weight: bold;
    }

    &__bar {
        border-top: 2px $darkBlue solid;
        width: 0;
    }

    .showBar {
        width: 21px;
    }
}
</style>
