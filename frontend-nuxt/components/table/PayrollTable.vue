<template>
  <div class="table-container">
    <DataTable
      style="
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        width: auto;
        max-width: 1500px;
        overflow-x: hidden;
        border-radius: 10px;
        border: 1px solid #ccc;
      "
      :value="people"
      :dt="myTable"
      scrollable
      scrollHeight="800px"
    >
      <Column
        v-for="item in myColumns"
        :key="item.field"
        :field="item.field"
        :header="item.header"
        :frozen="item.frozen"
        :pt="{
          bodyCell: {
            style: 'background-color: white;',
          },
        }"
        style="padding: 0 10px 0 20px"
      >
      </Column>

      <Column
        v-for="i in 30"
        :key="i"
        field="day1"
        :header="`Day ${i}`"
        :pt="{
          headerCell: {
            style: `
            background-color: orange;
            margin: 20px;
            `,
          },
          bodyCell: {
            style: `background-color: white`,
          },
        }"
      >
      </Column>

      <Column
        field="rate"
        header="TOTAL"
        frozen
        alignFrozen="right"
        :pt="{
          bodyCell: {
            style: 'background-color: white',
          },
        }"
        style="padding: 0 20px"
      >
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
const { data: people } = await useFetch('https://6817396926a599ae7c39aeae.mockapi.io/users')
const myTable = ref({
  body: {
    cell: {
      border: {
        color: '#ccc',
      },
    },
  },
  header: {
    cell: {
      background: '#222831',
      border: {
        color: '#ccc',
      },
      padding: '10px',
    },
  },
  row: {
    color: 'black',
  },
  column: {
    title: {
      font: {
        weight: '500',
      },
    },
  },
})

const myColumns = ref([
  { field: 'id', header: 'Name', frozen: true },
  { field: 'firstName', header: 'Name', frozen: true },
  { field: 'position', header: 'Role', frozen: true },
  { field: 'rate', header: 'Rate', frozen: true },
])
</script>

<style scoped>
::v-deep(.p-datatable-column-title) {
  width: 90px;
}

.table-container::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.table-container::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 8px;
}

.table-container::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 8px;
  border: 2px solid #f0f0f0;
}

.table-container::-webkit-scrollbar-thumb:hover {
  background-color: #94a3b8;
}

.table-container {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 #f0f0f0;
}
</style>
