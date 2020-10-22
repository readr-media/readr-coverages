<template>
    <div class="StoryInfo" :key="infoList[id - 1].id">
        <div class="StoryInfo__image">
            <img :src="infoList[id - 1].image" alt="" />
        </div>
        <div class="StoryInfo__content">
            <span class="StoryInfo__content_name"
                >{{ infoList[id - 1].name }} 小檔案</span
            >
            <ul class="StoryInfo__content_list">
                <li v-for="(list, index) in infoList[id - 1].info" :key="index">
                    {{ list }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import infoList from '~/mixins/infoList'
export default {
    mixins: [infoList],
    props: ['img', 'id'],
}
</script>

<style lang="scss" scoped>
.StoryInfo {
    z-index: 0;
    width: 100%;
    display: none;
    background-color: #e0c950;

    &__image {
        overflow: hidden;
        img {
            width: 100%;
        }
    }

    &__content {
        background-color: rgba(224, 201, 80, 0.8);
        padding: 16px 29px;

        font-weight: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000000;

        &_name {
            font-size: 21px;
        }

        &_list li {
            font-size: 16px;
            line-height: 1.75;
        }
    }

    @include atSmall {
        width: 30%;
        height: calc(100vh - 41px);
        // position: relative;

        display: flex;
        flex-direction: column;

        position: fixed;
        top: 41px;
        &__content {
            position: relative;
            background-color: #e0c950;
            padding: 16px 20px;

            &_name {
                font-size: 1rem;
            }

            &_list li {
                font-size: 0.8rem;
            }
        }

        @include atMedium {
            width: 25%;
            margin-left: 5%;

            &__content {
                &_name {
                    font-size: 1.1rem;
                }

                &_list li {
                    font-size: 0.9rem;
                }
            }
        }

        @include atLarge {
            width: 250px;
            margin-left: 0;

            &__content {
                &_name {
                    font-size: 1.1rem;
                }

                &_list li {
                    font-size: 0.9rem;
                }
            }
        }
    }
}
</style>
