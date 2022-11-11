const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    __VUE_I18N_FULL_INSTALL__: JSON.stringify(true),
    __INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
    __VUE_I18N_LEGACY_API__: JSON.stringify(false),

    chainWebpack: (config) => {
        config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js')
    },
})
