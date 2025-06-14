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
      modal
      header="Create Inventory"
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
          <form @submit.prevent="onSubmit">
            <div class="fields-grid">
              <div class="field">
                <label
                  for="item-name"
                  class="tag"
                  >Item Name</label
                >
                <InputText
                  name="itemName"
                  v-model="itemName"
                  :dt="inputTextDt"
                  id="item-name"
                  class="input"
                  autocomplete="off"
                  placeholder="Enter item name"
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
              <div class="field">
                <label
                  for="quantity"
                  class="tag"
                  >Quantity</label
                >
                <InputNumber
                  name="quantity"
                  v-model="quantity"
                  id="quantity"
                  inputId="integeronly"
                  :min="0"
                  placeholder="0"
                  fluid
                />
                <Message
                  v-if="$form.quantity?.invalid"
                  severity="error"
                  :dt="message"
                >
                  {{ $form.quantity.error.message }}
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
                    invalid: {
                      border: {
                        color: '#ccc',
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
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const itemName = ref('')
const category = ref('')
const unit = ref('')
const quantity = ref(null)
const date = ref(null)
const createFormVisible = defineModel()

const units = ref([
  { name: 'Piece', code: 'PCS' },
  { name: 'Kilogram', code: 'KG' },
  { name: 'Meter', code: 'M' },
  { name: 'Litre', code: 'L' },
])

const initialValues = ref({
  itemName: '',
  category: '',
  quantity: '',
  unit: '',
  date: '',
})

const resolver = ({ values }) => {
  const errors = {}

  if (!values.itemName) {
    errors.itemName = [{ message: 'Item name is required.' }]
  } else if (values.itemName.length < 3) {
    errors.itemName = [{ message: 'Item name must be at least 3 characters long.' }]
  }
  if (!values.category) {
    errors.category = [{ message: 'Category name is required.' }]
  } else if (values.category.length < 3) {
    errors.category = [{ message: 'Category name must be at least 3 characters long.' }]
  }
  if (!values.quantity) {
    errors.quantity = [{ message: 'Quantity is required.' }]
  }
  if (!values.unit) {
    errors.unit = [{ message: 'Unit is required.' }]
  }
  if (!values.date) {
    errors.date = [{ message: 'Date is required.' }]
  }
  return {
    errors,
  }
}

const onFormSubmit = ({ valid }) => {
  if (valid) {
    toast.add({
      severity: 'success',
      summary: 'Item Created',
      detail: 'Your inventory item was successfully added.',
      life: 3000,
    })
    createFormVisible.value = false
    itemName.value = ''
    category.value = ''
    quantity.value = ''
    unit.value = ''
    date.value = ''
  }
}

function clearForm() {
  itemName.value = ''
  category.value = ''
  quantity.value = ''
  unit.value = ''
  date.value = ''
}

const message = {
  text: {
    font: {
      Size: '14px',
      weight: 400,
    },
  },
}

const inputTextDt = {
  focus: {
    border: { color: 'none' },
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
  padding: 2px;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  transition: border-color 0.3s;
  background-color: white;
  font-size: 15px;
}

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

.tag {
  margin-bottom: 7px;
  font-weight: 600;
  font-size: 14px;
  color: #333;
}
</style>
