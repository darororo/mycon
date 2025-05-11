<script setup lang="ts">
import SidebarComponent from '~/components/navigation/SidebarComponent.vue';
import TopbarComponent from '~/components/navigation/TopbarComponent.vue';

</script>

<template>
    <div>
        <TopbarComponent />
        <div class="relative top-8 left-0 flex">
            <SidebarComponent />
            <div class="relative m-8">
                <slot></slot>
            </div>
        </div>
    </div>

</template>