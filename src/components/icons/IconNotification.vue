<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 36 36">
        <path fill="#2A7FBA" d="M18 34.28A2.67 2.67 0 0 0 20.58 32h-5.26A2.67 2.67 0 0 0 18 34.28"
            class="clr-i-solid--badged clr-i-solid-path-1--badged"></path>
        <path fill="#2A7FBA"
            d="m32.85 28.13l-.34-.3A14.37 14.37 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94a10.92 10.92 0 0 0-.16-1.79A7.5 7.5 0 0 1 22.5 6v-.63a10.57 10.57 0 0 0-3.32-1V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.3 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93l-.34.3v2.82h29.8Z"
            class="clr-i-solid--badged clr-i-solid-path-2--badged"></path>
        <circle  cx="30" cy="6" r="5" fill="#2A7FBA" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge">
        </circle>
        <path fill="none" d="M0 0h36v36H0z"></path>
    </svg>
</template>

<script setup>
const props = defineProps({
    isEmpty: {
        type: Boolean,
        default: false
    },

})


</script>