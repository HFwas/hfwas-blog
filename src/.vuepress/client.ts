import { defineClientConfig } from 'vuepress/client'
import { useScriptTag } from '@vueuse/core'

export default defineClientConfig({
    setup() {
        useScriptTag('/lib/fontawesome/fontawesome.min.js', () => {}, {
            attrs: { 'data-auto-replace-svg': 'nest' },
        })
        useScriptTag('/lib/fontawesome/solid.min.js', () => {}, {
            attrs: { 'data-auto-replace-svg': 'nest' },
        })
        useScriptTag('/lib/fontawesome/brands.min.js', () => {}, {
            attrs: { 'data-auto-replace-svg': 'nest' },
        })
    }
})
