<template>
    <div class="Navbar" :class="{ showNavbar: showNavbar }">
        <div class="Navbar__mainList">
            <Logo
                :logo="logoList.mirrorMedia"
                :style="{ marginRight: '10px' }"
            />

            <Logo
                :logo="logoList.share"
                :notLink="true"
                @click.native="expandShareList"
            />

            <div
                class="Navbar__shareList"
                :class="{ shareListExpanded: isShareListExpanded }"
            >
                <Logo :logo="logoList.facebook" />
                <Logo :logo="logoList.line" />
            </div>
        </div>
    </div>
</template>

<script>
import facebookLogo from '~/static/images/logo-fb.svg'
import lineLogo from '~/static/images/logo-line.svg'
import mirrorLogo from '~/static/images/mirror-logo.svg'
import shareLogo from '~/static/images/share-white.svg'
import Logo from '~/components/Logo.vue'

export default {
    components: {
        Logo,
    },
    data() {
        return {
            showNavbar: true,
            lastScrollPosition: 0,

            isShareListExpanded: false,
            logoList: {
                mirrorMedia: {
                    id: 1,
                    alt: 'mirrormedia',
                    url: 'https://www.google.com/?client=safari',
                    imageUrl: mirrorLogo,
                },
                share: {
                    id: 2,
                    alt: 'share',
                    url: '',
                    imageUrl: shareLogo,
                },
                facebook: {
                    id: 3,
                    alt: 'facebook',
                    url:
                        'https://www.facebook.com/sharer/sharer.php?u=https://www.readr.tw/project/3/zhou_zi_fei/',
                    imageUrl: facebookLogo,
                },
                line: {
                    id: 4,
                    alt: 'line',
                    url:
                        'https://social-plugins.line.me/lineit/share?url=https://www.readr.tw/project/3/zhou_zi_fei/',
                    imageUrl: lineLogo,
                },
            },
        }
    },

    mounted() {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll() {
            // Get the current scroll position
            const currentScrollPosition =
                window.pageYOffset || document.documentElement.scrollTop
            // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (currentScrollPosition < 0) {
                return
            }
            // Here we determine whether we need to show or hide the navbar
            this.showNavbar = currentScrollPosition < this.lastScrollPosition
            // Set the current scroll position as the last scroll position
            this.lastScrollPosition = currentScrollPosition
        },
        expandShareList() {
            this.isShareListExpanded = !this.isShareListExpanded
        },
    },
}
</script>

<style lang="scss" scoped>
.Navbar {
    width: 100%;
    position: fixed;
    z-index: 100;
    padding-top: 19px;
    top: -59px;
    transition: top 0.2s ease-in-out;

    &__mainList {
        width: 90px;
        margin: auto;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;

        position: relative;
        .Logo {
            z-index: 1;
        }
    }

    &__shareList {
        .Logo {
            z-index: 0;
            position: absolute;
            top: 0;
            right: 0;
            opacity: 0;
            &:first-child,
            &:last-child {
                top: 0;
                transition: all 0.3s ease-in-out;
            }
        }
    }

    .shareListExpanded {
        .Logo {
            opacity: 1;
            &:first-child {
                top: 50px;
            }

            &:last-child {
                top: 100px;
            }
        }
    }
}

.showNavbar {
    top: 0;
}
</style>
