<template>
  <div>
    <Card
      :pt="{
        root: {
          style: `
            height: auto;
            width: 23rem;
            border: 1px solid #ccc;
            position: relative;
            overflow: visible; 
            border-radius: 10px;
            cursor: pointer;
            transition: border 0.3s ease;
            ${person.selected ? 'border-color: oklch(70.7% 0.022 261.325);' : ''}
          `,
        },
      }"
      :dt="card"
      @click="toggleSelected()"
    >
      <template #content>
        <transition name="fade-scale">
          <div
            v-if="person.selected"
            class="tick"
          >
            <Icon
              name="mdi:check"
              style="color: white; font-size: 14px"
            />
          </div>
        </transition>

        <div class="person-info">
          <img
            :src="person.avatar"
            alt="avatar"
            class="avatar"
          />
          <label class="name-role">
            {{ person.name }}
            <span>{{ person.role }}</span>
          </label>
        </div>

        <hr style="margin: 20px 0; border: 1px solid #ccc" />

        <div class="details">
          <div class="m1">
            <Icon
              class="icon"
              name="mdi:clock"
            />
            <label class="m2">{{ person.hours }}<span>hours/day</span></label>
          </div>
          <div class="m1">
            <Icon
              class="icon"
              name="ion:card"
            />
            <label class="m2">{{ person.price }}<span>/hours</span></label>
          </div>
        </div>

        <div
          class="availability text-black bg-[#e8f5e9]"
          :class="[{ 'bg-red-200': !person.availability, 'text-black': !person.availability }]"
        >
          <span>{{ person.availability ? 'Available' : 'Not Available' }}</span>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
const props = defineProps({
  person: {
    type: Object,
  },
})

const person = props.person
const card = {
  body: {
    padding: 0,
  },
  background: 'white',
  Shadow: 'none',
}

const toggleSelected = () => {
  if (person.availability) {
    person.selected = !person.selected
  }
}
</script>

<style scoped>
.tick {
  position: absolute;
  top: -12px;
  right: -12px;
  width: 30px;
  height: 30px;
  background-color: grey;
  border-radius: 50%;
  border: 3px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  /* box-shadow: 0 0 4px rgba(0, 0, 0, 0.2); */
}

.person-info {
  padding: 20px 20px 0 20px;
  gap: 10px;
  align-items: start;
  flex-direction: row;
  display: flex;
  color: #333;
}

.avatar {
  border-radius: 100%;
  width: 40px;
  height: auto;
}

.name-role {
  font-weight: 600;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  align-items: start;
  flex-direction: column;
  display: flex;
}
.name-role span {
  color: #666666;
  font-weight: 400;
}

.details {
  padding: 0 20px 20px 20px;
  justify-content: space-between;
  display: flex;
}

.availability {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 500;
  width: 40%;
  justify-content: start;
  display: flex;
  padding: 6px 20px;
  border-radius: 100px;
  /* background-color: #e8f5e9; */
  margin: 0 20px 20px 20px;
  border: 1px solid #ccc;
  /* color: #666; */
}

.m1 {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 14px;
  color: grey;
}

.m2 {
  display: flex;
  gap: 6px;
  font-weight: 600;
}
.m2 span {
  font-weight: 400;
}

.icon {
  font-size: 18px;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.35s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.5) rotate(-20deg);
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}
</style>
