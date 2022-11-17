<template>
    <div class="fs_menu_overlay"></div>

    <div>
        <div
            class="side_menu menu-bg"
            :class="{
                active: burger.isActive,
            }"
        >
            <div class="side_container">
                <div class="side_menu_close">
                    <span class="icon-close" @click="close"></span>
                </div>

                <div class="side-content-area">
                    <div class="mobile-menu">
                        <ul>
                            <li class="active">
                                <a href="#home">{{ $t('header.nav.home') }}</a>
                            </li>
                            <li class="">
                                <a href="#card">{{
                                    $t('header.nav.servives')
                                }}</a>
                            </li>
                            <li class="">
                                <a href="#slide">{{
                                    $t('header.nav.aboutus')
                                }}</a>
                            </li>

                            <li class="">
                                <a href="#con">{{
                                    $t('header.nav.contacts')
                                }}</a>
                            </li>
                            <li>
                                <router-link :to="{ name: 'blog' }">{{
                                    $t('header.nav.blog')
                                }}</router-link>
                            </li>
                        </ul>
                    </div>

                    <div class="mobile-languages">
                        <ul>
                            <li @click="switchLang('ro', $event)">Română</li>
                            <li @click="switchLang('ru', $event)">Русский</li>
                            <li
                                @click="switchLang('en', $event)"
                                class="active"
                            >
                                English
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <header class="main-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12 col-lg-3">
                    <div
                        class="logo d-flex align-items-center justify-content-between"
                    >
                        <a class="d-flex align-items-center" href="index.html"
                            ><img alt="Gamma" src="@/assets/logo.png"
                        /></a>

                        <div
                            class="menu-button d-block d-sm-block d-md-block d-lg-none d-xl-"
                        >
                            <span class="icon-menu" @click="toggle"></span>
                        </div>
                    </div>
                </div>

                <div class="d-none d-sm-none d-md-nonse d-lg-block col-lg-8">
                    <nav class="navigation">
                        <ul>
                            <li class="active">
                                <a href="#home">{{ $t('header.nav.home') }}</a>
                            </li>
                            <li class="">
                                <a href="#card">{{
                                    $t('header.nav.servives')
                                }}</a>
                            </li>
                            <li class="">
                                <a href="#slide">{{
                                    $t('header.nav.aboutus')
                                }}</a>
                            </li>

                            <li class="">
                                <a href="#con">{{
                                    $t('header.nav.contacts')
                                }}</a>
                            </li>
                            <li>
                                <router-link :to="{ name: 'blog' }">{{
                                    $t('header.nav.blog')
                                }}</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div
                    class="d-none d-sm-none d-md-none col-lg-1 col-xl-1 d-lg-block"
                >
                    <div class="language-block d-flex align-items-center">
                        <div
                            class="language d-flex align-items-center standart"
                            ref="lang"
                        >
                            <li @click="switchLang('ro')">Rom</li>
                            <li @click="switchLang('ru')">Рус</li>
                            <li @click="switchLang('en')">Eng</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section class="slider">
        <div
            ref="slide"
            class="slider-social d-flex align-items-center d-none d-sm-none d-md-none d-lg-none d-xl-block"
        >
            <ul class="vertical-social">
                <li>
                    <span><a href="tel:+37368414448">+37368414448</a></span>
                </li>
                <li class="d-none">
                    <span><a href="#">TWITTER</a></span>
                </li>
                <li>
                    <span
                        ><a href="mailto:office@plt.md" target="_blank"
                            >office@plt.md</a
                        ></span
                    >
                </li>
                <li>
                    <div class="social-line">&nbsp;</div>
                </li>
            </ul>

            <a
                href="#card"
                class="scroll-down d-flex align-items-center justify-content-center"
            >
                <span class="down-text">{{ t('header.scroll') }}</span>
                <span class="icon-down"></span>
            </a>
        </div>

        <div class="home-slider">
            <div class="slider first-slider" id="home">
                <div class="container">
                    <div class="slider-content d-flex align-items-center">
                        <div class="slider-content-area">
                            <h2 ref="title">
                                {{ t('header.title.main') }}
                                <span
                                    style="color: #00685a; font-weight: 600"
                                    >{{ t('header.title.color') }}</span
                                >
                            </h2>

                            <h3 ref="text" style="font-style: normal">
                                {{ t('header.subtitle') }}
                            </h3>

                            <ul>
                                <li>
                                    <a class="first main-btn" href="#card">{{
                                        t('header.btn-main')
                                    }}</a>
                                </li>
                                <li>
                                    <a class="second main-btn" href="#con">{{
                                        t('header.btn-sec')
                                    }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useBurgerStore } from '@/store'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
// eslint-disable-next-line
const { t, locale } = useI18n({ useScope: 'global' })

const lang = ref(null)
const burger = useBurgerStore()
const route = useRoute()
const title = ref()
const text = ref()
const slide = ref()
const tl = gsap.timeline({
	
    defaults: { duration: 1 },
})

const link = (elements) => {
    elements.forEach((i) => {
        i.addEventListener('click', (e) => {
            elements.forEach((d) => d.classList.remove('active'))
            i.classList.remove('active')
            e.target.closest('li').classList.add('active')
        })
    })
}

onMounted(() => {
    tl.from(title.value, {
        x: -50,
        opacity: 0,
    })
        .from(
            text.value,
            {
                x: -50,
                opacity: 0,
            },
            '-=.5'
        )
        .fromTo(
            '.main-btn',
            {
                y: 50,
                opacity: 0,
            },
            { y: 0, opacity: 1, stagger: 0.3 },
            '-=1'
        )
        .from(
            slide.value,
            {
                y: 100,
                opacity: 0,
            },
            '-=1'
        )

    const nav = document.querySelectorAll('.navigation li')
    const mobile = document.querySelectorAll('.mobile-menu li')

    nav.forEach((d) => d.classList.remove('active'))
    mobile.forEach((d) => d.classList.remove('active'))
    document
        .querySelectorAll(`[href='${route.hash}']`)
        .forEach((i) => i.parentNode.classList.add('active'))

    link(nav)
    link(mobile)
})

const switchLang = (lang, event) => {
    if (event !== undefined) {
        document
            .querySelectorAll('.mobile-languages li')
            .forEach((i) => i.classList.remove('active'))
        event.target.classList.add('active')
    }
    locale.value = lang
}

const toggle = () => {
    document.body.classList.add('modal-open')
    burger.isActive = true
    document.querySelector('.fs_menu_overlay').style = 'pointer-events: auto;'
}
const close = () => {
    document.body.classList.remove('modal-open')
    burger.isActive = false
    document.querySelector('.fs_menu_overlay').style = 'pointer-events: none;'
}
</script>

<style lang="scss">
@import '@/assets/css/main.css';
li {
    list-style: none;
}

.standart {
    gap: 15px;

    li {
        padding: 10px;
    }
}

.mobile-languages {
    gap: 15px;

    li {
        padding: 10px;
        cursor: pointer;
    }
}
a {
    &:hover {
        text-decoration: none;
    }
}

.main-btn {
    opacity: 0;
}
</style>
