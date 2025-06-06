<template>
  <div class="timeline-container">
    <form class="timeline-form">
      <div class="timeline-inputs">
        <div class="timeline-description">
          <div
            style="
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 14px;
              margin: 8px 0;
            "
          >
            <Avatar
              image="https://i.pinimg.com/736x/07/80/84/078084a7b91020a8bfb2f90ea4a57d65.jpg"
              style="height: auto; width: 46px"
              shape="circle"
            />
            <div style="display: flex; flex-direction: column">
              <label style="font-size: 14px; font-weight: 500">Chinatsu Senpai </label>
              <span style="font-size: 13px; color: grey">Super Admin</span>
            </div>
          </div>
          <InputText
            v-model="description"
            type="text"
            class="input"
            placeholder="What happened today?"
            id="description"
            :dt="{
              color: 'black',
              focus: {
                borderColor: '#ccc',
              },
              hover: {
                borderColor: '#ccc',
              },
            }"
          />
        </div>
        <div>
          <UploadImage />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import UploadImage from './UploadImage.vue'
</script>

<style scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  border-radius: 18px;
  padding: 10px 0;
  max-width: 700px;
  margin: 0 auto;
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

.timeline-inputs {
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex: 1 1 60%;
}

.timeline-description {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.input {
  padding: 10px 14px;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  background-color: white;
  font-size: 14px;
  transition: border-color 0.2s;
}
</style>
