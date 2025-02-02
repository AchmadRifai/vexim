<script setup>
import { computed, ref } from 'vue'
import { useSidebar } from '../../stores/sidebar'
import SIdebarMenu from './SIdebarMenu.vue'
import { useSession } from '../../stores/session'

const sidebar = useSidebar()
const session = useSession()
const openMenu = ref(session.menus.map((menu, i) => {
    if (menu.open) return i
    return 0
}).filter(i => i)[0])

const sidebarClass = computed(() => 'fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width ' + (!sidebar.open ? 'hidden' : ''))
</script>
<template>
    <aside :class="sidebarClass">
        <div
            class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                <div
                    class="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    <ul class="pb-2 space-y-2">
                        <SIdebarMenu v-for="menu, i in session.menus" :key="i" :metadata="menu" :index="i"
                            :open="i === openMenu"
                            @opening="v => { if (openMenu === v) openMenu = 0; else openMenu = v; }" />
                    </ul>
                </div>
            </div>
        </div>
    </aside>
</template>