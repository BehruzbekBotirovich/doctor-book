<template>
    <a-card    ard v-for="doctor in data" :key="doctor.name" class="doctor-card shadow-lg rounded-xl">
        <div class="flex gap-6">
            <!-- Фото доктора -->
            <div class="w-1/3 overflow-hidden rounded-md">
                <img src="@/assets/images/for_remove/doctor1.jpg" alt="Doctor" class="object-cover h-full" />
            </div>
            <div class="w-2/3">
                <div class="flex justify-between flex-1">
                    <div class="flex-1">
                        <div class="text-teal-600 text-lg font-bold">{{ doctor.name }}</div>
                        <h3 class="text-teal-600 text-lg font-bold">{{ doctor.degree }}</h3>
                        <h3 class="text-teal-600 font-semibold">{{ doctor.specialty }}</h3>
                        <h3 class="text-gray-500 font-semibold">{{ doctor.experience }} Years Experience</h3>
                        <div class="flex items-center text-gray-500">
                            <EnvironmentOutlined class="mr-1" />
                            <span>{{ doctor.hospital }}</span>
                        </div>
                    </div>

                    <!-- Рейтинг -->
                    <div class="text-center">
                        <StarFilled class="yellow-icon text-lg" />
                        <p class="text-gray-700">{{ doctor.rating }}</p>
                    </div>
                </div>
                <!-- Стоимость консультации -->
                <div class="mt-1 border-t pt-1 flex justify-between items-center">
                    <div class="text-blue-600 font-semibold">Consulting Fee</div>
                    <div class="text-blue-600 font-bold">{{ doctor.currency }} {{ doctor.fee }}</div>
                </div>
            </div>
        </div>
    </a-card>
</template>

<script setup>
import { defineProps } from "vue";
import { PushpinOutlined, StarFilled, EnvironmentOutlined } from "@ant-design/icons-vue";

defineProps({
    data: Array, // Принимает массив врачей
});
</script>

<style lang="scss" scoped>
.yellow-icon {
    fill: yellow
}
</style>