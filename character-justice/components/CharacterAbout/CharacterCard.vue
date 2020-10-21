<template>
    <div
        class="CharacterCard small"
        @mouseover="mouseOver"
        @mouseout="mouseLeave"
        @click="clickHandler"
        :style="{
            marginTop: `${character.smallPosition.top}`,
        }"
    >
        <div class="CharacterCard__image">
            <img
                :src="status ? character.image.hover : character.image.normal"
                alt=""
            />
        </div>

        <div
            class="CharacterCard__about"
            :style="{ top: `${character.info.position}%` }"
        >
            <div class="CharacterCard__about_name">
                {{ character.name }}
            </div>
            <div class="CharacterCard__about_info">
                {{ character.info.content }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['character', 'scrollPosition'],
    data() {
        return {
            status: this.character.status,
        }
    },
    methods: {
        mouseOver() {
            this.status = true
        },
        mouseLeave() {
            this.status = false
        },
        clickHandler() {
            const myEl = document.getElementById(`${this.character.id}`)

            this.$smoothScroll({
                scrollTo: myEl,
                // hash: '#StoryNav', // required if updateHistory is true
            })
            // this.$router.push(`/${this.character.url}`)
        },
    },

    mounted() {},
}
</script>

<style lang="scss" scoped>
.CharacterCard {
    cursor: pointer;

    flex: 1;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background: white;

    &__image {
        img {
            width: 100%;
        }
    }

    &__about {
        position: absolute;
        top: 0;
        width: 100%;
        padding: 1rem;
        background-color: rgba(224, 201, 80, 0.7);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &_name,
        &_info {
            font-family: 'PingFang TC';
            font-size: 16px;
            font-weight: normal;
            line-height: 1;
            text-align: center;
            color: #000000;
        }

        &_name {
            margin-bottom: 1rem;
        }
    }

    @include atMedium {
        &__about {
            &_name,
            &_info {
                font-size: 20px;
            }
        }
    }
    @include atLarge {
        &__about {
            &_name,
            &_info {
                font-size: 28px;
            }
        }
    }
    transform: scale(0.05);
    z-index: 1;
    pointer-events: none;
}
.normal {
    // opacity: 0;
    z-index: 2;
    pointer-events: initial;

    transition: all 1s ease-in-out;
    transform: scale(1);
    margin-top: 0 !important;
}
</style>
