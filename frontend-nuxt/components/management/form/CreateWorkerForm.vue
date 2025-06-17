<template>
  <div>
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
      }"
    />
    <Dialog
      v-model:visible="createFormVisible"
      :style="{ width: '800px', height: '600px' }"
      :pt="{
        content: {
          style: `
                    padding :0;
                `,
        },
        header: {
          style: 'border-bottom: 1px solid #ccc;',
        },
      }"
      :dt="{
        background: 'white',
        color: 'black',
        header: {
          padding: '30px',
        },
        border: {
          radius: '20px',
        },
      }"
      modal
      header="Create Worker"
      @hide="clearForm"
    >
      <Form
        v-slot="$form"
        @submit="onFormSubmit"
        :initialValues="initialValues"
        :resolver="resolver"
        :validateOnValueUpdate="false"
        :validateOnBlur="true"
        :validateOnMount="[]"
      >
        <div class="form-wrapper">
          <div class="small-container">
            <div class="small-fill">
              <label
                for="firstName"
                class="tag"
                >First Name</label
              >
              <InputText
                name="firstName"
                v-model="firstName"
                id="firstName"
                class="input"
                autocomplete="off"
                placeholder="Enter First Name"
                :dt="inputTextDt"
              />
              <Message
                v-if="$form.firstName?.invalid"
                severity="error"
                :dt="message"
              >
                {{ $form.firstName.error.message }}
              </Message>
            </div>
            <div class="small-fill">
              <label
                for="lastName"
                class="tag"
                >Last Name</label
              >
              <InputText
                name="lastName"
                v-model="lastName"
                id="lastName"
                class="input"
                autocomplete="off"
                placeholder="Enter Last Last"
                :dt="inputTextDt"
              />
              <Message
                v-if="$form.lastName?.invalid"
                severity="error"
                :dt="message"
              >
                {{ $form.lastName.error.message }}
              </Message>
            </div>
            <div class="small-fill">
              <label
                for="gender"
                class="tag"
                >Gender</label
              >
              <Select
                name="gender"
                v-model="gender"
                autocomplete="off"
                :options="genders"
                placeholder="Select gender"
                class="input select"
                :dt="selectDt"
              />
              <Message
                v-if="$form.gender?.invalid"
                severity="error"
                :dt="{
                  text: {
                    font: {
                      size: '14px',
                      weight: 400,
                    },
                  },
                }"
              >
                {{ $form.gender.error.message }}
              </Message>
            </div>
            <div class="small-fill">
              <label
                for="role"
                class="tag"
                >Role</label
              >
              <Select
                name="role"
                v-model="role"
                autocomplete="off"
                :options="roles"
                placeholder="Select role"
                class="input select"
                :dt="selectDt"
              />
              <Message
                v-if="$form.role?.invalid"
                severity="error"
                :dt="message"
              >
                {{ $form.role.error.message }}
              </Message>
            </div>
            <div class="small-fill">
              <label
                for="daily-rate"
                class="tag"
                >Daily Rate</label
              >
              <InputNumber
                name="dailyRate"
                v-model="dailyRate"
                placeholder="Enter daily rate"
                class="input"
                autocomplete="off"
                id="daily-rate"
                :dt="inputTextDt"
                inputId="currency-us"
                mode="currency"
                currency="USD"
                locale="en-US"
                fluid
              /><Message
                v-if="$form.dailyRate?.invalid"
                severity="error"
                :dt="message"
              >
                {{ $form.dailyRate.error.message }}
              </Message>
            </div>
          </div>

          <div style="margin-top: 24px">
            <UploadImage />
          </div>
        </div>
        <div class="button">
          <Button
            type="submit"
            label="Confirm"
            class="creative-button"
            :dt="{
              primary: {
                background: 'red',
                border: { color: 'none' },
                active: {
                  background: 'blue',
                  color: 'white',
                  border: { color: 'none' },
                },
                hover: {
                  background: 'blue',
                  color: 'white',
                  border: { color: 'none' },
                },
              },
              focus: {
                ring: { width: 'none' },
              },
            }"
          />
        </div>
      </Form>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import UploadImage from '~/components/project/form/UploadImage.vue'
import type { WorkerDto } from '~/interfaces/worker.interface'

const toast = useToast()
const createFormVisible = defineModel()

const roles = ref(['Normal', 'Senior'])
const genders = ref(['Male', 'Female'])

const initialValues = ref({
  firstName: '',
  lastName: '',
  gender: '',
  role: '',
  dailyRate: 0,
})

const resolver = ({ values }) => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = [{ message: 'First name is required.' }]
  } else if (values.firstName.length < 3) {
    errors.firstName = [{ message: 'First name must be at least 3 characters long.' }]
  }
  if (!values.lastName) {
    errors.lastName = [{ message: 'Last name is required.' }]
  } else if (values.lastName.length < 3) {
    errors.lastName = [{ message: 'Last name must be at least 3 characters long.' }]
  }
  if (!values.role) {
    errors.role = [{ message: 'Role is required.' }]
  } else if (values.role.length < 3) {
    errors.role = [{ message: 'Role must be at least 3 characterers long.' }]
  }
  if (!values.gender) {
    errors.gender = [{ message: 'Gender is required.' }]
  }
  if (!values.dailyRate) {
    errors.dailyRate = [{ message: 'Hourly rate is required.' }]
  } else if (parseFloat(values.dailyRate) < 100) {
    errors.dailyRate = [{ message: 'Hourly rate must be at least $100.' }]
  }
  return {
    errors,
  }
}

const workerDto = reactive<WorkerDto>({
  firstName: '',
  lastName: '',
  gender: '',
  dailyRate: 0,
  role: '',
})

const { firstName, lastName, gender, dailyRate, role } = toRefs(workerDto)
const { execute, clear, data, error, status } = useFetch('/api/workers', {
  method: 'POST',
  body: workerDto,
  immediate: false,
  watch: false,
})

const { workers } = storeToRefs(useWorkerStore())

const onFormSubmit = async ({ valid }) => {
  if (valid) {
    await execute()

    if (status.value === 'error') {
      toast.add({
        severity: 'error',
        summary: 'Project Failed to Create',
        detail: error.value,
        life: 3000,
      })
    } else {
      toast.add({
        severity: 'success',
        summary: 'Creation completed successfully.',
        // detail: 'Your project has been created.',
        detail: data.value,
        life: 3000,
      })

      if (data.value) workers.value.push(data.value)
    }

    createFormVisible.value = false
    clear()
    clearForm()
  }
}

function clearForm() {
  firstName.value = ''
  lastName.value = ''
  gender.value = ''
  role.value = ''
  dailyRate.value = 0
}

const message = {
  text: {
    font: {
      size: '14px',
      weight: 400,
    },
  },
}

const inputTextDt = {
  focus: {
    border: {
      color: 'none',
    },
  },
}
// const datePickerDt = {
//   header: { background: 'white', color: 'black' },
//   week: { day: { color: 'black' } },
//   select: {
//     month: { color: 'black' },
//     year: { color: 'black' },
//   },
//   date: {
//     color: 'black',
//     selected: { background: '#333', color: 'white' },
//   },
//   panel: { background: 'white', color: 'black' },
// }

const selectDt = {
  overlay: {
    background: 'white',
    border: {
      color: '#ccc',
    },
  },
  focus: {
    border: {
      color: '#ccc',
    },
  },
  hover: {
    border: {
      color: '#ccc',
    },
  },
  border: {
    color: '#ccc',
  },
  color: 'black',
  option: {
    background: 'white',
    color: 'black',
    selected: {
      focus: {
        background: '#ccc',
        color: 'white',
      },
      background: '#ccc',
    },
    focus: {
      background: 'none',
      color: 'black',
    },
  },
}
</script>

<style scoped>
::v-deep(.p-inputtext) {
  background-color: white;
  color: black;
  font-size: 15px;
  padding: 10px;
  border-color: #ccc;
}

::v-deep(.p-inputtext):focus,
::v-deep(.p-inputtext):hover {
  border-color: #ccc;
}

.button {
  display: flex;
  justify-content: center;
  margin: 10px 0 20px 0;
}
.creative-button {
  font-size: 16px;
  font-weight: 500;
  color: white;
  border-radius: 6px;
  width: 50%;
  max-width: 700px;
  background-color: #007bff;
  transition: background-color 0.2s ease;
  cursor: pointer;
}

.form-wrapper {
  padding: 30px;
  padding-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 20px;
}

.small-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between;
}

.small-fill,
.big-fill {
  display: flex;
  flex-direction: column;
  flex: 1 1 30%;
}

.input,
.input-big {
  border-radius: 8px;
  transition: 0.3s ease;
  background-color: white;
  font-size: 15px;
}

.tag {
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 14px;
  color: #333;
}

.select {
  display: flex;
  align-items: center;
  height: 44px;
}
</style>
