import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core/index'

export const usePostStore = defineStore('post', {
    state: () => ({
        items: useLocalStorage('products', []),
    }),
    getters: {
        products: (state) => state.items,
    },
    actions: {
        async create(payload) {
            try {
                const res = await fetch(
                    `https://blog-post-977f9-default-rtdb.europe-west1.firebasedatabase.app/post.json?auth=${localStorage.getItem(
                        'token'
                    )}`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            title: payload.title,
                            fullText: payload.fullText,
                            smallText: payload.smallText,
                            img: payload.img,
                        }),
                    }
                )
                await res.json()
                await this.get()
            } catch (error) {
                console.log(error)
            }
        },
        async get() {
            try {
                const res = await fetch(
                    'https://blog-post-977f9-default-rtdb.europe-west1.firebasedatabase.app/post.json'
                )
                const data = await res.json()
                const posts = Object.keys(data).map((key) => {
                    const item = data[key]
                    item.id = key
                    return item
                })
                this.items = posts
            } catch (error) {
                console.log(error)
            }
        },
        async getOnePost(id) {
            try {
                const res = await fetch(
                    `https://blog-post-977f9-default-rtdb.europe-west1.firebasedatabase.app/post/${id}.json`
                )
                const data = await res.json()
                return data
            } catch (error) {
                console.log(error)
            }
        },
    },
})
