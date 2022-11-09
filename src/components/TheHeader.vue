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
                            <li>
                                <router-link :to="{ name: 'home' }"
                                    >Home</router-link
                                >
                            </li>
                            <li v-if="back">
                                <router-link :to="{ name: 'blog' }"
                                    >Back</router-link
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
    <header class="main-header blog-head">
        <div class="container">
            <div class="row blog-row">
                <div class="col-md-12 col-12 col-lg-3">
                    <div
                        class="logo d-flex align-items-center justify-content-between"
                    >
                        <a class="d-flex align-items-center"
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
                            <li>
                                <router-link :to="{ name: 'home' }"
                                    >Home</router-link
                                >
                            </li>
                            <li v-if="back">
                                <router-link :to="{ name: 'blog' }"
                                    >Back</router-link
                                >
                            </li>
                        </ul>
                    </nav>
                </div>

                <div
                    class="d-none d-sm-none d-md-none col-lg-1 col-xl-1 d-lg-block"
                    v-if="create"
                >
                    <Icon
                        icon="akar-icons:circle-plus"
                        class="plus"
                        @click="$emit('create')"
                    />
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { defineProps } from 'vue'
import { useBurgerStore } from '@/store'
const burger = useBurgerStore()

defineProps({
    back: Boolean,
    create: Boolean,
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
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.css';

.blog-head {
    position: static;
}

.blog-row {
    align-items: center;
}

.plus {
    width: 35px;
    height: 35px;
    cursor: pointer;
}
</style>
