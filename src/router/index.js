import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useBurgerStore } from '@/store'
import { useMediaQuery } from '@vueuse/core'
const isLargeScreen = useMediaQuery('(min-width: 992px)')

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            layout: 'HomeLayout',
        },
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('../views/BlogView.vue'),
        meta: {
            layout: 'HomeLayout',
        },
    },
    {
        path: '/blog/:id',
        name: 'blogItem',
        component: () => import('../views/BlogItemView.vue'),
        props: true,
        meta: {
            layout: 'HomeLayout',
        },
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('../views/AuthView.vue'),
        meta: {
            layout: 'AuthLayout',
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        const burgerMenu = useBurgerStore()

        if (burgerMenu.isActive === true) {
            burgerMenu.toggle()
            document.body.classList.remove('modal-open')
            document.querySelector('.fs_menu_overlay').style =
                'pointer-events: none;'
        }

        if (to.hash) {
            if (isLargeScreen.value) {
                return {
                    el: to.hash,
                    behavior: 'smooth',
                    top: 70,
                }
            }
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 100,
            }
        }

        if (savedPosition) {
            return savedPosition
        } else {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ left: 0, top: 0 })
                }, 50)
            })
        }
    },
})

export default router
