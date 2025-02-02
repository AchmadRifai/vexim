<script setup>
import { computed, onMounted, ref } from 'vue'
import Icon from '../assets/vue.svg'
import { login } from '../services/auth'

const username = ref(''), password = ref(''), loading = ref(false)

const validated = computed(() => username.value && password.value && !loading.value)

onMounted(() => {
    document.title = 'Login'
})

function process() {
    loading.value = true
    login(username.value, password.value)
        .then(v => {
            console.log(v)
            loading.value = false
            username.value = password.value = ''
        })
        .catch(e => {
            console.log(e)
            loading.value = false
        })
}
</script>
<template>
    <div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
        <a href="#" class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
            <img :src="Icon" class="login-logo" alt="Company Logo">
        </a>
        <div class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
            <h2 class="text-2xl text-center font-bold text-gray-900 dark:text-white">
                VEXIM System
            </h2>
            <div class="mt-8 space-y-6">
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Username
                    </label>
                    <input type="text" v-model="username" required :disabled="loading"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Password
                    </label>
                    <input type="password" v-model="password" required :disabled="loading"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                </div>
                <button @click.prevent="process" :disabled="!validated"
                    class="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Login
                </button>
            </div>
        </div>
    </div>
</template>