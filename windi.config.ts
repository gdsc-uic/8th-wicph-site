import { defineConfig } from 'windicss/helpers'
import config from 'windicss/defaultConfig'
import colors from 'windicss/colors'

export default defineConfig({
    theme: {
        fontFamily: {
            sans: ['"Work Sans"', ...config.theme.fontFamily.sans]
        },
        colors: {
            white: colors.white,
            black: colors.black,
            transparent: colors.transparent,
            'secondary': {
                '50': '#faf5f6',
                '100': '#f6e9ec',
                '200': '#f1d5dc',
                '300': '#eaaebe',
                '400': '#e37d9a',
                '500': '#e24b7b',
                '600': '#dd2264',
                '700': '#c20f54',
                '800': '#aa094c',
                '900': '#920743',
            },
            'primary': {
                '50': '#fdfae9',
                '100': '#fcf4c5',
                '200': '#fae78e',
                '300': '#f7d34d',
                '400': '#f2b80f',
                '500': '#e3a30f',
                '600': '#c47e0a',
                '700': '#9c590c',
                '800': '#814712',
                '900': '#6e3a15',
            },
            'tertiary': {
                '50': '#f2f4fc',
                '100': '#e1e7f8',
                '200': '#c9d4f4',
                '300': '#a5b8eb',
                '400': '#7994e1',
                '500': '#6a7fdb',
                '600': '#4655ca',
                '700': '#3c45b9',
                '800': '#363a97',
                '900': '#303578',
            },
            'gray': {
                '50': '#f8f8f8',
                '100': '#f0f0f0',
                '200': '#e4e4e4',
                '300': '#d7d7d7',
                '400': '#b4b4b4',
                '500': '#9a9a9a',
                '600': '#818181',
                '700': '#6a6a6a',
                '800': '#5a5a5a',
                '900': '#4e4e4e',
            },
        }
    },
    corePlugins: {
        container: false
    },
    plugins: [
        require('windicss/plugin/typography')
    ]
})