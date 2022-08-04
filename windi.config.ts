import { defineConfig } from 'windicss/helpers'
import config from 'windicss/defaultConfig'

export default defineConfig({
    theme: {
        fontFamily: {
            sans: ['"Work Sans"', ...config.theme.fontFamily.sans]
        },
        extend: {
            colors: {
                primary: {
                    400: '#EAB30F'
                },
                secondary: {
                    400: '#6A0026'
                }
            }
        },
    },
    corePlugins: {
        container: false
    },
    plugins: [
        require('windicss/plugin/typography')
    ]
})