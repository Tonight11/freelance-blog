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
                                <a href="#home">Home</a>
                            </li>
                            <li class="">
                                <a href="#card">Services</a>
                            </li>
                            <li class="">
                                <a href="#slide">About us</a>
                            </li>

                            <li class=""><a href="#con">Contacts</a></li>
                            <li>
                                <router-link :to="{ name: 'blog' }"
                                    >Blog</router-link
                                >
                            </li>
                        </ul>
                    </div>

                    <div class="mobile-languages">
                        <ul>
                            <li><a href="ro.html">Română</a></li>
                            <li><a href="ru.html">Русский</a></li>
                            <li><span>English</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="side_form form-bg">
            <div class="side_container">
                <div class="side_form_close">
                    <span class="icon-close"></span>
                </div>

                <div class="form-content-area">
                    <div class="modal-form">
                        <div class="footer-form-area">
                            <form>
                                <input
                                    name="form_type"
                                    type="hidden"
                                    value="feedback"
                                />
                                <div class="form-label">
                                    <label>Name</label>
                                    <input
                                        class="form-control required"
                                        name="name"
                                        placeholder="What is your name"
                                    /><span class="input-message"></span>
                                </div>

                                <div class="form-label">
                                    <label>Phone number</label>
                                    <input
                                        class="form-control required"
                                        name="phone"
                                        placeholder="Your phone number"
                                    /><span class="input-message"></span>
                                </div>

                                <div class="form-label">
                                    <label>Email</label>
                                    <input
                                        class="form-control required"
                                        name="email"
                                        placeholder="Your email adress"
                                    /><span class="input-message"></span>
                                </div>

                                <div class="form-label">
                                    <label>Company name</label>
                                    <input
                                        class="form-control required"
                                        name="company"
                                        placeholder="Your company name"
                                    /><span class="input-message"></span>
                                </div>

                                <div class="form-label textarea-label">
                                    <label>message</label
                                    ><textarea
                                        class="message-scroll required"
                                        name="message"
                                        placeholder="Any questions"
                                        rows="3"
                                    ></textarea
                                    ><span class="input-message"></span>
                                </div>

                                <div class="form-label">
                                    <div class="form-button">
                                        <button
                                            class="modal-form-action"
                                            type="button"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
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
                        <a class="d-flex align-items-center" href="index.htm"
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
                                <a href="#home">Home</a>
                            </li>
                            <li class="">
                                <a href="#card">Services</a>
                            </li>
                            <li class="">
                                <a href="#slide">About us</a>
                            </li>

                            <li class=""><a href="#con">Contacts</a></li>
                            <li>
                                <router-link :to="{ name: 'blog' }"
                                    >Blog</router-link
                                >
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
                            <a href="ro.html">Rom</a><a href="ru.html">Рус</a
                            ><span @click="open">Eng</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section class="slider">
        <div
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
                <span class="down-text">Scroll down</span>
                <span class="icon-down"></span>
            </a>
        </div>

        <div class="home-slider">
            <div class="slider first-slider" id="home">
                <div class="container">
                    <div class="slider-content d-flex align-items-center">
                        <div class="slider-content-area">
                            <h2>
                                We enjoy
                                <span style="color: #f3b88e; font-weight: 600"
                                    >challenges</span
                                >
                            </h2>

                            <h3 style="font-style: normal">
                                Developing individual transport solutions
                                through&nbsp;logic approach.
                            </h3>

                            <ul>
                                <li>
                                    <a class="first" href="#card"
                                        >OUR SERVICES</a
                                    >
                                </li>
                                <li>
                                    <a class="second" href="#con">CONTACT US</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="main-services-new white-bg" style="margin-top: 50px">
        <div class="ms-new-p load_services"></div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useBurgerStore } from '@/store'
import { useRoute } from 'vue-router'

const lang = ref(null)
const burger = useBurgerStore()
const route = useRoute()

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
const open = () => {
    lang.value.classList.toggle('open')
}
</script>

<style lang="scss">
@import '@/assets/css/main.css';

a {
    &:hover {
        text-decoration: none;
    }
}
</style>
