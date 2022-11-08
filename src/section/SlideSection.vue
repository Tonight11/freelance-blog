<template>
    <section class="home-about">
        <div class="container">
            <div class="main-about">
                <div class="main-about-content">
                    <h2>WHO WE ARE</h2>

                    <p><strong>Our Mission &amp; Vision</strong></p>

                    <p>
                        <strong
                            >Gamma Logistics is a medium-sized company with
                            international competence.<br />
                            Since 2003.</strong
                        >
                    </p>

                    <p>
                        Full-Service-Logistics Provider with a global
                        partnership network. Specialist in complex logistics
                        solution for general goods, household goods, time and
                        temperature sensitive shipments, valuable shipments,
                        dangerous goods and radioactive materials.
                    </p>
                    <a class="main-about-more" href="en\about-us.html"
                        >More about us <span class="arrow-right"></span
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
    background-image: url('@/assets/1.jpg');
}
</style>
