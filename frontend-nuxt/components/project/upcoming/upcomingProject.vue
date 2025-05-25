<template>
  <div class="upcoming-projects-container">
    <Card class="main-card">
      <template #content>
        <h2 class="section-title">Upcoming projects</h2>
        
        <div class="projects-grid">
          <Card 
            v-for="project in projects" 
            :key="project.id"
            class="project-card"
            :class="project.cardClass"
          >
            <template #content>
              <div class="project-content">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-creator">created by {{ project.creator }}</p>
                <div class="project-price">${{ project.price }}</div>
              </div>
            </template>
          </Card>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'Spray Street Quarter',
    creator: 'Dr. John Cena',
    price: '5000',
    cardClass: 'purple-card'
  },
  {
    id: 2,
    title: 'Spray Street Quarter',
    creator: 'Dr. John Cena',
    price: '5000',
    cardClass: 'pink-card'
  },
  {
    id: 3,
    title: 'Spray Street Quarter',
    creator: 'Dr. John Cena',
    price: '5000',
    cardClass: 'purple-light-card'
  },
  {
    id: 4,
    title: 'Spray Street Quarter',
    creator: 'Dr. John Cena',
    price: '5000',
    cardClass: 'blue-card'
  }
])
</script>

<style scoped>
.upcoming-projects-container {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.main-card {
  background: #f5f5f5;
  border-radius: 1.5rem;
  border: none;
  box-shadow: none;
}

.main-card :deep(.p-card-content) {
  padding: 2rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 2rem 0;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-card {
  border-radius: 1rem;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.project-card :deep(.p-card-content) {
  padding: 1.5rem;
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.project-creator {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

.project-price {
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  text-align: right;
  margin-top: auto;
}

/* Card color variants */
.purple-card {
  background: linear-gradient(135deg, #e8d5ff 0%, #d4c5f9 100%);
}

.pink-card {
  background: linear-gradient(135deg, #ffd6e8 0%, #ffb3d9 100%);
}

.purple-light-card {
  background: linear-gradient(135deg, #f0e6ff 0%, #e6d7ff 100%);
}

.blue-card {
  background: linear-gradient(135deg, #d6f0ff 0%, #b3e0ff 100%);
}

/* Responsive design */
@media (max-width: 768px) {
  .upcoming-projects-container {
    padding: 1rem;
  }
  
  .main-card :deep(.p-card-content) {
    padding: 1.5rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
}
</style>