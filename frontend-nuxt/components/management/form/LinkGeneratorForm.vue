<template>
  <div>
    <Toast
      :dt="{
        success: {
          background: '#e6f4ea',
          detailColor: '#2e7d32',
          border: {
            color: '#a5d6a7',
            width: '1px',
            style: 'solid',
          },
          padding: '12px 16px',
          shadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
          borderRadius: '8px',
          font: {
            weight: 500,
            family: 'Montserrat, sans-serif',
          },
        },
      }"
    />

    <Dialog
      v-model:visible="createFormVisible"
      modal
      header="Payroll Link Generator"
      :style="{ width: '800px' }"
      :pt="{
        content: { style: 'padding: 0;' },
        header: { style: 'border-bottom: 1px solid #ccc;' },
      }"
      :dt="{
        background: 'white',
        color: 'black',
        header: { padding: '30px' },
        border: { radius: '20px' },
      }"
    >
      <Form>
        <div class="info-section">
          <label class="info-title">Your prototype sharing URL</label>
          <span class="info-subtitle">
            Copy and paste the link below into emails, chats or browsers.
          </span>
        </div>

        <div class="url-field">
          <input
            v-model="payrollLink"
            readonly
            class="link-input"
          />
        </div>
        <div class="button">
          <Button
            type="button"
            :label="buttonText"
            class="creative-button"
            :dt="{
              primary: {
                border: { color: 'none' },
                active: { color: 'white', border: { color: 'none' } },
                hover: { color: 'white', border: { color: 'none' } },
              },
              focus: { ring: { width: 'none' } },
            }"
            @click="handleCopy"
          />
        </div>
      </Form>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useToast } from 'primevue'

const createFormVisible = defineModel()
const buttonText = ref('Copy sharing URL')
const payrollLink = ref('')
const toast = useToast()

const generateLink = () => {
  const userId = Math.floor(Math.random() * 100)
  payrollLink.value = `${window.location.origin}/projects/1/attendance/${userId}`
}

const handleCopy = async () => {
  if (payrollLink.value) {
    await navigator.clipboard.writeText(payrollLink.value)
    buttonText.value = 'Copied!'
    toast.add({
      severity: 'success',
      summary: 'Link Copied',
      detail: payrollLink.value,
      life: 3000,
    })
    setTimeout(() => {
      buttonText.value = 'Copy sharing URL'
    }, 2000)
  }
}

onMounted(generateLink)
</script>

<style scoped>
.info-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px 0 40px;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}
.info-title {
  font-size: 16px;
  font-weight: 500;
}
.info-subtitle {
  color: #808080;
  font-weight: 400;
  font-size: 14px;
}
.url-field {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.link-input {
  width: 80%;
  max-width: 700px;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 14px;
  border-radius: 6px;
  font-family: 'Montserrat', sans-serif;
  color: #333;
  background-color: #f9f9f9;
}
.link-input:active,
.link-input:focus {
  outline: none !important;
  border: 1px solid #ccc;
}
.button {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  font-family: 'Montserrat', sans-serif;
}
.creative-button {
  font-size: 14px;
  font-weight: 500;
  color: white;
  border-radius: 6px;
  width: 50%;
  max-width: 700px;
  background: linear-gradient(to right, #3b82f6, #6366f1); /* Tailwind Blue → Indigo */
  transition: background-color 0.2s ease;
  cursor: pointer;
}
.creative-button:hover {
  background: linear-gradient(to right, #3b82f6, #6366f1); /* Tailwind Blue → Indigo */
}
</style>
