<template>
  <Card :dt="card">
    <template #content>
      <div class="flex flex-col lg:flex-row max-w-[1280px] w-full gap-4">
        <!-- Large Image -->
        <div class="flex-[2] border rounded-md overflow-hidden">
          <img
            class="w-full h-[460px] object-cover rounded-md"
            :src="photos.length ? `/api/storage/${photos[0].url}` : largeImage"
            alt="Main"
          />
        </div>

        <!-- Grid Thumbnails: 2x2 layout -->
        <div class="w-[600px] grid grid-cols-2 gap-3">
          <img
            v-for="(image, index) in photos.slice(1, 4)"
            :key="image.id || index"
            :src="`/api/storage/${image.url}`"
            alt="Thumbnail"
            class="w-full object-cover rounded-md"
            style="height: calc(100%)"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
const props = defineProps({
  photos: {
    type: Array,
    default: () => [],
  },
  largeImage: {
    type: String,
    default: 'https://i.pinimg.com/736x/38/91/90/389190aa127e385cc141095f339779f0.jpg',
  },
})

const card = {
  body: {
    padding: '0',
  },
  background: 'transparent',
  shadow: 'none',
}
</script>
