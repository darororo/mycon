<template>
  <Card class="custom-card">
    <template #title>
      <div class="card-header">
        <h1 class="card-title">{{ numberCard.role }}</h1>
        <Icon
          name="material-symbols:more-horiz"
          size="24"
          class="more-icon"
        />
      </div>
    </template>

    <template #subtitle>
      <hr class="divider" />
    </template>

    <template #content>
      <div class="card-content">
        <p class="label">Total {{ numberCard.role }}</p>
        <p class="number-total">{{ numberCard.amount }}</p>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { Card } from 'primevue'

defineProps({
  numberCard: {
    type: Object,
  },
})
</script>

<style scoped>
.custom-card.p-card {
  width: 350px;
  height: 170px;
  background-color: v-bind('numberCard.bgColor');
  box-shadow:
    0 2px 5px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  color: black;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  font-family: 'Montserrat', sans-serif;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.more-icon {
  cursor: pointer;
  color: var(--p-gray-500);
}

.divider {
  border: none;
  border-top: 1px solid grey;
  margin: 0 16px;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  font-family: 'Montserrat', sans-serif;
}

.label {
  font-size: 14px;
  font-weight: 500;
  color: var(--p-gray-700);
  margin-bottom: 4px;
}

.number-total {
  font-size: 36px;
  font-weight: 700;
  color: var(--p-blue-700);
}
</style>
