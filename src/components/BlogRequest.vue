<template>
    <div class="blog__item">
        <img :src="items.img" alt="img" />
        <div class="blog__info">
            <div class="blog__name">{{ items.title }}</div>
            <div class="blog__text">
                {{ items.smallText }}
            </div>
            <router-link
                custom
                v-slot="{ navigate }"
                :to="{
                    name: 'blogItem',
                    params: { id: items.id },
                }"
            >
                <button class="btn" @click="navigate">Read</button>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['items'])
</script>

<style lang="scss">
.blog {
    padding-bottom: 100px;
    &__item {
        display: flex;
        gap: 30px;

        img {
            width: 450px;
            height: 270px;
            object-fit: cover;
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
    }

    &__name {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    &__text {
        font-size: 18px;
        font-weight: 300;
        flex: 1;
    }
}
.btn {
}
</style>
