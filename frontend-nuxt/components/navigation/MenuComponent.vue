<template>
  <div
    style="
      gap: 10px;
      padding: 40px 20px;
      background-color: #222831;
      border-radius: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      display: flex;
      /* max-height: 1000px; */
      /* overflow: scroll; */
      /* height: 400px; */
    "
    class=""
  >
    <ScrollPanel style="height: 800px">
      <h1 class="menu-sec">Main Menu</h1>
      <PanelMenu
        style="border-radius: 10px; height: auto; width: 230px"
        :dt="menu"
        :model="mainMenu"
        multiple
        :pt="{
          rootList: {
            style: 'display: flex; flex-direction: column; gap: 10px; margin-top: 10px',
          },
        }"
      >
        <template #item="{ item }">
          <NuxtLink
            v-if="item.route"
            :to="item.route"
            v-slot="{ href, navigate }"
            custom
          >
            <a
              class="menu-item cursor-pointer"
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
              "
              @click="navigate"
              :href="href"
            >
              <Icon
                v-if="Array.isArray(item.icon) ? item.icon[0] : item.icon"
                :icon="Array.isArray(item.icon) ? item.icon[0] : item.icon"
                width="20"
                height="20"
                class="icon"
                style="margin-right: 0.5rem"
              />

              <span style="flex: 1">{{ item.label }}</span>

              <template v-if="Array.isArray(item.icon) && item.icon.length > 1">
                <Icon
                  :icon="item.icon[1]"
                  width="20"
                  height="20"
                  class="icon"
                  style="margin-left: auto"
                />
              </template>
            </a>
          </NuxtLink>
          <a
            v-else
            class="menu-item cursor-pointer"
            style="display: flex; align-items: center; justify-content: space-between; width: 100%"
          >
            <Icon
              v-if="Array.isArray(item.icon) ? item.icon[0] : item.icon"
              :icon="Array.isArray(item.icon) ? item.icon[0] : item.icon"
              width="20"
              height="20"
              class="icon"
              style="margin-right: 0.5rem"
            />

            <span style="flex: 1">{{ item.label }}</span>

            <template v-if="Array.isArray(item.icon) && item.icon.length > 1">
              <Icon
                :icon="item.icon[1]"
                width="20"
                height="20"
                class="icon"
                style="margin-left: auto"
              />
            </template>
          </a>
        </template>
      </PanelMenu>

      <h1 class="menu-sec user-menu">User Menu</h1>

      <PanelMenu
        style="border-radius: 10px; height: auto; width: 230px"
        :dt="menu"
        :model="userMenu"
        multiple
        :pt="{
          rootList: {
            style: 'display: flex; flex-direction: column; gap: 10px; margin-top: 10px',
          },
        }"
      >
        <template #item="{ item }">
          <NuxtLink
            v-if="item.route"
            :to="item.route"
            v-slot="{ href, navigate }"
            custom
          >
            <a
              class="menu-item cursor-pointer"
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
              "
              @click="navigate"
              :href="href"
            >
              <Icon
                v-if="Array.isArray(item.icon) ? item.icon[0] : item.icon"
                :icon="Array.isArray(item.icon) ? item.icon[0] : item.icon"
                width="20"
                height="20"
                class="icon"
                style="margin-right: 0.5rem"
              />

              <span style="flex: 1">{{ item.label }}</span>

              <template v-if="Array.isArray(item.icon) && item.icon.length > 1">
                <Icon
                  :icon="item.icon[1]"
                  width="20"
                  height="20"
                  class="icon"
                  style="margin-left: auto"
                />
              </template>
            </a>
          </NuxtLink>
          <a
            v-else
            class="menu-item cursor-pointer"
            style="display: flex; align-items: center; justify-content: space-between; width: 100%"
          >
            <Icon
              v-if="Array.isArray(item.icon) ? item.icon[0] : item.icon"
              :icon="Array.isArray(item.icon) ? item.icon[0] : item.icon"
              width="20"
              height="20"
              class="icon"
              style="margin-right: 0.5rem"
            />

            <span style="flex: 1">{{ item.label }}</span>

            <template v-if="Array.isArray(item.icon) && item.icon.length > 1">
              <Icon
                :icon="item.icon[1]"
                width="20"
                height="20"
                class="icon"
                style="margin-left: auto"
              />
            </template>
          </a>
        </template>
      </PanelMenu>
    </ScrollPanel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

// Hide management panel if the user role is Client
const isClient = false

const mainMenu = ref([
  { label: 'Dashboard', icon: 'material-symbols:dashboard-rounded', route: { name: 'dashboard' } },
  { label: 'Timeline', icon: 'fluent:timeline-20-filled', route: { name: 'timeline' } },
  {
    label: 'Management',
    icon: ['ix:user-management-settings-filled', 'solar:alt-arrow-down-bold'],
    visible: !isClient,
    items: [
      { label: 'Workers', icon: 'mdi:worker', route: { name: 'management-worker' } },
      { label: 'Payrolls', icon: 'carbon:user-role', route: { name: 'management-payroll' } },
    ],
  },
  {
    label: 'Project',
    icon: ['eos-icons:project', 'solar:alt-arrow-down-bold'],
    items: [
      {
        label: 'Create Project',
        icon: 'carbon:new-tab',
        route: {
          name: 'projects-create',
        },
      },
      {
        label: 'Assign Managers',
        icon: 'clarity:assign-user-line',
        route: {
          name: 'projects-assign',
        },
      },
      {
        label: 'Daily Task',
        icon: 'carbon:task',
        route: {
          name: 'projects-daily',
        },
      },
      {
        label: 'History',
        icon: 'material-symbols:history',
        route: {
          name: 'projects-history',
        },
      },
    ],
  },
  {
    label: 'Inventory',
    icon: 'material-symbols-light:inventory-2',
    route: {
      name: 'inventory',
    },
  },
  { label: 'Billing', icon: 'medical-icon:i-billing', route: { name: 'billing' } },
])

const userMenu = ref([
  { label: 'App & Integration', icon: 'duo-icons:app' },
  { label: 'Setting', icon: 'weui:setting-filled' },
  { label: 'Help & Support', icon: 'material-symbols:help' },
  { label: 'Log out', icon: 'material-symbols:logout-rounded', route: { name: 'auth-login' } },
])

const menu = {
  gap: '10px',
  background: 'none',
  border: {
    color: 'none',
    radius: 'none',
  },
  item: {
    gap: '100px',
  },
  panel: {
    background: 'none',
    padding: '4px',
    border: {
      width: '0',
    },
    first: {
      border: {
        width: '0',
      },
    },
    last: {
      border: {
        width: '0',
      },
    },
  },
}
</script>

<style scoped>
.menu-item {
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  padding: 8px 16px;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  gap: 2px;
  border-radius: 8px;
  color: #ccc;
  background-color: none;
  transition: background 0.3s ease;
}
.menu-item:hover {
  background-color: white;
  color: black;
}
.menu-sec {
  position: relative;
  /* right: 40px; */
  padding: 10px 20px;
}
.user-menu {
  /* margin-top: 20px; */
  margin-top: 180px;
}
</style>
