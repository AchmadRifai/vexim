import { createRouter, createWebHistory } from "vue-router"
import Test from "./pages/Test.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Test
        },
    ]
})

export default router