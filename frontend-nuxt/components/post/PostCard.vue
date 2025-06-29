<template>
  <div>
    <Card class="post-card p-card-body">
      <template #title>
        <div class="post-header">
          <div class="user-info">
            <img
              :src="'https://i.pinimg.com/736x/83/6c/a5/836ca5b55fd7af5f4870bfa931b8a082.jpg'"
              alt="profile"
              class="user-avatar"
            />
            <div class="user-details">
              <span class="user-name">{{ post.user?.username ?? ' ANON' }}</span>
              <span class="use-role">{{ post.user?.role ?? 'User' }}</span>
            </div>
          </div>
          <div class="user-details">
            <div class="more-action">
              <Icon
                name="material-symbols:more-horiz"
                class="option-button"
                @click="toggle"
              />
              <TieredMenu
                ref="menu"
                id="overlay_tmenu"
                :model="items"
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
            <div class="more-action">
              <OptionIcon />
              <span class="post-time">{{ NewDate || 'HELP' }}</span>
            </div>
          </div>
        </div>
      </template>

      <template #content>
        <p class="post-status">{{ post.description }}</p>
        <div class="image-container">
          <Image
            v-for="(photo, index) in post.photos"
            :key="photo.id"
            width="500"
            :src="`/api/storage/${photo.thumbnail}`"
            alt="post-image"
            class="post-image"
            preview
          >
            <template #original="slotProps">
              <Image
                width="800"
                height="800"
                :src="`/api/storage/${photo.url}`"
                alt="preview"
                :style="slotProps.style"
                @click="slotProps.onClick"
              />
            </template>
          </Image>
        </div>
      </template>

      <template #footer>
        <hr />
        <div class="post-active">
          <Button
            :class="{ 'text-blue-400': isLiked }"
            @click="toggleLike"
          >
            <Icon
              :name="isLiked ? 'mdi:like' : 'mdi:like-outline'"
              size="20"
              class="fill-red-500"
              :class="{ 'text-blue-400': isLiked }"
            />
            <span :class="{ 'text-blue-400': isLiked }">Like</span>
          </Button>
          <Button
            @click="commentVisible = true"
            class="flex items-center"
          >
            <Icon
              name="iconamoon:comment"
              size="20"
              class="text-[#999999]"
            />
            <span>Comment</span>
          </Button>
        </div>
      </template>
    </Card>

    <Dialog
      v-model:visible="commentVisible"
      modal
      header="Comment"
      :style="{ width: '800px', height: '600px' }"
      :pt="{
        content: {
          style: 'padding: 0;',
        },
        header: {
          style: 'border-bottom: 1px solid #ccc;',
        },
      }"
      :dt="{
        background: 'white',
        color: 'black',
        header: {
          padding: '10px 30px',
        },
        border: {
          radius: '20px',
        },
      }"
    >
      <CommentSection :post="post" />

      <template #footer>
        <div style="width: 100%; display: flex; gap: 10px; align-items: center; margin-top: 10px">
          <div style="display: flex; gap: 14px; align-items: center; width: 100%; padding: 0 6px">
            <img
              style="height: 30px; border-radius: 100%"
              src="https://i.pinimg.com/736x/ee/ef/ac/eeefac433aafc6cc01712e1fe1a79531.jpg"
            />
            <InputText
              v-model="commentInput"
              placeholder="Write a comment..."
              style="flex: 1; font-size: 13px; font-family: 'Montserrat', sans-serif; color: black"
              :dt="inputCommentDt"
            />
          </div>
          <Button
            label="Submit"
            :pt="commentSubmitBtnPt"
            :dt="{
              hover: {
                background: '#2563eb',
              },
              active: {
                background: '#1d4ed8',
              },
            }"
            @click="handleSubmitComment()"
          />
        </div>
      </template>
    </Dialog>
    <ProjectFormUpdateTimelineForm
      v-model="updateFormVisible"
      :post="post"
    />
  </div>
</template>

<script setup lang="ts">
import { Image } from 'primevue'
import CommentSection from './popup/CommentSection.vue'
import type { TimelinePost } from '~/interfaces/timeline-post.interface'
const toast = useToast()

const OldDate = post.createdAt
const NewDate = new Date(OldDate).toDateString()
const { post } = defineProps<{ post: TimelinePost }>()

const isLiked = ref(false)

const { comments } = storeToRefs(usePostStore())

// const post = postStore.posts[0]
// const comments = postStore.comments

const commentInput = ref('')

const menu = ref()

const updateFormVisible = ref(false)

const items = ref([
  {
    label: 'Update',
    icon: 'material-symbols:edit-outline',
  },
  {
    label: 'Delete',
    icon: 'material-symbols:delete-outline',
  },
])

const body = computed(() => ({
  content: commentInput.value,
}))

const { data, status, clear, execute, error } = useFetch(`/api/posts/${post.id}/comment`, {
  method: 'POST',
  body,
  watch: false,
  immediate: false,
})

const handleSubmitComment = async () => {
  // console.log('CONTENT: ', commentInput.value)
  // if (commentInput.value == '') return
  // const comment = { content: commentInput.value }
  // comments.push(comment)
  // await execute()
  if (!commentInput.value.trim()) return

  await execute({
    body: {
      content: commentInput.value,
    },
  })

  if (status.value === 'error') {
    toast.add({
      severity: 'error',
      summary: 'Comment failed to Create',
      detail: error.value,
      life: 3000,
    })
  } else {
    toast.add({
      severity: 'success',
      summary: 'Comment created successfully.',
      // detail: 'Your project has been created.',
      detail: data.value,
      life: 3000,
    })
    comments.value = data.value.post.comments
  }

  // console.log(comments.value)
  // console.log(data.value.post.comments)

  clear()
  commentInput.value = ''
  // post.comments.push
}

const toggleLike = () => {
  isLiked.value = !isLiked.value
}

const toggle = event => {
  menu.value.toggle(event)
}

const onMenuItemClick = item => {
  if (item.label === 'Update') {
    updateFormVisible.value = true
  } else if (item.label === 'Delete') {
    return ''
  }
  menu.value.hide()
}

const commentVisible = ref(false)

const inputCommentDt = {
  background: 'white',
  border: {
    color: '#ccc',
    radius: '10px',
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
    color: 'black',
  },
}

const commentSubmitBtnPt = {
  root: {
    style: `
        background-color: #3b82f6;
        color: white;
        padding: 8px 20px;
        font-size: 14px;
        font-weight: 600;
        font-family: Montserrat, sans-serif;
        border-radius: 8px;
        border: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease, transform 0.2s ease;
      `,
  },
}
</script>

<style scoped>
::v-deep(.p-card-body) {
  padding: 10px 10px 2px;
}

.post-card {
  height: auto;
  width: 500px;
  background-color: white;
  border-radius: 10px;
  border: solid 1px;
  border-color: rgba(153, 153, 153, 0.4);
}

.user-avatar {
  height: 30px;
  width: 30px;
  border-radius: 100%;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-name {
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  color: black;
}

.user-info {
  display: flex;
  align-items: center;
}

.use-role {
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  color: #333;
}

.user-details {
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  line-height: 18px;
}

.post-time {
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  color: black;
}

.more-action {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.post-status {
  color: black;
  font-size: 12px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 10px;
}

/* .post-image {
  height: auto;
  width: auto;
  min-width: 300px;
  align-self: center;
  border-radius: 4px;
} */

hr {
  border-width: 1px;
  margin: 0;
  color: #ccc;
  opacity: 0.5;
}

.post-active {
  display: flex;
  justify-content: space-around;
  padding: 8px 0 0;
}

.p-button {
  display: flex;
  align-items: end;
  gap: 6px;
  color: #999;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  background-color: white;
  border: none;
  transition:
    color 0.25s ease,
    transform 0.2s ease;
  box-shadow: none !important;
}

.p-button:hover {
  background-color: white !important;
  color: #999 !important;
  box-shadow: none !important;
  border: none !important;
}

.p-button:active {
  background-color: white !important;
}

.deep-color {
  color: blue;
  transition: color 0.3 ease;
}

.image-container {
  display: grid;
  gap: 4px;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  /* max-height: 400px; */
}

.option-button {
  cursor: pointer;
  size: 24px;
}

.p-menuitem-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 10px;
}

.menu-icon {
  font-size: 16px;
  color: #333333;
}

/* .image-container span:nth-child(3) {
  grid-column: span 2;
  grid-row: span 1;
  width: 100%;
  height: auto;
} */
</style>
