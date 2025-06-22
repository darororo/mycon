<template>
  <!-- Table Card -->
  <div class="table-container card">
    <DataTable
      :value="workers"
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
      show-gridlines
      scroll-height="600px"
      v-model:editingRows="editingRows"
      editMode="row"
      data-key="id"
      @row-edit-save="onRowEditSave"
    >
      <Column
        field="id"
        header="ID"
      />

      <Column
        field="profile"
        header="Profile"
      >
        <template #body="slotProps">
          <NuxtImg
            :src="slotProps.data.profile || '/assets/default-worker.png'"
            :custom="true"
            alt="Profile"
            style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover"
            v-slot="{ isLoaded, src, imgAttrs }"
          >
            <img
              v-if="isLoaded"
              :src="src"
            />
            <img
              v-else
              height="30"
              width="30"
              src="/static/assets/default-worker.png"
            />
          </NuxtImg>
        </template>

        <template #editor="{ data, field }">
          <InputText
            v-model="data[field]"
            placeholder="Image URL"
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
            :value="slotProps.data.gender"
            :class="getGenderLabel(slotProps.data.gender)"
            style="font-family: 'Montserrat', sans-serif"
          />
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
          <MultiSelect
            v-model="data[field]"
            display="chip"
            :options="projects"
            optionLabel="name"
            optionValue="code"
            filter
            placeholder="Select projects"
            :maxSelectedLabels="3"
            class="w-full md:w-50"
          />
        </template>
        <template #body="slotProps">
          <div class="flex flex-wrap gap-2">
            <Tag
              v-for="code in slotProps.data.project"
              :key="code"
              :value="getCityName(code)"
            />
          </div>
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
const { workers } = storeToRefs(useWorkerStore())
const { data, error, execute } = useFetch('/api/workers', {
  method: 'GET',
})

onMounted(async () => {
  await execute()

  workers.value = data.value
  console.log(workers.value)
})

const editingRows = ref([])

const projects = ref([
  { name: 'Skyline Heaven', code: 'SH' },
  { name: 'Glasses Blue', code: 'GB' },
  { name: 'Orange Sweet', code: 'OS' },
  { name: 'Modern Dream', code: 'MD' },
])

const genders = ref([
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
])

const getGenderLabel = gender => {
  switch (gender) {
    case 'Male':
      return 'tag-male'
    case 'Female':
      return 'tag-female'
    default:
      return 'tag-default'
  }
}

const getCityName = code => {
  const city = projects.value.find(c => c.code === code)
  return city ? city.name : code
}

const onRowEditSave = event => {
  const { newData, index } = event
  data.value[index] = newData
}

// 🛠 Normalize "project" field so it's always an array
// data.value = data.value.map(item => {
//   return {
//     ...item,
//     project: Array.isArray(item.project)
//       ? item.project
//       : typeof item.project === 'string' && item.project.includes(',')
//         ? item.project.split(',').map(p => p.trim())
//         : item.project
//           ? [item.project]
//           : [],
//   }
// })

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

::v-deep(.p-tag) {
  background-color: #c8e6c9;
  color: #388e3c;
  font-weight: 500;
}
</style>
