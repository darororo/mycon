<script setup lang="ts">
import SidebarComponent from '~/components/navigation/SidebarComponent.vue'
import TopbarComponent from '~/components/navigation/TopbarComponent.vue'
</script>

<template>
  <div>
    <TopbarComponent />
    <SidebarComponent />
    <slot>
      <!-- <button class="text-blue-700">hello</button> -->
    </slot>
  </div>
</template>
