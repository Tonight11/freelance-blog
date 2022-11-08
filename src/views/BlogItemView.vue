<template>
    <the-header back></the-header>
    <div class="blog-item" v-if="blog">
        <div class="blog-item__container">
            <div class="blog-item__inner">
                <h1 class="blog-item__title">{{ blog.title }}</h1>
                <img :src="blog.img" alt="img" />
                <p class="blog-item__text">{{ blog.fullText }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import { usePostStore } from '@/store/postStore'

const post = usePostStore()
const props = defineProps(['id'])

const blog = ref(null)
onMounted(async () => {
    try {
        blog.value = await post.getOnePost(props.id)
    } catch (e) {
        console.log(e)
    }
})
</script>

<style lang="scss" scoped>
.blog-item {
    padding: 100px 0;
    &__container {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
    }

    &__inner {
        padding: 0 15px;
        img {
            width: 1000px;
            height: 500px;
            object-fit: cover;
            margin: 0 auto;
        }
    }

    &__title {
        font-size: 48px;
        margin: 0;
        padding: 0;
        margin-bottom: 30px;
        text-align: center;
        font-weight: 700;
    }

    &__text {
        margin-top: 20px;
        font-size: 24px;
        font-weight: 400;
    }
}
</style>
