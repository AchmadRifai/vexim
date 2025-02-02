import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            console.log(id)
            for (const s of ['flowbite', 'oh-vue-icons', 'axios', 'apexcharts']) if (id.includes('/node_modules/' + s)) {
              return s
            }
            for (const s of ['vue']) if (id.includes('/node_modules/@' + s)) {
              return s
            }
            return 'vendor'
          }
        }
      }
    }
  }
})
