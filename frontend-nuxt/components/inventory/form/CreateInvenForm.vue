<template>
  <div class="form-wrapper">
    <div class="small-container">
      <div class="filler">
        <label
          for="item-name"
          class="tag"
          >Item Name</label
        >
        <InputText
          :dt="inputTextDt"
          id="item-name"
          class="input"
          autocomplete="off"
        />
      </div>
      <div class="filler">
        <label
          for="category"
          class="tag"
          >Category</label
        >
        <InputText
          :dt="inputTextDt"
          id="category"
          class="input"
          autocomplete="off"
        />
      </div>
      <div class="filler">
        <label
          for="quantity"
          class="tag"
          >Quantity</label
        >
        <InputText
          :dt="inputTextDt"
          id="quantity"
          class="input"
          autocomplete="off"
        />
      </div>
      <div class="filler">
        <label
          for="unit"
          class="tag"
          >Unit</label
        >
        <InputText
          :dt="inputTextDt"
          id="unit"
          class="input"
          autocomplete="off"
        />
      </div>
      <div class="filler">
        <label
          for="date"
          class="tag"
          >Date</label
        >
        <DatePicker
          v-model="value"
          placeholder="Date"
          showIcon
          iconDisplay="input"
          style="width: 48%"
          :dt="{
            header: {
              background: 'white',
              color: 'black',
            },
            week: {
              day: {
                color: 'black',
              },
            },
            select: {
              month: {
                color: 'black',
              },
              year: {
                color: 'black',
              },
            },
            date: {
              color: 'black',
              selected: {
                background: '#333',
                color: 'white',
              },
            },
            panel: {
              background: 'white',
              color: 'black',
            },
          }"
        />
      </div>
    </div>

    <div class="button">
      <Button
        type="button"
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
        @click="visible = false"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const value = ref(null)

const inputTextDt = {
  focus: {
    border: {
      color: 'none',
    },
  },
}
</script>

<style scoped>
::v-deep(.p-inputtext) {
  background-color: white;
  color: black;
  border-color: #ccc;
}

::v-deep(.p-inputtext):focus {
  border-color: #ccc;
}
::v-deep(.p-inputtext):hover {
  border-color: #ccc;
}
.form-wrapper {
  padding: 30px;
  padding-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  background: #f9f9fb;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.small-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between;
}

.filler {
  display: flex;
  flex-direction: column;
  flex: 1 1 30%;
}

.big-container {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input {
  padding: 10px 14px;
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

.button {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}

.creative-button {
  padding: 10px 24px;
  font-size: 15px;
  font-weight: 500;
  color: white;
  border-radius: 6px;
  background-color: #007bff;
  transition: background-color 0.2s ease;
  cursor: pointer;
}
</style>
