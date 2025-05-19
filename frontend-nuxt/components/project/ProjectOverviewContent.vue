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
      <div class="panel-body w-full">
        <div class="flex flex-row h-full w-auto">
          <div class="flex flex-col justify-between pr-20">
            <p style="line-height: 28px; font-size: 16px; font-weight: 400; padding-bottom: 30px">
              {{ content }}
            </p>

            <div class="user">
              <img
                style="border: 1px solid #ccc; border-radius: 100%; width: 40px; height: auto"
                :src="UrlImgUser"
              />
              <label
                >{{ username }}<span>{{ role }}</span></label
              >
            </div>
          </div>
          <div
            class="h-[40%] w-[40%] md:h-[240px] md:w-full bg-black mr-4 rounded-lg overflow-hidden"
          >
            <LMap
              ref="map"
              :zoom="zoom"
              :center="[47.21322, -1.559482]"
              :use-global-leaflet="false"
            >
              <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                layer-type="base"
                name="OpenStreetMap"
              />
            </LMap>
          </div>
        </div>
      </div>
    </Panel>
  </div>
</template>

<script setup>
const zoom = ref(6)
const panel = {
  background: 'none',
  color: '#333',
  border: {
    color: '#ccc',
  },
  header: {
    padding: '10px 0 20px 0',
  },
  content: {
    padding: '0 0px',
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
