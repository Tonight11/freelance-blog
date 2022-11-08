<template>
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

defineProps({
    back: Boolean,
})
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
