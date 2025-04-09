<template>
  <Form>
    <div class="input-container">
      <InputText
        class="password-input-field"
        name="password"
        type="text"
        placeholder="Password"
      />
      <passwordIcon class="password-icon" />
    </div>
  </Form>
</template>

<script setup>
import InputText from "primevue/inputtext";
import passwordIcon from "@/assets/icons/authentication/passwordIcon.vue";
</script>

<style scoped>
.password-input-field {
  height: 50px;
  width: 612px;
  background-color: transparent;
  border-width: 1px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: white;
  padding: 0;
  border-radius: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 300;
  padding-right: 40px;
}
.p-inputtext:enabled:hover {
  border-color: gray;
}
.p-inputtext:enabled:focus {
  border-color: gray;
}
.password-icon {
  position: relative;
  top: 8px;
  right: 28px;
}
</style>
