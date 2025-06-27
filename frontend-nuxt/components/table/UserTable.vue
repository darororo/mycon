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
        field="username"
        header="Username"
      >
        <template #editor="{ data, field }">
          <InputText
            v-model="data[field]"
            fluid
          />
        </template>
      </Column>
      <Column
        field="firstName"
        header="First Name"
      >
        <template #editor="{ data, field }">
          <InputText
            v-model="data[field]"
            fluid
          />
        </template>
      </Column>
      <Column
        field="lastName"
        header="Last Name"
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
            :value="capitalizeFirstLetter(slotProps.data.gender)"
            :class="getGenderLabel(slotProps.data.gender)"
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
                :class="getRoleLabel(slotProps.option.value)"
              />
            </template>
          </Select>
        </template>
        <template #body="slotProps">
          <Tag
            :value="capitalizeFirstLetter(slotProps.data.role)"
            :class="getRoleLabel(slotProps.data.role)"
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
const { users } = storeToRefs(useUserStore())
const { data, error, execute } = useFetch('/api/users', {
  method: 'GET',
})

onMounted(async () => {
  await execute()

  users.value = data.value
  console.log(users.value)
})

console.log(data)

const editingRows = ref([])
const onRowEditSave = event => {
  const { newData, index } = event
  data.value[index] = newData
}

const genders = ref([
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
])

const roles = ref([
  { label: 'Owner', value: 'Owner' },
  { label: 'Manager', value: 'Manager' },
  { label: 'Client', value: 'Client' },
])

const getGenderLabel = gender => {
  switch (gender) {
    case 'male':
      return 'tag-male'

    case 'female':
      return 'tag-female'

    default:
      return 'tag default'
  }
}

const getRoleLabel = role => {
  let r = role.toLowerCase()

  switch (r) {
    case 'owner':
      return 'tag-Owner'
    case 'manager':
      return 'tag-manager'
    case 'client':
      return 'tag-client'
    default:
      return 'tag default'
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
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

.tag-Owner {
  background-color: rgb(255, 225, 225);
  color: red;
}

.tag-manager {
  background-color: rgb(225, 225, 255);
  color: blue;
}

/* ::v-deep(.p-tag) {
  background-color: #c8e6c9;
  color: #388e3c;
  font-size: 14px;
  font-weight: 500;
} */
</style>
