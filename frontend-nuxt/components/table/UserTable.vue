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
        field="name"
        header="User"
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
          <Select
            v-model="data[field]"
            :options="genders"
            optionLabel="label"
            optionValue="value"
            placeholder="Select a Gender"
            fluid
          >
            <template #option="slotProps">
              <Tag
                :value="slotProps.option.value"
                :severity="getGenderLabel(slotProps.option.value)"
              />
            </template>
          </Select>
        </template>
        <template #body="slotProps">
          <Tag
            :value="slotProps.data.gender"
            :class="getGenderLabel(slotProps.data.gender)"
            style="font-family: 'Montserrate', sans-serif"
          />
        </template>
      </Column>
      <Column
        field="role"
        header="Role"
      >
        <template #editor="{ data, field }">
          <Select
            v-model="data[field]"
            :options="roles"
            optionLabel="label"
            optionValue="value"
            placeholder="Select a Role"
            fluid
          >
            <template #option="slotProps">
              <Tag
                :value="slotProps.option.value"
                :severity="getRoleLabel(slotProps.option.value)"
              />
            </template>
          </Select>
        </template>
        <template #body="slotProps">
          <Tag
            :value="slotProps.data.role"
            :class="getRoleLabel(slotProps.data.role)"
            style="font-family: 'Montserrate', sans-serif"
          />
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

const { data } = await useFetch('https://68454a66fc51878754dafd01.mockapi.io/users')

console.log(data)

const editingRows = ref([])
const onRowEditSave = event => {
  const { newData, index } = event
  data.value[index] = newData
}

const genders = ref([
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' }, 
]);

const roles = ref([
  { label: 'Admin', value: 'Admin' },
  { label: 'Manager', value: 'Manager' },
  { label: 'Client', value: 'Client' }  
]);

const getGenderLabel = gender => {
  switch (gender) {
    case 'Male':
      return 'tag-male'

    case 'Female':
      return 'tag-female'

    default:
      return 'tag default'
  }
}

const getRoleLabel = role => {
  switch (role) {
    case 'Admin':
      return 'tag-admin'

    case 'Manager':
      return 'tag-manager'

    case 'Client':
      return 'tag-client'

    default:
      return 'tag default'
  }
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

::v-deep(.p-inputtext) {
  padding: 6px 20px;
  font-size: 14px;
}
</style>
