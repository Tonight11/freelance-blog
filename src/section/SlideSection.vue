<template>
    <section class="home-about">
        <div class="container">
            <div class="main-about">
                <div class="main-about-content">
                    <h2>{{ $t('we.title') }}</h2>
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

.img {
    background-image: url('@/assets/2.jpg');
    width: 495px;
    height: 456px;
    background-size: cover;
}

.first {
    background-image: url('@/assets/1.png');
}
</style>
