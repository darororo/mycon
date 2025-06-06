<template>
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
            v-model="itemName"
            :dt="inputTextDt"
            id="item-name"
            class="input"
            autocomplete="off"
            placeholder="Enter item name"
          />
        </div>
        <div class="field">
          <label
            for="category"
            class="tag"
            >Category</label
          >
          <InputText
            v-model="category"
            :dt="inputTextDt"
            id="category"
            class="input"
            autocomplete="off"
            placeholder="Enter category"
          />
        </div>
        <div class="field">
          <label
            for="quantity"
            class="tag"
            >Quantity</label
          >
          <InputNumber
            v-model="quantity"
            id="quantity"
            inputId="integeronly"
            :min="0"
            placeholder="0"
            fluid
          />
        </div>
        <div class="field">
          <label
            for="unit"
            class="tag"
            >Unit</label
          >
          <InputText
            v-model="unit"
            :dt="inputTextDt"
            id="unit"
            class="input"
            autocomplete="off"
            placeholder="e.g. pcs, kg"
          />
        </div>
        <div class="field">
          <label
            for="date"
            class="tag"
            >Date</label
          >
          <DatePicker
            v-model="date"
            id="date"
            placeholder="Select date"
            showIcon
            iconDisplay="input"
            style="width: 100%"
            :dt="datePickerDt"
          />
        </div>
      </div>
      <div class="button-row">
        <Button
          type="submit"
          label="Confirm"
          class="creative-button"
          :dt="buttonDt"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const itemName = ref('')
const category = ref('')
const quantity = ref(null)
const unit = ref('')
const date = ref(null)

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

const buttonDt = {
  primary: {
    background: '#007bff',
    border: { color: 'none' },
    active: { background: '#0056b3', color: 'white', border: { color: 'none' } },
    hover: { background: '#0056b3', color: 'white', border: { color: 'none' } },
  },
  focus: { ring: { width: 'none' } },
}

function onSubmit() {
  // Handle form submission here
  // e.g., emit an event or call an API
}
</script>

<style scoped>
.form-wrapper {
  padding: 32px 28px 18px 28px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 20px;
  max-width: 700px;
  margin: 0 auto;
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
  padding: 10px 14px;
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
  border-color: #007bff;
}

.tag {
  margin-bottom: 7px;
  font-weight: 600;
  font-size: 14px;
  color: #333;
}

.button-row {
  display: flex;
  justify-content: flex-end;
  margin-top: 36px;
}

.creative-button {
  padding: 10px 28px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  border-radius: 6px;
  background-color: #007bff;
  transition: background-color 0.2s;
  cursor: pointer;
  border: none;
}
</style>
