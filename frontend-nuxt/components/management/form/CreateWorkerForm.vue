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
                for="username"
                class="tag"
                >Username</label
              >
              <InputText
                name="username"
                v-model="username"
                id="username"
                class="input"
                autocomplete="off"
                placeholder="Enter username"
                :dt="inputTextDt"
              />
              <Message
                v-if="$form.username?.invalid"
                severity="error"
                :dt="message"
              >
                {{ $form.username.error.message }}
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
                optionLabel="name"
                placeholder="Select gender"
                class="input"
                :dt="{
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
                }"
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
              <InputText
                name="role"
                v-model="role"
                :dt="inputTextDt"
                id="role"
                class="input"
                autocomplete="off"
                placeholder="Enter role"
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
                for="project-field"
                class="tag"
                >Project Field</label
              >
              <InputText
                name="projectName"
                v-model="projectName"
                :dt="inputTextDt"
                id="project-field"
                class="input"
                autocomplete="off"
                placeholder="Enter project name"
              />
              <Message
                v-if="$form.projectName?.invalid"
                severity="error"
                :dt="message"
              >
                {{ $form.projectName.error.message }}
              </Message>
            </div>
            <div class="small-fill">
              <label
                for="hourly-rate"
                class="tag"
                >Hourly Rate</label
              >
              <InputNumber
                name="hourlyRate"
                v-model="hourlyRate"
                placeholder="Enter hourly rate"
                class="input"
                autocomplete="off"
                id="hourly-rate"
                :dt="inputTextDt"
                inputId="currency-us"
                mode="currency"
                currency="USD"
                locale="en-US"
                fluid
              /><Message
                v-if="$form.hourlyRate?.invalid"
                severity="error"
                :dt="message"
              >
                {{ $form.hourlyRate.error.message }}
              </Message>
            </div>
            <div class="small-fill">
              <label
                for="date"
                class="tag"
                >Date</label
              >
              <DatePicker
                name="date"
                v-model="date"
                id="date"
                placeholder="Select date"
                showIcon
                iconDisplay="input"
                style="width: 100%"
                :dt="datePickerDt"
              />
              <Message
                v-if="$form.date?.invalid"
                severity="error"
                :dt="message"
              >
                {{ $form.date.error.message }}
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

<script setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import UploadImage from '~/components/project/form/UploadImage.vue'

const toast = useToast()
const username = ref('')
const role = ref('')
const gender = ref('')
const projectName = ref('')
const hourlyRate = ref('')
const date = ref('')
const createFormVisible = defineModel()

const initialValues = ref({
  username: '',
  gender: '',
  role: '',
  projectName: '',
  hourlyRate: '',
  date: '',
})

const resolver = ({ values }) => {
  const errors = {}

  if (!values.username) {
    errors.username = [{ message: 'Username is required.' }]
  } else if (values.username.length < 3) {
    errors.username = [{ message: 'Username must be at least 3 characters long.' }]
  }
  if (!values.role) {
    errors.role = [{ message: 'Role is required.' }]
  } else if (values.role.length < 3) {
    errors.role = [{ message: 'Role must be at least 3 characterers long.' }]
  }
  if (!values.gender) {
    errors.gender = [{ message: 'Gender is required.' }]
  }
  if (!values.projectName) {
    errors.projectName = [{ message: 'Project name is required.' }]
  } else if (values.projectName.length < 3) {
    errors.projectName = [{ message: 'Project name must be at least 3 characterers long.' }]
  }
  if (!values.hourlyRate) {
    errors.hourlyRate = [{ message: 'Hourly rate is required.' }]
  } else if (parseFloat(values.hourlyRate) < 100) {
    errors.hourlyRate = [{ message: 'Hourly rate must be at least $100.' }]
  }
  if (!values.date) {
    errors.date = [{ message: 'Date rate is required.' }]
  }
  return {
    errors,
  }
}

const onFormSubmit = ({ valid }) => {
  if (valid) {
    toast.add({
      severity: 'success',
      summary: 'Worker Created.',
      detail: `Successfully added user ${username.value}`,
      life: 3000,
    })
    createFormVisible.value = false
    username.value = ''
    role.value = ''
    gender.value = ''
    projectName.value = ''
    hourlyRate.value = ''
    date.value = ''
  }
}
function clearForm() {
  username.value = ''
  gender.value = ''
  role.value = ''
  projectName.value = ''
  hourlyRate.value = ''
  date.value = ''
}

const message = {
  text: {
    font: {
      size: '14px',
      weight: 400,
    },
  },
}
const genders = ref([
  { name: 'Male', code: 'M' },
  { name: 'Female', code: 'F' },
  { name: 'Other', code: 'O' },
])
const inputTextDt = {
  focus: {
    border: {
      color: 'none',
    },
  },
}
const datePickerDt = {
  header: { background: 'white', color: 'black' },
  week: { day: { color: 'black' } },
  select: {
    month: { color: 'black' },
    year: { color: 'black' },
  },
  date: {
    color: 'black',
    selected: { background: '#333', color: 'white' },
  },
  panel: { background: 'white', color: 'black' },
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
</style>
