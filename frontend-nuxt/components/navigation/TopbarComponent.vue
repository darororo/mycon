<template>
  <div
    class="card"
    style="padding-bottom: 10px"
  >
    <Toolbar
      style="
        box-shadow:
          rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
          rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        border-color: rgb(204, 204, 204);
        background-color: #f4f4f4;
      "
    >
      <template #start>
        <div class="start-section">
          <Icon
            name="fluent-mdl2:google-drive-logo"
            size="30"
            style="color: black"
          />
          <span class="logo-name">CONSTRUCTION</span>
        </div>
        <hr class="line-left" />
      </template>

      <template #center>
        <div class="center-section">
          <Icon
            name="material-symbols:search-rounded"
            size="24"
            class="relative left-[42px]"
            style="color: grey"
          />
          <InputText
            class="search-bar"
            placeholder="Search for content"
          />
        </div>
      </template>

      <template #end>
        <div class="end-section">
          <div class="tool-bar-group">
            <div class="notification-alert">
              <span class="info-language">English</span>
              <Icon
                name="ic:outline-email"
                size="26"
                style="color: #333"
              />
              <Icon
                name="mdi:bell-ring-outline"
                size="26"
                style="color: #333"
              />
            </div>
            <hr class="line-right" />
            <div class="account-menu">
              <!-- <div v-if="currentUser?.photos.length === 0">lol</div>
              <img
                v-else
                :src="`/api/storage/${currentUser?.photos[0].thumbnail}`"
                alt="profile"
                class="user-profile"
              /> -->
              <UserProfileDropdown :user="currentUser!" />
              <div
                v-if="currentUser"
                class="username-role"
              >
                <span class="name">{{ currentUser.firstName }} {{ currentUser.lastName }}</span>
                <span class="role">{{ currentUser.role }}</span>
              </div>
              <div
                v-else
                class="username-role"
              >
                <span class="name">Anonymous</span>
                <span class="role">Client</span>
              </div>
              <Icon
                name="ion:chevron-down-sharp"
                size="22"
                style="color: #333"
              />
            </div>
          </div>
        </div>
      </template>
    </Toolbar>
  </div>
</template>

<script setup lang="ts">
import Toolbar from 'primevue/toolbar'
import { getFromCache } from '~/composables/useCache'
import type { User } from '~/interfaces/user.interface'

// const { data } = await useFetch<User>('/api/users/1')

// const authStore = useAuthStore()
const { currentUser } = storeToRefs(useAuthStore())
console.log(currentUser)

// onMounted(async () => {
//   const cacheData = getFromCache('userStore')
//   if (cacheData) {
//     currentUser.value = cacheData.value
//   } else {
//     currentUser.value = await $fetch<User>(`/api/users/${authStore.authUser?.userId}`)
//   }
// })
defineProps<{ user: User }>()
</script>

<style scoped>
.p-toolbar {
  padding: 10px 10px 10px 10px !important;
}
.start-section {
  display: flex;
  align-items: center;
  padding-left: 20px;
  gap: 1rem;
}

.logo-name {
  font-size: 16px;
  color: #333;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

.end-section {
  display: flex;
  align-items: center;
  padding-right: 20px;
}

.search-bar {
  padding: 0 20px 0 50px;
  width: 650px;
  height: 36px;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  background-color: transparent;
  color: grey;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid rgb(204, 204, 204);
}
.search-bar:hover {
  border-color: rgb(204, 204, 204);
}

.center-section {
  display: flex;
  align-items: center;
  gap: 4px;
}

.search-icon {
  position: relative;
  left: 44px;
}

.notification-alert {
  display: flex;
  align-items: center;
  gap: 30px;
}

.tool-bar-group {
  display: flex;
  align-items: center;
  gap: 20px;
}

.info-language {
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  color: #333;
  font-weight: 400;
}

.user-profile {
  height: 34px;
  width: auto;
  border-radius: 100%;
}

.account-menu {
  display: flex;
  align-items: center;
  gap: 18px;
}

.username-role {
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  line-height: 18px;
}

.name {
  font-weight: 400;
  font-size: 14px;
  color: #333;
}

.role {
  font-size: 12px;
  color: grey;
  font-weight: 300;
}

.line-right {
  width: 36px;
  transform: rotate(90deg);
  border: 1px solid rgb(204, 204, 204);
  border-radius: 10px;
}

.line-left {
  position: relative;
  width: 36px;
  transform: rotate(90deg);
  border: 1px solid rgb(204, 204, 204);
  border-radius: 10px;
  left: 36px;
}
</style>
