<template>
  <Button
    @click="toggleDropdown"
    class="avatar-button"
    :unstyled="true"
    style="color: black"
  >
    <Avatar
      :image="user.avatar"
      shape="circle"
      style="width: auto; height: 36px"
    />
  </Button>
  <Popover
    ref="dropdown"
    appendTo="body"
    style="
      margin-left: 126px;
      margin-top: 24px;
      padding: none;
      border-color: #dddddd;
      background-color: white;
    "
  >
    <div class="dropdown-content">
      <div class="dark-section">
        <div class="blue-screen">
          <div class="user-info-card">
            <div class="user-info">
              <Avatar
                @click="router.push({ name: 'users', params: { id: 1 } })"
                style="cursor: pointer"
                :image="user.avatar"
                shape="circle"
                class="user-profile"
              />
              <div class="user-details">
                <h3>{{ user.name }}</h3>
                <p>{{ user.role }}</p>
                <div class="contact-info">
                  <p>
                    <Icon
                      name="material-symbols:mail"
                      size="16px"
                    />
                    {{ user.email }}
                  </p>
                  <p>
                    <Icon
                      name="typcn:location"
                      size="16px"
                    />
                    {{ user.location }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr class="line" />
          <div>
            <div
              v-for="(company, index) in companies"
              :key="index"
              class="company-item"
            >
              <div class="company-info">
                <Avatar
                  :image="company.logo"
                  shape="circle"
                  class="list-user-profile"
                />
                <span>{{ company.name }}</span>
              </div>
              <button class="menu-button">
                <i class="pi pi-ellipsis-h"></i>
              </button>
            </div>
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
            <Icon
              :name="action.icon"
              size="23"
              class="text-[#333333]"
            />
          </div>
          <span class="action-label">{{ action.name }}</span>
        </div>
      </div>
    </div>
  </Popover>
</template>

<script setup>
const router = useRouter()

const emit = defineEmits(['logout', 'settings', 'help'])

const dropdown = ref(null)
const toggleDropdown = event => {
  dropdown.value.toggle(event)
}

const handleAction = type => {
  dropdown.value.hide()
  emit(type)
}

const user = {
  name: 'Jonh Cena',
  role: 'Super admin',
  email: 'cenajohn169@gmail.com',
  location: 'Cambodia',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
}

const companies = [
  {
    name: 'Global Innovation CJ',
    logo: 'https://randomuser.me/api/portraits/men/91.jpg',
  },
  {
    name: 'Visionary Venture LT',
    logo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
]

const actions = [
  {
    name: 'Settings & privacy',
    icon: 'uil:setting',
    type: 'settings',
  },
  {
    name: 'Help & Center',
    icon: 'mingcute:question-line',
    type: 'help',
  },
  {
    name: 'Log out',
    icon: 'mdi:logout',
    type: 'logout',
  },
]

// return { dropdown, toggleDropdown, user, companies, actions, handleAction };
</script>

<style scoped>
.line {
  margin: 0 0 16px 0;
}

.list-user-profile {
  width: 36px;
  height: auto;
}

.user-profile {
  width: 50px;
  height: auto;
}

.blue-screen {
  background-color: #333;
  border-radius: 20px;
}

.avatar-button {
  position: relative;
  top: 4px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
}

.dropdown-content {
  width: 320px;
  border-radius: 20px 20px;
  overflow: hidden;
}

.dark-section {
  background-color: white;
  color: white;
  border-radius: 20px 20px 0 0;
}

.user-info-card {
  padding: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
}

.user-info {
  display: flex;
  align-items: start;
  gap: 16px;
  font-family: 'Montserrat', sans-serif;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-details h3 {
  font-size: 14px;
  font-weight: 500;
  color: white;
  margin: 0;
}

.user-details p {
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 6px;
  color: #f2f2f2;
  margin: 0;
  padding-bottom: 4px;
  font-weight: 400;
}

.contact-info {
  margin-top: 0.3rem;
}

.company-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 18px 22px;
}

.company-info {
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 400;
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

.action-buttons {
  background-color: white;
  padding: 6px 0 0 0;
}

.action-item {
  display: flex;
  align-items: center;
  padding: 8px 10px 4px 10px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  transition: background-color 0.2s;
}

.action-item:hover {
  background-color: #f1f5f9;
}

.action-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #f1f1f1;
  border-radius: 50%;
  margin-right: 1rem;
}

.action-icon i {
  color: #333;
  font-size: 1.3rem;
}

.action-label {
  color: #333;
  font-size: 14px;
  font-weight: 500;
}
</style>
