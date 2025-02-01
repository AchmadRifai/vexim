<script setup>
import { computed, ref } from 'vue'
import { useResponsive } from '../../stores/responsive'

const isClose = ref(true), responsive = useResponsive()

const styleDropdown = computed(() => 'position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(' + (responsive.windowWidth - 150) + 'px, 61px);')

const click = () => isClose.value = !isClose.value
</script>

<template>
    <div class="flex items-center ml-3">
        <div>
            <button type="button" @click.prevent="click"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo">
            </button>
        </div>
        <div v-if="!isClose" :style="styleDropdown"
            class="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 block">
            <div class="px-4 py-3">
                <p class="text-sm text-gray-900 dark:text-white">
                    Full Name
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                    User Name
                </p>
            </div>
            <ul class="py-1">
                <li>
                    <a href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                        Setting
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>