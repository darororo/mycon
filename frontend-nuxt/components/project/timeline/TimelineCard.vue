<template>
  <Card class="event-card">
    <template #content>
      <div class="event-card-container">
        <div class="event-date">
          <span class="event-month">{{ item.months }}</span>
          <span class="event-day">{{ item.days }}</span>
        </div>
        <div class="event-card-details">
          <div class="event-card-header">
            <div class="event-card-info">
              <label class="event-card-title">{{ item.topic }}</label>
              <p>
                Managed by: <span>{{ item.user }}</span>
              </p>
            </div>
            <label
              :class="{
                'status-finished': item.status == 'FINISHED',
                'status-in-progress': item.status == 'IN PROGRESS',
              }"
              class="event-card-status"
              >{{ item.status }}</label
            >
          </div>
          <p class="event-card-location">
            Location: <span>{{ item.location }}</span>
          </p>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
defineProps({
  item: Object,
})
</script>

<style scoped>
.event-card-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: flex-start;
}

.event-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
  color: #333;
}

.event-month {
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 600;
}

.event-day {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
}

.event-card-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.event-card-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  border: 1px solid #ccc;
  padding: 0 0 20px 0;
  border-top: none;
  border-left: none;
  border-right: none;
}

.event-card-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #333;
}

.event-card-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Montserrat', sans-serif;
}

.event-card-info span {
  font-size: 13px;
  font-weight: 600;
  color: #333;
}

.event-card-info p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 13px;
  font-weight: 500;
  color: #999999;
}

.event-card-status {
  font-weight: 700;
  color: #4bcc50;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
}

.event-card-location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 13px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  color: #999999;
}

.status-finished {
  color: #4bcc50;
}

.status-in-progress {
  color: #f1c40f;
}

.event-card-location p {
  font-weight: 400;
}

.event-card-location span {
  font-weight: 600;
  color: #333;
}

.event-card {
  background: white;
  width: 600px;
  border-radius: 10px;
  background-color: white;
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
</style>
