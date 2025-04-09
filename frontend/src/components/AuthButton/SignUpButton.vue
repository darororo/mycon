<template>
  <div class="container-sign-in-btn">
    <Button class="sign-in-btn" label="Sign Up" />
  </div>
</template>

<script setup>
import Button from "primevue/button";
</script>

<style scoped>
.container-sign-in-btn {
  display: flex;
  justify-content: center;
  height: 80px;
  width: 612px;
  border: 1px solid white;
  border-radius: 999px;
  background-color: white;
  cursor: pointer;
}
.sign-in-btn {
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
</style>
