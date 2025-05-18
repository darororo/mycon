<template>
  <Card
    :pt="{
      root: {
        style: `
              margin-right: '100px'
              `,
      },
    }"
    :dt="card"
  >
    <template #content>
      <div class="grid">
        <img
          class="photo large"
          :src="largeImage"
          alt="Main"
        />
        <img
          v-for="smallImag in smallImag"
          :key="smallImag.id"
          class="photo"
          :src="smallImag.img"
          alt="Thumbnail"
        />
      </div>
    </template>
  </Card>
</template>

<script setup>
defineProps({
  largeImage: {
    type: String,
    default: 'https://i.pinimg.com/736x/38/91/90/389190aa127e385cc141095f339779f0.jpg',
  },
  smallImag: {
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
const card = {
  body: {
    padding: '0',
  },
  background: 'transparent  ',
  shadow: 'none',
}
</script>

<style scoped>
.grid {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-left: 40%;
}

.photo {
  position: relative;
  flex: 0 0 calc(34% - 16px);
  margin: 6px;
  overflow: hidden;
  background: black;
  border-radius: 10px;
}

.photo:not(.large)::after {
  content: '';
  display: block;
  padding-top: 100%;
}

.large {
  position: absolute;
  left: 0;
  width: calc(40% - 12px);
  height: calc(100% - 12px);
}
</style>
