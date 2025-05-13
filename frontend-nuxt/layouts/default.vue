<script setup lang="ts">
import SidebarComponent from '~/components/navigation/SidebarComponent.vue'
import TopbarComponent from '~/components/navigation/TopbarComponent.vue'
</script>

<template>
  <div>
    <TopbarComponent />
    <div class="flex">
      <SidebarComponent />
      <div class="relative px-4">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>
