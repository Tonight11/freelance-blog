<template>
    <section class="home-about">
        <div class="lines"></div>
        <div class="container">
            <div class="main-about">
                <div class="main-about-content">
                    <h2 class="title_slide">{{ $t('we.title') }}</h2>
                    <p>
                        <strong>{{ $t('we.strong') }}</strong>
                    </p>
                    <p>{{ $t('we.text') }}</p>
                    <a class="main-about-more" href="#con"
                        >{{ $t('we.btn') }} <span class="arrow-right"></span
                    ></a>
                </div>

                <div class="main-about-slider">
                    <p>&nbsp;</p>

                    <Carousel
                        :autoplay="2000"
                        :wrap-around="true"
                        class="main-about-carousel"
                    >
                        <Slide v-for="slide in 2" :key="slide">
                            <div
                                class="img"
                                :class="{
                                    first: slide === 1,
                                }"
                            ></div>
                        </Slide>

                        <template #addons>
                            <Pagination />
                        </template>
                    </Carousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
</script>

<style lang="scss">
@import '@/assets/css/main.css';

.home-about {
    position: relative;
    overflow: hidden;
    &::before {
        content: '';
        position: absolute;
        top: 10%;
        left: 0;
        width: 100%;
        height: 50px;
        background: #00a08a;
    }
}

.lines {
    position: absolute;
    width: 20px;
    top: 50px;
    left: -5%;
    height: 100%;
    background: #00a08a;
    transform: rotate(30deg);

    &::after,
    &::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 100%;
        background: #00a08a;
    }

    &::before {
        left: -30px;
    }

    &::after {
        left: 30px;
    }
}
.title_slide {
    font-size: 32px;
}

.img {
    background-image: url('@/assets/2.jpg');
    width: 495px;
    height: 456px;
    background-size: cover;
}

.first {
    background-image: url('@/assets/1.png');
}

.main-about {
    position: relative;
    z-index: 1;
}
</style>
