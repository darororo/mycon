<template>
  <div class="table-container card">
    <DataTable
      :value="inventory"
      tableStyle="min-width: 50rem"
      scrollable
      show-gridlines=""
      scroll-height="720px"
      v-model:editingRows="editingRows"
      editMode="row"
      data-key="id"
      :dt="inventoryTable"
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
        field="name"
        header="Item Name"
        :pt="{
          headerCell: {
            style: 'border-top-left-radius: 10px;',
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
        header="Category"
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
        header="Quantity"
      >
        <template #editor="{ data, field }">
          <InputNumber
            v-model="data[field]"
            fluid
          />
        </template>
      </Column>
      <Column
        field="unit"
        header="Unit"
      >
        <template #editor="{ data, field }">
          <InputText
            v-model="data[field]"
            fluid
          /> </template
      ></Column>
      <!-- <Column
        field="restockDate"
        header="Last Restock Date"
      >
        <template #editor="{ data, field }">
          <Calendar
            :modelValue="data[field]"
            @update:modelValue="val => (data[field] = formatDate(val))"
            dateFormat="yy-mm-dd"
            showIcon
          />
        </template>
      </Column> -->
      <Column
        field="quantity"
        header="Status"
        style="width: 14%"
      >
        <template #body="slotProps">
          <Tag
            :value="getStatus(slotProps.data.quantity)"
            :class="getStatusLabel(slotProps.data.quantity)"
            style="font-family: 'Montserrate', sans-serif"
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

<script setup lang="ts">
import { ref } from 'vue'

const { inventory } = storeToRefs(useInventoryStore())
const { data, error, execute } = useFetch('/api/inventory', {
  method: 'GET',
})

onMounted(async () => {
  await execute()

  inventory.value = data.value
  console.log(inventory.value)
})

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

const inventoryTable = {
  header: {
    cell: {
      padding: '10px 20px 10px 20px',
      background: '#008080',
      border: {
        color: '#ccc',
        width: '2px',
      },
      color: 'white',
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

const getStatus = (quantity: number) => {
  if (quantity <= 0) {
    return 'OUT OF STOCK'
  } else if (quantity < 10) {
    return 'LOW STOCK'
  } else {
    return 'IN STOCK'
  }
}

const getStatusLabel = (quantity: number) => {
  if (quantity <= 0) {
    return 'tag-outofstock'
  } else if (quantity < 10) {
    return 'tag-lowstock'
  } else {
    return 'tag-instock'
  }
}
// set defualt stock
// data.value = data.value.map(item => ({
//   ...item,
//   status: item.status || 'INSTOCK',
// }))

// date format
function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}/${month}/${day}`
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
</style>
