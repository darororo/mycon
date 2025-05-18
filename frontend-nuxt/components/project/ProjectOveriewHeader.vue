<template>
  <div class="card">
    <Panel :dt="panel">
      <template #header>
        <div class="header-sec">
          <label style="font-size: 18px; font-weight: 600">{{ projectName }}</label>
          <div class="price-sec">
            <span>{{ status }}</span>
          </div>
        </div>
      </template>
      <div class="footer-sec">
        <label class="location"
          >Location: <span>{{ location }}</span></label
        >
        <label class="user"
          >{{ userName }}<span>{{ role }}</span></label
        >
      </div>
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
    padding: '10px 18px 20px 18px',
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
.user {
  display: flex;
  gap: 4px;
  font-size: 16px;
  font-weight: 500;
  color: grey;
}
.user span {
  color: cornflowerblue;
}
.location {
  display: flex;
  gap: 10px;
  font-weight: 400;
  color: grey;
  font-size: 16px;
}
.location span {
  color: #333;
  font-weight: 500;
}
.footer-sec {
  display: flex;
  justify-content: space-between;
}

.price-sec span {
  background-color: rgb(169, 253, 173);
  color: green;
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  font-size: 14px;
}

.header-sec {
  display: flex;
  color: #333;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: 'Monserrate', sans-serif;
}
</style>
