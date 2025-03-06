<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        <a-card v-for="doctor in data" :key="doctor.name" class="shadow-lg rounded-xl" hoverable>
            <router-link :to="`/dashboard/doctors/${doctor.id}`">
                <div class="flex gap-6">
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

                            <div class="text-center">
                                <StarFilled class="yellow-icon text-lg" />
                                <p class="text-gray-700">{{ doctor.rating }}</p>
                            </div>
                        </div>
                        <div class="mt-1 border-t pt-1 flex justify-between items-center">
                            <div class="text-blue-600 font-semibold">Consulting Fee</div>
                            <div class="text-blue-600 font-bold">{{ doctor.currency }} {{ doctor.fee }}</div>
                        </div>
                    </div>
                </div>
            </router-link>
        </a-card>

    </div>

</template>

<script setup>
import { defineProps } from "vue";
import { PushpinOutlined, StarFilled, EnvironmentOutlined } from "@ant-design/icons-vue";

defineProps({
    data: Array, // Принимает массив врачей
});
</script>

<style lang="scss" scoped></style>