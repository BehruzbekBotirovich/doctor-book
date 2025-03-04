import { h } from 'vue'
// views
import DoctorsPage from '@/pages/dashboard/doctors/DoctorsPage.vue'
import HomePage from '@/pages/dashboard/home/HomePage.vue'
// icons
import IconTripleUser from '@/components/icons/IconTripleUser.vue'
import IconHome from '@/components/icons/IconHome.vue'
// views components
import DoctorsListView from '@/pages/dashboard/doctors/components/DoctorsListView.vue'
import DoctorInfo from '@/pages/dashboard/doctors/components/DoctorInfo.vue'
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
    name: 'DoctorsPage',
    component: DoctorsPage,
    redirect: { name: 'Doctors' },
    meta: {
      showMenu: true,
      icon: () => h(IconTripleUser)
    },
    children: [
      {
        path: '',
        name: 'Doctors',
        component: DoctorsListView
      },
      {
        path: ':id',
        name: 'DoctorDetail',
        component: DoctorInfo
      }
    ]
  },


]
export default navigations
