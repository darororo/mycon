<template>
  <div>
    <Card>
      <template #content>
        <div class="card-wrapper">
          <img
            :src="item.imageUrl"
            class="project-image"
          />
          <div class="project-details">
            <div class="project-content">
              <div class="project-header">
                <h1>{{ item.topic }}</h1>
                <Icon
                  class="more-option"
                  name="iwwa:option-horizontal"
                />
              </div>
              <p>{{ item.content }}</p>
            </div>
            <div class="project-footer">
              <label class="project-author">{{ item.username }}</label>
              <label class="project-price">{{ item.price }}</label>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
  },
})
</script>

<style scoped>
::v-deep(.p-scrollpanel-bar) {
  background: transparent;
}

.card-wrapper {
  display: flex;
  align-items: stretch;
  height: 100%;
  width: 100%;
  color: black;
}

.project-image {
  width: 16rem;
  object-fit: cover;
  border-radius: 10px;
  height: 100%;

  /* prevent dragging of ghost imag */
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

.project-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px 28px 10px 24px;
  width: 100%;
  background-color: #f8f8f8;
}

.project-content {
  flex: 1;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #333;
}

.project-header h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #333333;
}

.project-details p {
  line-height: 24px;
  padding-bottom: 20px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #555555;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}

.project-author {
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  color: #222222;
}

.project-price {
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: #28a745;
}

.more-option {
  font-size: 26px;
  cursor: pointer;
  color: #888888;
}

::v-deep(.p-card-body) {
  padding: 0;
}

::v-deep(.p-card) {
  width: 60rem;
  height: auto;
  display: flex;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: #f8f8f8;
}
</style>
