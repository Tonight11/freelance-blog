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
                <div class="lds-dual-ring" v-if="load === true"></div>
                <form
                    v-else-if="hello !== true"
                    class="form"
                    @submit.prevent="formSubmit"
                >
                    <input
                        v-model="email"
                        type="text"
                        name="email"
                        placeholder="Your name"
                        required
                    />
                    <input
                        v-model="tel"
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        required
                    />
                    <button class="btn" type="submit">Submit</button>
                </form>
                <div style="color: darkgreen" v-else>Success!!!</div>
            </app-modal>
        </div>
    </div>
</template>

<script setup>
import AppModal from '@/UI/AppModal.vue'
import { ref } from 'vue'

const visible = ref(false)
const load = ref(false)
const email = ref('')
const tel = ref('')
const hello = ref(false)

const open = () => {
    visible.value = true
    document.body.classList.add('lock')
}

const close = () => {
    visible.value = false
    document.body.classList.remove('lock')
    hello.value = false
}

const formSubmit = async () => {
    load.value = true
    fetch('https://formsubmit.co/ajax/tonight0bayastan@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            email: email.value,
            phone: tel.value,
            _template: 'table',
        }),
    })
        .then((response) => {
            return response.json()
        })
        .then(() => {
            hello.value = true

            setTimeout(close, 1000)
        })
        .catch((error) => console.log(error))
        .finally(() => {
            load.value = false
            email.value = ''
            tel.value = ''
        })
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

.lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 0 auto;
}
.lds-dual-ring:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #336b46;
    border-color: #336b46 transparent #336b46 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
