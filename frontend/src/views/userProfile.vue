<template>
  <div class="header-right">
    <userProfileDropdown
      @logout="handleLogout"
      @settings="handleSettings"
      @help="handleHelp"
    />
  </div>
</template>

<script>
import userProfileDropdown from "@/components/userProfileDropdown.vue";

export default {
  name: "userProfile",
  components: {
    userProfileDropdown,
  },
  methods: {
    handleLogout() {
      console.log("Logout clicked");
    },
    handleSettings() {
      console.log("Settings clicked");
    },
    handleHelp() {
      console.log("Help clicked");
    },
  },
};
</script>

<style scoped>
.header-right {
  padding: 40px;
}
</style>
