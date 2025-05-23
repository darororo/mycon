<script setup lang="ts">
// import SidebarComponent from '~/components/navigation/SidebarComponent.vue'
import TopbarComponent from '~/components/navigation/TopbarComponent.vue'
import MenuComponent from '~/components/navigation/MenuComponent.vue'
</script>

<template>
  <div class="relative">
    <TopbarComponent />
    <div class="flex relative h-full">
      <aside class="sticky top-0 h-full">
        <!-- <SidebarComponent /> -->
        <MenuComponent />
      </aside>
      <div class="relative pl-4 w-full">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>
