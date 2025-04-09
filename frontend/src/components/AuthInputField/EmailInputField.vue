<template>
  <Form>
    <div class="input-container">
      <InputText
        class="email-input-field"
        name="email"
        type="text"
        placeholder="Email"
      />
      <emailIcon class="email-icon" />
    </div>
  </Form>
</template>

<script setup>
import InputText from "primevue/inputtext";
import emailIcon from "@/assets/icons/authentication/emailIcon.vue";
</script>

<style scoped>
.email-input-field {
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
.email-icon {
  position: relative;
  top: 12px;
  right: 30px;
}
</style>
