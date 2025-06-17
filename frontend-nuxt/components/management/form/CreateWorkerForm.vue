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
                for="firstname"
                class="tag"
                >First Name</label
              >
              <InputText
                name="firstname"
                v-model="firstname"
                id="firstname"
                class="input"
                autocomplete="off"
                placeholder="Enter First Name"
                :dt="inputTextDt"
              />
              <Message
                v-if="$form.firstname?.invalid"
                severity="error"
                :dt="message"
              >
                {{ $form.firstname.error.message }}
              </Message>
            </div>
            <div class="small-fill">
              <label
                for="lastname"
                class="tag"
                >Last Name</label
              >
              <InputText
                name="lastname"
                v-model="firstname"
                id="lastname"
                class="input"
                autocomplete="off"
                placeholder="Enter First Last"
                :dt="inputTextDt"
              />
              <Message
                v-if="$form.lastname?.invalid"
                severity="error"
                :dt="message"
              >
                {{ $form.lastname.error.message }}
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
                optionLabel="name"
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
const firstname = ref('')
const lastname = ref('')
const role = ref('')
const gender = ref('')
const hourlyRate = ref('')
const createFormVisible = defineModel()

const roles = ref([
  { name: 'Normal', code: 'N' },
  { name: 'Senior', code: 'S' },
])

const initialValues = ref({
  firstname: '',
  lastname: '',
  gender: '',
  role: '',
  hourlyRate: '',
})

const resolver = ({ values }) => {
  const errors = {}

  if (!values.firstname) {
    errors.firstname = [{ message: 'firstname is required.' }]
  } else if (values.firstname.length < 3) {
    errors.firstname = [{ message: 'firstname must be at least 3 characters long.' }]
  }
  if (!values.lastname) {
    errors.lastname = [{ message: 'lastname is required.' }]
  } else if (values.lastname.length < 3) {
    errors.lastname = [{ message: 'lastname must be at least 3 characters long.' }]
  }
  if (!values.role) {
    errors.role = [{ message: 'Role is required.' }]
  } else if (values.role.length < 3) {
    errors.role = [{ message: 'Role must be at least 3 characterers long.' }]
  }
  if (!values.gender) {
    errors.gender = [{ message: 'Gender is required.' }]
  }
  if (!values.hourlyRate) {
    errors.hourlyRate = [{ message: 'Hourly rate is required.' }]
  } else if (parseFloat(values.hourlyRate) < 100) {
    errors.hourlyRate = [{ message: 'Hourly rate must be at least $100.' }]
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
      detail: `Successfully added worker ${firstname.value}`,
      life: 3000,
    })
    createFormVisible.value = false
    firstname.value = ''
    role.value = ''
    gender.value = ''
    hourlyRate.value = ''
  }
}
function clearForm() {
  firstname.value = ''
  lastname.value = ''
  gender.value = ''
  role.value = ''
  hourlyRate.value = ''
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
])
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
