<template>
    <div class="CharacterAbout" ref="CharacterAbout">
        <div class="CharacterAbout__container_small CharacterAbout__container">
            <CharacterCardSmall
                v-for="character in characterList"
                :key="character.id"
                :character="character"
            />
        </div>

        <div class="CharacterAbout__container_big CharacterAbout__container">
            <CharacterCard
                v-for="character in characterList"
                :key="character.id"
                :character="character"
            />
        </div>

        <div class="CharacterAbout__fixScreenMask" />
    </div>
</template>

<script>
import characterList from '~/mixins/characterList'
import CharacterCard from '~/components/CharacterAbout/CharacterCard'
import CharacterCardSmall from '~/components/CharacterAbout/CharacterCardSmall'

import scrollama from 'scrollama'

export default {
    mixins: [characterList],
    components: {
        CharacterCard,
        CharacterCardSmall,
    },
    data() {
        return {
            sectionHeight: 0,
        }
    },
    methods: {},
    mounted() {
        // -----------------------Zoom cards----------------------------
        const scrollerZoomCard = scrollama()
        const cards = document.querySelectorAll('.CharacterCard')

        scrollerZoomCard
            .setup({
                step: '.CharacterAbout',
                offset: 0.8,
            })
            .onStepEnter((response) => {
                cards.forEach((card, index) => {
                    card.classList.add('normal')
                })
            })
            .onStepExit((response) => {
                if (response.direction === 'down') return
                cards.forEach((card) => {
                    card.classList.remove('normal')
                })
            })
    },
}
</script>

<style lang="scss">
.CharacterAbout {
    z-index: 1;
    width: 100%;
    min-height: 560px;
    &__container_small {
        z-index: 1;
        position: relative;
        background: white;
        width: 100%;
        // height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__container_big {
        display: none;
        z-index: 1;
        position: relative;
        background: white;
        width: 100%;
        height: 100vh;
        flex-direction: row;
        align-items: center;
    }
    &__fixScreenMask {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    @include atMedium {
        height: 100vh;

        &__container_small {
            display: none;
        }

        &__container_big {
            display: flex;
            flex-direction: row;
        }
    }
}

@keyframes anim1 {
    from {
        transform: translateY(-50%) scale(0.05);
        opacity: 0;
    }
    to {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
}

.fixScreen {
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>
