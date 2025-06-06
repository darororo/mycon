<template>
  <div
    style="width: 100rem"
    class="max-w-[1500px]"
  >
    <div>
      <TaskSummary />
    </div>
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
        margin-top: 20px;
      "
    >
      <h2
        style="
          font-weight: 600;
          font-size: 22px;
          color: black;
          font-family: 'Montserrat', sans-serif;
        "
      >
        Daily Tasks
      </h2>
      <div style="flex-direction: row; gap: 10px; display: flex">
        <Select
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="Filter Category"
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
          label="Create Task"
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
    <DailyTaskTable />
    <Dialog
      v-model:visible="createFormVisible"
      modal
      header="Create Task"
      :style="{ width: '800px' }"
      :pt="{
        content: {
          style: `
                    padding :0;
                `,
        },
        header: {
          style: 'border-bottom: 1px solid #ccc;',
        },
      }"
      :dt="{
        background: 'white',
        color: 'black',
        header: {
          padding: '30px',
        },
        border: {
          radius: '20px',
        },
      }"
    >
      <DailyTaskForm />
      <div class="button">
        <Button
          type="button"
          label="Confirm"
          :dt="{
            primary: {
              background: 'red',
              border: { color: 'none' },
              active: {
                background: 'blue',
                color: 'white',
                border: { color: 'none' },
              },
              hover: {
                background: 'blue',
                color: 'white',
                border: { color: 'none' },
              },
            },
            focus: {
              ring: { width: 'none' },
            },
          }"
          @click="createFormVisible = false"
          class="creative-button"
        />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import DailyTaskForm from '~/components/project/form/DailyTaskForm.vue'
import TaskSummary from '~/components/project/taskdaily/TaskSummary.vue'
import DailyTaskTable from '~/components/table/DailyTaskTable.vue'
const createFormVisible = ref(false)

const select = {
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
    background: '#222831',
    color: 'white',
    border: {
      color: 'none',
    },
    hover: {
      background: '#222831',
      color: 'white',
      border: {
        color: 'none',
      },
    },
    active: {
      background: '#222831',
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
