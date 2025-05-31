<template>
  <div
    style="
      border-radius: 10px;
      padding: 0 20px;
      border: 1px solid #ccc;
      align-items: center;
      gap: 20px;
      display: flex;
    "
  >
    <Card
      v-for="item in card"
      :key="item.id"
      :dt="cardDt"
      class="card-container"
    >
      <template #title>
        <label class="card-title">{{ item.title }}</label>
      </template>

      <template #content>
        <div class="card-content">
          <div class="icon-circle">
            <Icon
              name="ri:money-dollar-circle-line"
              class="icon"
            />
          </div>
          <div class="percentage-flat">{{ item.percentage }}</div>
        </div>
      </template>

      <template #footer>
        <div class="footer-section">
          <label class="label-text">
            Total Hours <span class="label-value">{{ item.hourse }} hrs</span>
          </label>
          <label class="label-text">
            {{ item.labelText }} <span class="label-value">${{ item.value }}</span>
          </label>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
const cardDt = {
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
}
defineProps({
  card: {
    type: Array,
    default: () => [
      {
        id: 1,
        title: 'Total Labor Expense',
        percentage: '44%',
        hourse: '3,750',
        labelText: 'Total Labor',
        value: '125,000',
      },
      {
        id: 2,
        title: 'Total Material Expense',
        percentage: '83%',
        hourse: '1,400',
        labelText: 'Total Material',
        value: '320,000',
      },
    ],
  },
})
</script>

<style scoped>
.card-container {
  width: 440px;
  padding: 0 10px;
  border-radius: 18px;
  background: linear-gradient(135deg, #f5f7fa, #e0eafc);
  transition: transform 0.3s ease;
}

.card-title {
  color: #2c3e50;
  font-weight: 600;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 8px;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 0;
}

.icon-circle {
  height: 72px;
  width: 72px;
  border-radius: 50%;
  background: radial-gradient(circle at center, #bbdefb, #90caf9);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulse 2s infinite ease-in-out;
}

.icon {
  color: #1e88e5;
  font-size: 40px;
}

.percentage-flat {
  color: #1e88e5;
  font-size: 46px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  line-height: 1;
}

.footer-section {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
}

.label-text {
  display: flex;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  color: #333;
}

.label-value {
  color: #e53935;
  font-weight: 600;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(30, 136, 229, 0.4);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(30, 136, 229, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(30, 136, 229, 0);
  }
}
</style>
