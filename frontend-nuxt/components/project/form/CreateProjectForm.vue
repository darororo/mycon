<template>
  <div class="form-wrapper">
    <div class="small-container">
      <div class="small-fill">
        <label
          for="project-name"
          class="tag"
          >Project Name</label
        >
        <InputText
          :dt="inputTextDt"
          id="project-name"
          class="input"
          autocomplete="off"
        />
      </div>
      <div class="small-fill">
        <label
          for="owner-name"
          class="tag"
          >Owner</label
        >
        <InputText
          :dt="inputTextDt"
          id="owner-name"
          class="input"
          autocomplete="off"
        />
      </div>
      <div class="small-fill">
        <label
          for="price"
          class="tag"
          >Price</label
        >
        <InputNumber
          v-model="value1"
          inputId="currency-us"
          mode="currency"
          id="price"
          :dt="inputTextDt"
          currency="USD"
          locale="en-US"
          fluid
        />
      </div>
    </div>

    <div style="margin-top: 24px">
      <UploadImage />
    </div>

    <div class="big-container">
      <div class="big-fill">
        <label
          for="location"
          class="tag"
          >Location</label
        >
        <InputText
          :dt="inputTextDt"
          id="location"
          class="input-big"
          autocomplete="off"
        />
      </div>
      <div class="big-fill">
        <label
          for="desc"
          class="tag"
          >Description</label
        >
        <InputText
          :dt="inputTextDt"
          id="desc"
          class="input-big"
          autocomplete="off"
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
import UploadImage from './UploadImage.vue'

const visible = ref(false)

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
  padding: 32px 28px 18px 28px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 20px;
  max-width: 700px;
  margin: 0 auto;
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

.big-container {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input,
.input-big {
  padding: 10px 14px;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  transition: 0.3s ease;
  background-color: white;
  font-size: 15px;
}

.input-big {
  width: 100%;
}

.input:focus,
.input-big:focus {
  border-color: grey;
  outline: none;
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
