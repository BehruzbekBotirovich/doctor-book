import { defineStore } from "pinia";

const useAppointments = defineStore('appointment', {
    state: () => ({
        actives: [
            {
                id: 1,
                doctor: "Dr. Denies Martine",
                specialty: "Cardiologist",
                date: "15/02/2026",
                remainingDays: 2,
                time: "08:30 AM",
                place: "Serum Clinic, Rose Dam, Near Police Station, West Ham",
                image: "/src/assets/images/for_remove/doctor1.jpg"
            },
            {
                id: 2,
                doctor: "Dr. Sarah Johnson",
                specialty: "Dermatologist",
                date: "20/02/2026",
                remainingDays: 7,
                time: "10:00 AM",
                place: "SkinCare Clinic, Green Street, Downtown",
                image: "/src/assets/images/for_remove/doctor1.jpg"
            },
            {
                id: 3,
                doctor: "Dr. Michael Smith",
                specialty: "Orthopedic",
                date: "25/02/2026",
                remainingDays: 12,
                time: "11:15 AM",
                place: "OrthoCare Center, Blue Avenue, Central City",
                image: "/src/assets/images/for_remove/doctor1.jpg"
            }
        ],
    }),

    actions: {

    }
})

export default useAppointments