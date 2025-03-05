<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6  md:px-20 xl:px-40">

        <a-card hoverable v-for="item in specialities" :key="item.id">
            <router-link :to="`/dashboard/doctors?speciality=${item.id}`">
                <a-row :gutter="[20, 0]" class="items-center">
                    <a-col span="8">
                        <img :src="item.img" class="w-full rounded-xl aspect-square shadow-xl" alt="">
                    </a-col>
                    <a-col span="16" >
                        <h3 class="text-lg font-semibold">{{ item.name }}</h3>
                        <p class="text-gray-700 text-base">{{ item.description }}</p>
                    </a-col>
                </a-row>
            </router-link>
        </a-card>
    </div>
</template>

<script setup>

const specialities = [
    {
        id: 1,
        name: 'General',
        img: '/src/assets/images/spec1.jpg',
        description: 'General practitioners provide comprehensive primary healthcare services, treating a wide range of common illnesses and medical conditions for patients of all ages.'
    },
    {
        id: 2,
        name: 'Cardiology',
        img: '/src/assets/images/spec1.jpg',
        description: 'Cardiologists specialize in diagnosing and treating diseases of the heart and blood vessels, including heart disease, hypertension, and cardiac disorders.'
    },
    {
        id: 3,
        name: 'Pediatrics',
        img: '/src/assets/images/spec1.jpg',
        description: 'Pediatricians focus on the health and medical care of infants, children, and adolescents, providing preventive care and treating various childhood conditions.'
    },
    {
        id: 4,
        name: 'Orthopedics',
        img: '/src/assets/images/spec1.jpg',
        description: 'Orthopedic specialists treat conditions affecting bones, joints, muscles, ligaments, and tendons, including fractures, arthritis, and sports injuries.'
    },
    {
        id: 5,
        name: 'Neurology',
        img: '/src/assets/images/spec1.jpg',
        description: 'Neurologists diagnose and treat disorders of the brain, spinal cord, and nervous system, including headaches, seizures, and neurological disorders.'
    },
    {
        id: 6,
        name: 'Dermatology',
        img: '/src/assets/images/spec1.jpg',
        description: 'Dermatologists specialize in conditions affecting the skin, hair, and nails, treating issues from acne to skin cancer and performing cosmetic procedures.'
    },
]
</script>

<style></style>