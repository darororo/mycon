<template>
  <div style="gap: 14px; display: flex; flex-direction: column">
    <Card
      style="border: 1px solid #ccc; color: black"
      :pt="{
        root: {
          style: `
              width: 18rem;
              border-radius: 1rem;
              background: white;
            `,
        },
      }"
      :dt="cardDt"
    >
      <template #content>
        <div class="card-content">
          <div class="user-info">
            <img
              class="avatar"
              :src="item.urlImg"
              alt="User Avatar"
            />
            <label class="username">{{ item.username }}</label>
          </div>
          <Icon
            class="close-icon"
            name="material-symbols:close"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
const cardDt = {
  body: {
    padding: '8px 10px',
  },
}

defineProps({
  item: {
    type: Object,
  },
})
</script>

<style scoped>
.card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #fff;
}

.username {
  font-weight: 600;
  font-size: 12px;
  color: black;
  font-family: 'Montserrat', sans-serif;
}

.close-icon {
  cursor: pointer;
  font-size: 18px;
  color: black;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.close-icon:hover {
  transform: scale(1.1);
}
</style>
