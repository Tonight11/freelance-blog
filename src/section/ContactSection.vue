<template>
    <div class="contact">
        <div class="container">
            <div class="contact__inner">
                <img src="@/assets/pp.jpg" alt="group" />
                <div class="contact__content">
                    <h2 class="contact__title">Contact us</h2>
                    <div class="contact__btns">
                        <button @click="open" class="contact-btn">
                            I AM A CUSTOMER
                        </button>
                        <button @click="open" class="contact-btn">
                            I AM A SUPPLIER
                        </button>
                        <button @click="open" class="contact-btn">
                            I AM A JOB APPLICANT
                        </button>
                    </div>
                </div>
            </div>
            <app-modal :visible="visible" @close="close">
                <AuthRequest tel />
            </app-modal>
        </div>
    </div>
</template>

<script setup>
import AppModal from '@/UI/AppModal.vue'
import AuthRequest from '@/components/AuthRequest.vue'
import { ref } from 'vue'

const visible = ref(false)

const open = () => {
    visible.value = true
    document.body.classList.add('lock')
}

const close = () => {
    visible.value = false
    document.body.classList.remove('lock')
}
</script>

<style lang="scss">
.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
        display: block;
        padding: 10px;
    }
}

.btn {
    border: 2px solid #484d52;
    padding: 10px;
    transition: all 0.25s ease-in-out;

    &:hover {
        opacity: 0.6;
        text-decoration: none;
    }
}

.contact {
    margin-top: 80px;
    &__inner {
        display: flex;
        align-items: center;
        gap: 30px;

        @media (max-width: 850px) {
            flex-direction: column-reverse;
        }

        img {
            flex: 0 1 50%;
            width: 50%;

            @media (max-width: 850px) {
                flex: 0 1 100%;
                width: 100%;
            }
        }
    }

    &__content {
        flex: 1;
        @media (max-width: 850px) {
            flex: 0 1 100%;
            width: 100%;
        }
    }

    &__title {
        font-weight: 700;
        font-size: 42px;
        margin-bottom: 30px;
    }

    &__btns {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}
.contact-btn {
    background-color: transparent;
    outline: none;
    cursor: pointer;
    color: #484d52;
    border: 2px solid #484d52;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 58px;
    padding: 10px 3px;
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: 700;
    opacity: 1;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.25s ease-in-out;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;

    &:hover {
        opacity: 0.6;
        text-decoration: none;
    }
}
</style>
