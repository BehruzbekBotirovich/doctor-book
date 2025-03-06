<template>
    <div class="flex items-center justify-between py-2 mb-4">
        <div class="text-primaryDark text-lg font-semibold">Hospitals</div>
        <div class="w-[300px]">
            <a-input-search size="large" v-model:value="value" placeholder="input search text" enter-button
                @search="onSearch" />
        </div>
    </div>

    <HospitalCard :data="hospitalStore.hospitals" />
</template>

<script setup>
import HospitalCard from '@/components/HospitalCard.vue'
import useHospital from '@/store/hospitals.pinia'

const hospitalStore = useHospital()


</script>

<style></style>