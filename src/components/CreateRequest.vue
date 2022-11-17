<template>
    <form class="create__item" @submit.prevent="create">
        <input
            v-model="data.title"
            type="text"
            placeholder="title"
            class="create__title"
        />
        <textarea
            v-model="data.smallText"
            name="msg"
            placeholder="small desc"
            class="create__smtext"
        ></textarea>
        <textarea
            v-model="data.fullText"
            name="msg"
            placeholder="full desc"
            class="create__text"
        ></textarea>
        <input
            v-model="data.img"
            type="text"
            placeholder="link to img"
            class="create__img"
        />

        <button v-thover="{ scale: 1.5 }" class="btn">Create</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { usePostStore } from '@/store/postStore'

const posts = usePostStore()
const data = ref({
    title: '',
    smallText: '',
    fullText: '',
    img: '',
})

const create = () => {
    posts.create(data.value)
}
</script>

<style lang="scss">
textarea {
    resize: vertical;
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
}

.create__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 18px;

    input,
    textarea {
        padding: 10px;
    }
}
</style>
