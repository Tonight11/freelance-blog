const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    _pluginOptions: {
        i18n: {
            locale: 'ja',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false,
            enableLegacy: false,
        },
    },
})
