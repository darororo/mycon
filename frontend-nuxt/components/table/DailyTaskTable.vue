<template>
  <!-- Table Card -->
  <div class="table-container card">
    <DataTable
      :value="data"
      tableStyle="min-width: 100%;"
      :dt="table"
      scrollable
      showGridlines=""
      scrollHeight="600px"
    >
      <Column
        field="id"
        header="ID"
        :pt="{}"
      ></Column>
      <Column
        field="task"
        header="Task"
      ></Column>
      <Column
        field="amount"
        header="Amount"
      ></Column>
      <Column
        field="unit"
        header="Unit"
      ></Column>
      <Column
        field="category"
        header="Category"
      ></Column>
      <Column
        field="action"
        header="Action"
      ></Column>
    </DataTable>
  </div>
</template>

<script setup>
const { data } = await useFetch('https://6817864126a599ae7c3aa650.mockapi.io/api/users')

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
</script>

<style scoped>
.card {
  font-family: 'Montserrat', sans-serif;
}

.table-container {
  overflow-x: auto;
  width: 100%;
  max-width: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.chart-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
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
