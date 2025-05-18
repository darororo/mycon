<template>
  <div class="card">
    <DataTable
      :value="inventoryData"
      showGridlines
      tableStyle="min-width: 50rem"
      :pt="{
        tableContainer: {
          style: `
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          `,
        },
      }"
      :dt="inventoryTable"
    >
      <Column
        field="itemName"
        header="Item Name"
        :pt="{
          headerCell: {
            style: 'border-top-left-radius: 10px',
          },
        }"
      ></Column>
      <Column
        field="category"
        header="Category"
      ></Column>
      <Column
        field="quantity"
        header="Quantity"
      ></Column>
      <Column
        field="unit"
        header="Unit"
      ></Column>
      <Column
        field="restockDate"
        header="Last Restock Date"
      >
      </Column>
      <Column
        field="status"
        header="Status"
      >
      </Column>
      <Column
        field="action"
        header="Action"
        :pt="{
          headerCell: {
            style: 'border-top-right-radius: 10px',
          },
        }"
      >
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const inventoryData = ref([])
const inventoryTable = {
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
    },
  },
}

onMounted(async () => {
  const response = await fetch('https://6817864126a599ae7c3aa650.mockapi.io/api/users')
  inventoryData.value = await response.json()
})
</script>

<!-- <template>
  <div class="card">
    <DataTable
      v-model:editingRows="editingRows"
      :value="products"
      editMode="row"
      dataKey="id"
      @row-edit-save="onRowEditSave"
      :pt="{
        table: { style: 'min-width: 50rem' },
        column: {
          bodycell: ({ state }) => ({
            style: state['d_editing'] && 'padding-top: 0.75rem; padding-bottom: 0.75rem',
          }),
        },
      }"
    >
      <Column
        field="code"
        header="Code"
        style="width: 20%"
      >
        <template #editor="{ data, field }">
          <InputText
            v-model="data[field]"
            fluid
          />
        </template>
      </Column>
      <Column
        field="name"
        header="Name"
        style="width: 20%"
      >
        <template #editor="{ data, field }">
          <InputText
            v-model="data[field]"
            fluid
          />
        </template>
      </Column>
      <Column
        field="inventoryStatus"
        header="Status"
        style="width: 20%"
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
            :value="slotProps.data.inventoryStatus"
            :severity="getStatusLabel(slotProps.data.inventoryStatus)"
          />
        </template>
      </Column>
      <Column
        field="price"
        header="Price"
        style="width: 20%"
      >
        <template #body="{ data, field }">
          {{ formatCurrency(data[field]) }}
        </template>
        <template #editor="{ data, field }">
          <InputNumber
            v-model="data[field]"
            mode="currency"
            currency="USD"
            locale="en-US"
            fluid
          />
        </template>
      </Column>
      <Column
        :rowEditor="true"
        style="width: 10%; min-width: 8rem"
        bodyStyle="text-align:center"
      ></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ProductService } from '@/service/ProductService'

const products = ref()
const editingRows = ref([])
const statuses = ref([
  { label: 'In Stock', value: 'INSTOCK' },
  { label: 'Low Stock', value: 'LOWSTOCK' },
  { label: 'Out of Stock', value: 'OUTOFSTOCK' },
])

onMounted(() => {
  ProductService.getProductsMini().then(data => (products.value = data))
})

const onRowEditSave = event => {
  let { newData, index } = event

  products.value[index] = newData
}
const getStatusLabel = status => {
  switch (status) {
    case 'INSTOCK':
      return 'success'

    case 'LOWSTOCK':
      return 'warn'

    case 'OUTOFSTOCK':
      return 'danger'

    default:
      return null
  }
}
const formatCurrency = value => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
}
</script> -->
