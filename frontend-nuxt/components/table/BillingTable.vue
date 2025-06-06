<template>
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
      scroll-height="700px"
      v-model:editingRows="editingRows"
      editMode="row"
      data-key="id"
      @row-edit-save="onRowEditSave"
      @row-click="e => handleRowClick(e)"
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

<script setup lang="ts">
import type { DataTableRowClickEvent, DataTableRowEditSaveEvent } from 'primevue'

const emit = defineEmits(['open-project-dialog'])

const { data } = await useFetch('https://6817864126a599ae7c3aa650.mockapi.io/api/api_dashboard_ip')

console.log(data)

const editingRows = ref([])
const onRowEditSave = (event: DataTableRowEditSaveEvent) => {
  const { newData, index } = event
  data.value[index] = newData
}

const handleRowClick = function (event: DataTableRowClickEvent) {
  emit('open-project-dialog')
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

.table-container {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 #f0f0f0;
}

::v-deep(.p-inputtext) {
  padding: 6px 20px;
  font-size: 14px;
}
</style>
