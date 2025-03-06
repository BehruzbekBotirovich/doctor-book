<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a-card v-for="item in appointmentsStore.actives" :key="item.id" class="rounded-3xl" hoverable>
            <div class="flex items-center gap-4">
                <div class="w-1/3">
                    <img :src="item.image" class="w-full aspect-square rounded-2xl shadow-xl" alt="">
                </div>
                <div class=" w-2/3 text-lg">
                    <h3>{{ item.doctor }}
                        <span class="text-gray-500">( {{ item.specialty }} ) </span>
                    </h3>
                    <div class="text-primary">
                        <span class="text-gray-500 mr-2">Date</span>
                        {{ item.date }}
                    </div>
                    <div class="text-primary">
                        <span class="text-gray-500 mr-2">Time/Token</span>
                        {{ item.time }}
                    </div>
                    <div class="text-primary">
                        <span class="text-gray-500 mr-2"> Place </span>
                        {{ item.place }}
                    </div>
                </div>
            </div>
            <div class="md:flex items-center gap-4 mt-3">
                <a-button class="w-full  md:w-1/2 bg-[#288247] hover:!bg-green" type="primary">Reschedule </a-button>
                <a-button class="w-full  md:w-1/2 bg-[#CF403F] hover:!bg-red" type="primary">Cancel</a-button>
            </div>
        </a-card>

    </div>

</template>

<script setup>
import { ref } from 'vue'
import useAppointments from '@/store/appointments.pinia';

const appointmentsStore = useAppointments()

</script>

<style></style>