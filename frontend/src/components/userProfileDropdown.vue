<template>
  <div class="container">
    <Button @click="toggleDropdown" class="avatar-button" :unstyled="true">
      <Avatar :image="user.avatar" shape="circle" size="large" />
    </Button>

    <Popover ref="dropdown" class="dropdown-panel" appendTo="body">
      <div class="dropdown-content">
        <div class="dark-section">
          <div class="user-info-card">
            <div class="user-info">
              <Avatar :image="user.avatar" size="large" shape="circle" />
              <div class="user-details">
                <h3>{{ user.name }}</h3>
                <p class="role">{{ user.role }}</p>
                <div class="contact-info">
                  <p><i class="pi pi-envelope"></i> {{ user.email }}</p>
                  <p><i class="pi pi-map-marker"></i> {{ user.location }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="company-list">
            <div
              v-for="(company, index) in companies"
              :key="index"
              class="company-item"
            >
              <div class="company-info">
                <Avatar :image="company.logo" size="small" shape="circle" />
                <span>{{ company.name }}</span>
              </div>
              <button class="menu-button">
                <i class="pi pi-ellipsis-h"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="action-buttons">
          <div
            v-for="(action, index) in actions"
            :key="index"
            class="action-item"
            @click="handleAction(action.type)"
          >
            <div class="action-icon">
              <i :class="action.icon"></i>
            </div>
            <span class="action-label">{{ action.name }}</span>
          </div>
        </div>
      </div>
    </Popover>
  </div>
</template>

<script>
import { ref } from 'vue';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import { Popover } from 'primevue';

export default {
  name: 'userProfileDropdown',
  components: {
    Button,
    Avatar,
    Popover
  },
  emits: ['logout', 'settings', 'help'],
  setup(props, { emit }) {
    const dropdown = ref(null);

    const toggleDropdown = (event) => {
      dropdown.value.toggle(event);
    };

    const handleAction = (type) => {
      dropdown.value.hide();
      emit(type);
    };

    const user = {
      name: 'Jonh Cena',
      role: 'Super admin',
      email: 'cenajohn169@gmail.com',
      location: 'Cambodia',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    };

    const companies = [
      {
        name: 'FreeFire Company',
        logo: 'https://randomuser.me/api/portraits/men/91.jpg',
      },
      {
        name: 'Mobile Legend Company',
        logo: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
    ];

    const actions = [
      {
        name: 'Settings & privacy',
        icon: 'pi pi-cog',
        type: 'settings'
      },
      {
        name: 'Help & Center',
        icon: 'pi pi-question-circle',
        type: 'help'
      },
      {
        name: 'Log out',
        icon: 'pi pi-sign-out',
        type: 'logout'
      },
    ];

    return { dropdown, toggleDropdown, user, companies, actions, handleAction };
  },
};
</script>

<style scoped>
.container {
  position: relative;
}

.avatar-button {
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
}

.dropdown-panel {
  width: 360px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  padding: 0;
}

.dropdown-panel :deep(.p-popover-content) {
  padding: 0;
}

.dropdown-content {
  border-radius: 20px;
  overflow: hidden;
}

.dark-section {
  background-color: #3b4559;
  color: white;
  padding: 5px;
  border-radius: 20px;
}

.user-info-card {
  padding: 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.);
}

.user-info {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.user-details h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
}

.user-details .role {
  color: #cbd5e1;
  font-size: 0.9rem;
  margin: 0.2rem 0 0.3rem 0;
}

.user-details p {
  margin: 0.2rem 0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
}

.contact-info {
  margin-top: 0.3rem;
}

.company-list {
  background-color: #3b4559;
}

.company-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem;
  background-color: #3b4559;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.company-info {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.company-info span {
  color: white;
  font-size: 0.95rem;
}

.menu-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  padding: 0.25rem;
}

.menu-button:hover {
  color: white;
}

/* Action buttons in light section */
.action-buttons {
  /* background-color: white;
  padding: 0.5rem 0; */
  background-color: white;
  padding: 0.75rem 0 1rem;
}

.action-item {
  display: flex;
  align-items: center;
  padding: 0.85rem 1.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.action-item:hover {
  /* background-color: #f8fafc; */
  background-color: #f1f5f9;
}

.action-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #f1f5f9;
  border-radius: 50%;
  margin-right: 1rem;
}

.action-icon i {
  /* color: #64748b;
  font-size: 1.2rem; */
  color: #64748b;
  font-size: 1.3rem;
}

.action-label {
  color: #334155;
  font-size: 0.95rem;
  font-weight: 500;
}
</style>