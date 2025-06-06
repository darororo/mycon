<template>
  <div class="form-wrapper">
    <div class="small-container">
      <div class="small-fill">
        <label
          for="username"
          class="tag"
          >Username</label
        >
        <InputText
          :dt="inputTextDt"
          id="username"
          class="input"
          autocomplete="off"
          placeholder="Enter username"
        />
      </div>
      <div class="small-fill">
        <label
          for="gender"
          class="tag"
          >Gender</label
        >
        <Select
          v-model="selectedGender"
          autocomplete="off"
          :options="genders"
          optionLabel="name"
          placeholder="Select gender"
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
      <div class="small-fill">
        <label
          for="role"
          class="tag"
          >Role</label
        >
        <InputText
          :dt="inputTextDt"
          id="role"
          class="input"
          autocomplete="off"
          placeholder="Enter role (e.g. Supervisor, Worker)"
        />
      </div>
      <div class="small-fill">
        <label
          for="project-field"
          class="tag"
          >Project Field</label
        >
        <InputText
          :dt="inputTextDt"
          id="project-field"
          class="input"
          autocomplete="off"
          placeholder="Enter project field"
        />
      </div>
      <div class="small-fill">
        <label
          for="hourly-rate"
          class="tag"
          >Hourly Rate</label
        >
        <InputNumber
          placeholder="Enter hourly rate (e.g. 100)"
          class="input"
          autocomplete="off"
          id="hourly-rate"
          :dt="inputTextDt"
          v-model="value1"
          inputId="currency-us"
          mode="currency"
          currency="USD"
          locale="en-US"
          fluid
        />
      </div>
      <div class="small-fill">
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

    <div style="margin-top: 24px">
      <UploadImage />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UploadImage from '~/components/project/form/UploadImage.vue'
const selectedGender = ref()
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
  border-color: #007bff;
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
  border: 1.5px solid #ddd;
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
