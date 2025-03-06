<template>
    <a-col :xs="24" :md="12" :lg="8">
        <div class="flex items-center gap-3">
            <div>
                <img class="w-[100px] lg:w-[150px] aspect-square"
                    src="https://rgunh.ru/upload/iblock/f95/4u13l5rz8i82acyqmsuzyevclyzpcx0f/image-3.jpg" alt="">
            </div>
            <div>
                <h3 class="text-lg">{{ userPinia.user.fullName }}</h3>
                <p class="text-gray-700">{{ userPinia.user.phone }}</p>
                <div class="text-gray-700">{{ userPinia.user.username }}</div>
            </div>
        </div>
        <div class="flex items-center gap-2 mt-4">
            <a-button type="primary" class="bg-sky-600 border-1 w-1/2 border-sky-800">Change Picture</a-button>
            <a-button type="primary" class="bg-sky-600 border-1 w-1/2 border-sky-800">Edit Name</a-button>
        </div>
    </a-col>

    
</template>

<script setup>
import useUser from '@/store/user.pinia.js'

const userPinia = useUser()
</script>

<style scoped>
/* Add your styles here */
</style>
