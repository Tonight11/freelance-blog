<template>
    <div class="answer">
        <svg
            id="wave"
            style="transform: rotate(180deg); transition: 0.3s"
            viewBox="0 0 1440 130"
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
                d="M0,104L30,97.5C60,91,120,78,180,78C240,78,300,91,360,86.7C420,82,480,61,540,43.3C600,26,660,13,720,21.7C780,30,840,61,900,73.7C960,87,1020,82,1080,82.3C1140,82,1200,87,1260,75.8C1320,65,1380,39,1440,36.8C1500,35,1560,56,1620,71.5C1680,87,1740,95,1800,86.7C1860,78,1920,52,1980,52C2040,52,2100,78,2160,78C2220,78,2280,52,2340,36.8C2400,22,2460,17,2520,28.2C2580,39,2640,65,2700,62.8C2760,61,2820,30,2880,21.7C2940,13,3000,26,3060,41.2C3120,56,3180,74,3240,82.3C3300,91,3360,91,3420,82.3C3480,74,3540,56,3600,56.3C3660,56,3720,74,3780,86.7C3840,100,3900,108,3960,112.7C4020,117,4080,117,4140,99.7C4200,82,4260,48,4290,30.3L4320,13L4320,130L4290,130C4260,130,4200,130,4140,130C4080,130,4020,130,3960,130C3900,130,3840,130,3780,130C3720,130,3660,130,3600,130C3540,130,3480,130,3420,130C3360,130,3300,130,3240,130C3180,130,3120,130,3060,130C3000,130,2940,130,2880,130C2820,130,2760,130,2700,130C2640,130,2580,130,2520,130C2460,130,2400,130,2340,130C2280,130,2220,130,2160,130C2100,130,2040,130,1980,130C1920,130,1860,130,1800,130C1740,130,1680,130,1620,130C1560,130,1500,130,1440,130C1380,130,1320,130,1260,130C1200,130,1140,130,1080,130C1020,130,960,130,900,130C840,130,780,130,720,130C660,130,600,130,540,130C480,130,420,130,360,130C300,130,240,130,180,130C120,130,60,130,30,130L0,130Z"
            ></path>
        </svg>
        <div class="container">
            <div class="answer__inner">
                <div class="answer__title">{{ $t('answer.title') }}</div>
                <div class="answer__text">{{ $t('answer.text') }}</div>
                <div class="answer__items">
                    <AnswerRequest
                        v-for="item in items"
                        :key="item.title"
                        @open="open(item)"
                        :visible="item.visible"
                        :title="$t(`answer.items.${item.title}.title`)"
                        :text="$t(`answer.items.${item.title}.text`)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import AnswerRequest from '@/components/AnswerRequest.vue'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
    const tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: '.answer__inner',
            start: 'top 80%',
        },
        defaults: { duration: 0.55 },
    })

    tl5.from('.answer__title', {
        y: 50,
        opacity: 0,
    })
        .from('.answer__text', {
            y: 50,
            opacity: 0,
        })
        .fromTo(
            '.answer__item',
            {
                y: 70,
                opacity: 0,
            },
            { y: 0, opacity: 1, stagger: 0.3 },
            '-=.1'
        )
})

const open = (item) => {
    if (item.visible === true) {
        item.visible = false
        return
    }
    items.value.forEach((i) => (i.visible = false))
    item.visible = true
}

const items = ref([
    {
        visible: false,
        title: 'first',
    },
    {
        visible: false,
        title: 'sec',
    },
    {
        visible: false,
        title: 'th',
    },
    {
        visible: false,
        title: 'fourth',
    },
    {
        visible: false,
        title: 'five',
    },
    {
        visible: false,
        title: 'six',
    },
])
</script>

<style lang="scss" scoped>
.answer {
    padding: 0 0 75px;
    &__inner {
    }

    &__title {
        font-size: 32px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 25px;
    }

    &__text {
        font-size: 22px;
        font-weight: 500;
        text-align: justify;
        margin-bottom: 40px;
    }

    &__items {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
}
.container {
}
</style>
