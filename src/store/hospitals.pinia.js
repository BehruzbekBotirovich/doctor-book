import { defineStore } from "pinia";

const useHospital = defineStore('hospital', {
    state: () => ({
        hospitals: [
            {
                id: 1,
                name: 'Jinnihona no:9 Welcome))',
                location: 'Tashkent, Yunusobob, Niyozbek yoli 1',
                away_from: '5km Away from your location',
                doctor_count: 32,
                specialities_count: 13,
            },
            {
                id: 2,
                name: 'Jinnihona no:9 Welcome))',
                location: 'Tashkent, Yunusobob, Niyozbek yoli 1',
                away_from: '5km Away from your location',
                doctor_count: 32,
                specialities_count: 13,
            },
            {
                id: 3,
                name: 'Jinnihona no:9 Welcome))',
                location: 'Tashkent, Yunusobob, Niyozbek yoli 1',
                away_from: '5km Away from your location',
                doctor_count: 32,
                specialities_count: 13,
            }
        ],
        loading: false,
        error: null
    }),

    actions: {

    }
});

export default useHospital;