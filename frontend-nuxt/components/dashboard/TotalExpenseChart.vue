<template>
  <div class="p-4 rounded-md border-gray-400 border-2">
    <h3 class="text-black font-[Montserrat] font-semibold">Total Expense Summary</h3>
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
  const sites = ['Labour', 'Material']

  const borderW = 2
  const borderRadius = 10

  return {
    labels: sites,

    datasets: [
      {
        labels: ['Labour', 'Material'],
        data: [540, 325],
        backgroundColor: ['#51A2FF', '#A684FF'],
        borderRadius: borderRadius,
        hoverBorderColor: ['#8FFF93'],
        hoverBorderWidth: borderW,
      },
    ],
  }
}

const setChartOptions = () => {
  return {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
    },
  }
}
</script>
