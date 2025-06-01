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
          <label style="font-size: 14px; font-weight: 600">Taiki Inomata</label>
          <Icon
            style="font-size: 24px; position: relative; right: 20px; cursor: pointer"
            name="proicons:more"
          />
        </div>
        <span style="color: grey; font-size: 12px">Client</span>
      </div>
    </div>
    <p style="font-size: 13px; color: black; font-weight: 400; margin-top: 10px">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, similique in tempora labore
      accusamus sed nulla corrupti laboriosam iste nesciunt vel autem sunt atque culpa. Dolore,
      provident. Eius, quaerat eos.
    </p>
    <div style="display: flex; justify-content: center">
      <img
        class="post-image"
        style="height: auto; border-radius: 4px; margin: 20px 0"
        width="70%"
        src="https://i.pinimg.com/736x/8e/47/cc/8e47cc42c2a8d161ee60fd98d289e510.jpg"
      />
    </div>
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
      <Button class="flex items-center">
        <Icon
          name="iconamoon:comment"
          size="20"
          class="text-[#999999]"
        />
        <span>Comment</span>
      </Button>
    </div>
    <hr style="border-color: #ccc; margin: 0" />
    <div style="margin-top: 10px; display: flex; align-items: start; gap: 10px">
      <img
        style="height: 30px; border-radius: 100%"
        src="https://i.pinimg.com/736x/2b/d6/ed/2bd6ed25527d6a2750e423ea2c619e42.jpg"
      />
      <div
        style="
          background-color: white;
          padding: 10px;
          border-radius: 10px;
          width: 20rem;
          border: 1px solid #ccc;
        "
      >
        <label style="font-size: 13px; font-weight: 600">Chinatsu</label>
        <p style="font-size: 13px; color: #333">
          Lorem, ipsum maxime corporis quaerat? Quisquam nam magni aliquam commodi illum error
          veniam fugiat quasi quis!
        </p>
      </div>
    </div>
  </div>
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
.form-wrapper {
  padding: 30px;
  padding-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  background: #f9f9fb;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}
.p-card-body {
  padding: 0;
}

:deep(.p-card-body) {
  padding: 10px 20px 0 20px;
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

.post-image {
  width: 70%;
  border-radius: 8px;
  transition: transform 0.3s ease;
}
.post-image:hover {
  transform: scale(1.02);
}
</style>
