<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 md:gap-6">
        <a-card v-for="item in data" :key="item.index" class="shadow-lg rounded-xl bg-slate-100" hoverable>
            <router-link :to="`/dashboard/hospitals/${item.id}`">
                <div class="w-full overflow-hidden rounded-md">
                    <img src="@/assets/images/for_remove/hospital1.jpg" alt="Doctor" class="picture" />
                </div>
                <div class="mt-2">
                    <h3 class="md:text-xl font-semibold ">{{ item.name }}</h3>
                    <div class="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 32 32">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2">
                                <circle cx="16" cy="11" r="4" />
                                <path d="M24 15c-3 7-8 15-8 15s-5-8-8-15s2-13 8-13s11 6 8 13" />
                            </g>
                        </svg>
                        <span class="text-base">{{ item.location }}</span>
                    </div>
                    <div class="flex gap-1 items-center mt-1">
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