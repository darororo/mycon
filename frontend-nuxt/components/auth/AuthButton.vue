<template>
  <div class="container-login-btn">
    <Button
      class="login-btn"
      name="button"
      :label="label"
    />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    value: '',
  },
})
</script>

<style scoped>
.container-login-btn {
  display: flex;
  justify-content: center;
  height: 80px;
  width: 612px;
  border: 1px solid white;
  border-radius: 999px;
  background-color: white;
  cursor: pointer;
}

.login-btn {
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  background-color: white;
  border: none;
}

.p-button:not(:disabled):hover {
  background: white;
  border: 1px white;
}
</style>
