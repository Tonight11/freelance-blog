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
                <button class="blog__btn btn" @click="navigate">Read</button>
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

    &__content {
        padding: 0 30px;
    }
    &__item {
        display: flex;
        gap: 30px;

        img {
            width: 450px;
            height: 270px;
            object-fit: cover;
        }

        @media screen and (max-width: 827px) {
            flex-direction: column;
            gap: 20px;

            img {
                width: 100%;
            }
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

        @media screen and (max-width: 827px) {
            margin-bottom: 10px;
        }
    }

    &__text {
        font-size: 18px;
        font-weight: 300;
        flex: 1;
        @media screen and (max-width: 827px) {
            margin-bottom: 10px;
        }
    }
}
.blog__btn {
    border-color: #00a08a;
    color: black;
}
</style>
