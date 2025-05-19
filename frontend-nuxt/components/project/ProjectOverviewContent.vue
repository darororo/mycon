<template>
  <div class="card">
    <Panel
      :pt="{
        root: {
          style: `
            padding: 10px 10px;
        `,
        },
      }"
      :dt="panel"
    >
      <template #header>
        <label
          class="header-title"
          style="color: #333; font-weight: 600; font-size: 18px"
          >Project Overview</label
        >
      </template>
      <div class="panel-body">
        <p
          style="
            line-height: 28px;
            font-size: 16px;
            font-weight: 400;
            padding-bottom: 60px;
            width: 70rem;
          "
        >
          {{ content }}
        </p>
        <img
          style="border: 1px solid #ccc; border-radius: 8px; width: 30%; height: auto"
          src="/home/huor/Downloads/photo_2025-05-18_23-27-36.jpg"
        />
      </div>
      <div class="user">
        <img
          style="border: 1px solid #ccc; border-radius: 100%; width: 40px; height: auto"
          :src="UrlImgUser"
        />
        <label
          >{{ username }}<span>{{ role }}</span></label
        >
      </div>
    </Panel>
  </div>
</template>

<script setup>
const panel = {
  background: 'none',
  color: '#333',
  border: {
    color: 'none',
  },
  content: {
    padding: '0 20px',
  },
}
defineProps({
  content: {
    type: String,
    default:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dolor nemo modi, quia iure ipsam totam tempore repellendus soluta corporis reiciendis voluptatem culpa quae nihil sit ullam? Ipsum, consectetur voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore tenetur iusto, itaque optio quasi magnam beatae eius harum officia quidem praesentium est quia voluptate doloribus hic, animi neque suscipit eos?',
  },
  username: {
    type: String,
    default: 'Taiki Inomata',
  },
  role: {
    type: String,
    default: '(Manager)',
  },
  UrlImgUser: {
    type: String,
    default: 'https://i.pinimg.com/736x/14/97/93/1497930f5e27b94c58d8a53a4be20f33.jpg',
  },
})
</script>
<style scoped>
.header-title {
  font-family: 'Montserrat', sans-serif;
}
.user {
  position: relative;
  bottom: 42px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: grey;
  font-weight: 500;
}
.user label {
  display: flex;
  gap: 4px;
}
.panel-body {
  display: flex;
  align-items: start;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  gap: 30px;
}
</style>
