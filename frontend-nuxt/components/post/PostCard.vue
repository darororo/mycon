<template>
  <Card class="post-card p-card-body">
    <template #title>
      <div class="post-header">
        <div class="user-info">
          <img :src="avatarUrl" alt="profile" class="user-avatar" />
          <div class="user-details">
            <span class="user-name">{{ userName }}</span>
            <span class="use-role">{{ userRole }}</span>
          </div>
        </div>
        <div class="more-action">
          <OptionIcon />
          <span class="post-time">{{ postTime }}</span>
        </div>
      </div>
    </template>

    <template #content>
      <p class="post-status">{{ postStatus }}</p>
      <img :src="postImageUrl" alt="post-image" class="w-[100%] h-[360px] py-2" />
    </template>

    <template #footer>
      <hr />
      <div class="post-active">
        <Button :class="{ 'text-blue-400': isLiked }" @click="toggleLike">
          <Icon :name="isLiked ? 'mdi:like' : 'mdi:like-outline'" size="20" class="fill-red-500"
            :class="{ 'text-blue-400': isLiked }" />
          <span :class="{ 'text-blue-400': isLiked }">Like</span>
        </Button>
        <Button class="flex items-center">
          <Icon name="iconamoon:comment" size="20" class="text-[#999999]" />
          <span>Comment</span>
        </Button>
      </div>
    </template>
  </Card>
</template>

<script setup>

const isLiked = ref(false);

const toggleLike = () => {
  isLiked.value = !isLiked.value;
};

defineProps({
  userName: { type: String, default: "Vuth Menghuor" },
  userRole: { type: String, default: "Client" },
  postTime: { type: String, default: "8:30am-5:00pm" },
  postStatus: {
    type: String,
    default:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,",
  },
  postImageUrl: {
    type: String,
    default: "https://picsum.photos/200/300?grayscale",
  },
  avatarUrl: { type: String, default: "https://picsum.photos/id/237/200/300" },
});
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
  width: 400px;
  background-color: #f4f4f4;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 10px;
  border: solid 0.5px;
  border-color: rgba(153, 153, 153, 0.4);
}

.user-avatar {
  height: 40px;
  width: 40px;
  border-radius: 100%;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-name {
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  color: #333;
}

.user-info {
  display: flex;
  align-items: center;
}

.use-role {
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  color: #333;
}

.user-details {
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  line-height: 20px;
}

.post-time {
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  color: #333;
}

.more-action {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.post-status {
  color: #333;
  font-size: 10px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
}

.post-image {
  height: auto;
  width: 343px;
  border-radius: 4px;
}

hr {
  border-width: 0.5px;
  margin: 0;
  color: #999;
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
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  background-color: #f4f4f4;
  border: none;
  transition: color 0.25s ease, transform 0.2s ease;
  box-shadow: none !important;
}

.p-button:hover {
  background-color: #f4f4f4 !important;
  color: #999 !important;
  box-shadow: none !important;
  border: none !important;
}

.p-button:active {
  background-color: #f0f0f0 !important;
}

.deep-color {
  color: blue;
  transition: color 0.3 ease;
}
</style>
