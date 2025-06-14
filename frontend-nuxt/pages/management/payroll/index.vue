<template>
  <div>
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
.card-container {
  display: flex;
  justify-content: space-between;
  width: 100rem;
  max-width: 1500px;
  margin-bottom: 20px;
}
</style>
