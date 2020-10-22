<template>
    <div class="CharacterCardSmall" @click="clickHandler">
        <div class="CharacterCardSmall__image">
            <picture>
                <source
                    media="(min-width:500px"
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
export default {
    props: ['character'],
    data() {
        return {
            status: this.character.status,
        }
    },
    methods: {
        clickHandler() {
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
    width: 100%;
    flex: 1;

    position: relative;
    &__image {
        width: 100%;
        img {
            width: 100%;
        }
    }

    &__about {
        position: absolute;
        bottom: 2px;
        width: 100%;
        padding: 6px 0;

        font-size: 21px;
        font-weight: normal;
        line-height: 1.33;
        text-align: center;
        color: #000000;

        background-color: rgba(224, 201, 80, 0.7);
    }
}
</style>
