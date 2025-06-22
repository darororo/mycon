<template>
  <hr style="border-color: #ccc" />
  <div class="dialog-content">
    <img
      :src="projectImage"
      class="project-image"
    />

    <div class="timeline-section">
      <label class="section-title">Project Status:</label>
      <div class="status-card">
        <BillingTimeline
          :value="status"
          class="custom-timeline"
          :dt="timelineDt"
          :pt="timelinePt"
        >
          <template #marker="slotProps">
            <div
              class="flex w-6 h-6 items-center justify-center rounded-full"
              :style="{ backgroundColor: slotProps.item.outerColor }"
            >
              <span
                class="flex w-4 h-4 items-center justify-center rounded-full"
                :style="{ backgroundColor: slotProps.item.innerColor }"
              ></span>
            </div>
          </template>
          <template #connector="slotProps">
            <span
              class="w-0.5 h-12 my-2 rounded-full"
              :class="[slotProps.item.completed ? 'bg-green-600' : 'bg-yellow-400']"
            ></span>
          </template>
          <template #content="slotProps">
            <div
              style="
                justify-content: space-between;
                font-size: 14px;
                width: 200px;
                gap: 6rem;
                align-items: center;
                display: flex;
              "
            >
              {{ slotProps.item.status }}
              <Icon
                :name="slotProps.item.icon"
                :style="{ fontSize: '20px', color: slotProps.item.iconColor }"
              />
            </div>
          </template>
        </BillingTimeline>
      </div>
    </div>
  </div>
  <div
    style="
      font-family: 'Montserrat', sans-serif;
      gap: 10px;
      flex-direction: column;
      display: flex;
      padding: 0 20px;
    "
  >
    <label style="color: black; font-weight: 600">Skyline Tower Construction</label
    ><span style="padding-bottom: 20px; color: grey; font-size: 14px">Beer Garden Danger</span>
  </div>
  <hr style="border-color: #ccc" />
  <div
    style="
      flex-direction: column;
      display: flex;
      font-family: 'Montserrat', sans-serif;
      padding: 20px 20px;
      gap: 20px;
    "
  >
    <label style="font-size: 16px; font-weight: 500"> Current Progress</label>
    <p style="color: #333; font-weight: 400; font-size: 14px">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, nobis nemo. Velit voluptate
      corrupti nobis placeat quis accusamus, quae quas reprehenderit, dolor est exercitationem.
      Placeat dignissimos vitae nam ad quidem!
    </p>
    <img
      style="border-radius: 10px"
      width="auto"
      height="auto"
      src="https://i.pinimg.com/736x/b7/69/e4/b769e416c7b78869088ef24fb1aeca2b.jpg"
    />
  </div>
  <hr style="border-color: #ccc" />

  <DataTable
    showGridlines
    :value="data"
    :pt="{
      tableContainer: {
        style: `
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            margin: 20px 18px;
            `,
      },
    }"
    :dt="datatable"
  >
    <Column
      field="leader"
      header="Project Leader"
      :pt="{
        headerCell: {
          style: 'border-top-left-radius: 10px;',
        },
      }"
    ></Column>
    <Column
      field="senior"
      header="Senior Worker"
    ></Column>
    <Column
      field="worker"
      header="Workers"
      :pt="{
        headerCell: {
          style: 'border-top-right-radius: 10px;',
        },
      }"
    ></Column>
  </DataTable>
  <hr style="border-color: #ccc" />
  <label
    style="
      color: green;
      font-size: 16px;
      font-weight: 600;
      padding: 20px 0 0 20px;
      font-family: 'Montserrat', sans-serif;
      gap: 6px;
      align-items: center;
      display: flex;
    "
    >Total Spending: <span>$400000</span></label
  >
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type BillingTimeline from '~/components/timeline/BillingTimeline.vue'

const { data } = await useFetch('http://683aca6443bb370a8673bfa5.mockapi.io/popup')

const datatable = {
  header: {
    cell: {
      padding: '10px 20px 10px 20px',
      background: '#008080',
      border: {
        color: '#ccc',
        width: '2px',
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
        color: '#CCCCCC',
      },
    },
  },
}

const timelineDt = {
  event: {
    connector: {
      color: '#ccc',
    },
  },
}

const timelinePt = {
  eventOpposite: {
    style: `
      padding: 0 !important;
      `,
  },
}

const projectImage = 'https://i.pinimg.com/736x/76/80/3d/76803d90deb83378b0ed7e9be2241870.jpg'

const status = ref([
  {
    id: 1,
    status: 'To begin',
    completed: true,
    icon: 'mdi:tick-circle',
    iconColor: 'oklch(62.7% 0.194 149.214)',
    color: 'red',
    outerColor: '#A6DFA8',
    innerColor: 'oklch(62.7% 0.194 149.214)',
  },
  {
    id: 2,
    completed: false,
    status: 'In progress',
    icon: 'mdi:tick-circle',
    iconColor: 'oklch(62.7% 0.194 149.214)',
    outerColor: '#A6DFA8',
    innerColor: 'oklch(62.7% 0.194 149.214)',
  },
  {
    id: 3,
    status: 'Finished',
    icon: 'mdi:tick-circle',
    iconColor: 'oklch(85.2% 0.199 91.936)',
    outerColor: '#FFF06D',
    innerColor: 'oklch(85.2% 0.199 91.936)',
  },
])
</script>

<style scoped>
.dialog-content {
  display: flex;
  padding: 20px;
  gap: 20px;
  align-items: center;
}

.project-image {
  width: 250px;
  height: auto;
  border: 1px solid #cccccc;
  border-radius: 12px;
}

.section-title {
  font-weight: 600;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  color: black;
}

.status-card {
  padding-top: 16px;
  background-color: white;
  font-family: 'Montserrat', sans-serif;
}

.custom-timeline {
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>
