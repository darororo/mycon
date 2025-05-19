<script setup lang="ts">
import SidebarComponent from '~/components/navigation/SidebarComponent.vue'
import TopbarComponent from '~/components/navigation/TopbarComponent.vue'
</script>

<template>
  <div class="relative">
    <TopbarComponent />
    <div class="flex relative h-full">
      <aside class="sticky top-0 h-full">
        <SidebarComponent />
      </aside>
      <div class="relative px-4">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>
