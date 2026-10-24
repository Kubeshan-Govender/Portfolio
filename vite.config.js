import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Relative paths keep this build deployable at /<repository>/ on GitHub Pages.
    base: './',
    server: {
        watch: {
            ignored: ['**/.vs/**'],
        },
    },
})
