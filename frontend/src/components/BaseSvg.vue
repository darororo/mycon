<template>
    <div>
        <svg src="/src/assets/svg/manage-icon.svg" fill="red" width="100" height="100">
        </svg>

    </div>
</template>

<script setup>
const props = defineProps({
    svgSrc: {
        type: String
    },
    fillColor: {
        type: String,
        default: "#ff00ff",
    },
    w: {
        type: Number,
        default: 24,
    },
    h: {
        type: Number,
        default: 24,
    }
});

</script>

<style scoped>
</style>