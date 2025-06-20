<template>
  <div class="form-wrapper">
    <div style="display: flex; flex-direction: row; gap: 14px; align-items: center">
      <img
        style="height: 36px; border-radius: 100%"
        src="https://i.pinimg.com/736x/e9/7f/d7/e97fd73962ab58a1af2836ba8e9d88ec.jpg"
      />
      <div style="display: flex; flex-direction: column; width: 100%">
        <div
          style="display: flex; align-items: center; justify-content: space-between; width: 100%"
        >
          <label style="font-size: 14px; font-weight: 600">{{ 'John' }}</label>
          <Icon
            style="font-size: 24px; cursor: pointer"
            name="proicons:more"
          />
        </div>
        <span style="color: grey; font-size: 12px">{{ 'SUPERMAN' }}</span>
      </div>
    </div>
    <p style="font-size: 13px; color: black; font-weight: 400; margin: 10px 0">
      {{ post.description || 'empty' }}
    </p>
    <div :class="[post.photos.length > 1 ? 'image-container-grid' : 'image-container-default']">
      <!-- <div style="display: flex; justify-content: center; gap: 8px"> -->
      <Image
        v-for="(photo, index) in post.photos"
        :key="photo.id"
        width="400px"
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
          />
        </template>
      </Image>
    </div>
    <!-- </div> -->
    <hr style="border-color: #ccc; margin: 0" />
    <div style="display: flex; justify-content: space-around">
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
        @click="handleSubmitComment"
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
    <hr style="border-color: #ccc; margin: 0" />
    <PostPopupComment
      v-for="(comment, index) in comments"
      :key="index"
      :content="comment.content"
    />
  </div>
</template>

<script setup lang="ts">
import type { TimelinePost } from '@/interfaces/timeline-post.interface.ts'

const { post } = defineProps<{ post: TimelinePost }>()
const { comments } = storeToRefs(usePostStore())

const isLiked = ref(false)

const toggleLike = () => {
  isLiked.value = !isLiked.value
}
</script>

<style scoped>
.form-wrapper {
  padding: 20px 30px;
  padding-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  background: #f9f9fb;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}
.p-card-body {
  padding: 0;
}

.p-button {
  display: flex;
  align-items: end;
  gap: 6px;
  color: #999;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  background-color: transparent;
  border: none;
  transition:
    color 0.25s ease,
    transform 0.2s ease;
  box-shadow: none !important;
}

.p-button:hover {
  background-color: transparent !important;
  color: #999 !important;
  box-shadow: none !important;
  border: none !important;
}

.p-button:active {
  background-color: transparent !important;
}

.deep-color {
  color: blue;
  transition: color 0.3 ease;
}

.post-image {
  transition: transform 0.3s ease;
}
.post-image:hover {
  transform: scale(1.02);
}
.image-container-grid {
  display: grid;
  gap: 8px;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  margin-bottom: 10px;
}

.image-container-default {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>
