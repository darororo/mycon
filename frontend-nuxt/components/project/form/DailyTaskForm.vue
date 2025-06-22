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
      header="Create Task"
      modal
      :style="{ width: '800px' }"
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
      @hide="clearDataClose"
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
          <form @submit.prevent="onSubmit">
            <div class="fields-grid">
              <div class="field">
                <label
                  for="item-name"
                  class="tag"
                  >Task Name</label
                >
                <InputText
                  name="itemName"
                  v-model="itemName"
                  id="itemName"
                  class="input"
                  autocomplete="off"
                  placeholder="Enter task name"
                  :dt="inputTextDt"
                />
                <Message
                  v-if="$form.itemName?.invalid"
                  severity="error"
                  :dt="message"
                >
                  {{ $form.itemName.error.message }}
                </Message>
              </div>
              <div class="field">
                <label
                  for="category"
                  class="tag"
                  >Amount</label
                >
                <InputNumber
                  name="amount"
                  v-model="amount"
                  :dt="inputTextDt"
                  id="category"
                  inputId="integeronly"
                  placeholder="Enter amount"
                  fluid
                />
                <Message
                  v-if="$form.amount?.invalid"
                  severity="error"
                  :dt="message"
                >
                  {{ $form.amount.error.message }}
                </Message>
              </div>
              <div class="small-fill">
                <label
                  for="unit"
                  class="tag"
                  >Unit</label
                >
                <Select
                  name="unit"
                  v-model="unit"
                  autocomplete="off"
                  :options="units"
                  optionLabel="name"
                  placeholder="Choose unit"
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
                          background: '#007bff',
                          color: 'white',
                        },
                        background: '#007bff',
                      },
                      focus: {
                        background: 'none',
                        color: 'black',
                      },
                    },
                  }"
                />
                <Message
                  v-if="$form.unit?.invalid"
                  severity="error"
                  :dt="message"
                >
                  {{ $form.unit.error.message }}
                </Message>
              </div>
              <div class="field">
                <label
                  for="category"
                  class="tag"
                  >Category</label
                >
                <InputText
                  name="category"
                  v-model="category"
                  :dt="inputTextDt"
                  id="category"
                  class="input"
                  autocomplete="off"
                  placeholder="Enter category"
                />
                <Message
                  v-if="$form.category?.invalid"
                  severity="error"
                  :dt="message"
                >
                  {{ $form.category.error.message }}
                </Message>
              </div>
            </div>
          </form>
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
import { Toast } from 'primevue'
import InputText from 'primevue/inputtext'
import { ref } from 'vue'

const toast = useToast()
const createFormVisible = defineModel()
const itemName = ref('')
const amount = ref('')
const unit = ref('')
const category = ref('')

const units = ref([
  { name: 'Piece', code: 'PCS' },
  { name: 'Kilogram', code: 'KG' },
  { name: 'Meter', code: 'M' },
  { name: 'Litre', code: 'L' },
])

const initialValues = ref({
  itemName: '',
  amount: null,
  unit: '',
  category: '',
})

const resolver = ({ values }) => {
  const errors = {}
  if (!values.itemName) {
    errors.itemName = [{ message: 'Task name is required.' }]
  } else if (values.itemName.length < 3) {
    errors.itemName = [{ message: 'Task name must be at least 3 characters long.' }]
  }
  if (!values.amount) {
    errors.amount = [{ message: 'Amount is required.' }]
  }
  if (!values.unit) {
    errors.unit = [{ message: 'Unit is required.' }]
  }
  if (!values.category) {
    errors.category = [{ message: 'Category is required.' }]
  }
  return {
    errors,
  }
}

const onFormSubmit = ({ valid }) => {
  if (valid) {
    toast.add({
      severity: 'success',
      summary: 'Success.',
      detail: 'Task has been created successfully!',
      life: 3000,
    })
    createFormVisible.value = false
    itemName.value = ''
    amount.value = null
    unit.value = ''
    category.value = ''
  }
}
function clearDataClose() {
  itemName.value = ''
  amount.value = null
  unit.value = ''
  category.value = ''
}

const message = {
  text: {
    font: {
      Size: '14px',
      weight: 400,
    },
  },
}
</script>
<style scoped>
::v-deep(.p-inputtext) {
  background-color: white;
  color: black;
  font-size: 15px;
  border-color: #ccc;
}

::v-deep(.p-inputtext):focus {
  border-color: #ccc;
}
::v-deep(.p-inputtext):hover {
  border-color: #ccc;
}
.form-wrapper {
  padding: 32px 28px 32px 28px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 20px;
  max-width: 700px;
  margin: 0 auto;
}
.small-fill,
.big-fill {
  display: flex;
  flex-direction: column;
  flex: 1 1 30%;
}
.tag {
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 14px;
  color: #333;
}

.fields-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px 24px;
}

.field {
  display: flex;
  flex-direction: column;
}

.input {
  border: 1.5px solid #ddd;
  border-radius: 8px;
  transition: border-color 0.3s;
  background-color: white;
  font-size: 15px;
}

::v-deep(.p-inputtext) {
  background-color: white;
  color: black;
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
</style>
