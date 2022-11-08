import { defineStore } from 'pinia'

const TOKEN = 'token'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        auth: null,
    }),
    getters: {
        token: (state) => state.auth,
        isAuth() {
            return !!this.token
        },
    },
    actions: {
        setToken(token) {
            this.auth = token
            localStorage.setItem(TOKEN, token)
        },
        clearToken() {
            this.auth = null
            localStorage.removeItem(TOKEN)
        },
        async logIn(email, password) {
            console.log(email, password)
            try {
                const res = await fetch(
                    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_KEY}`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email,
                            password,
                            returnSecureToken: true,
                        }),
                    }
                )
                const data = await res.json()
                if (data.error !== undefined) {
                    return data
                }
                this.setToken(data.idToken)
                return 'success'
            } catch (e) {
                console.log(e)
                throw new Error(e)
            }
        },
    },
})
