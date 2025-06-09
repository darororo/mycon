<template>
  <div>
    <Toast
      :dt="{
        success: {
          background: 'white',
          detailColor: 'black',
        },
      }"
    />
    <Dialog
      v-model:visible="createFormVisible"
      modal
      header="Create Project"
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
              v-model="projectDto.name"
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
              v-model="projectDto.price"
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
              v-model="projectDto.location"
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
              v-model="projectDto.description"
              id="desc"
              class="input-big"
              autocomplete="off"
              placeholder="Enter description"
            />
          </div>
        </div>
        <div class="button">
          <Button
            type="button"
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
            @click="handleSubmit"
            class="creative-button"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import type { CreateProjectDto } from '~/interfaces/project.interface'
import UploadImage from './UploadImage.vue'
import { Toast } from 'primevue'

const createFormVisible = defineModel<boolean>()

const projectDto = reactive<CreateProjectDto>({
  name: '',
  description: '',
  longtitude: 0,
  latitude: 0,
  location: '',
  price: 0,
})

const { data, error, status, clear, execute } = useFetch('http://localhost:3100/projects', {
  method: 'POST',
  body: projectDto,
  watch: false,
  immediate: false,
})

const toast = useToast()

async function handleSubmit() {
  await execute()
  if (status.value === 'error') {
    toast.add({
      severity: 'error',
      summary: 'Project Failed to Create',
      detail: error.value,
      life: 3000,
    })
  } else {
    toast.add({
      severity: 'success',
      summary: 'Created Successfully',
      // detail: 'Your project has been created.',
      detail: data.value,
      life: 3000,
    })

    createFormVisible.value = false

    clear()
  }
}

const inputTextDt = {
  focus: {
    border: {
      color: 'none',
    },
  },
}

const button = {
  primary: {
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
