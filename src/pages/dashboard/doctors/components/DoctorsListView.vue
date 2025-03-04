<template>
    <div class="flex items-center justify-between py-2 mb-4">
        <div class="text-primaryDark text-lg font-semibold">All Doctors</div>
        <div class="w-[300px]">
            <a-input-search size="large" v-model:value="value" placeholder="input search text" enter-button
                @search="onSearch" />
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DoctorCard :data="doctorsStore.doctors" />
    </div>

</template>

<script setup>
import DoctorCard from '@/components/DoctorCard.vue';
import useDoctorsStore from '@/store/doctors.pinia.js'
const doctorsStore = useDoctorsStore()


</script>

<style></style>