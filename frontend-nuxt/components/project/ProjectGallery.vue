<template>
  <Card
    :pt="{
      root: {
        style: `
          margin-right: 100px;
        `,
      },
    }"
    :dt="card"
  >
    <template #content>
      <div class="flex flex-col lg:flex-row max-w-[980px]">
        <div class="border">
          <img
            style="width: 90rem; height: auto"
            class="h-full rounded-md"
            :src="largeImage"
            alt="Main"
          />
        </div>
        <div class="flex flex-row lg:flex-col pl-4 gap-2 h-full justify-between">
          <div class="flex flex-row gap-2 w-full h-[50%] max-h-[50%] justify-between">
            <img
              height="auto"
              width="300px"
              v-for="image in smallImages.slice(0, smallImages.length / 2)"
              :key="image.id"
              class="rounded-md"
              :src="image.img"
              alt="Thumbnail"
            />
          </div>
          <div class="flex flex-row gap-2 w-full h-[50%] max-h-[50%] justify-between">
            <img
              v-for="image in smallImages.slice(smallImages.length / 2)"
              :key="image.id"
              height="auto"
              width="300px"
              class="rounded-md"
              :src="image.img"
              alt="Thumbnail"
            />
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
const props = defineProps({
  largeImage: {
    type: String,
    default: 'https://i.pinimg.com/736x/38/91/90/389190aa127e385cc141095f339779f0.jpg',
  },
  smallImages: {
    type: Array,
    default: () => [
      {
        id: 1,
        img: 'https://i.pinimg.com/736x/a0/c0/6e/a0c06e296caeb396a0b381096ca508b5.jpg',
      },
      {
        id: 2,
        img: 'https://i.pinimg.com/736x/d2/5a/72/d25a72b2a4aa0f7e6ffa91f690721e75.jpg',
      },
      {
        id: 3,
        img: 'https://i.pinimg.com/736x/83/7f/75/837f750fbe849e667601818816f28e1b.jpg',
      },
      {
        id: 4,
        img: 'https://i.pinimg.com/736x/ce/6f/7e/ce6f7e1d80bc8e6caa8420ae19fd005d.jpg',
      },
    ],
  },
})

const { largeImage, smallImages } = props

const card = {
  body: {
    padding: '0',
  },
  background: 'transparent',
  shadow: 'none',
}
</script>
