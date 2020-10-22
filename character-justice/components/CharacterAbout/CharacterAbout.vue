<template>
    <div class="CharacterAbout" ref="CharacterAbout">
        <CharacterCard
            v-for="character in characterList"
            :key="character.id"
            :character="character"
            :scrollPosition="scrollPosition"
        />

        <!-- <div class="CharacterAbout__mask" /> -->
    </div>
</template>

<script>
import characterList from '~/mixins/characterList'

import CharacterCard from '~/components/CharacterAbout/CharacterCard'
export default {
    mixins: [characterList],
    components: {
        CharacterCard,
    },
    data() {
        return {
            scrollPosition: 600,
        }
    },
    methods: {
        updateScroll() {
            //get the element
            var elem = this.$refs.CharacterAbout
            //create viewport offset object
            var elemRect = elem.getBoundingClientRect()
            //get the offset from the element to the viewport
            var elemViewportOffset = elemRect.top

            this.scrollPosition = elemViewportOffset
        },
    },
    mounted() {
        const characterAbout = document.querySelector('.CharacterAbout')
        const cards = document.querySelectorAll('.CharacterCard')

        const observer = new IntersectionObserver(
            (entries) => {
                console.log(entries)

                entries.forEach((entry, index) => {
                    if (entries[0].intersectionRatio > 0) {
                        cards.forEach((card, index) => {
                            card.classList.add('normal')
                        })
                    } else {
                        cards.forEach((card) => {
                            card.classList.remove('normal')
                        })
                        // entry.target.style.animation = 'none'
                    }
                })
            },
            { threshold: [0, 0.25, 0.5] }
        )

        cards.forEach((card) => {
            observer.observe(characterAbout)
        })
    },
}
</script>

<style lang="scss">
.CharacterAbout {
    position: relative;
    background: white;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;

    // justify-content: center;

    // &__mask {
    //     position: absolute;
    //     z-index: 1;
    //     width: 100%;
    //     height: 100%;
    //     background: transparent;
    //     transition: all 1s ease-in-out;
    //     &:hover {
    //         background: radial-gradient(
    //             circle at 46% 50%,
    //             rgba(0, 0, 0, 0),
    //             #000000 92%
    //         );
    //     }
    // }
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
</style>
