<template>
    <div class="CharacterAbout">
        <CharacterCard
            v-for="character in characterList"
            :key="character.id"
            :character="character"
        />

        <!-- <div class="CharacterAbout__mask" /> -->
    </div>
</template>

<script>
import characterList from '../../mixins/characterList'

import CharacterCard from './CharacterCard'
export default {
    mixins: [characterList],
    components: {
        CharacterCard,
    },
}
</script>

<style lang="scss" scoped>
.CharacterAbout {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    &__mask {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: transparent;
        transition: all 1s ease-in-out;
        &:hover {
            background: radial-gradient(
                circle at 46% 50%,
                rgba(0, 0, 0, 0),
                #000000 92%
            );
        }
    }
}
</style>
