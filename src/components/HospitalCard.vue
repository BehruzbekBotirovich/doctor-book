<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 md:gap-6">
        <a-card v-for="item in data" :key="item.index" class="shadow-lg rounded-xl bg-slate-100" hoverable>
            <router-link :to="`/dashboard/hospitals/${item.id}`">
                <div class="w-full overflow-hidden rounded-md">
                    <img src="@/assets/images/for_remove/hospital1.jpg" alt="Doctor" class="picture" />
                </div>
                <div class="mt-2">
                    <h3 class="md:text-xl font-semibold ">{{ item.name }}</h3>
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 32 32">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2">
                                <circle cx="16" cy="11" r="4" />
                                <path d="M24 15c-3 7-8 15-8 15s-5-8-8-15s2-13 8-13s11 6 8 13" />
                            </g>
                        </svg>
                        <span class="text-base">{{ item.location }}</span>
                    </div>
                    <div class="flex gap-2 items-center mt-1">
                        <svg width="1rem" height="1rem" viewBox="0 0 9 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7">
                                <path
                                    d="M1.38464 1.73081C2.76926 1.73088 3.77308 1.26347 4.50003 2.76928C4.91142 3.62145 4.0514 4.3592 4.50003 5.19236C5.16914 6.435 7.96157 6.23082 7.96157 6.23082"
                                    stroke="black" stroke-width="0.692308" />
                                <circle cx="7.61545" cy="6.23081" r="1.38462" fill="black" />
                                <circle cx="1.38462" cy="1.38462" r="1.38462" fill="black" />
                            </g>
                        </svg>
                        <span class="text-base"> {{ item.away_from }}</span>
                    </div>

                    <div class="flex gap-1 items-center mt-1 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M14.84 16.26C17.86 16.83 20 18.29 20 20v2H4v-2c0-1.71 2.14-3.17 5.16-3.74L12 21zM8 8h8v2a4 4 0 0 1-4 4a4 4 0 0 1-4-4zm0-1l.41-4.1a1 1 0 0 1 1-.9h5.19c.51 0 .94.39.99.9L16 7zm4-4h-1v1h-1v1h1v1h1V5h1V4h-1z" />
                        </svg>
                        <span class="text-base">{{ item.doctor_count }} Doctors</span>
                    </div>

                    <div class="flex gap-1 items-center mt-1 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                            <path fill="currentColor"
                                d="M888.3 693.2c-42.5-24.6-94.3-18-129.2 12.8l-53-30.7V523.6c0-15.7-8.4-30.3-22-38.1l-136-78.3v-67.1c44.2-15 76-56.8 76-106.1c0-61.9-50.1-112-112-112s-112 50.1-112 112c0 49.3 31.8 91.1 76 106.1v67.1l-136 78.3c-13.6 7.8-22 22.4-22 38.1v151.6l-53 30.7c-34.9-30.8-86.8-37.4-129.2-12.8c-53.5 31-71.7 99.4-41 152.9c30.8 53.5 98.9 71.9 152.2 41c42.5-24.6 62.7-73 53.6-118.8l48.7-28.3l140.6 81c6.8 3.9 14.4 5.9 22 5.9s15.2-2 22-5.9L674.5 740l48.7 28.3c-9.1 45.7 11.2 94.2 53.6 118.8c53.3 30.9 121.5 12.6 152.2-41c30.8-53.6 12.6-122-40.7-152.9m-673 138.4a47.6 47.6 0 0 1-65.2-17.6c-13.2-22.9-5.4-52.3 17.5-65.5a47.6 47.6 0 0 1 65.2 17.6c13.2 22.9 5.4 52.3-17.5 65.5M464 234a48.01 48.01 0 0 1 96 0a48.01 48.01 0 0 1-96 0m170 446.2l-122 70.3l-122-70.3V539.8l122-70.3l122 70.3zm239.9 133.9c-13.2 22.9-42.4 30.8-65.2 17.6c-22.8-13.2-30.7-42.6-17.5-65.5s42.4-30.8 65.2-17.6c22.9 13.2 30.7 42.5 17.5 65.5" />
                        </svg>
                        <span class="text-base">{{ item.specialities_count }} Specialities</span>
                    </div>
                </div>
            </router-link>
        </a-card>

    </div>

</template>

<script setup>
import { defineProps } from "vue";
import { PushpinOutlined, StarFilled, EnvironmentOutlined } from "@ant-design/icons-vue";

defineProps({
    data: Array,
});
</script>

<style lang="scss" scoped>
.picture {
    aspect-ratio: 2/1;
    width: 100%;
    object-fit: cover;
}
</style>