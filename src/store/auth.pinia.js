import { defineStore } from 'pinia'
import useCore from '@/store/core.pinia.js'
import { api } from '@/utils/api/index.js'
import {
  authLoginWithEimzoApi,
  authRegisterApi,
  authTokenApi,
  loginWithPasswordApi,
  getMobileQrScannedApi
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

    // When QR scanned check status and get data
    getMobileQrScannedData(documentId, callback) {
      const corePinia = useCore()
      corePinia.loadingUrl.add('/auth/eimzo')
      getMobileQrScannedApi(documentId) // api--> auth/e-imzo/mobile/auth-doc/{documentId}
        .then(({ data }) => {
          this.loginWithEimzoMobile(data.id, callback)
        })
        .catch((error) => {
          corePinia.switchStatus(error)
        })
        .finally(() => {
          corePinia.loadingUrl.delete('/auth/eimzo')
        })
    },

    // Login with e-imzo mobile QR Code scanned then if data 200
    loginWithEimzoMobile(docId, callback) {
      const { switchStatus } = useCore()
      api({
        url: 'auth/e-imzo/mobile/auth-info',
        open: true,
        hasOsession: false,
        pk: docId
      }) 
        .then(({ data }) => {
          this.openOtpModal(data)
          callback?.()
        })
        .catch((err) => {
          switchStatus(err)
        })
        .finally(() => {
          this.loading = false
        })
    },

    // Register with E-IMZO
    registerWithEImzo(form) {
      const core = useCore()
      authRegisterApi(form) // api--> auth/sign-up/e-imzo
        .then(({ data }) => {
          this.openOtpModalRegister(data)
        })
        .catch((error) => {
          core.switchStatus(error)
        })
    }
  }
})

export default useAuth