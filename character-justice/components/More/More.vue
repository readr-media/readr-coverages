<template>
    <div class="More" id="More">
        <!-- <SponsorButton :style="{ marginBottom: '69px' }" /> -->

        <!-- <RelativeNews /> -->
        <div class="More__donate">
            <readr-donate-link @click="gaClickHandler('donate')" />
        </div>
        <latest-coverages />
    </div>
</template>

<script>
import SponsorButton from '~/components/More/SponsorButton'
import RelativeNews from '~/components/More/RelativeNews'
import gaMixin from '~/mixins/gaMixin'

export default {
    mixins: [gaMixin],
    components: {
        SponsorButton,
        RelativeNews,
    },
}
</script>

<style lang="scss" scoped>
.More {
    width: 100%;
    padding: 61px 0 31px;

    &__donate {
        max-width: 395px;
        margin: auto;
    }

    @include atMedium {
        width: 600px;
        margin: auto;
    }
}
// #More {
//     position: relative;
//     z-index: 3;
//     background: white;
//     width: 100%;
//     padding: 61px 0 31px;
// }
</style>
