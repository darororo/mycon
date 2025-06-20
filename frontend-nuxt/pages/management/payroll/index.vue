<template>
  <div>
    <!-- Enhanced Project Title Section -->
    <div class="project-title-section">
      <!-- Project Filter Select at the top -->
      <div class="project-filter-container">
        <Select
          v-model="selectedProject"
          :options="projects"
          optionLabel="name"
          placeholder="Change Project"
          :dt="select"
          :pt="{
            root: {
              style: 'font-weight: 500; font-size: 14px; font-family: Montserrat, sans-serif',
            },
          }"
          class="project-filter-select"
        />
      </div>

      <div class="title-container">
        <div class="project-badge">
          <Icon
            name="material-symbols:construction"
            class="badge-icon"
          />
          <span>Current Project</span>
        </div>
        <h1 class="project-title">
          {{ selectedProject ? selectedProject.name : projects[0].name }}
        </h1>
        <p class="project-description">Let's take a good look at today's current events</p>
      </div>
      <div class="title-decoration">
        <div class="decoration-circle"></div>
        <div class="decoration-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <!-- Rest of your existing code -->
    <div class="card-container">
      <div
        v-for="numberCard in cards"
        :key="numberCard.role"
        class="flex"
      >
        <WorkerNumberCard :numberCard="numberCard" />
      </div>
    </div>
    <div
      style="display: flex; flex-direction: row; justify-content: space-between; align-items: end"
    >
      <h2
        style="
          font-weight: 600;
          font-size: 22px;
          color: black;
          font-family: 'Montserrat', sans-serif;
        "
      >
        Payroll
      </h2>
      <div style="flex-direction: row; gap: 10px; display: flex">
        <Select
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="Filter Days"
          :dt="select"
          :pt="{
            root: {
              style: 'font-weight: 500; font-size: 14px; font-family: Montserrat, san serif',
            },
          }"
        />
        <Select
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="Count Mode Days"
          :dt="select"
          :pt="{
            root: {
              style: 'font-weight: 500; font-size: 14px; font-family: Montserrat, san serif',
            },
          }"
        />
        <Button
          :dt="button"
          :pt="{
            root: {
              style: 'font-weight: 500; font-size: 14px; font-family: Montserrat, san serif',
            },
          }"
          label="Take Attendance"
          @click="createFormVisible = true"
        >
          <template #icon>
            <Icon
              style="font-size: 20px; background-color: white"
              name="material-symbols:link"
            />
          </template>
        </Button>
        <LinkGenerator v-model="createFormVisible" />
      </div>
    </div>
    <hr style="margin: 12px 0; border-color: #ccc" />
    <PayrollTable />
  </div>
</template>

<script setup>
import LinkGenerator from '~/components/management/form/LinkGeneratorForm.vue'
import WorkerNumberCard from '~/components/project/card/WorkerNumberCard.vue'
import PayrollTable from '~/components/table/PayrollTable.vue'

const createFormVisible = ref(false)

const selectedProject = ref('')

const { data: projects } = useFetch('/api/projects')

const select = {
  background: 'white',
  color: 'black',
  border: {
    color: '#ccc',
    radius: '12px',
  },
  hover: {
    border: {
      color: '#ccc',
    },
  },
  focus: {
    border: {
      color: '#ccc',
    },
  },
  padding: {
    x: '18px',
    y: '10px',
  },
}

const button = {
  primary: {
    background: 'linear-gradient(to right, #3b82f6, #6366f1)',
    color: 'white',
    border: {
      color: 'none',
    },
    hover: {
      background: 'linear-gradient(to right, #3b82f6, #6366f1)',
      color: 'white',
      border: {
        color: 'none',
      },
    },
    active: {
      background: 'linear-gradient(to right, #3b82f6, #6366f1)',
      color: 'white',
      border: {
        color: 'none',
      },
    },
  },
  border: {
    radius: '12px',
  },
  padding: {
    x: '20px',
    y: '10px',
  },
}

const cards = [
  {
    role: 'Builder',
    amount: '1000',
    bgColor: 'var(--p-blue-100)',
  },
  {
    role: 'Worker',
    amount: '2000',
    bgColor: 'var(--p-red-100)',
  },
  {
    role: 'Admin',
    amount: '3000',
    bgColor: 'var(--p-green-100)',
  },
  {
    role: 'Owner',
    amount: '4000',
    bgColor: 'var(--p-purple-100)',
  },
]
</script>

<style scoped>
.project-filter-container {
  display: flex;
  justify-content: flex-start;
  position: relative;
  z-index: 3;
}

.project-filter-select {
  min-width: 200px;
  max-width: 300px;
}

.project-title-section {
  position: relative;
  text-align: center;
  padding: 20px;
  margin-bottom: 40px;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 24px;
  overflow: hidden;
}

.title-container {
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin: 0 auto;
  padding: 30px 0 60px;
}

.project-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.badge-icon {
  font-size: 16px;
}

.project-title {
  font-size: 52px;
  font-weight: 800;
  color: #1f2937;
  font-family: 'Montserrat', sans-serif;
  margin: 0 0 16px 0;
  letter-spacing: -0.02em;
  line-height: 1.1;
  background: linear-gradient(135deg, #1f2937 0%, #4b5563 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: titleFadeIn 1s ease-out;
}

.project-description {
  font-size: 18px;
  color: #6b7280;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  font-weight: 400;
  opacity: 0.9;
  animation: descriptionFadeIn 1s ease-out 0.3s both;
}

/* Decorative Elements */
.title-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.decoration-circle {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.decoration-dots {
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 8px;
}

.decoration-dots span {
  width: 8px;
  height: 8px;
  background: rgba(59, 130, 246, 0.3);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.decoration-dots span:nth-child(2) {
  animation-delay: 0.3s;
}

.decoration-dots span:nth-child(3) {
  animation-delay: 0.6s;
}

/* Existing styles for the rest of the layout */
.card-container {
  display: flex;
  justify-content: space-between;
  width: 100rem;
  max-width: 1500px;
  margin-bottom: 20px;
}

/* Animations */
@keyframes titleFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes descriptionFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 0.9;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-title-section {
    padding: 40px 20px;
    margin-bottom: 30px;
  }

  .project-title {
    font-size: 36px;
  }

  .project-description {
    font-size: 16px;
  }

  .decoration-circle {
    width: 150px;
    height: 150px;
    top: -30px;
    right: -30px;
  }
}

@media (max-width: 480px) {
  .project-title {
    font-size: 28px;
  }

  .project-description {
    font-size: 14px;
  }
}
</style>
