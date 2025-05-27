<template>
  <div style="border: 1px solid #ccc; padding: 20px; border-radius: 10px">
    <h3
      style="font-weight: 600; color: black; font-size: 14px; font-family: 'Montserrat', sans-serif"
    >
      Total Expense Summary
    </h3>
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
        barThickness: 40,
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
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Montserrat',
            size: 12,
            weight: '600',
          },
          color: 'red',
        },
      },
      y: {
        ticks: {
          font: {
            family: 'Montserrat',
            size: 12,
            weight: '500',
          },
          color: 'black',
        },
      },
    },
  }
}
</script>

<style scoped>
div {
}
</style>
