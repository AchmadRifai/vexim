import { createRouter, createWebHistory } from "vue-router"
import TestDashboard from "./pages/TestDashboard.vue"
import Login from "./pages/Login.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Login,
        },
        {
            path: '/test-db',
            component: TestDashboard,
        }
    ]
})

export default router