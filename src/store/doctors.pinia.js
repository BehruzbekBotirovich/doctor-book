import { defineStore } from "pinia";

const useDoctors = defineStore("doctors", {
    state: () => ({
        doctors: [
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
            {
                id: 4,
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
                id: 5,
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            },
            {
                id: 6,
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            }, {
                id: 7,
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            }, {
                id: 8,
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            }, {
                id: 9,
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            }, {
                id: 10,
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            }, {
                id: 11,
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            }, {
                id: 12,
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            }, {
                id: 13,
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            }, {
                id: 14,
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            }, {
                id: 15,
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            }, {
                id: 16,
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            }, {
                id: 17,
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            }, {
                id: 18,
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            }, {
                id: 19,
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            }, {
                id: 20,
                name: "Dr. Daniel Smith",
                degree: "MBBS, DM",
                specialty: "Neurologist",
                experience: 30,
                hospital: "Royal Health Clinic, Leeds",
                rating: 4.9,
                fee: 900,
                currency: "₹"
            },
        ],
        selectedDoctor: null,
    }),
    actions: {

    },
})

export default useDoctors