import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),
    visualizer({
        filename: './dist/report.html',
        template: 'treemap',
        gzipSize: true,
        brotliSize: true,
    })],
    resolve: {
        dedupe: ['@react-three/fiber', 'three', 'react'],
    },
    build: {
        sourcemap: true
    }
})
