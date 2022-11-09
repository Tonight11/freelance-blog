<template>
    <small style="color: red" v-if="err">{{ err }}</small>
    <form class="form" action="#" @submit.prevent="authWithEmail">
        <input v-model="email" type="text" placeholder="Your name" required />
        <input
            v-model="password"
            v-if="pass"
            type="password"
            placeholder="Your password"
            required
        />
        <button class="btn">Submit</button>
    </form>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useAuthStore } from '@/store/authStore'

defineProps({
    pass: Boolean,
})

const email = ref()
const password = ref()

const err = ref(null)

const auth = useAuthStore()

const authWithEmail = async () => {
    err.value = false

    if (!document.querySelector('.form').checkValidity()) {
        err.value = 'Please fill input correct'
        return
    }
    const data = await auth.logIn(email.value, password.value)
    if (data.error) {
        err.value = data.error.message
        return
    }
}
</script>

<style lang="scss"></style>
