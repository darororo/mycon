<template>
  <div>
    <Card class="post-card p-card-body">
      <template #title>
        <div class="post-header">
          <div class="user-info">
            <img
              :src="post.avatarUrl"
              alt="profile"
              class="user-avatar"
            />
            <div class="user-details">
              <span class="user-name">{{ post.userName }}</span>
              <span class="use-role">{{ post.userRole }}</span>
            </div>
          </div>
          <div class="more-action">
            <OptionIcon />
            <span class="post-time">{{ post.postTime }}</span>
          </div>
        </div>
      </template>

      <template #content>
        <p class="post-status">{{ post.postStatus }}</p>
        <img
          :src="post.postImageUrl"
          alt="post-image"
          class="post-image"
        />
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
      <PostPopupCommentSection />

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
            @click="handleSubmitComment"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
const isLiked = ref(false)

const postStore = usePostStore()

const post = postStore.posts[0]
const comments = postStore.comments

const commentInput = ref('')
const handleSubmitComment = () => {
  if (commentInput.value == '') return
  const comment = { content: commentInput.value }
  comments.push(comment)

  commentInput.value = ''
  // post.comments.push
}

const toggleLike = () => {
  isLiked.value = !isLiked.value
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
.p-card-body {
  padding: 0;
}

:deep(.p-card-body) {
  padding: 10px 20px 0 20px;
}

.post-card {
  height: auto;
  width: auto;
  background-color: white;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 10px;
  border: solid 0.5px;
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

.post-image {
  height: auto;
  width: auto;
  border-radius: 4px;
}

hr {
  border-width: 1px;
  margin: 0;
  color: #ccc;
  opacity: 0.5;
}

.post-active {
  display: flex;
  justify-content: space-around;
  padding: 2px 0 2px 0;
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
</style>
