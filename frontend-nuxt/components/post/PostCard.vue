<template>
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
        <Button class="flex items-center">
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
</template>

<script setup>
const isLiked = ref(false)

const toggleLike = () => {
  isLiked.value = !isLiked.value
}

defineProps({
  post: {},
})
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
