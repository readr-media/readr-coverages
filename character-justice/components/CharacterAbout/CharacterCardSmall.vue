<template>
    <div class="CharacterCardSmall Card hideCard" @click="clickHandler">
        <div class="CharacterCardSmall__image">
            <picture>
                <source
                    media="(min-width:480px)"
                    :srcset="character.image.pad"
                />

                <img
                    class="image_normal"
                    :src="character.image.mobile"
                    :key="character.image.mobile"
                    :alt="character.name"
                />
            </picture>
        </div>

        <div class="CharacterCardSmall__about">
            <span> {{ character.name }} {{ character.info.content }} </span>
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
        clickHandler() {
            this.gaClickHandler(this.character.gaLabel)

            const myEl = document.getElementById(`${this.character.id}`)
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
.CharacterCardSmall {
    cursor: pointer;

    width: 100%;
    // flex: 1;
    height: 25%;

    position: relative;
    &__image {
        height: 100%;
        overflow: hidden;
        margin-bottom: -3px;

        img {
            min-height: 100%;
            min-width: 100%;
            width: 100%;
        }
    }

    &__about {
        position: absolute;
        bottom: 0px;
        width: 100%;
        padding: 6px 0;

        font-size: 21px;
        font-weight: normal;
        line-height: 1.33;
        text-align: center;
        color: #000000;

        background-color: rgba(224, 201, 80, 0.6);
    }

    z-index: 1;
    opacity: 0.1;

    transform: translateY(-120vh) scale(0.04) scaleX(0.3);
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
</style>
