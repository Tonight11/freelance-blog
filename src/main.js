import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { languages } from './i18n'
import { defaultLocale } from './i18n'
import { createI18n, useI18n } from 'vue-i18n'

const messages = Object.assign(languages)

const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages,
})


createApp(App, {
    setup() {
        const { t } = useI18n()
        return { t }
    },
})
    .use(i18n)
    .use(createPinia())
    .use(router)
    .mount('#app')
