<template>
  <Card
    :pt="{
      root: {
        style: `
          width: 100%;
          height: auto;
        `,
      },
    }"
    :dt="card"
  >
    <template #title>
      <label style="font-size: 20px; font-weight: bold">Daily Summary</label>
    </template>
    <template #content>
      <div class="summary-wrapper">
        <div class="table-container card">
          <DataTable
            :value="data"
            table-style="min-width: 100%;"
            :dt="table"
            scrollable
            scroll-height="394px"
          >
            <Column
              field="task"
              header="Task"
            />
            <Column
              field="amount"
              header="Total Amount"
            />
            <Column
              field="unit"
              header="Unit"
            />
            <Column
              field="totalday"
              header="Total Day"
            />
          </DataTable>
        </div>

        <Card :dt="chartCard">
          <template #title>
            <label class="chart-title">Daily Summary Bar Graph</label>
          </template>
          <template #content>
            <div
              class="card"
              style="height: auto; width: 600px; max-width: 600px"
            >
              <Chart
                type="bar"
                :data="chartData"
                :options="chartOptions"
                style="width: auto; height: 300px; max-height: 300px"
              />
            </div>
          </template>
        </Card>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const { data } = await useFetch('https://6817864126a599ae7c3aa650.mockapi.io/api/api_dashboard_ip')

const card = {
  background: 'white',
  color: '#333',
  body: {
    padding: '14px 20px',
  },
  root: {
    style: 'border-radius: 12px; border: 1px solid #ccc',
  },
}

const chartCard = {
  body: {
    padding: '24px',
  },
  root: {
    style: 'border-radius: 10px; border: 1px solid #ccc;',
  },
}

const table = {
  header: {
    cell: {
      background: '#222831',
      color: 'white',
      fontWeight: '600',
      padding: '10px 20px',
      border: {
        color: '#ccc',
        width: '1px',
      },
    },
  },
  row: {
    background: '#fff',
    color: '#111',
  },
  body: {
    cell: {
      border: {
        color: '#e0e0e0',
      },
      padding: '12px 16px',
    },
  },
}

const chartData = ref()
const chartOptions = ref()

const setChartData = () => ({
  labels: ['Concrete Injection', 'Dishwasher', 'Toilet Cleaner', 'Blue Box', 'Washing Glass'],
  datasets: [
    {
      label: 'Sales',
      data: [540, 325, 702, 423, 534],
      backgroundColor: ['#f97316', '#06b6d4', '#6b7280', 'green', 'red'],
      borderRadius: 10,
      barThickness: 60,
    },
  ],
})

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color')

  return {
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: textColorSecondary,
        },
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeOutQuart',
    },
  }
}

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})
</script>

<style scoped>
.summary-wrapper {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: flex-start;
}

.card {
  font-family: 'Montserrat', sans-serif;
}

.table-container {
  overflow-x: auto;
  width: 100%;
  max-width: 50rem;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.chart-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
}

::v-deep(.p-card-title) {
  padding-bottom: 10px !important;
  font-size: 18px;
  font-weight: 600;
}

::v-deep(.p-datatable-thead > tr > th) {
  background-color: #008080 !important;
  color: white !important;
  font-weight: 600;
  text-align: left;
  padding: 12px 16px;
}

::v-deep(.p-datatable-tbody > tr:nth-child(even)) {
  background-color: #f9f9f9;
}

::v-deep(.p-datatable-tbody > tr:hover) {
  background-color: #f1f5f9;
  cursor: pointer;
}

::v-deep(.p-datatable-tbody > tr > td) {
  font-size: 14px;
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
}
</style>
