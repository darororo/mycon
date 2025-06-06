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
          placeholder="Enter name"
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
          placeholder="Enter name"
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
          placeholder="Enter hourly rate (e.g. 100)"
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
          placeholder="Enter location"
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
          placeholder="Enter description"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import UploadImage from './UploadImage.vue'

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

.tag {
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 14px;
  color: #333;
}
</style>
