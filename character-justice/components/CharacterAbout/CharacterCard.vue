<template>
    <div
        class="CharacterCard small Card hideCard"
        @mouseover="mouseOver"
        @mouseout="mouseLeave"
        @click="clickHandler"
        :style="{
            marginTop: character.smallPosition.top,
        }"
    >
        <div class="CharacterCard__image">
            <img
                class="image_normal"
                :class="{ image_normal_hide: status }"
                :src="character.image.normal"
                :key="character.image.normal"
                :alt="character.name"
            />
            <img
                class="image_hover"
                :src="character.image.hover"
                :key="character.id"
                :alt="character.name"
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
import gaMixin from '~/mixins/gaMixin'

export default {
    props: ['character'],
    mixins: [gaMixin],
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
            this.gaClickHandler(this.character.gaLabel)

            const myEl = document.getElementById(`${this.character.id}`)
            this.$smoothScroll({
                scrollTo: myEl,
            })

            // this.$router.push(this.character.url)
        },
    },

    mounted() {},
}
</script>

<style lang="scss" scoped>
.CharacterCard {
    cursor: pointer;
    overflow: hidden;
    background: white;
    position: relative;
    width: 100%;

    &__image {
        height: 100%;
        width: 100%;
        // object-fit: cover;
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        img {
            min-height: 100%;
            min-width: 100%;
            // transform: translateX(-50%);
        }

        .image_normal {
            z-index: 3;
            position: absolute;

            // height: 100%;
            transition: opacity 0.5s ease-in;
            &_hide {
                opacity: 0;
            }
        }

        .image_hover {
            z-index: 2;

            position: absolute;
            // height: 100%;
        }

        // .image_normal {
        //     position: absolute;
        //     transition: opacity 0.5s ease-in;
        //     &_hide {
        //         opacity: 0;
        //     }
        // }
    }

    &__about {
        z-index: 4;
        opacity: 0;
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
    z-index: 1;
    opacity: 0.3;

    transform: translateY(-70%) scale(0.03) scaleY(0.3);
    flex: 1;

    pointer-events: none;
}
.normal {
    margin-top: 0px !important;
    z-index: 2;
    opacity: 1;

    transform: scale(1);

    flex: 1;
    margin-right: 0;

    pointer-events: initial;

    transition: all 1.9s ease-in-out;
    .CharacterCard__about {
        opacity: 1;
    }
}

.hideCard {
    opacity: 0;
}
</style>
