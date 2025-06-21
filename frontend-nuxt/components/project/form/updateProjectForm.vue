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
          },
        },
        error: {
          background: '#fdecea',
          detailColor: '#b00020',
          border: {
            color: '#f44336',
            width: '1px',
            style: 'solid',
          },
          padding: '12px 16px',
          shadow: '0 4px 10px rgba(244, 67, 54, 0.3)',
          borderRadius: '8px',
          font: {
            weight: 600,
          },
        },
      }"
    />
    <Dialog
      @hide="clearProjectInput()"
      v-model:visible="updateFormVisible"
      modal
      header="Update Project"
      :style="{ width: '800px', height: '600px' }"
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
    >
      <Form
        v-slot="$form"
        @submit="handleSubmit"
        :initialValues="initialValues"
        :resolver="resolver"
        :validateOnValueUpdate="true"
        :validateOnBlur="true"
      >
        <div class="form-wrapper">
          <div class="small-container">
            <div class="small-fill">
              <label
                for="project-name"
                class="tag"
                >Project Name</label
              >
              <InputText
                name="name"
                v-model="name"
                id="projectDto"
                class="input"
                autocomplete="off"
                placeholder="Project name"
                :dt="inputTextDt"
              />
              <Message
                v-if="$form.name?.invalid"
                severity="error"
                :dt="message"
              >
                {{ $form.name.error.message }}
              </Message>
            </div>
            <div class="small-fill">
              <label
                for="client-name"
                class="tag"
                >Client Name</label
              >
              <Select
                :options="clients"
                option-label="username"
                option-value="id"
                name="client"
                v-model="clientId"
                id="owner-name"
                autocomplete="off"
                placeholder="Client name"
                class="w-full md:w-80"
                style="font-size: 14px"
                :dt="{
                  background: 'white',
                  color: 'black',
                  border: {
                    color: '#ccc',
                  },
                  hover: {
                    border: {
                      color: '#ccc',
                    },
                  },
                  focus: {
                    border: {
                      color: '#ccc',
                    },
                  },
                }"
              />
              <Message
                v-if="$form.client?.invalid"
                severity="error"
                :dt="message"
              >
                {{ $form.client.error.message }}
              </Message>
            </div>
            <div class="small-fill">
              <label
                for="price"
                class="tag"
                >Price</label
              >
              <InputNumber
                name="price"
                v-model="price"
                inputId="currency-us"
                mode="currency"
                id="price"
                currency="USD"
                locale="en-US"
                fluid
                :dt="inputTextDt"
              />
              <Message
                v-if="$form.price?.invalid"
                severity="error"
                :dt="message"
              >
                {{ $form.price.error.message }}
              </Message>
            </div>
          </div>

          <div style="margin-top: 24px">
            <UploadImage
              @on-file-selected="loadImages"
              @on-file-removed="removeImage"
            />
          </div>

          <div class="big-container">
            <div class="big-fill">
              <label
                for="location"
                class="tag"
                >Location</label
              >
              <InputText
                name="location"
                v-model="location"
                id="location"
                class="input-big"
                autocomplete="off"
                placeholder="Enter location"
                :dt="inputTextDt"
              />
              <Message
                v-if="$form.location?.invalid"
                severity="error"
                :dt="message"
              >
                {{ $form.location.error.message }}
              </Message>
            </div>
            <div class="big-fill">
              <label
                for="desc"
                class="tag"
                >Description</label
              >
              <InputText
                name="description"
                v-model="description"
                id="desc"
                class="input-big"
                autocomplete="off"
                placeholder="Enter description"
                :dt="inputTextDt"
              />
              <Message
                v-if="$form.description?.invalid"
                severity="error"
                :dt="message"
              >
                {{ $form.description.error.message }}
              </Message>
            </div>
          </div>
          <div class="button">
            <Button
              type="submit"
              label="Confirm"
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
              class="creative-button"
            />
          </div>
        </div>
      </Form>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import type { updateProjectDto } from '~/interfaces/project.interface'
import UploadImage from './UploadImage.vue'
import { Toast } from 'primevue'
import { useImageUploader } from '@/composables/useImageUploader'

const { project } = defineProps(['project'])

const updateFormVisible = defineModel<boolean>()

const projects = ref([
  { name: 'James Knight', code: 'JK' },
  { name: 'Grace Bell', code: 'GB' },
  { name: 'Olivia Smith', code: 'OS' },
  { name: 'Michael Dawson', code: 'MD' },
])

const projectDto = reactive<updateProjectDto>({
  name: '',
  clientId: undefined,
  description: '',
  longtitude: 0,
  latitude: 0,
  location: '',
  price: 0,
})

const { data: clients } = await useFetch('/api/users')

const clientId = ref('')
const { name, description, location, longtitude, latitude, price } = toRefs(projectDto)

const toast = useToast()

const resolver = ({ values }) => {
  const errors = <any>{}

  if (!values.name) {
    errors.name = [{ message: 'Project name is required.' }]
  } else if (values.name.length < 3) {
    errors.name = [{ message: 'Project name must be at least 3 characters long.' }]
  }
  if (!values.clientId) {
    errors.clientId = [{ message: 'Client name is required.' }]
  }
  if (!values.price) {
    errors.price = [{ message: 'Price is required.' }]
  }
  if (!values.location) {
    errors.location = [{ message: 'Location is required.' }]
  }
  if (!values.description) {
    errors.description = [{ message: 'Description is required.' }]
  }
  return {
    errors,
  }
}
const initialValues = ref<updateProjectDto>({
  name: '',
  clientId: undefined,
  description: '',
  longtitude: 0,
  latitude: 0,
  location: '',
  price: 0,
})

const { images, loadImages, removeImage, uploadImages, clearImageData } = useImageUploader()

const formData = ref(new FormData())
const { data, error, status, clear, execute } = useFetch(`/api/projects/${project.id}`, {
  method: 'PATCH',
  body: formData,
  watch: false,
  immediate: false,
})
const handleSubmit = async ({ valid }) => {
  images.value.forEach(image => {
    formData.value.append('files', image) // If your backend expects array: use 'files[]'
  })

  projectDto.clientId = parseInt(clientId.value)
  formData.value.append('jsonData', JSON.stringify(projectDto))

  if (valid) {
    await execute()
    if (status.value === 'error') {
      toast.add({
        severity: 'error',
        summary: 'Project Failed to update',
        detail: error.value,
        life: 3000,
      })
    } else {
      toast.add({
        severity: 'success',
        summary: 'Creation updated successfully.',
        // detail: 'Your project has been updated.',
        detail: data.value,
        life: 3000,
      })

      updateFormVisible.value = false
    }

    clear()
    clearImageData()
    formData.value = new FormData()
  }
}

function clearProjectInput() {
  name.value = ''
  clientId.value = ''
  location.value = ''
  description.value = ''
  price.value = 0
}

const message = {
  text: {
    font: {
      size: '14px',
      weight: 400,
    },
  },
}

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
</style>
