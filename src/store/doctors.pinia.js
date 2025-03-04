import { defineStore } from "pinia";

const useDoctors = defineStore("doctors", {
    state: () => ({
        doctors: [
            {
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
                name: "Dr. Robert Williams",
                degree: "MBBS, MS",
                specialty: "Orthopedic Surgeon",
                experience: 25,
                hospital: "Sunrise Hospital, Manchester",
                rating: 4.6,
                fee: 800,
                currency: "₹"
            },
            {
                name: "Dr. Emily Brown",
                degree: "MBBS, DGO",
                specialty: "Gynecologist",
                experience: 18,
                hospital: "Metro Hospital, Birmingham",
                rating: 4.7,
                fee: 600,
                currency: "₹"
            },
            {
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            }
        ],
        selectedDoctor: null,
    }),
    actions: {

    },
})

export default useDoctors