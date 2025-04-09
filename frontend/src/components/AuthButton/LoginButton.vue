<template>
  <div class="container-login-btn">
    <Button class="login-btn" label="Login" />
  </div>
</template>

<script setup>
import Button from "primevue/button";
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
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
</style>
