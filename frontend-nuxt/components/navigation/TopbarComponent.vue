<template>
  <div
    class="card"
    style="padding-bottom: 16px"
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
            name="simple-icons:primevue"
            size="30"
            style="color: #333"
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
              <span class="info-language">{{ language }}</span>
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
              <!-- <img :src="urlProfile" alt="profile" class="user-profile" /> -->
              <UserProfileDropdown />
              <div class="username-role">
                <span class="name">{{ name }}</span>
                <span class="role">{{ role }}</span>
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

<script setup>
import Toolbar from 'primevue/toolbar'
defineProps({
  language: {
    type: String,
    default: 'Cambodia',
  },
  name: {
    type: String,
    default: 'Jonh Cena',
  },
  role: {
    type: String,
    default: 'Super admin',
  },
  urlProfile: {
    type: String,
    default: 'https://i.pinimg.com/736x/8f/86/50/8f8650ffcdfda6f1767a99565d3a4402.jpg',
  },
})
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
