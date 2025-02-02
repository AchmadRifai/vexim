import { createApp } from 'vue'
import '../node_modules/flowbite-vue/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { OhVueIcon } from 'oh-vue-icons'
import { createPinia } from 'pinia'
import VueApexCharts from 'vue3-apexcharts'
import './icons'

createApp(App)
    .use(router)
    .use(createPinia())
    .use(VueApexCharts)
    .component('v-icon', OhVueIcon)
    .mount('#app')
