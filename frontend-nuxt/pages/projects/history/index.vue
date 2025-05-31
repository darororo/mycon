<template>
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
        Project History
      </h2>
      <div style="flex-direction: row; gap: 10px; display: flex">
        <Select
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="Filter Project"
          :dt="select"
          :pt="{
            root: {
              style: 'font-weight: 500; font-size: 14px; font-family: Montserrat, san serif',
            },
          }"
        />
      </div>
    </div>
    <hr style="margin: 12px 0; border-color: #ccc" />
    <div style="display: flex; justify-content: center">
      <ScrollPanel style="width: auto; height: 100rem; margin-top: 10px; max-height: 68rem">
        <div style="display: flex; flex-direction: column; gap: 24px">
          <ProjectCardHistory
            v-for="item in projects"
            :key="item.id"
            :item="item"
          />
        </div>
      </ScrollPanel>
    </div>
  </div>
</template>

<script setup>
import ProjectCardHistory from '~/components/project/ProjectCardHistory.vue'

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
const projects = [
  {
    id: 1,
    imageUrl: 'https://i.pinimg.com/736x/8e/47/cc/8e47cc42c2a8d161ee60fd98d289e510.jpg',
    topic: 'Willow Nest',
    date: '03/04/2025',
    content:
      'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    location: 'Phnom Penh City',
    status: 'FINISHED',
  },
  {
    id: 2,
    imageUrl: 'https://i.pinimg.com/736x/61/c1/7d/61c17d8c707b4f1e8f4bfebb9e1ab99c.jpg',
    topic: 'Oak & Stone',
    date: '03/04/2025',
    content:
      'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    location: 'Phnom Penh City',
    status: 'IN PROGRESS',
  },
  {
    id: 3,
    imageUrl: 'https://i.pinimg.com/736x/72/22/34/722234e45be7054b551483114221c832.jpg',
    topic: 'Cloud Nine',
    date: '03/04/2025',
    content:
      'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    location: 'Phnom Penh City',
    status: 'PENDING',
  },
  {
    id: 4,
    imageUrl: 'https://i.pinimg.com/736x/f7/e6/fa/f7e6fa66d2a50f36f8c45cc0d0104136.jpg',
    topic: 'Echo Ridge',
    date: '03/04/2025',
    content:
      'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    location: 'Phnom Penh City',
    status: 'NEGOTIATION',
  },
  {
    id: 5,
    imageUrl: 'https://i.pinimg.com/736x/55/1d/4d/551d4d4a39092b8719432436c9b81ad5.jpg',
    topic: 'The Cube',
    date: '03/04/2025',
    content:
      'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    location: 'Phnom Penh City',
    status: 'FINISHED',
  },
  {
    id: 5,
    imageUrl: 'https://i.pinimg.com/736x/40/53/13/405313fc06d26e7efbe0912cac1a714e.jpg',
    topic: 'The Lumina',
    date: '03/04/2025',
    content:
      'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    location: 'Phnom Penh City',
    status: 'CANCELLED',
  },
]
</script>
