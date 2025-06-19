<template>
  <div>
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
          Inventory
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
            label="Create Item"
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
      <InventoryTable />
    </div>

    <CreateInvenForm v-model="createFormVisible" />
  </div>
</template>

<script setup>
import InventoryTable from '~/components/inventory/table/InventoryTable.vue'
import CreateInvenForm from '~/components/inventory/form/CreateInvenForm.vue'

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
    background: '#203a43',
    color: 'white',
    border: {
      color: 'none',
    },
    hover: {
      background: '#203a43',
      color: 'white',
      border: {
        color: 'none',
      },
    },
    active: {
      background: '#203a43',
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
