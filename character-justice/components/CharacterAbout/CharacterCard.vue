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
export default {
    props: ['character'],
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
    // width: 25%;
    height: 100%;
    flex: 1;
    overflow: hidden;
    position: relative;
    background: white;

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
    transform: scale(0.02);
    z-index: 1;
    opacity: 0;
    pointer-events: none;
}
.normal {
    opacity: 1;
    .CharacterCard__about {
        opacity: 1;
    }
    z-index: 2;
    pointer-events: initial;

    transition: all 1s ease-in-out;
    transform: scale(1);
    margin-top: 0 !important;
}
</style>
