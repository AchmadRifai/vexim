<script setup>
import { computed } from 'vue'
import { useSidebar } from '../stores/sidebar'
import AuthenticatedNavbar from '../components/dashboard/AuthenticatedNavbar.vue'

const sidebar = useSidebar()
const backdrop = computed(() => 'fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90 ' + (!sidebar.open ? 'hidden' : ''))
</script>

<template>
    <div>
        <AuthenticatedNavbar />
        <div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
            <!-- Sidebar -->
            <div :class="backdrop" @click.prevent="sidebar.setOpenClose" />
            <div class="relative w-full h-full overflow-y-auto lg:ml-64 dark:bg-gray-900 bg-smoke">
                <main>
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>