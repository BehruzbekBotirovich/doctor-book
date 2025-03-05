<template>
    <div class="flex justify-between mt-4 md:mt-6 lg:mt-10 mb-3  md:mb-4 lg:mb-6">
        <h3 class="text-lg md:text-xl lg:text-2xl font-semibold ">Top doctors</h3>
        <div class="text-primary"> View all</div>
    </div>

    <DoctorCard :data="DoctorsList"></DoctorCard>
</template>

<script setup>
import DoctorCard from '@/components/DoctorCard.vue'
const DoctorsList = [
    {
        id: 1,
        name: "Dr. Denies Martine",
        degree: "MBBS, MD",
        specialty: "Cardiologist",
        experience: 42,
        hospital: "Apollo Hospital, West Ham",
        rating: 4.5,
        fee: 500,
        currency: "₹"
    },
    {
        id: 2,
        name: "Dr. Sarah Johnson",
        degree: "MBBS, MD",
        specialty: "Dermatologist",
        experience: 15,
        hospital: "City Care Hospital, London",
        rating: 4.8,
        fee: 700,
        currency: "₹"
    },
    {
        id: 3,
        name: "Dr. Robert Williams",
        degree: "MBBS, MS",
        specialty: "Orthopedic Surgeon",
        experience: 25,
        hospital: "Sunrise Hospital, Manchester",
        rating: 4.6,
        fee: 800,
        currency: "₹"
    },
]
</script>

<style lang="scss" scoped></style>