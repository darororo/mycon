<script setup lang="ts">
import SidebarComponent from '~/components/navigation/SidebarComponent.vue';
import TopbarComponent from '~/components/navigation/TopbarComponent.vue';

</script>

<template>
    <div>
        <TopbarComponent />

        <slot></slot>

        <div class="absolute left-0 top-20">
            <SidebarComponent />
        </div>
    </div>

</template>