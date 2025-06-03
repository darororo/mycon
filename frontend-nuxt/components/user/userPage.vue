<template>
  <div
    style="
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      padding: 24px;
      background-color: white;
      border-radius: 10px;
      width: 900px;
    "
  >
    <div
      style="
        display: flex;
        align-items: center;
        gap: 30px;
        background-color: transparent;
        padding: 20px;
        border-radius: 12px;
      "
    >
      <Avatar
        image="https://i.pinimg.com/736x/6b/6e/c4/6b6ec4a4725708ef8e300480bf3557c0.jpg"
        shape="circle"
        style="height: 100px; width: auto"
      />

      <div style="display: flex; flex-direction: row; gap: 18px">
        <Toast />

        <FileUpload
          ref="fileupload"
          mode="basic"
          name="demo[]"
          url="/api/upload"
          accept="image/*"
          :maxFileSize="1000000"
          :auto="true"
          @upload="onUpload"
          style="display: none"
        />

        <Button
          style="display: flex; gap: 4px; flex-direction: row"
          @click="triggerUpload"
        >
          <Icon
            name="material-symbols:upload"
            style="font-size: 18px"
          />
          <span>Upload New</span>
        </Button>

        <Button
          style="
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: #da6c6c;
            color: white;
          "
          @click="upload"
          severity="secondary"
        >
          <Icon
            style="font-size: 18px"
            name="mdi:trash"
          />
          <span>Delete avatar</span>
        </Button>
      </div>
    </div>
    <div
      style="background-color: none; padding: 20px; display: flex; justify-content: space-between"
    >
      <FloatLabel>
        <InputText
          class="input-text"
          id="over_label"
          :dt="inputDT"
        />
        <label for="over_label">First Name</label>
      </FloatLabel>
      <FloatLabel>
        <InputText
          class="input-text"
          id="over_label"
          :dt="inputDT"
        />
        <label for="over_label">Last Name</label>
      </FloatLabel>
    </div>
    <div
      style="background-color: none; padding: 20px; display: flex; justify-content: space-between"
    >
      <FloatLabel>
        <InputText
          class="input-text"
          id="over_label"
          :dt="inputDT"
        />
        <label for="over_label">Email</label>
      </FloatLabel>
      <FloatLabel>
        <InputMask
          class="input-text"
          id="over_label"
          mask="999-99-9999"
        />
        <label for="over_label">Phone</label>
      </FloatLabel>
    </div>
    <div style="display: flex; padding: 20px; flex-direction: row; gap: 20px">
      <div class="check-box small">
        <Checkbox
          v-model="size"
          name="gender"
          value="Normal"
        />
        <label
          for="gender_male"
          class="text-sm label-check-box"
          >Male</label
        >
      </div>
      <div class="check-box">
        <Checkbox
          v-model="size"
          name="Normal"
          value="Female"
        />
        <label
          for="gender_female"
          class="text-sm label-check-box"
          >Female</label
        >
      </div>
    </div>
    <div
      style="background-color: none; padding: 20px; display: flex; justify-content: space-between"
    >
      <FloatLabel>
        <InputText
          class="input-text"
          id="over_label"
          :dt="inputDT"
        />
        <label for="over_label">Tax Identification</label>
      </FloatLabel>
      <FloatLabel>
        <InputText
          class="input-text"
          id="over_label"
          :dt="inputDT"
        />
        <label for="over_label">Role</label>
      </FloatLabel>
    </div>
    <div style="padding: 20px">
      <FloatLabel>
        <InputText
          class="input-text-address"
          id="over_label"
          :dt="inputDT"
        />
        <label for="over_label">Residential Addresss</label>
      </FloatLabel>
    </div>
    <div style="display: flex; justify-content: center">
      <Button
        style="width: 150px"
        label="Save Change"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import Checkbox from 'primevue/checkbox'

const toast = useToast()
const fileupload = ref()

// button upload
const triggerUpload = () => {
  fileupload.value.choose()
}

const upload = () => {
  fileupload.value.upload()
}

const onUpload = () => {
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 })
}
// allow selecting multiple value
const size = ref<string[]>([])

const inputDT = {
  background: 'transparenet',
  border: {
    color: 'grey',
  },
  focus: {
    border: {
      color: 'grey',
    },
  },
}
</script>

<style scoped>
::v-deep(.p-button) {
  background-color: #4da8da;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
}
::v-deep(.p-button):hover {
  background-color: #4da8da;
  color: white;
  border: none;
}
::v-deep(.p-button):focus {
  background-color: #4da8da;
  color: white;
  border: none;
}
::v-deep(.p-icon) {
  display: none;
}
::v-deep(.p-floatlabel label) {
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
::v-deep(.p-inputtext) {
  background-color: transparent;
}
.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label {
  font-size: 12px;
  color: #4da8da;
  font-weight: 500;
}
.input-text {
  width: 390px;
  color: black;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  border-color: #bbb;
}
.input-text-address {
  width: 100%;
  color: black;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  border-color: #bbb;
}
.input-text:focus {
  border-color: #bbb;
}
.input-text:hover {
  border-color: #bbb;
}
.check-box {
  display: flex;
  align-items: start;
  gap: 10px;
  border: 1px solid #bbb;
  padding: 8px;
  width: auto;
  border-radius: 10px;
  width: 100px;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
}
.label-check-box {
  color: black;
  font-size: 13px;
}
::v-deep(.p-checkbox-box) {
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: red;
  border: none;
}

::v-deep(.p-checkbox-icon) {
  font-size: 10px;
}
</style>
