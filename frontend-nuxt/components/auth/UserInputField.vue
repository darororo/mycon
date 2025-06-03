<template>
  <div class="input-icon-wrapper">
    <Icon
      icon="mi:user"
      class="input-icon"
    />
    <InputText
      v-model="value"
      placeholder="Your Name"
      class="input-with-icon"
      :dt="{
        background: 'transparent',
        color: 'white',
        border: {
          color: '#ccc',
        },
        hover: {
          border: {
            color: '#ccc',
          },
        },
        focus: {
          border: {
            color: '#ccc',
          },
        },
      }"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import { Icon } from '@iconify/vue'

const value = ref('')
</script>

<style scoped>
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

.input-with-icon {
  padding-left: 40px;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
}
</style>
