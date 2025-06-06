// ...existing code...
<template>
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
            v-model="itemName"
            :dt="inputTextDt"
            id="item-name"
            class="input"
            autocomplete="off"
            placeholder="Enter task name"
          />
        </div>
        <div class="field">
          <label
            for="category"
            class="tag"
            >Amount</label
          >
          <InputNumber
            v-model="value1"
            :dt="inputTextDt"
            id="category"
            inputId="integeronly"
            placeholder="Enter amount (e.g. 10, 25.5)"
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
            for="unit"
            class="tag"
            >Category</label
          >
          <InputText
            v-model="unit"
            :dt="inputTextDt"
            id="unit"
            class="input"
            autocomplete="off"
            placeholder="Enter category (e.g. labor, material)"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext'
import { ref } from 'vue'
const selectedUnit = ref()
const units = ref([
  { name: 'Piece', code: 'PCS' },
  { name: 'Kilogram', code: 'KG' },
  { name: 'Meter', code: 'M' },
  { name: 'Litre', code: 'L' },
])
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
  border-color: #007bff;
}
</style>
