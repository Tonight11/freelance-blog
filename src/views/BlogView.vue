<template>
    <div class="blog">
        <the-header @create="newPost"></the-header>
        <div class="blog__title">NEWS</div>
        <div class="blog__content">
            <blog-request
                v-for="post in postsItem"
                :key="post.id"
                :items="post"
            ></blog-request>
        </div>
        <app-modal :visible="isVis" @close="closeModal">
            <div v-if="!isAuth" class="auth">
                <div class="auth__title">Auth</div>
                <auth-request pass></auth-request>
            </div>
            <div v-else class="create">
                <div class="auth__title">Create</div>
                <create-request></create-request>
            </div>
        </app-modal>
    </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import BlogRequest from '@/components/BlogRequest.vue'
import AppModal from '@/UI/AppModal.vue'
import AuthRequest from '@/components/AuthRequest.vue'
import CreateRequest from '@/components/CreateRequest.vue'
import { useAuthStore } from '@/store/authStore'
import { usePostStore } from '@/store/postStore'
import { onMounted, ref } from 'vue'
import { computed } from '@vue/reactivity'
const auth = useAuthStore()
const posts = usePostStore()

const isAuth = computed(() => auth.isAuth)

const isVis = ref(false)
const newPost = () => {
    isVis.value = true
}

const closeModal = () => {
    isVis.value = false
    auth.clearToken()
}

const postsItem = computed(() => posts.products)

onMounted(() => {
    posts.get()
})
</script>

<style>
.auth__title {
    font-size: 42px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
}

.blog__title {
    margin: 100px 0 50px;
    font-size: 42px;
    font-weight: 800;
    text-align: center;
}
.blog__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
}
.blog__info {
    flex: 1;
}
</style>
