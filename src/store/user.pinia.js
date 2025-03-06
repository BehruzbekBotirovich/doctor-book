import { defineStore } from 'pinia'
import { api } from '@/utils/api/index.js'
import useCore from '@/store/core.pinia.js'

const useUser = defineStore('User', {
  state: () => ({
    user: null,
    branches: {
      content: [],
      total: 15
    }
  }),
  actions: {
    getUserMe() {
      const core = useCore()
      core.loadingMain = true

      this.user = {
        id: 2,
        username: 'dev',
        role: "DEV",
        pinfl: null,
        phone:'+998 99 000 11 22',
        fullName: "Developiriddin",
        status: {
          key: "ACTIVE",
          name: "Активный"
        }
      }

      // api({
      //   url: '/user/me'
      // })
      //   .then(({ data }) => {
      //     this.user = data
      //     console.log(this.user)
      //   })
      //   .catch((error) => {
      //     core.switchStatus(error)
      //   })
      //   .finally(() => {
      //     core.loadingMain = false
      //   })

      core.loadingMain = false

    },
  }
})

export default useUser
