import { h } from 'vue'
// views
import DoctorsPage from '@/pages/dashboard/doctors/DoctorsPage.vue'
import HomePage from '@/pages/dashboard/home/HomePage.vue'
import AppointmentsPage from '../pages/dashboard/appointments/AppointmentsPage.vue'
import HospitalsPage from '@/pages/dashboard/hospitals/HospitalsPage.vue'
import ProfilePage from '../pages/dashboard/profile/ProfilePage.vue'

// icons
import IconDoctor from '@/components/icons/IconDoctor.vue'
import IconHome from '@/components/icons/IconHome.vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconHospital from '@/components/icons/IconHospital.vue'
import IconProfile from '@/components/icons/IconProfile.vue'
// views components
import DoctorsListView from '@/pages/dashboard/doctors/components/DoctorsListView.vue'
import DoctorInfo from '@/pages/dashboard/doctors/components/DoctorInfo.vue'
import HospitalsList from '../pages/dashboard/hospitals/components/HospitalsList.vue'
import HospitalInfo from '../pages/dashboard/hospitals/components/HospitalInfo.vue'

const navigations = [
  {
    path: 'home',
    name: 'Home',
    component: HomePage,
    meta: {
      showMenu: true,
      icon: () => h(IconHome)
    }
  },

  {
    path: 'doctors',
    name: 'Doctors',
    component: DoctorsPage,
    redirect: { name: 'DoctorsList' },
    meta: {
      showMenu: true,
      icon: () => h(IconDoctor)
    },
    children: [
      {
        path: '',
        name: 'DoctorsList',
        component: DoctorsListView
      },
      {
        path: ':id',
        name: 'DoctorDetail',
        component: DoctorInfo
      }
    ]
  },

  {
    path: 'appointments',
    name: 'Appointments',
    component: AppointmentsPage,
    meta: {
      showMenu: true,
      icon: () => h(IconCalendar)
    },
  },

  {
    path: 'hospitals',
    name: 'Hospitals',
    component: HospitalsPage,
    redirect: { name: 'HospitalsList' },
    meta: {
      showMenu: true,
      icon: () => h(IconHospital)
    },
    children: [
      {
        path: '',
        name: 'HospitalsList',
        component: HospitalsList
      },
      {
        path: ':id',
        name: 'HospitalDetail',
        component: HospitalInfo
      }
    ]
  },

  {
    path: 'profile',
    name: 'Profile',
    component: ProfilePage,
    meta: {
      showMenu: true,
      icon: () => h(IconProfile)
    },
  },

]
export default navigations
