<template>
  <div>
    <Toast />
    <Card>
      <template #content>
        <div class="card-wrapper">
          <NuxtLink
            :to="{ path: `/projects/${item.id}` }"
            no-rel
          >
            <NuxtImg
              v-if="item.photos.length > 0"
              width="360"
              :src="`/api/storage/${project.photos[0].thumbnail}`"
              image-style="border-radius: 10px; min-height: 200px;"
              class="project-image"
            />

            <img
              v-else
              width="360"
              src="/static/assets/default-project.jpg"
              class="project-image"
            />
          </NuxtLink>
          <div class="project-details">
            <div class="project-content">
              <div class="project-header">
                <h1>{{ item.photos[0].thumbnail }}</h1>
                <Icon
                  class="more-option"
                  name="iwwa:option-horizontal"
                  @click="toggle"
                  ria-haspopup="true"
                  aria-controls="overlay_tmenu"
                />
                <TieredMenu
                  ref="menu"
                  id="overlay_tmenu"
                  :model="actions"
                  popup
                  :dt="{
                    background: '#ffffff',
                    border: {
                      color: '#e0e0e0',
                    },
                    item: {
                      color: '#333333',
                      focus: {
                        background: '#f0f0f5',
                        color: '#333333',
                      },
                    },
                    hover: {
                      background: 'red',
                    },
                  }"
                  style="font-size: 14px; font-family: 'Montserrat', sans-serif; font-weight: 500"
                >
                  <!-- <template #item="{ item }">
                    <div class="p-menuitem-content">
                      <span class="menu-label">{{ item.label }}</span>
                      <Icon
                        :name="item.icon"
                        class="menu-icon"
                        @click="updateFormVisible = true"
                      />
                    </div>
                  </template> -->
                  <template #item="{ item, originalEvent }">
                    <div
                      class="p-menuitem-content"
                      @click="onMenuItemClick(item)"
                    >
                      <span class="menu-label">{{ item.label }}</span>
                      <Icon
                        :name="item.icon"
                        class="menu-icon"
                      />
                    </div>
                  </template>
                </TieredMenu>
              </div>
              <p>{{ project.description }}</p>
            </div>
            <div class="project-footer">
              <label class="project-author">{{
                project.client ? project.client.firstName + ' ' + project.client.lastName : 'Anon'
              }}</label>
              <label class="project-price">{{ formatUSD.format(project.price) }}</label>
            </div>
          </div>
        </div>
      </template>
    </Card>
    <UpdateProjectForm
      v-model="updateFormVisible"
      :project="project"
    />
  </div>
</template>

<script setup>
import UpdateProjectForm from './form/updateProjectForm.vue'

const updateFormVisible = ref(false)

const { project } = defineProps({
  project: {
    type: Object,
  },
})

const menu = ref()
const actions = ref([
  {
    label: 'Update',
    icon: 'material-symbols:edit-outline',
  },
  {
    label: 'Delete',
    icon: 'material-symbols:delete-outline',
  },
])

const toggle = event => {
  menu.value.toggle(event)
}

const {
  data: deletedData,
  execute: executeDelete,
  status: deleteStatus,
} = useFetch(`/api/projects/${project.id}`, {
  method: 'DELETE',
  immediate: false,
  watch: false,
})

const toast = useToast()
async function handleDelete() {
  await executeDelete()

  if (deleteStatus.value === 'error') {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Failed to delete project',
      life: 3000,
    })
  } else if (deleteStatus.value === 'sucess') {
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Project deleted successfully',
      life: 3000,
    })
  }
}

const onMenuItemClick = item => {
  if (item.label === 'Update') {
    updateFormVisible.value = true
  } else if (item.label === 'Delete') {
    handleDelete()
  }
  menu.value.hide()
}
</script>

<style scoped>
.menu-icon {
  font-size: 16px;
  color: #333333;
}
.p-menuitem-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 10px;
}
::v-deep(.p-scrollpanel-bar) {
  background: transparent;
}

.card-wrapper {
  display: flex;
  align-items: stretch;
  height: 100%;
  width: 100%;
  color: black;
}

.project-image {
  object-fit: cover;
  border-radius: 10px;
}

.project-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px 28px 10px 24px;
  width: 100%;
  background-color: #f8f8f8;
}
.project-details p {
  line-height: 24px;
  padding-bottom: 20px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #555555;
}

.project-details p {
  font-size: 14px;
  font-weight: 400;
  color: #555555;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
}

.project-content {
  flex: 1;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #333;
}

.project-header h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #333333;
}

.project-details p {
  line-height: 24px;
  padding-bottom: 20px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #555555;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}

.project-author {
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  color: #333;
}

.project-price {
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: #28a745;
}

.more-option {
  font-size: 26px;
  cursor: pointer;
  color: #888888;
}

::v-deep(.p-card-body) {
  padding: 0;
}

::v-deep(.p-card) {
  width: 60rem;
  height: auto;
  display: flex;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: #f8f8f8;
}
</style>
