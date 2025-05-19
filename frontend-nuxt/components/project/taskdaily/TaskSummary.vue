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
    <template #title>Daily Summary</template>
    <template #content>
      <div
        style="
          gap: 26px;
          justify-content: space-between;
          align-items: end;
          flex-direction: row;
          display: flex;
        "
      >
        <div class="card">
          <DataTable
            style="font-size: 14px; font-family: 'Montserrat', sans-serif"
            :value="data"
            showGridlines
            tableStyle="width: 50rem"
            :dt="table"
            :pt="{
              tableContainer: {
                style: `
                `,
              },
            }"
          >
            <Column
              field="task"
              header="Task"
              :pt="{
                headerCell: {
                  style: `
                        border-top-left-radius: 10px;
                    `,
                },
              }"
            ></Column>
            <Column
              field="totalAmount"
              header="Total Amount"
            ></Column>
            <Column
              field="unit"
              header="Unit"
            ></Column>
            <Column
              field="totalDay"
              header="Total Day"
              :pt="{
                headerCell: {
                  style: `
                        border-top-right-radius: 10px;
                    `,
                },
              }"
            ></Column>
          </DataTable>
        </div>
        <Card :dt="chartCard">
          <template #title>
            <label style="font-family: 'Montserrat', sans-serif; font-size: 16px"
              >Daily Summary Bar Graph</label
            >
          </template>
          <template #content>
            <div class="card">
              <Chart
                type="bar"
                :data="chartData"
                :options="chartOptions"
                :pt="{
                  root: {
                    style: `
                    height: auto;
                    width: 38rem;
                    `,
                  },
                }"
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
  background: '#F4F4F4',
  color: '#333',
  body: {
    padding: '30px',
    border: {
      color: 'red',
      width: '2px',
    },
    width: '10px',
  },
}
const chartCard = {
  body: {
    padding: '20px 24px',
  },
}
const table = {
  header: {
    cell: {
      background: '#008080',
      padding: '10px 20px 10px 20px',
      border: {
        color: '#ccc',
        width: '1px',
      },
    },
  },
  row: {
    background: 'white',
    color: 'black',
  },
  body: {
    cell: {
      border: {
        color: '#ccc',
      },
    },
  },
}
onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})
const chartData = ref()
const chartOptions = ref()

const setChartData = () => {
  return {
    labels: ['Concrete Injection', 'Dishwasher', 'Toilet Cleaner'],
    datasets: [
      {
        label: 'Sales',
        data: [540, 325, 702, 620],
        backgroundColor: ['red', 'green', 'blue'],
        borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)'],
        borderWidth: 1,
      },
    ],
  }
}
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color')
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color')

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
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  }
}
</script>

<style scoped>
::v-deep(.p-card-title) {
  padding-bottom: 10px !important;
}
</style>
