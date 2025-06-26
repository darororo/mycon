<template>
  <div class="notification-container">
    <div class="notification-icon" @click="toggleNotifications">
      <span class="bell-icon">🔔</span>
      <span v-if="unreadCount > 0" class="notification-badge">{{ unreadCount }}</span>
    </div>

    
    <div v-if="showNotifications" class="notifications-dropdown">
      <div class="notifications-header">
        <h3>Notifications</h3>
        <button @click="markAllAsRead" class="mark-all-read">Mark all as read</button>
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
</template>

<script>
    export default {
    name: 'NotificationSystem',
    data() {
        return {
        showNotifications: false,
        notifications: [
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
            
        ],
        nextId: 3
        }
    },
    computed: {
        unreadCount() {
        return this.notifications.filter(n => !n.read).length
        }
    },
    methods: {
        toggleNotifications() {
        this.showNotifications = !this.showNotifications
        if (this.showNotifications) {
            this.markAllAsRead()
        }
        },
        markAllAsRead() {
        this.notifications = this.notifications.map(n => ({
            ...n,
            read: true
        }))
        },
        handleNotificationClick(notification) {
        if (notification.link) {
            this.$router.push(notification.link)
        }
        notification.read = true
        this.showNotifications = false
        },
        removeNotification(id) {
        this.notifications = this.notifications.filter(n => n.id !== id)
        },
        formatDate(date) {
        return new Date(date).toLocaleString()
        },
        addNotification(title, message, link = null) {
        const newNotification = {
            id: this.nextId++,
            title,
            message,
            timestamp: new Date(),
            read: false,
            link
        }
        this.notifications.unshift(newNotification)
        
        this.playNotificationSound()
        

        this.showBrowserNotification(title, message)
        },
        async showBrowserNotification(title, message) {
        if (!('Notification' in window)) {
            console.log('This browser does not support notifications')
            return
        }
        
        if (Notification.permission === 'granted') {
            new Notification(title, { body: message })
        } else if (Notification.permission !== 'denied') {
            const permission = await Notification.requestPermission()
            if (permission === 'granted') {
            new Notification(title, { body: message })
            }
        }
        }
    },
    
    }
</script>

<style scoped>
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

    .mark-all-read {
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
    transition: background 0.2s;
    }

    .notification-item.unread {
    background-color: #f8f9fa;
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
    color: #ff4757;
    }
</style>