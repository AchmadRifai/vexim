<script setup>
import { onMounted } from 'vue'
import AuthenticatedLayout from '../layouts/AuthenticatedLayout.vue'

onMounted(() => {
    document.title = 'Test Dashboard'
})
</script>

<template>
    <AuthenticatedLayout>
    </AuthenticatedLayout>
</template>