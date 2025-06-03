<template>
  <div class="input-icon-wrapper">
    <Icon
      icon="mdi:password-outline"
      class="input-icon"
    />
    <Password
      v-model="value"
      placeholder="Password"
      class="input-with-icon"
      toggleMask
    />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const value = ref('')
</script>

<style scoped>
::v-deep(.p-password-input) {
  background-color: transparent;
  padding-left: 40px;
  border-color: #ccc;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  width: 500px;
  color: white;
}
::v-deep(.p-password-input):focus {
  background-color: transparent;
  border-color: #ccc;
}
::v-deep(.p-password-input):hover {
  border-color: #ccc;
}

.input-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
}

.input-icon {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: gray;
  font-size: 20px;
  pointer-events: none;
}
</style>
