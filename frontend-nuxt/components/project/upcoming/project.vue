<template>
  <Card
    v-for="project in projects"
    :key="project.id"
    :class="project.cardClass"
  >
    <template #content>
      <div class="project-content">
        <h3 class="project-title">{{ project.title }}</h3>
        <div
          style="
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          "
        >
          <p class="project-creator">created by {{ project.creator }}</p>
          <label class="project-price">${{ project.price }}</label>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'Spray Street Quarter',
    creator: 'Dr. John Cena',
    price: '5000',
    cardClass: 'purple-card',
  },
])
</script>

<style scoped>
.project-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: 'Montserrat', sans-serif;
}

.project-title {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.project-creator {
  font-size: 12px;
  color: black;
  margin: 0;
}

.project-price {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: right;
  margin-top: auto;
}

.purple-card {
  background: linear-gradient(135deg, #e8d5ff 0%, #d4c5f9 100%);
}
</style>
