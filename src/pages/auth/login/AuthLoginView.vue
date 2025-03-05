<template>
  <div>
    <div class="flex items-center justify-center mb-4">
      <img src="@/assets/images/logo_2.svg" alt="" width="150">
    </div>
    <h2 class="text-2xl font-bold text-center lg:text-left">
      {{ t('auth_view.sign_in') }}
    </h2>
    <LoginWithPasswordComponent />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LoginWithPasswordComponent from '@/pages/auth/login/components/LoginWithPasswordComponent.vue'

const { t } = useI18n()

</script>

<style lang="scss" scoped></style>