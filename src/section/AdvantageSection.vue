<template>
    <div class="advantage">
        <div class="advantage__title">
            {{ $t('advantage.title') }}
        </div>
        <div class="container">
            <div class="advantage__inner">
                <div class="advantage__row">
                    <div
                        class="advantage__column"
                        v-for="item in items"
                        :key="item.icon"
                    >
                        <div class="advantage__item">
                            <div class="advantage__info">
                                <div class="advantage__name">
                                    {{ $t(`advantage.${item.title}.title`) }}
                                </div>
                                <div class="advantage__text">
                                    {{ $t(`advantage.${item.title}.text`) }}
                                </div>
                                <Icon :icon="item.icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const items = ref([
    {
        title: 'first',
        icon: 'bx:world',
    },
    {
        title: 'second',
        icon: 'bi:filetype-doc',
    },
    {
        title: 'third',
        icon: 'akar-icons:people-group',
    },
    {
        title: 'fourth',
        icon: 'cil:bus-alt',
    },
    {
        title: 'five',
        icon: 'carbon:earth-americas-filled',
    },
    {
        title: 'six',
        icon: 'file-icons:sandbox',
    },
])

onMounted(() => {
    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.advantage__inner',
            start: 'top 80%',
        },
        defaults: { duration: 0.45 },
    })

    tl4.from('.advantage__column', {
        y: 75,
        opacity: 0,
        stagger: 0.3,
    })
})
</script>

<style lang="scss" scoped>
.advantage {
    margin-top: 80px;
    background-color: #4c5a63;

    &__title {
        padding: 15px 0px 50px;
        font-size: 36px;
        font-weight: 700;
        background-color: #f6f6f6;
        text-align: center;
    }

    &__row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 -1.5rem;
        row-gap: 30px;
        padding: 20px 0;
    }

    &__column {
        flex: 0 1 33.333%;
        padding: 0 10px;

        @media (max-width: 992px) {
            flex: 0 1 50%;
        }

        @media (max-width: 597px) {
            flex: 0 1 100%;
        }
    }

    &__item {
        position: relative;
        width: 100%;
        padding: 4rem 3rem;
        border-radius: 5rem;
        display: flex;
        box-shadow: 0 0 5px #00a08a;
        overflow: hidden;
        height: 100%;

        transition: all 0.3s linear;

        @media screen and (max-width: 600px) {
            max-width: 300px;
            margin: 0 auto;
        }

        &:hover {
            transform: translate(-10px, -10px);
        }

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 150px;
            height: 130%;
            transform: translate(-50%, -50%) rotate(45deg);
            background-color: #00a08a;
        }

        &::after {
            content: '';
            position: absolute;
            background-color: #fff;
            inset: 2px;
            border-radius: 5rem;
        }

        svg {
            width: 45px;
            height: 45px;
        }
    }

    &__info {
        position: relative;
        z-index: 1;
    }

    &__name {
        font-size: 32px;
        font-weight: 800;
        margin-bottom: 10px;
    }

    &__text {
        font-size: 20px;
        font-weight: 300;
        margin-bottom: 100px;
    }
}
</style>
