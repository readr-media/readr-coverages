<template>
    <div class="More" id="More">
        <div class="More__donate">
            <readr-donate-link @click="gaClickHandler('donate')" />
        </div>
        <RelativeNews />
    </div>
</template>

<script>
import gaMixin from '~/mixins/gaMixin'
import RelativeNews from '~/components/More/RelativeNews'

export default {
    mixins: [gaMixin],
    components: { RelativeNews },
}
</script>

<style lang="scss" scoped>
.More {
    width: 100%;
    padding: 61px 0 31px;
    box-sizing: border-box;

    &__donate {
        max-width: 395px;
        margin: auto;
        margin-bottom: 65px;
        padding: 0 22px;
    }
}
</style>
