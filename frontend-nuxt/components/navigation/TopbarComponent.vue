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
              <span class="info-language">{{ language }}</span>
              <Icon
                name="ic:outline-email"
                size="26"
                style="color: #333"
              />
              <div class="notification-container">
                <div class="notification-icon" @click="toggleNotifications">
                  <span class="bell-icon">
                    <Icon
                    name="mdi:bell-ring-outline"
                    size="26"
                    style="color: #333"
                  />
                  </span>
                  <span v-if="unreadCount > 0" class="notification-badge">{{ unreadCount }}</span>
                </div>

                
                <div v-if="showNotifications" class="notifications-dropdown">
                  <div class="notifications-header">
                    <h3>Notifications</h3>
                    <button @click="AllClient " class="all_client">Request Client</button>
                  </div>
                  
                  <div v-if="notifications.length === 0" class="empty-notifications">
                    No new notifications
                  </div>
                  
                  <div v-else>
                    <div 
                      v-for="notification in notifications" 
                      :key="notification.id"
                      class="notification-item"
                      :class="{ 'unread': !notification.read }"
                      @click="handleNotificationClick(notification)"
                    >
                      <div class="notification-content">
                        <strong>{{ notification.title }}</strong>
                        <p>{{ notification.message }}</p>
                        <small>{{ formatDate(notification.timestamp) }}</small>
                      </div>
                      <button 
                        @click.stop="removeNotification(notification.id)" 
                        class="delete-notification"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="line-right" />
            <div class="account-menu">
              <!-- <img :src="urlProfile" alt="profile" class="user-profile" /> -->
              <UserProfileDropdown :user="userData" />
              <div class="username-role">
                <span class="name">{{ userData.firstName }} {{ userData.lastName }}</span>
                <span class="role">{{ userData.role }}</span>
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
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Toolbar from 'primevue/toolbar'
import { getFromCache } from '~/composables/useCache'
const _props = defineProps({
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
    default: '',
  },
})

const userData = ref({})
const router = useRouter()

const showNotifications = ref(false)
const notifications = ref([
  {
    id: 1,
    title: 'Mr.Dara',
    timestamp: new Date(),
    read: false,
  },
  {
    id: 2,
    title: 'Mrs.Naza',
    timestamp: new Date(),
    read: true,
  }
])
const nextId = ref(3)

const unreadCount = computed(() => {
  return notifications.value.filter(n => !n.read).length
})

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value
  if (showNotifications.value) {
    markAllAsRead()
  }
}

const markAllAsRead = () => {
  notifications.value = notifications.value.map(n => ({
    ...n,
    read: true
  }))
}

const handleNotificationClick = (notification) => {
  if (notification.link) {
    router.push(notification.link)
  }
  notification.read = true
  showNotifications.value = false
}

const removeNotification = (id) => {
  notifications.value = notifications.value.filter(n => n.id !== id)
}

const formatDate = (date) => {
  return new Date(date).toLocaleString()
}

const _addNotification = (title, message, link = null) => {
  const newNotification = {
    id: nextId.value++,
    title,
    message,
    timestamp: new Date(),
    read: false,
    link
  }
  notifications.value.unshift(newNotification)
  playNotificationSound()
  showBrowserNotification(title, message)
}
const playNotificationSound = () => {
  console.log('Playing notification sound')
}

onMounted(async () => {
  const cacheData = getFromCache('userStore')
  if (cacheData) {
    userData.value = cacheData.value
  } else {
    userData.value = await $fetch('/api/users/1')
  }
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
 .notification-container {
    position: relative;
    display: inline-block;
    }

    .notification-icon {
    position: relative;
    cursor: pointer;
    font-size: 24px;
    padding: 10px;
    }

    .notification-badge {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #ff4757;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    }
    .notifications-dropdown {
    position: absolute;
    right: 0;
    top: 100%;
    width: 350px;
    max-height: 500px;
    overflow-y: auto;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    }

    .notifications-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    border-bottom: 1px solid #eee;
    }

    .all_client {
    background: none;
    border: none;
    color: #3498db;
    cursor: pointer;
    font-size: 12px;
    }

    .empty-notifications {
    padding: 20px;
    text-align: center;
    color: #777;
    }

    .notification-item {
    padding: 12px 15px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    }

    .notification-item:hover {
    background-color: #f1f1f1;
    }

    .notification-content {
    flex: 1;
    }

    .notification-content p {
    margin: 5px 0;
    color: #555;
    }

    .notification-content small {
    color: #999;
    font-size: 12px;
    }

    .delete-notification {
    background: none;
    border: none;
    color: #999;
    cursor: pointer;
    font-size: 16px;
    padding: 0 5px;
    }

    .delete-notification:hover {
    color: #7b7474;
    }

</style>

