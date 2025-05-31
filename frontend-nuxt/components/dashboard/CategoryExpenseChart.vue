<template>
  <div style="margin-bottom: 10px; border-radius: 10px; padding: 10px 20px; border: 1px solid #ccc">
    <div class="flex flex-row justify-between items-center pb-2">
      <h2
        style="
          color: black;
          font-weight: 600;
          font-size: 16px;
          font-family: 'Montserrat', sans-serif;
        "
        class="font-[Montserrat]"
      >
        {{ title }}
      </h2>
      <Select
        :pt="{
          root: {
            style: 'font-family: Montserrat, sans-serif; font-size: 12px',
          },
        }"
        :dt="{
          background: 'none',
          focus: {
            borderColor: '#ccc',
          },
          border: {
            color: '#ccc',
            radius: '100px',
          },
          hover: {
            border: {
              color: '#ccc',
            },
          },
          padding: {
            y: '6px',
            x: '14px',
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
        font: {
          family: 'Montserrat',
          size: 12,
          weight: '600',
        },
        color: 'grey',
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Montserrat',
            size: 12,
            weight: '500',
          },
          color: 'grey',
        },
      },
      y: {
        ticks: {
          font: {
            family: 'Montserrat',
            size: 12,
            weight: '500',
          },
          color: 'grey',
        },
      },
    },
  }
}
</script>
