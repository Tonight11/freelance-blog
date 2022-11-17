<template>
    <div
        class="answer__item"
        @click="$emit('open')"
        :class="{
            visible,
        }"
    >
        <div class="answer__question">{{ title }}</div>

        <div
            class="answer__text-item"
            :class="{
                visible,
            }"
        >
            {{ text }}
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    title: String,
    text: String,
    visible: Boolean,
})
</script>

<style lang="scss" scoped>
.answer {
    &__item {
        border: 2px solid #00a08a;
        padding: 15px 0;
        position: relative;
        cursor: pointer;

        transition: all 0.3s linear;

        &.visible {
            &::after {
                border-width: 0 13px 13px 13px;
                border-color: transparent transparent #000a08 transparent;
            }
        }

        &::before {
            content: '';
            position: absolute;
            width: 7px;
            height: 100%;
            top: 0;
            left: 0;
            background-color: #00a08a;
        }

        &::after {
            content: '';
            position: absolute;
            top: 22px;
            right: 30px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 13px 13px 0 13px;
            border-color: #000a08 transparent transparent transparent;
        }
    }

    &__question {
        font-size: 18px;
        padding: 0 30px;
    }

    &__text-item {
        padding: 0 30px;
        max-height: 0;
        overflow: hidden;

        &.visible {
            max-height: 100vh;
            padding-top: 15px;
        }
    }
}
</style>
