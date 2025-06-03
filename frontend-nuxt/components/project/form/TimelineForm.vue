<template>
  <div class="timeline-container">
    <div class="title">
      <h style="font-weight: bold; font-size: 30px">Create Timeline</h>
    </div>
    <div class="form">
      <div
        class="flex"
        style="padding-top: 10px"
      >
        <div class="text-input">
          <div class="fill">
            <label
              for="username"
              class="tag"
              >Username</label
            >
            <InputText
              v-model="value"
              type="text"
            />
          </div>
          <div class="fill">
            <label
              for="field"
              class="tag"
              >Field</label
            >
            <InputText
              v-model="value"
              type="text"
            />
          </div>
          <div class="date-fill">
            <DatePicker
              v-model="buttondisplay"
              show-icon
              fluid
              :show-on-focus="false"
              input-id="value2"
              placeholder="05/15/2025"
            />
          </div>
        </div>
        <div
          class="upload"
          style="padding-left: 30px; margin-top: 40px"
        >
          <div
            style="
              width: 335px;
              border: 2px solid lightgray;
              border-radius: 10px;
              border-style: dashed;
            "
          >
            <FileUpload
              name="demo[]"
              url="/api/upload"
              :multiple="true"
              accept="image/*"
              :max-file-size="1000000"
              @upload="onTemplatedUpload($event)"
              @select="onSelectedFiles"
            >
              <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
                <div class="flex flex-wrap justify-between items-center flex-1 gap-4">
                  <div class="flex gap-2">
                    <Button
                      rounded
                      outlined
                      severity="secondary"
                      @click="chooseCallback()"
                    >
                      <template #icon>
                        <Icon
                          icon="system-uicons:picture"
                          class="icon"
                        />
                      </template>
                    </Button>
                    <Button
                      rounded
                      outlined
                      severity="success"
                      :disabled="!files || files.length === 0"
                      @click="uploadEvent(uploadCallback)"
                    >
                      <template #icon>
                        <Icon
                          icon="iconoir:upload"
                          class="icon"
                        />
                      </template>
                    </Button>
                    <Button
                      rounded
                      outlined
                      severity="success"
                      :disabled="!files || files.length === 0"
                      @click="clearAllFile(clearCallback)"
                    >
                      <template #icon>
                        <Icon
                          icon="proicons:cancel"
                          class="icon"
                        />
                      </template>
                    </Button>
                  </div>
                  <ProgressBar
                    :value="totalSizePercent"
                    :show-value="false"
                    class="md:w-20rem h-1 w-full md:ml-auto"
                  >
                    <span class="whitespace-nowrap">{{ totalSize }}B / 1Mb</span>
                  </ProgressBar>
                </div>
              </template>
              <template
                #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }"
              >
                <div class="flex flex-col gap-8 pt-4">
                  <div v-if="files.length > 0">
                    <h5>Pending</h5>
                    <div class="flex flex-wrap gap-4">
                      <div
                        v-for="(file, index) of files"
                        :key="file.name + file.type + file.size"
                        class="p-8 rounded-border flex flex-col border border-surface items-center gap-4"
                      >
                        <div>
                          <img
                            role="presentation"
                            :alt="file.name"
                            :src="file.objectURL"
                            width="100"
                            height="30"
                          />
                        </div>
                        <span
                          class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden"
                          >{{ file.name }}</span
                        >
                        <div>{{ formatSize(file.size) }}</div>
                        <Badge
                          value="Pending"
                          severity="warn"
                        />
                        <Button
                          outlined
                          rounded
                          severity="danger"
                          @click="onRemoveTemplatingFile(file, removeFileCallback, index)"
                        >
                          <template #icon>
                            <Icon
                              icon="proicons:cancel"
                              class="icon"
                            />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div v-if="uploadedFiles.length > 0">
                    <h5>Completed</h5>
                    <div class="flex flex-wrap gap-4">
                      <div
                        v-for="(file, index) of uploadedFiles"
                        :key="file.name + file.type + file.size"
                        class="p-8 rounded-border flex flex-col border border-surface items-center gap-4"
                      >
                        <div>
                          <img
                            role="presentation"
                            :alt="file.name"
                            :src="file.objectURL"
                            width="100"
                            height="30"
                          />
                        </div>
                        <span
                          class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden"
                          >{{ file.name }}</span
                        >
                        <div>{{ formatSize(file.size) }}</div>
                        <Badge
                          value="Completed"
                          class="mt-4"
                          severity="success"
                        />
                        <Button
                          outlined
                          rounded
                          severity="danger"
                          @click="removeUploadedFileCallback(index)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <template #empty>
                <div class="flex items-center justify-center flex-col">
                  <Icon
                    icon="mdi:cloud-upload-outline"
                    class="icon"
                  />
                  <p style="justify-content: center">Select an Image to Upload.</p>
                  <p style="justify-content: center; font-size: 11px">or drag and drop it here</p>
                </div>
              </template>
            </FileUpload>
          </div>
        </div>
      </div>
      <div class="description">
        <label
          for="description"
          class="tag"
          >Description</label
        >
        <InputText
          v-model="value"
          type="text"
          class="input"
        />
      </div>
      <div class="button">
        <Button
          label="Confirm"
          class="btn"
          style="background-size: white; background-color: #333a56"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { DatePicker } from 'primevue'
import Button from 'primevue/button'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

const $primevue = usePrimeVue()
const toast = useToast()

const totalSize = ref(0)
const totalSizePercent = ref(0)
const files = ref([])

const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
  removeFileCallback(index)
  totalSize.value -= file.size // Use actual file size in bytes
  totalSizePercent.value = (totalSize.value / (10 * 1024 * 1024)) * 100 // Convert to percentage of 10MB
}

// const onClearTemplatingUpload = clear => {
//   clear()
//   totalSize.value = 0
//   totalSizePercent.value = 0
// }

const onSelectedFiles = event => {
  files.value = event.files
  files.value.forEach(file => {
    totalSize.value += file.size // Use actual file size in bytes
  })
  // Update percentage after adding all files
  totalSizePercent.value = (totalSize.value / (10 * 1024 * 1024)) * 100
}

const uploadEvent = callback => {
  callback()
}

const clearAllFile = callback => {
  // Remove this line as percentage should be calculated when files are added/removed
  // totalSizePercent.value = totalSize.value / 10
  files.value = []
  // Update percentage after adding all files
  totalSizePercent.value = 0
  callback()
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
<style scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  padding: 15px 40px 40px;
  font-family: 'Montserrat', sans-serif;
  background-color: none;
  border-radius: 20px;
  border: 0.1px solid gray;
}
.form {
  justify-content: space-between;
  align-items: end;
}
.title {
  display: flex;
}
.fill {
  display: flex;
  flex-direction: column;
  padding-top: 15px;
}
.date-fill {
  padding-top: 10px;
}
.description {
  margin-top: 10px;
  width: 100px;
}
.input {
  width: 33vw;
}
.btn {
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
}
</style>
