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
      header="Create Timeline"
      :style="{ width: '800px' }"
      :pt="{
        content: {
          style: `
                    padding :0;
                `,
        },
        header: {
          style: 'border-bottom: 1px solid #ccc;',
        },
      }"
      :dt="{
        background: 'white',
        color: 'black',
        header: {
          padding: '30px',
        },
        border: {
          radius: '20px',
        },
      }"
      @hide="clearFormData"
    >
      <Form
        v-slot="$form"
        @submit="handleSubmit"
        :initialValues="initialValues"
        :resolver="resolver"
        :validateOnValueUpdate="false"
        :validateOnBlur="true"
        :validateOnMount="[]"
      >
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
              name="description"
              v-model="description"
              type="text"
              class="input"
              placeholder="What happened today?"
              id="description"
              fluid
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
            <Message
              v-if="$form.description?.invalid"
              severity="error"
              :dt="{
                text: {
                  font: {
                    size: '14px',
                    weight: 400,
                  },
                },
              }"
            >
              {{ $form.description.error.message }}
            </Message>
          </div>
          <div>
            <UploadImage
              @on-file-selected="loadImages"
              @on-file-removed="removeImage"
            />
          </div>
        </div>
        <div class="button">
          <Button
            type="submit"
            label="Confirm"
            class="creative-button"
            :dt="button"
          />
        </div>
      </Form>
    </Dialog>
  </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast'
import UploadImage from './UploadImage.vue'
import { useImageUploader } from '@/composables/useImageUploader'

const toast = useToast()
const createFormVisible = defineModel()

const description = ref('')

const { images, loadImages, removeImage, uploadImages, clearImageData } = useImageUploader()

const initialValues = ref({
  description: '',
})
const resolver = ({ values }) => {
  const errors = {}

  if (!values.description) {
    errors.description = [{ message: 'Description is required.' }]
  } else if (values.description.length < 3) {
    errors.description = [{ message: 'Description must be at least 3 characters long.' }]
  }
  return {
    errors,
  }
}

const postDto = ref({
  description: description,
})

const formData = ref(new FormData())

const { data, status, clear, execute, error } = useFetch(`/api/posts`, {
  method: 'POST',
  body: formData,
  watch: false,
  immediate: false,
})

const handleSubmit = async ({ valid }) => {
  images.value.forEach(image => {
    formData.value.append('files', image) // If your backend expects array: use 'files[]'
  })

  formData.value.append('jsonData', JSON.stringify(postDto.value))

  if (valid) {
    await execute()
    if (status.value === 'error') {
      toast.add({
        severity: 'error',
        summary: 'Post failed to Create',
        detail: error.value,
        life: 3000,
      })
    } else {
      // if (images.value.length > 0) {
      //   // await uploadImages()
      //   // await execute()
      // }

      toast.add({
        severity: 'success',
        summary: 'Post created successfully.',
        // detail: 'Your project has been created.',
        detail: data.value,
        life: 3000,
      })

      createFormVisible.value = false
      clear()
      clearImageData()
      formData.value = new FormData()
    }
  }
}

function clearFormData() {
  description.value = ''
  formData.value = new FormData()
}

const button = {
  primary: {
    focus: {
      ring: { width: 'none' },
    },
    background: '#222831',
    color: 'white',
    border: {
      color: 'none',
    },
    hover: {
      background: '#222831',
      color: 'white',
      border: {
        color: 'none',
      },
    },
    active: {
      background: '#222831',
      color: 'white',
      border: {
        color: 'none',
      },
    },
  },
  border: {
    radius: '12px',
  },
  padding: {
    x: '20px',
    y: '10px',
  },
}
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  margin: 10px 0 20px 0;
}
.creative-button {
  font-size: 16px;
  font-weight: 500;
  color: white;
  border-radius: 6px;
  width: 50%;
  max-width: 700px;
  background-color: #007bff;
  transition: background-color 0.2s ease;
  cursor: pointer;
}

::v-deep(.p-inputtext) {
  background-color: white;
  color: black;
  border-color: #ccc;
}
::v-deep(.p-inputtext):focus,
::v-deep(.p-inputtext):hover {
  border-color: #ccc;
}
::v-deep(.p-inputtext:valid)::placeholder {
  color: grey;
}
.timeline-inputs {
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex: 1 1 60%;
  padding: 0 30px;
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
