<template>
  <UsernameInputField /><br />
  <PasswordInputField /><br />
  <EmailInputField /><br />
</template>

<script setup>
import UsernameInputField from "./components/AuthInputField/UsernameInputField.vue";
import PasswordInputField from "./components/AuthInputField/PasswordInputField.vue";
import EmailInputField from "./components/AuthInputField/EmailInputField.vue";
</script>
<style scoped></style>
