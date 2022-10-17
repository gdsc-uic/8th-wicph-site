import { defineNuxtConfig } from 'nuxt/config'

const siteName = 'WiCPH2022 - 8th ACM Women in Computing Philippine Celebration';
const siteDescription = 'Bringing together women from academia, industry, and government to freely share their ideas and opinions on the emerging technologies and issues in Computer Science, Information Technology, and Information Systems.';

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
        families: {
            'Work Sans': [300, 400, 600, 700],
        },
        display: 'swap',
        download: false
    },
    app: {
        head: {
            title: siteName,
            titleTemplate(title) {
                if (!title) {
                    return siteName;
                }

                return `${title} | ${siteName}`;
            },
            meta: [
                { name: 'og:type', content: 'website' },
                { name: 'og:image', content: './wicph-2022-og.jpg' },
                { name: 'description', content: siteDescription }
            ]
        }
    }
})
