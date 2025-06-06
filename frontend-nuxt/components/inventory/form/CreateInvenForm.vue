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
        <div class="small-fill">
          <label
            for="unit"
            class="tag"
            >Unit</label
          >
          <Select
            v-model="selectedUnit"
            autocomplete="off"
            :options="units"
            optionLabel="name"
            placeholder="Choose unit"
            class="input"
            :dt="{
              overlay: {
                background: 'white',
                border: {
                  color: '#007bff',
                },
              },
              focus: {
                border: {
                  color: '#007bff',
                },
              },
              hover: {
                border: {
                  color: '#007bff',
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
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const itemName = ref('')
const category = ref('')
const quantity = ref(null)
const date = ref(null)
const selectedUnit = ref()
const units = ref([
  { name: 'Piece', code: 'PCS' },
  { name: 'Kilogram', code: 'KG' },
  { name: 'Meter', code: 'M' },
  { name: 'Litre', code: 'L' },
])
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
  border-color: #007bff;
}

.tag {
  margin-bottom: 7px;
  font-weight: 600;
  font-size: 14px;
  color: #333;
}
</style>
