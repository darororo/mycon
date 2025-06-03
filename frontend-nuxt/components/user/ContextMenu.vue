<template>
  <div class="menu-container">
    <Menu
      :dt="{
        list: { padding: '0' },
        item: {
          focus: { background: '#4DA8DA', color: '#ffffff' },
          padding: '14px 20px',
          color: '#333',
          border: { radius: '0' },
          hover: { background: '#f0f0f0' },
        },
        border: { color: 'none', radius: '0' },
        background: '#ffffff',
      }"
      :model="items"
      class="custom-menu"
    >
      <template #item="{ item }">
        <div
          class="menu-item"
          :class="{ active: activeItem.label === item.label }"
          @click="activeItem = item"
        >
          <Icon
            :icon="item.icon!"
            style="font-size: 18px; color: currentColor; transition: color 0.3s ease"
          />
          <span>{{ item.label }}</span>
        </div>
      </template>
    </Menu>
    <span style="color: grey; font-size: 12px; margin-bottom: 10px">© 2025 Construction</span>
  </div>
</template>

<script setup lang="ts">
import Menu from 'primevue/menu'
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const items = ref([
  { label: 'Profile Setting', icon: 'mdi:account' },
  { label: 'Password', icon: 'bitcoin-icons:key-filled' },
  { label: 'Notifications', icon: 'iconamoon:notification-fill' },
  { label: 'Verification', icon: 'mdi:shield-tick' },
])

const activeItem = ref(items.value[0])
</script>

<style scoped>
::v-deep(.p-menu) {
  width: 14rem;
}
.menu-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  max-width: 100%;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  border-bottom: 1px solid #eee;
  transition:
    background 0.3s ease,
    color 0.3s ease;
  cursor: pointer;
  color: inherit;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 400;
}
.menu-item.active {
  background-color: #4da8da;
  color: white;
}
</style>
