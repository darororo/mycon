<template>
  <Card>
    <template #content>
      <div class="card-header">
        <TickSolidIcon />
        <p class="card-status-message">{{ statusMessage }}</p>
        <OptionIcon />
      </div>
      <div class="card-footer">
        <span class="user-role">{{ userRole }}</span>
        <p class="timestamp">{{ timestamp }}</p>
      </div>
    </template>
  </Card>
</template>

<script setup>
import OptionIcon from "@/assets/icons/optionIcon.vue";
import TickSolidIcon from "@/assets/icons/tickSolidIcon.vue";
import { ref } from "vue";

const statusMessage = ref(
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
);
const userRole = ref("Manager");
const timestamp = ref("3 days ago");
</script>
<style scoped>
.p-card-body {
  padding: 0;
}
:deep(.p-card-body) {
  padding: 20px 20px 4px 20px;
}
.p-card {
  height: auto;
  width: 400px;
  background-color: transparent;
  border: 1px solid #cccccc;
}
.card-status-message {
  color: #333;
  font-family: "Montserrat", sans-serif;
  line-height: 24px;
  font-size: 14px;
  width: 24rem;
  margin: 0;
}

.card-header {
  display: flex;
  align-items: start;
  gap: 6px;
}
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
}
.user-role {
  margin-left: 24px;
  color: #666666;
  font-size: 14px;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
}
.timestamp {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #333;
  font-weight: 400;
}
</style>
