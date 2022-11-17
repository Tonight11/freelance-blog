<template>
    <div class="oferte">
        <svg
            id="wave"
            style="transform: rotate(180deg); transition: 0.3s"
            viewBox="0 0 1440 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                    <stop stop-color="rgba(0, 160, 138, 1)" offset="0%"></stop>
                    <stop
                        stop-color="rgba(0, 160, 138, 1)"
                        offset="100%"
                    ></stop>
                </linearGradient>
            </defs>
            <path
                style="transform: translate(0, 0px); opacity: 1"
                fill="url(#sw-gradient-0)"
                d="M0,20L48,28.3C96,37,192,53,288,58.3C384,63,480,57,576,46.7C672,37,768,23,864,16.7C960,10,1056,10,1152,16.7C1248,23,1344,37,1440,36.7C1536,37,1632,23,1728,21.7C1824,20,1920,30,2016,30C2112,30,2208,20,2304,20C2400,20,2496,30,2592,35C2688,40,2784,40,2880,43.3C2976,47,3072,53,3168,55C3264,57,3360,53,3456,45C3552,37,3648,23,3744,30C3840,37,3936,63,4032,75C4128,87,4224,83,4320,75C4416,67,4512,53,4608,48.3C4704,43,4800,47,4896,41.7C4992,37,5088,23,5184,30C5280,37,5376,63,5472,70C5568,77,5664,63,5760,50C5856,37,5952,23,6048,28.3C6144,33,6240,57,6336,55C6432,53,6528,27,6624,16.7C6720,7,6816,13,6864,16.7L6912,20L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
            ></path>
        </svg>
        <div class="oferte__container container">
            <div class="oferte__inner" ref="off">
                <div ref="title" class="oferte__title">
                    {{ $t('card.title') }}
                </div>
                <div ref="text" class="oferte__subtitle">
                    {{ $t('card.subtitle') }}
                </div>
                <div class="oferte__row">
                    <div
                        class="oferte__column"
                        v-for="item in items"
                        :key="item.title"
                    >
                        <div class="oferte__item">
                            <div class="icon">
                                <component :is="item.img" />
                            </div>
                            <div class="oferte__name">
                                {{ $t(`card.card.${item.title}`) }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SvgOne from '@/assets/svg/SvgOne.vue'
import SvgTwo from '@/assets/svg/SvgTwo.vue'
import SvgThree from '@/assets/svg/SvgThree.vue'
import SvgFourth from '@/assets/svg/SvgFourth.vue'
import SvgFive from '@/assets/svg/SvgFive.vue'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const off = ref()
const title = ref()
const text = ref()

onMounted(() => {
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: off.value,
            start: 'top 90%',
        },
        defaults: { duration: 0.4 },
    })

    tl1.from(title.value, {
        y: 50,
        opacity: 0,
    })
        .from(text.value, {
            y: 50,
            opacity: 0,
        })
        .fromTo(
            '.oferte__item',
            {
                y: 70,
                opacity: 0,
            },
            { y: 0, opacity: 1, stagger: 0.3 },
            '-=.1'
        )
})

const items = ref([
    {
        title: 'first',
        img: SvgOne,
    },
    {
        title: 'second',
        img: SvgTwo,
    },
    {
        title: 'third',
        img: SvgThree,
    },
    {
        title: 'fourth',
        img: SvgFourth,
    },
    {
        title: 'five',
        img: SvgFive,
    },
])
</script>

<style lang="scss">
.oferte {
    &__title {
        font-size: 32px;
        font-weight: 700;
    }

    &__subtitle {
        font-size: 24px;
        font-weight: 50;
        margin-bottom: 20px;
    }

    &__row {
        display: flex;
        flex-wrap: wrap;
        row-gap: 40px;
        margin: 0 -20px;
    }

    &__column {
        flex: 0 1 33.333%;
        padding: 0 20px;

        @media screen and (max-width: 992px) {
            flex: 0 1 50%;
        }

        @media screen and (max-width: 768px) {
            flex: 0 1 100%;
        }
    }

    &__item {
        display: flex;
        align-items: center;
        gap: 10px;
        height: 100%;
        padding: 15px;
        border-radius: 11px;

        transition: all 0.3s linear;

        .icon {
            background-color: rgb(0, 104, 90);
            padding: 15px;
            border-radius: 50%;
            position: relative;
        }

        svg {
            width: 35px;
            height: 35px;
            color: white;
            object-fit: cover;
        }
    }

    &__name {
        font-size: 16px;
        font-weight: 700;
        flex: 1;
        margin-bottom: 5px;
    }
}
</style>
