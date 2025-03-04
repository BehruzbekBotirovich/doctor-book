<script setup>
import AvatarComponent from '@/components/AvatarComponent.vue'
import useUser from '@/store/user.pinia.js'
import { storeToRefs } from 'pinia'
import HeaderUserComponent from '@/pages/dashboard/components/HeaderUserComponent.vue'
import useCore from '@/store/core.pinia.js'
import TranslateComponent from '@/components/TranslateComponent.vue'
import { ref } from 'vue'

// icons
import IconLocation from '@/components/icons/IconLocation.vue'
import IconNotification from '@/components/icons/IconNotification.vue'
import IconTranslate from '@/components/icons/IconTranslate.vue'
import IconSettings from '@/components/icons/IconSettings.vue'
import IconLogOut from '@/components/icons/IconLogOut.vue'
import DashboardMenuComponent from './DashboardMenuComponent.vue'

const coreStore = useCore()
const userStore = useUser()
const { user } = storeToRefs(userStore)

const lang = localStorage.getItem('lang') ?? 'uz'
const langObj = ref({
  uz: 'latin',
  ru: 'russian',
  cyr: 'cyrillic',
  en: 'english'
})



</script>

<template>
  <div class="dashboard-header w-full flex justify-end bg-white px-14  py-2">
    <div class="w-full flex justify-between items-center">
      <div class="flex  gap-2 items-center">
        <!-- <img src="@/assets/images/logo.svg" alt=""> -->
        <div>
          <p class="text-sm font-medium text-muted m-0 leading-[16px]">
            Your location
          </p>
          <h3 class="text-primaryDark ">Tashkent, Yunusobod</h3>
        </div>
        <icon-location />
      </div>

      <div class="self-center">
        <dashboard-menu-component />
      </div>

      <div class="flex items-center gap-10">
        <a-dropdown trigger="click">
          <header-user-component :user="user" />
          <template #overlay>
            <a-menu>
              <a-dropdown placement="leftTop">
                <a-menu-item>
                  <template #icon>
                    <IconTranslate />
                  </template>
                  {{ $t('header_component.language') }}
                  ({{ $t(`translate_component.${langObj[lang]}`) }})
                </a-menu-item>
                <template #overlay>
                  <translate-component />
                </template>
              </a-dropdown>
              <a-menu-item>
                <template #icon>
                  <IconNotification />
                </template>
                notifications
              </a-menu-item>
              <a-popconfirm :title="$t('header_component.do_you_want_to_log_out')" :ok-text="$t('header_component.yes')"
                :cancel-text="$t('header_component.no')" placement="bottomRight" @confirm="coreStore.logout()">
                <a-menu-item class="!text-red">
                  <template #icon>
                    <IconLogOut />
                  </template>
                  {{ $t('header_component.logout') }}
                </a-menu-item>
              </a-popconfirm>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-header {
  -webkit-box-shadow: -6px -4px 10px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -6px -4px 10px -3px rgba(0, 0, 0, 0.75);
  box-shadow: -6px -4px 10px -3px rgba(0, 0, 0, 0.75);
}
</style>
