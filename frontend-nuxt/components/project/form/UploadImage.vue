<template>
  <div>
    <Toast />
    <FileUpload
      name="files"
      :url="`${apiBase}/upload`"
      :multiple="true"
      accept="image/*"
      fileLimit="8"
      :maxFileSize="10000 * 1024"
      :dt="{
        background: 'white',
        border: {
          color: '#ccc',
        },
      }"
      @upload="onTemplatedUpload($event)"
      @select="onSelectedFiles"
    >
      <template #header="{ chooseCallback }">
        <div class="flex flex-wrap justify-between items-center flex-1 gap-4">
          <div class="flex gap-2">
            <Button
              @click="chooseCallback()"
              rounded
              outlined
              severity="secondary"
              style="border-color: grey"
            >
              <template #icon>
                <Icon
                  style="color: grey; font-size: 16px"
                  name="bi:image"
                />
              </template>
            </Button>
          </div>
        </div>
      </template>
      <template #content="{ files, removeFileCallback }">
        <div class="flex flex-col gap-8 pt-4">
          <div v-if="files.length > 0">
            <h5
              style="
                color: black;
                font-family: 'Montserrat', sans-serif;
                font-weight: 500;
                margin-bottom: 10px;
              "
            >
              Pending
            </h5>
            <div class="flex flex-wrap gap-4">
              <div
                v-for="(file, index) of files"
                :key="file.name + file.type + file.size"
                style="
                  padding: 8px;
                  border-radius: 4px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  gap: 4px;
                  border: 1px solid #ccc;
                "
              >
                <div>
                  <img
                    role="presentation"
                    :alt="file.name"
                    :src="file.objectURL"
                    style="border-radius: 4px"
                    width="140"
                    height="50"
                  />
                </div>
                <span
                  class="text-ellipsis max-w-60 whitespace-nowrap"
                  style="
                    font-weight: 600;
                    max-width: 60px;
                    overflow: hidden;
                    color: grey;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 600;
                    font-size: 14px;
                  "
                  >{{ file.name }}</span
                >
                <div style="color: grey; font-family: 'Montserrat', sans-serif; font-size: 14px">
                  {{ formatSize(file.size) }}
                </div>
                <Badge
                  style="color: black; font-family: 'Montserrat', sans-serif; font-weight: 500"
                  value="Pending"
                  severity="warn"
                />
                <Button
                  @click="onRemoveTemplatingFile(index)"
                  outlined
                  rounded
                  severity="danger"
                  style="color: red; border-color: red"
                >
                  <template #icon><Icon name="si:close-duotone" /> </template>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #empty>
        <div class="flex items-center justify-center flex-col">
          <i
            style="
              display: flex;
              padding: 20px;
              border: 1px solid white;
              align-items: center;
              border-radius: 100%;
              border-color: grey;
            "
          >
            <Icon
              style="font-size: 24px; color: grey"
              name="fontisto:cloud-up"
            />
          </i>
          <p
            style="
              color: grey;
              margin-top: 6px;
              margin-bottom: 0;
              font-family: 'Montserrat', sans-serif;
              font-weight: 500;
            "
          >
            Drag and drop files to here to upload.
          </p>
        </div>
      </template>
    </FileUpload>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePrimeVue } from 'primevue/config'
import { useToast } from 'primevue/usetoast'

const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.public.apiBase
const emit = defineEmits(['on-file-selected', 'on-file-removed'])

const $primevue = usePrimeVue()
const toast = useToast()

const files = ref([])

const onRemoveTemplatingFile = index => {
  emit('on-file-removed', index)
}

const onSelectedFiles = event => {
  if (files.value.length + event.files.length > 8) {
    return
  }
  files.value = event.files
  emit('on-file-selected', files.value)
}

const onTemplatedUpload = () => {
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 })
}

const formatSize = bytes => {
  const k = 1024
  const dm = 3
  const sizes = $primevue.config.locale.fileSizeTypes

  if (bytes === 0) {
    return `0 ${sizes[0]}`
  }

  const i = Math.floor(Math.log(bytes) / Math.log(k))
  const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm))

  return `${formattedSize} ${sizes[i]}`
}
</script>
