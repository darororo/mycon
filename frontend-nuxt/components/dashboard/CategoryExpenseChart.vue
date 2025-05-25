<template>
  <div class="p-4 rounded-md border-gray-400 border-2">
    <div class="flex flex-row justify-between items-center pb-4">
      <h2 class="text-black font-[Montserrat] font-weight-bold">{{ title }}</h2>
      <Select
        :dt="{
          background: 'none',
          color: 'black',
          focus: {
            borderColor: 'black',
          },
        }"
        placeholder="Filter"
      />
    </div>
    <Chart
      type="bar"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script setup lang="ts">
import Chart from 'primevue/chart'

import { ref, onMounted } from 'vue'

defineProps({
  title: {
    type: String,
  },
})

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

const chartData = ref()
const chartOptions = ref()

const setChartData = () => {
  const sites = ['Site A', 'Site B', 'Site C']

  return {
    labels: sites,
    backgroundColor: ['#F8BBD0', '#C5CAE9', '#FFF9C4'],

    datasets: [
      {
        label: 'Inventory',
        data: [540, 325, 702],
        borderRadius: 14,
        hoverBorderColor: ['#8FFF93'],
        hoverBorderWidth: 2,
      },
      {
        label: 'Labor',
        data: [540, 325, 702],
        borderRadius: 14,
        hoverBorderColor: ['#8FFF93'],
        hoverBorderWidth: 2,
      },
      {
        label: 'Material',
        data: [540, 325, 702],
        borderRadius: 14,
        hoverBorderColor: ['#8FFF93'],
        hoverBorderWidth: 2,
      },
    ],
  }
}

const setChartOptions = () => {
  return {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          color: 'black',
        },
      },
      title: {
        display: true,
        text: 'Site Expense',
      },
    },
  }
}
</script>
