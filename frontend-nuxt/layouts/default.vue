<script setup lang="ts">
// import SidebarComponent from '~/components/navigation/SidebarComponent.vue'
import TopbarComponent from '~/components/navigation/TopbarComponent.vue'
import MenuComponent from '~/components/navigation/MenuComponent.vue'
</script>

<template>
  <div class="relative overflow-x-clip">
    <div class="fixed z-30 w-full pr-4 top-0">
      <TopbarComponent />
    </div>
    <div style="height: 1000px; top: 80px; width: auto; position: fixed">
      <MenuComponent />
    </div>
    <div style="display: flex; position: relative; height: 100%; top: 60px; left: 280px">
      <div style="padding: 10px 30px 0 30px">
        <div>
          <label class="welcome-page"
            >Welcome to our dashboard platform.<span
              >Let's take a good at today's current events</span
            ></label
          >
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome-page {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: 'Montserrat', sans-serif;
  color: black;
  font-weight: 600;
  font-size: 18px;
  padding-bottom: 20px;
}
.welcome-page span {
  font-size: 12px;
  font-weight: 500;
  color: grey;
}
</style>
