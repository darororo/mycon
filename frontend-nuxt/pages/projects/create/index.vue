<template>
  <div>
    <div
      style="
        display: flex;
        justify-content: center;
        background-color: white;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 20px;
        margin-bottom: 20px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      "
    >
      <img
        style="width: 900px; height: auto"
        src="https://t4.ftcdn.net/jpg/01/20/57/23/240_F_120572350_xIXQ01UJpeZmQwDpAN1zpdP0uR5jjaGW.jpg"
        alt="banner"
      />
    </div>
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
          Create Project
        </h2>
        <div style="flex-direction: row; gap: 10px; display: flex">
          <Select
            v-model="selectedProject"
            :options="projects"
            optionLabel="name"
            placeholder="Filter Project"
            :dt="select"
            :pt="{
              root: {
                style: 'font-weight: 500; font-size: 14px; font-family: Montserrat, sans-serif',
              },
            }"
            class="project-filter-select"
          />
          <Button
            :dt="button"
            :pt="{
              root: {
                style: 'font-weight: 500; font-size: 14px; font-family: Montserrat, san serif',
              },
            }"
            label="Create Project"
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
    </div>
    <div class="flex flex-row w-full justify-between">
      <ScrollPanel style="width: 62rem; height: 50rem; padding: 12px 0; border-radius: 8px">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 14px">
          <ProjectCard
            v-for="item in projects"
            :key="item.id"
            :item="item"
          />
        </div>
      </ScrollPanel>
      <ScrollPanel style="width: 20rem; height: 50rem">
        <div
          class="mb-4"
          v-for="i in 20"
          :key="i"
        >
          <ProjectUpcomingProject />
        </div>
      </ScrollPanel>
    </div>
    <CreateProjectForm v-model="createFormVisible" />
  </div>
</template>

<script setup>
import CreateProjectForm from '~/components/project/form/CreateProjectForm.vue'
import ProjectCard from '~/components/project/ProjectCard.vue'

const createFormVisible = ref(false)

const { data, error, execute } = useFetch('/api/projects', {
  method: 'GET',
})

const { projects } = storeToRefs(useProjectStore())

onMounted(async () => {
  await execute()
  projects.value = data.value
  console.log(projects.value)
})

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
::v-deep(.p-inputtext):focus,
::v-deep(.p-inputtext):hover {
  border-color: #007bff;
}
</style>
