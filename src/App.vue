<template>
    <div class="wrapper">
        <component :is="layouts[layout]"></component>
        <the-footer></the-footer>
    </div>
    <tetikus borderColor="#00a08a" />
</template>

<script setup>
import AuthLayout from '@/layout/AuthLayout'
import HomeLayout from '@/layout/HomeLayout'
import TheFooter from './components/TheFooter.vue'
import { useRoute } from 'vue-router'
import { computed } from '@vue/reactivity'
import { useI18n } from 'vue-i18n'
// eslint-disable-next-line
const { t } = useI18n({ useScope: 'global' })

const route = useRoute()

const layout = computed(() => route.meta.layout)
const layouts = {
    AuthLayout,
    HomeLayout,
}
</script>

<style lang="scss">
.tetikus {
    z-index: 2500 !important;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 70px;
}

@media screen and (max-width: 992px) {
    html {
        scroll-padding-top: 80px;
    }
}

body.lock {
    overflow-y: hidden;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

.wrapper {
    overflow-x: hidden;
}

@media screen and (min-width: 992px) {
    .col-lg-8 {
        flex: 0 0 60%;
        max-width: 60%;
    }
}
</style>
