<template>
    <div class="py-4">
        <div class="flex justify-between mt-4 md:mt-6 lg:mt-12 mb-3 md:mb-4 lg:mb-4">
            <h3 class="text-lg md:text-xl lg:text-2xl font-semibold ">Top Hospitals</h3>
            <div class="text-primary"> View all</div>
        </div>

        <HospitalCard :data="hospitalStore.hospitals"></HospitalCard>
    </div>
</template>

<script setup>
import HospitalCard from '@/components/HospitalCard.vue';
import useHospital from '@/store/hospitals.pinia';

const hospitalStore = useHospital()
</script>

<style lang="scss" scoped></style>