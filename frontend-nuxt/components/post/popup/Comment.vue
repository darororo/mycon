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
      <label style="font-size: 13px; font-weight: 600">Chinatsu</label>
      <p style="font-size: 13px; color: #333">{{ content }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['content'])
</script>
