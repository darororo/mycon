<template>
  <Card class="post-card p-card-body">
    <template #title>
      <div class="post-header">
        <div class="user-info">
          <img
            src="@/assets/images/avatar/v1.jpg"
            alt="profile"
            class="user-avatar"
          />
          <div class="user-details">
            <span class="user-name">Yem Daro</span>
            <span class="use-role">Owner Role</span>
          </div>
        </div>
        <div class="more-action">
          <OptionIcon />
          <span class="post-time">08:30am-11:00am</span>
        </div>
      </div>
    </template>

    <template #content>
      <p class="post-text">
        Contrary to popular belief, Lorem Ipsum is not simply random text...
      </p>
      <img
        src="@/assets/images/dailyPost/v1.png"
        alt="Construction Work"
        class="post-image"
      />
    </template>

    <template #footer>
      <hr />
      <div class="post-active">
        <Button :class="['like-btn', { liked: isLiked }]" @click="toggleLike">
          <LikeIcon :liked="isLiked" />
          <span :class="{ 'deep-color': isLiked }">Like</span>
        </Button>
        <Button :class="['comment-btn']">
          <CommentIcon />
          <span>Comment</span>
        </Button>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from "vue";
import OptionIcon from "@/assets/icons/optionIcon.vue";
import LikeIcon from "@/assets/icons/postCard/likeIcon.vue";
import CommentIcon from "@/assets/icons/postCard/commentIcon.vue";

const isLiked = ref(false);

const toggleLike = () => {
  isLiked.value = !isLiked.value;
};
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
  width: 385px;
  background-color: #f4f4f4;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 10px;
  border: solid 0.5px;
  border-color: rgba(153, 153, 153, 0.4);
}
.user-avatar {
  height: 36px;
  width: 36px;
  border-radius: 100%;
}
.post-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
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
  font-size: 10px;
  color: #333;
}
.user-details {
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  line-height: 16px;
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
.post-text {
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
