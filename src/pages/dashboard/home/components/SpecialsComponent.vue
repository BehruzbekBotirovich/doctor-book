<template>
    <div class="flex justify-between mt-4 md:mt-6 lg:mt-10 mb-3  md:mb-4 lg:mb-6">
        <h3 class="text-lg md:text-xl lg:text-2xl font-semibold ">Top Specialties</h3>
        <div class="text-primary">
            <router-link to="/dashboard/specialities">View all</router-link>
        </div>
    </div>
    <a-row :gutter="[40, 40]">
        <a-col v-for="item in Specialties" :key="item.index" :xs="6" :lg="4">
            <img :src="item.img" alt="speciality" class="aspect-square w-full rounded-3xl shadow-custom ">
            <h3 class="text-center lg:text-xl font-semibold mt-2">{{ item.title }}</h3>
        </a-col>
    </a-row>
</template>

<script setup>
import { ref } from 'vue'
import spec1 from '@/assets/images/spec1.jpg'
import spec2 from '@/assets/images/spec2.jpg'
import spec3 from '@/assets/images/spec3.jpg'
import spec4 from '@/assets/images/spec4.jpg'

const Specialties = ref([
    {
        img: spec1,
        title: 'General',
    },
    {
        img: spec2,
        title: 'nephrologist',
    }, {
        img: spec3,
        title: 'cardiology',
    }, {
        img: spec4,
        title: 'neurologist',
    }, {
        img: spec1,
        title: 'General',
    }, {
        img: spec2,
        title: 'General',
    },


])
</script>

<style lang="scss" scoped>
.shadow-custom {
    box-shadow: 0px 4px 5px 0px #00000040;
}
</style>