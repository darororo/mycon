<template>
  <div>
    <div
      style="width: 100rem"
      class="max-w-[1500px]"
    >
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
          Worker
        </h2>
        <div style="flex-direction: row; gap: 10px; display: flex">
          <Select
            v-model="selectedProject"
            :options="projects"
            optionLabel="name"
            placeholder="Filter by Project"
            :dt="select"
            :pt="{
              root: {
                style: 'font-weight: 500; font-size: 14px; font-family: Montserrat, san serif',
              },
            }"
          />
          <Select
            v-model="selectedRole"
            :options="roles"
            optionLabel="role"
            placeholder="Filter by Role"
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
            label="Add Worker"
            @click="createFormVisible = true"
          >
            <template #icon>
              <Icon
                style="font-size: 20px; background-color: white"
                name="ic:round-plus"
              />
            </template>
          </Button>
        </div>
      </div>
      <hr style="margin: 12px 0; border-color: #ccc" />
      <div>
        <WorkerTable
          :roleFilter="selectedRole"
          :projectFilter="selectedProject"
        />
      </div>
    </div>
    <CreateWorkerForm v-model="createFormVisible" />
  </div>
</template>

<script setup>
import CreateWorkerForm from '~/components/management/form/CreateWorkerForm.vue'
import WorkerTable from '~/components/table/WorkerTable.vue'

const createFormVisible = ref(false)
const selectedRole = ref(null)
const selectedProject = ref(null)

const roles = ref([
  { role: 'Senior', code: 'S' },
  { role: 'Normal', code: 'N' },
])

const { data: projects } = useFetch('/api/projects')

const select = {
  color: 'black',
  background: 'white',
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
    background: '#203a43',
    color: 'white',
    border: {
      color: 'none',
    },
    hover: {
      background: '#203a43',
      color: 'white',
      border: {
        color: 'none',
      },
    },
    active: {
      background: '#203a43',
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
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  margin: 10px 0 20px 0;
}
.creative-button {
  font-size: 16px;
  font-weight: 500;
  color: white;
  border-radius: 6px;
  width: 50%;
  max-width: 700px;
  background-color: #007bff;
  transition: background-color 0.2s ease;
  cursor: pointer;
}
</style>
