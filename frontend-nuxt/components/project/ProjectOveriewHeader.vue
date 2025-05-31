<template>
  <div class="card">
    <Panel :dt="panel">
      <template #header>
        <div class="header-container">
          <div class="header-sec">
            <label class="project-name">{{ projectName }}</label>
            <div class="status-badge">
              <span>{{ status }}</span>
            </div>
          </div>
          <label class="price">$40000</label>
        </div>
      </template>

      <div class="footer-sec">
        <label class="location">
          <span>{{ location }}</span>
        </label>
        <label class="user">
          {{ userName }} <span>{{ role }}</span>
        </label>
      </div>

      <hr class="divider" />
    </Panel>
  </div>
</template>

<script setup>
const panel = {
  background: 'none',
  color: '#333',
  border: {
    color: 'none',
  },
  header: {
    padding: '0 ',
  },
  content: {
    padding: '0',
  },
}

defineProps({
  projectName: {
    type: String,
    default: 'Skyline Tower Construction',
  },
  status: {
    type: String,
    default: 'In Progress',
  },
  location: {
    type: String,
    default: 'Phnom Penh, Cambodia',
  },
  userName: {
    type: String,
    default: 'Taiki Inomata',
  },
  role: {
    type: String,
    default: '(Owner)',
  },
})
</script>

<style scoped>
.card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding-top: 16px;
  max-width: 100%;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.project-name {
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
  font-family: 'Montserrat', sans-serif;
}

.status-badge span {
  background-color: #e6f9ed;
  color: #2ecc71;
  border-radius: 9999px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
}

.header-sec {
  display: flex;
  gap: 14px;
  align-items: center;
}

.price {
  font-size: 18px;
  font-weight: 600;
  color: #10b981;
  font-family: 'Montserrat', sans-serif;
}

.footer-sec {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-size: 13px;
}

.location,
.user {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #6b7280;
  font-family: 'Montserrat', sans-serif;
}

.user span {
  color: #4f46e5;
  font-weight: 500;
  margin-left: 4px;
}

.location span {
  color: #111827;
  font-weight: 500;
}

.icon {
  font-size: 16px;
  color: #6b7280;
}

.divider {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin-top: 10px;
  padding-top: 10px;
}
</style>
