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
      <div>
        <Avatar
          v-if="avatarUrl"
          :image="avatarUrl"
          shape="circle"
          style="height: 100px; width: 100px"
        />
        <div
          v-else
          style="
            height: 100px;
            width: 100px;
            border-radius: 50%;
            border: 1px solid #ccc;
            background-color: #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: #999;
            font-family: 'Montserrat', sans-serif;
          "
        >
          No Avatar
        </div>
      </div>

      <div style="display: flex; flex-direction: row; gap: 18px">
        <Toast :dt="toastStyle" />

        <FileUpload
          ref="fileupload"
          mode="basic"
          name="demo[]"
          accept="image/*"
          :auto="true"
          @select="onUpload"
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
          @click="deleteAvatar"
          severity="secondary"
        >
          <Icon
            name="mdi:trash"
            style="font-size: 18px"
          />
          <span>Delete avatar</span>
        </Button>
      </div>
    </div>

    <!-- Form Fields -->
    <div style="padding: 20px; display: flex; justify-content: space-between">
      <FloatLabel>
        <InputText
          v-model="firstName"
          class="input-text"
          id="first_name"
          :dt="inputDT"
        />
        <label for="first_name">First Name</label>
      </FloatLabel>
      <FloatLabel>
        <InputText
          v-model="lastName"
          class="input-text"
          id="last_name"
          :dt="inputDT"
        />
        <label for="last_name">Last Name</label>
      </FloatLabel>
    </div>

    <div style="padding: 20px; display: flex; justify-content: space-between">
      <FloatLabel>
        <InputText
          v-model="email"
          class="input-text"
          id="email"
          :dt="inputDT"
        />
        <label for="email">Email</label>
      </FloatLabel>
      <FloatLabel>
        <InputMask
          v-model="phone"
          class="input-text"
          id="phone"
          mask="999-99-9999"
        />
        <label for="phone">Phone</label>
      </FloatLabel>
    </div>

    <div style="display: flex; padding: 20px; flex-direction: row; gap: 20px">
      <div class="check-box small">
        <RadioButton
          v-model="gender"
          input-id="gender_male"
          name="gender"
          value="male"
          :dt="radioBtnDT"
        />
        <label
          for="gender_male"
          class="text-sm label-check-box"
          >Male</label
        >
      </div>
      <div class="check-box">
        <RadioButton
          v-model="gender"
          input-id="gender_female"
          name="gender"
          value="female"
          :dt="radioBtnDT"
        />
        <label
          for="gender_female"
          class="text-sm label-check-box"
          >Female</label
        >
      </div>
    </div>

    <div style="padding: 20px; display: flex; justify-content: space-between">
      <FloatLabel>
        <InputText
          v-model="role"
          class="input-text"
          id="role"
          :dt="inputDT"
        />
        <label for="role">Role</label>
      </FloatLabel>
    </div>

    <div style="padding: 20px">
      <FloatLabel>
        <InputText
          v-model="address"
          class="input-text-address"
          id="address"
          :dt="inputDT"
        />
        <label for="address">Residential Address</label>
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
import { ref, onMounted } from 'vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const fileupload = ref()

// Form fields
const username = ref('')
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const role = ref('')
const address = ref('')
const gender = ref('')
const avatarUrl = ref('')

// Fetch user and bind to fields
const { data: user } = await useFetch('/api/users/1')

onMounted(() => {
  if (user.value) {
    username.value = user.value.username
    firstName.value = user.value.firstName
    lastName.value = user.value.lastName
    email.value = user.value.email
    phone.value = user.value.phone || ''
    role.value = user.value.role
    address.value = user.value.address || ''
    gender.value = user.value.gender
    avatarUrl.value = user.value.avatarUrl || ''
  }
})

// Upload avatar
const triggerUpload = () => {
  fileupload.value.choose()
}

const onUpload = (event: any) => {
  const file = event.files[0]
  const reader = new FileReader()
  reader.onload = e => {
    avatarUrl.value = e.target?.result as string
    toast.add({ severity: 'success', summary: 'Success', detail: 'Image updated', life: 3000 })
  }
  if (file) {
    reader.readAsDataURL(file)
  }
}

// Delete avatar
const deleteAvatar = () => {
  avatarUrl.value = ''
  toast.add({ severity: 'warn', summary: 'Deleted', detail: 'Avatar Removed', life: 3000 })
}

// Styles
const inputDT = {
  background: 'transparent',
  border: {
    color: 'grey',
  },
  focus: {
    border: {
      color: 'grey',
    },
  },
}

const radioBtnDT = {
  background: 'white',
  icon: {
    checked: {
      color: '#4da8da',
      hover: {
        color: '#4da8da',
      },
      border: {
        color: '#4da8da',
      },
      background: '#4da8da',
    },
  },
  checked: {
    border: {
      color: '#4da8da',
    },
    background: 'white',
    hover: {
      border: {
        color: '#4da8da',
      },
      background: 'white',
    },
  },
}

const toastStyle = {
  success: {
    background: '#e6f4ea',
    detailColor: '#2e7d32',
    border: { color: '#a5d6a7', width: '1px', style: 'solid' },
    padding: '12px 16px',
    shadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    borderRadius: '8px',
    font: { weight: 500 },
  },
  warn: {
    background: '#fff4e5',
    detailColor: '#9f6000',
    border: { color: '#ff9800', width: '1px', style: 'solid' },
    padding: '12px 16px',
    shadow: '0 4px 10px rgba(255, 152, 0, 0.3)',
    borderRadius: '8px',
    font: { weight: 600 },
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
::v-deep(.p-button):hover,
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
.input-text:focus,
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
</style>
