<template>
  <div class="table-container card">
    <DataTable
      :value="data"
      tableStyle="min-width: 50rem"
      scrollable
      show-gridlines=""
      scroll-height="660px"
      v-model:editingRows="editingRows"
      editMode="row"
      data-key="id"
      :dt="billingTable"
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
      @row-edit-save="onRowEditSave"
    >
      <Column
        field="itemName"
        header="Client Name"
        :pt="{
          headerCell: {
            style: 'border-top-left-radius: 10px',
          },
        }"
      >
        <template #editor="{ data, field }"
          ><InputText
            v-model="data[field]"
            fluid=""
          />
        </template>
      </Column>
      <Column
        field="category"
        header="Amount Due"
      >
        <template #editor="{ data, field }">
          <InputText
            v-model="data[field]"
            fluid
          />
        </template>
      </Column>
      <Column
        field="quantity"
        header="Due Date"
      >
        <template #editor="{ data, field }">
          <InputNumber
            v-model="data[field]"
            fluid
          />
        </template>
      </Column>
      <Column
        field="status"
        header="Status"
        style="width: 14%"
      >
        <template #editor="{ data, field }">
          <Select
            v-model="data[field]"
            :options="statuses"
            optionLabel="label"
            optionValue="value"
            placeholder="Select a Status"
            fluid
          >
            <template #option="slotProps">
              <Tag
                :value="slotProps.option.value"
                :severity="getStatusLabel(slotProps.option.value)"
              />
            </template>
          </Select>
        </template>
        <template #body="slotProps">
          <Tag
            :value="slotProps.data.status"
            :class="getStatusLabel(slotProps.data.status)"
            style="font-family: 'Montserrate', sans-serif"
          />
        </template>
      </Column>
      <!-- <Column
        header="Download"
        style="width: 10%; min-width: 8rem"
        body-style="text-align:center"
      >
        <template #editor="{ data }">
          <Button
            style="padding: 6px 20px; font-size: 12px; color: black"
            label="Download"
            @click="downloadFile(data.recept)"
            fluid
          />
        </template>
      </Column> -->
      <Column
        header="Receipt"
        style="width: 10%; min-width: 8rem"
        bodyStyle="text-align:center"
      >
        <template #body="{ data }">
          <Button
            style="
              border: 1px solid grey;
              background-color: transparent;
              padding: 6px 20px;
              font-size: 12px;
              color: black;
            "
            label="Download"
            @click="downloadFile(data.recept)"
          />
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
import { ref } from 'vue'

const { data } = await useFetch('https://6817864126a599ae7c3aa650.mockapi.io/api/users')

const editingRows = ref([])
const onRowEditSave = event => {
  const { newData, index } = event
  data.value[index] = newData
}

const statuses = ref([
  { label: 'In Stock', value: 'INSTOCK' },
  { label: 'Low Stock', value: 'LOWSTOCK' },
  { label: 'Out of Stock', value: 'OUTOFSTOCK' },
])

const billingTable = {
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
    font: 'Montserrate',
  },
  body: {
    cell: {
      border: {
        color: '#ccc',
      },
      padding: '4px 20px',
    },
  },
}

const getStatusLabel = status => {
  switch (status) {
    case 'INSTOCK':
      return 'tag-instock'

    case 'LOWSTOCK':
      return 'tag-lowstock'

    case 'OUTOFSTOCK':
      return 'tag-outofstock'

    default:
      return 'tag default'
  }
}
// set defualt stock
data.value = data.value.map(item => ({
  ...item,
  status: item.status || 'INSTOCK',
}))

// download static field (just test)
function downloadFile(fileUrl) {
  if (!fileUrl) return
  const link = document.createElement('a')
  link.href = fileUrl
  link.setAttribute('download', '') // use filename from URL
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<style scoped>
.table-container {
  overflow-x: auto;
  width: 100%;
  max-width: auto;
  border: 1px solid #ccc;
  border-radius: 10px 10px 0 0;
}

.tag-instock {
  background-color: #c8e6c9;
  color: #388e3c;
}
.tag-lowstock {
  background-color: #fff59d;
  color: #f9a825;
}
.tag-outofstock {
  background-color: #ffcdd2;
  color: #d32f2f;
}
.tag-default {
  background-color: #f5f5f5;
  color: #616161;
}
::v-deep(.p-inputtext) {
  padding: 6px 20px;
  font-size: 14px;
}
::v-deep(.p-select-label) {
  padding: 6px 20px;
  font-size: 14px;
}

/* customize  scrollbar */

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
