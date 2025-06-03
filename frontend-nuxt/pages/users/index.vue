<script setup lang="ts">
import ContextMenu from '~/components/user/ContextMenu.vue'
import UserPage from '~/components/user/userPage.vue'
</script>

<template>
  <div>
    <h1
      style="
        font-family: 'Montserrat', sans-serif;
        color: black;
        margin: 8px 0 20px 0;
        font-size: 20px;
        font-weight: 600;
      "
    >
      Account Setting
    </h1>
    <div style="display: flex; flex-direction: row; width: 100%; gap: 20px">
      <ContextMenu />
      <UserPage />
    </div>
  </div>
</template>
