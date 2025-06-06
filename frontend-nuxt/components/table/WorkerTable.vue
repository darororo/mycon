<template>
  <!-- Table Card -->
  <div class="table-container card">
    <DataTable
      :value="data"
      table-style="min-width: 100%;"
      :dt="table"
      :pt="{
        tableContainer: {
          style: `
          max-height: 100vh;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          `,
        },
      }"
      scrollable
      show-gridlines=""
      scroll-height="600px"
      v-model:editingRows="editingRows"
      editMode="row"
      data-key="id"
      @row-edit-save="onRowEditSave"
    >
      <Column
        field="id"
        header="ID"
        :pt="{}"
      />

      <Column
        field="worker"
        header="Worker"
      >
        <template #editor="{ data, field }">
          <InputText
            v-model="data[field]"
            fluid
          />
        </template>
      </Column>
      <Column
        field="gender"
        header="Gender"
      >
        <template #editor="{ data, field }">
          <InputNumber v-model="data[field]" />
        </template>
      </Column>
      <Column
        field="role"
        header="Role"
      >
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
        </template>
      </Column>
      <Column
        field="project"
        header="Project"
      >
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" />
        </template>
      </Column>
      <Column
        header="Action"
        :rowEditor="true"
        style="width: 10%; min-width: 8rem"
        bodyStyle="text-align:center"
      ></Column>
    </DataTable>
  </div>
</template>

<script setup>
const { data } = await useFetch('https://6817864126a599ae7c3aa650.mockapi.io/api/api_dashboard_ip')

console.log(data)

const editingRows = ref([])
const onRowEditSave = event => {
  const { newData, index } = event
  data.value[index] = newData
}

const table = {
  header: {
    cell: {
      background: '#008080',
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
      padding: '4px 20px',
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
  border: 1px solid #ccc;
  border-radius: 10px;
}

.chart-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
}

::v-deep(.p-inputtext) {
  padding: 6px 20px;
  font-size: 14px;
}
</style>
