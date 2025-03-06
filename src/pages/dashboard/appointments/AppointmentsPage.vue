<template>
    <div class="md:px-12 lg:px-32">
        <h3 class="text-primaryDark text-lg font-semibold">My Appointments</h3>
        <div>
            <a-tabs v-model:activeKey="activeKey" class="custom-tabs">
                <a-tab-pane key="1" tab="Actives">
                    <active-apps />
                </a-tab-pane>
                <a-tab-pane key="2" tab="Previews" force-render>
                    <review-app />
                </a-tab-pane>
            </a-tabs>
        </div>
    </div>

</template>
<script setup>
import ActiveApps from './components/ActiveApps.vue';
import ReviewApp from './components/ReviewApp.vue';

import { ref } from 'vue';
const activeKey = ref('1');

</script>

<style scoped>
:deep(.ant-tabs-nav) {
    border-bottom: none !important;
}

:deep(.ant-tabs-tab) {
    padding: 6px 40px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
    transition: color 0.3s;
}

:deep(.ant-tabs-tab-active) {
    color: #134d99 !important;
}

:deep(.ant-tabs-ink-bar) {
    height: 2px;
}
</style>