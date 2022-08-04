import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        'nuxt-windicss',
        '@nuxtjs/google-fonts'
    ],
    css: [
        'virtual:windi.css',
        'virtual:windi-devtools'
    ],
    windicss: {
        analyze: true
    },
    googleFonts: {
        workSans: true,
        display: 'swap'
    }
})
