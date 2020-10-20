<template>
    <div
        class="CharacterCard"
        @mouseover="mouseOver"
        @mouseout="mouseLeave"
        @click="clickHandler"
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
            const myEl = document.getElementById(`${this.character.url}`)

            this.$smoothScroll({
                scrollTo: myEl,
                // hash: '#StoryNav', // required if updateHistory is true
            })
            // this.$router.push(`/${this.character.url}`)
        },
    },
}
</script>

<style lang="scss" scoped>
.CharacterCard {
    cursor: pointer;
    z-index: 2;
    width: 25%;
    position: relative;
    background: white;

    &__image {
        img {
            width: 100%;
            height: 100%;
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
}
</style>
