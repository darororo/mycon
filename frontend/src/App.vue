<template>
  <UsernameInputField /><br />
  <PasswordInputField /><br />
  <EmailInputField /><br />
  <SideBar />
</template>

<script setup>
import UsernameInputField from "./components/AuthInputField/UsernameInputField.vue";
import PasswordInputField from "./components/AuthInputField/PasswordInputField.vue";
import EmailInputField from "./components/AuthInputField/EmailInputField.vue";
import SideBar from "./components/SideBar/SideBar.vue";
</script>
<style scoped></style>