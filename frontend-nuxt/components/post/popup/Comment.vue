<template>
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
      <div style="display: flex; justify-content: space-between; align-items: center">
        <label style="font-size: 13px; font-weight: 600">Chinatsu</label>
        <span style="font-size: 12px; color: #333">{{ formattedTime }}</span>
      </div>
      <p style="font-size: 13px; color: #333">{{ content }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps(['content'])

const now = new Date()
const formattedTime = ref(
  `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
    now.getDate()
  ).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(
    now.getMinutes()
  ).padStart(2, '0')}`
)
</script>
