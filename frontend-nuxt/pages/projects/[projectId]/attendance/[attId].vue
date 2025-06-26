<template>
  <div class="max-w-[1500px] w-full py-4">
    <h2 class="font-semibold text-[22px] text-black font-[Montserrat]">Project Name</h2>
    <hr class="my-3 border-[#ccc]" />

    <div class="flex flex-wrap gap-4 justify-between items-center my-4">
      <!-- Date Card -->
      <Card
        style="
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 280px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background: #f9f9f9;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        "
        :dt="{
          body: {
            padding: '12px 16px',
          },
        }"
      >
        <template #content>
          <div
            class="flex items-center justify-between gap-2 w-full font-[Montserrat] text-[14px] text-[#333]"
          >
            <div class="flex items-center gap-4">
              <Icon
                name="formkit:date"
                style="font-size: 20px; color: #555"
              />
              <div class="flex gap-1 relative top-[1.5px] font-normal">
                <span>Current date:</span>
                <span
                  ><strong>{{ formattedDate }}</strong></span
                >
              </div>
            </div>
          </div>
        </template>
      </Card>

      <!-- Project Select -->
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Project Name"
        :dt="select"
        :pt="{
          root: {
            style:
              'font-weight: 500; font-size: 14px; font-family: Montserrat, sans-serif; min-width: 220px;',
          },
        }"
      />
    </div>
    <div class="table-container">
      <Toast
        :dt="{
          success: {
            background: '#e6f4ea',
            detailColor: '#2e7d32',
            border: {
              color: '#a5d6a7',
              width: '1px',
              style: 'solid',
            },
            padding: '12px 16px',
            shadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
            borderRadius: '8px',
            font: {
              weight: 500,
            },
          },
          error: {
            background: '#fdecea',
            detailColor: '#b00020',
            border: {
              color: '#f44336',
              width: '1px',
              style: 'solid',
            },
            padding: '12px 16px',
            shadow: '0 4px 10px rgba(244, 67, 54, 0.3)',
            borderRadius: '8px',
            font: {
              weight: 600,
            },
          },
          warn: {
            background: '#fff4e5',
            detailColor: '#9f6000',
            border: {
              color: '#ff9800',
              width: '1px',
              style: 'solid',
            },
            padding: '12px 16px',
            shadow: '0 4px 10px rgba(255, 152, 0, 0.3)',
            borderRadius: '8px',
            font: {
              weight: 600,
            },
          },
        }"
      />
      <Form @submit="onFormSubmit">
        <div class="form-wrapper">
          <DataTable
            :value="datas"
            scrollable
            editMode="cell"
            scroll-height="720px"
            :pt="{
              table: {
                style: `
            min-width: 80rem;
          `,
              },
              tableContainer: {
                style: `
            max-height: 100vh;
            font-family: 'Montserrat', sans-serif;
            border: 1px solid #e0e0e0;
            font-size: 14px;
          `,
              },
              header: {
                style: `
            position: sticky;
            top: 0;
            color: white;
            font-weight: 600;
            padding: 12px 20px;
            z-index: 1;
          `,
              },
              column: {
                headercell: {
                  style: `
              color: white;
              padding: 12px 20px;
              font-weight: 600;
            `,
                },
                bodycell: ({ state }) => ({
                  style: `
              padding: 10px 20px;
              border-bottom: 1px solid #f0f0f0;
              transition: background-color 0.2s;
            `,
                  class: [{ '!py-0': state['d_editing'] }],
                }),
              },
              row: {
                style: `transition: background-color 0.2s;`,
              },
            }"
            :dt="tableDt"
            @cell-edit-complete="onCellEditComplete"
          >
            <Column
              header="No."
              style="width: 10%"
              :pt="{
                headerCell: {
                  style: 'border-top-left-radius: 8px; background-color: #3674B5;',
                },
              }"
            >
              <template #body="{ index }">
                {{ index + 1 }}
              </template>
            </Column>

            <Column
              v-for="col of columns"
              :key="col.field"
              :field="col.field"
              :header="col.header"
              style="width: 30%"
              :pt="{
                headerCell: {
                  style:
                    col.field === 'firstName'
                      ? 'background-color: #3A4750; color: white;'
                      : col.field === 'lastName'
                        ? 'background-color: #3A4750; color: white;'
                        : col.field === 'role'
                          ? 'background-color: #3A4750; color: white;'
                          : col.field === 'hours'
                            ? 'background-color: #3A4750; color: white;'
                            : '',
                },
              }"
            >
              <template #body="{ data, field }">
                <div style="display: flex; flex-direction: column">
                  <span v-if="!isEditableField(field)">
                    {{ data[field] }}
                  </span>

                  <InputNumber
                    v-else
                    v-model="data[field]"
                    autofocus
                    :class="{ 'p-invalid': errors[data.id]?.[field] }"
                    placeholder="Enter hours worked (max 16)"
                  />

                  <Message
                    v-if="errors[data.id]?.[field]"
                    severity="error"
                    variant="simple"
                    :dt="message"
                  >
                    {{ errors[data.id][field] }}
                  </Message>
                </div>
              </template>
            </Column>
          </DataTable>
          <div class="submit-button">
            <Button
              :dt="button"
              :pt="{
                root: {
                  style: 'font-weight: 500; font-size: 14px; font-family: Montserrat, san serif',
                },
              }"
              label="Submit"
              type="submit"
            />
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputNumber from 'primevue/inputnumber'
import Message from 'primevue/message'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import type { AttendanceDto } from '~/interfaces/attendance.interface'

const columns = ref([
  { field: 'firstName', header: 'First Name' },
  { field: 'lastName', header: 'Last Name' },
  { field: 'role', header: 'Role' },
  { field: 'hours', header: 'Hours' },
])

const route = useRoute()

const users = ref([])
const errors = ref({})
const toast = useToast()
const isEditableField = field => field === 'hours'

console.log(route.params)

const attendanceId = route.params.attId

// const { workers } = storeToRefs(useWorkerStore())
// const {attendance} = storeToRefs(useAttendenceStore())
const attendanceDto = reactive<AttendanceDto>({
  hour: 0,
  workerId: 0,
  projectId: 0,
  attendanceId: attendanceId,
})
const { hour, workerId, projectId } = toRefs(attendanceDto)
const {
  data: datas,
  error: fetchError,
  execute: fetchWorkers,
} = useFetch(`/api/projects/1/workers`, {
  method: 'GET',
})

const {
  data: dataPost,
  error: PostError,
  execute: fetchPosts,
  status,
} = useFetch(`/api/attendences/1/${attendanceId}`, {
  method: 'POST',
})

onMounted(async () => {
  await fetchWorkers()

  // workers.value = data.value
  // console.log(workers.value)
})

const onFormSubmit = async ({ valid }) => {
  if (valid) {
    await fetchPosts()

    if (status.value === 'error') {
      toast.add({
        severity: 'error',
        summary: 'Project Failed to Create',
        detail: PostError.value,
        life: 3000,
      })
    } else {
      toast.add({
        severity: 'success',
        summary: 'Creation completed successfully.',
        // detail: 'Your project has been created.',
        detail: dataPost.value,
        life: 3000,
      })

      // if (workers.value) workers.value.push(datas.value)
    }
  }
}

const onCellEditComplete = event => {
  const { data, newValue, field } = event

  if (field === 'hours') {
    const value = newValue === '' ? null : newValue

    if (value === null || value === undefined || isNaN(value)) {
      if (!errors.value[data.id]) errors.value[data.id] = {}
      errors.value[data.id][field] = 'Hours is required.'
      event.preventDefault()

      toast.add({
        severity: 'error',
        summary: 'Missing Value',
        detail: errors.value[data.id][field],
        life: 3000,
      })
    } else if (value < 0) {
      if (!errors.value[data.id]) errors.value[data.id] = {}
      errors.value[data.id][field] = 'Hours must be greater than 0.'
      event.preventDefault()

      toast.add({
        severity: 'error',
        summary: 'Invalid Input',
        detail: errors.value[data.id][field],
        life: 3000,
      })
    } else if (value > 16) {
      if (!errors.value[data.id]) errors.value[data.id] = {}
      errors.value[data.id][field] = 'Hours cannot be more than 16.'
      event.preventDefault()

      toast.add({
        severity: 'warn',
        summary: 'Validation Warning',
        detail: errors.value[data.id][field],
        life: 3000,
      })
    } else {
      // Valid input
      delete errors.value[data.id]?.[field]
      data[field] = value

      toast.add({
        severity: 'success',
        summary: 'Updated Successfully',
        detail: `Today's work hours set to ${value}`,
        life: 2000,
      })
    }
  }
}

const today = new Date()
const formattedDate = ref(
  today.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
)

const message = {
  text: {
    font: {
      Size: '14px',
      weight: 400,
    },
  },
}

const select = {
  background: 'white',
  border: {
    color: '#ccc',
    radius: '12px',
  },
  hover: {
    border: {
      color: '#ccc',
    },
  },
  focus: {
    border: {
      color: '#ccc',
    },
  },
  padding: {
    x: '18px',
    y: '10px',
  },
}

const tableDt = {
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

const button = {
  primary: {
    background: '#203a43',
    color: 'white',
    border: {
      color: 'none',
    },
    hover: {
      background: '#203a43',
      color: 'white',
      border: {
        color: 'none',
      },
    },
    active: {
      background: '#203a43',
      color: 'white',
      border: {
        color: 'none',
      },
    },
  },
  border: {
    radius: '12px',
  },
  padding: {
    x: '20px',
    y: '10px',
  },
}
</script>

<style scoped>
.p-error {
  color: red;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
.table-container {
  overflow-x: auto;
  width: 100%;
  max-width: auto;
  /* border: 1px solid #ccc; */
  border-radius: 10px 10px 0 0;
}
::v-deep(.p-inputnumber-input) {
  background-color: white;
  color: black;
  font-size: 14px;
  border: 1px solid #ccc;
}
::v-deep(.p-inputnumber-input):focus {
  border-color: #ccc;
}
.top-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
}

.card-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 6px;
}

.submit-button {
  display: flex;
  justify-content: flex-end;
  border: none;
  margin-top: 10px;
}

.form-wrapper {
  /* padding: 32px 28px 18px 28px; */
  font-family: 'Montserrat', sans-serif;
  border-radius: 20px;
  margin: 0 auto;
}
</style>
