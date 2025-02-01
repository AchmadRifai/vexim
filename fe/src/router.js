import { createRouter, createWebHistory } from "vue-router"
import Test from "./pages/Test.vue"
import TestDashboard from "./pages/TestDashboard.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Test,
        },
        {
            path: '/test-db',
            component: TestDashboard,
        }
    ]
})

export default router