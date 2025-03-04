import { defineStore } from 'pinia'
import useCore from '@/store/core.pinia.js'
import { api } from '@/utils/api/index.js'
import {
  authRegisterApi,
  authTokenApi,
  loginWithPasswordApi,
} from '@/api/auth.api.js'
import useModal from '@/store/modal.pinia.js'
import { shallowRef } from 'vue'

const useAuth = defineStore('auth', {
  state: () => ({
    otpData: null,
    loading: false
  }),
  actions: {

    // Number password login & OTP
    loginWithPassword(form) {
      const { switchStatus } = useCore()
      this.loading = true
      loginWithPasswordApi(form) // api--> auth/sign-in
        .then(({ data }) => {
          this.openOtpModal(data)
        })
        .catch((err) => {
          switchStatus(err)
        })
        .finally(() => {
          this.loading = false
        })
    },


  }
})

export default useAuth