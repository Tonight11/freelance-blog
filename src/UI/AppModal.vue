<template>
    <div class="modal__overlay" @click="closeModal" v-show="visible"></div>
    <transition name="pop">
        <div class="modal__content" @click.stop v-show="visible">
            <div class="modal__cancel" @click="closeModal">X</div>
            <slot></slot>
        </div>
    </transition>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const emit = defineEmits(['close'])
defineProps(['visible'])

const closeModal = () => {
    emit('close')
}
</script>

<style lang="scss" scoped>
.modal__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba($color: #000000, $alpha: 0.5);
}

.modal__content {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    max-width: 600px;
    height: fit-content;
    border-radius: 11px;
    overflow: hidden;
    transform: none;

    padding: 100px;
    background: #00685a;
    z-index: 1001;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.modal__cancel {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 18px;
    padding: 8px;
    border-bottom-left-radius: 11px;
    background-color: #5dcfc0;
}

.pop-enter-active,
.pop-leave-active {
    transition: all 0.3s linear;
}

.pop-enter-from,
.pop-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}
</style>
