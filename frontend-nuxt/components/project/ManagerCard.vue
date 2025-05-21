<template>
  <div style="display: flex; flex-wrap: wrap; gap: 1rem">
    <Card
      v-for="(person, index) in people"
      :key="index"
      :pt="{
        root: {
          style: `
            height: auto;
            width: 22rem;
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
      @click="toggleSelected(index)"
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

        <div class="availability">
          <span>{{ person.availability }}</span>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const card = {
  body: {
    padding: 0,
  },
  background: 'white',
  Shadow: 'none',
}

const people = reactive([
  {
    name: 'Yuzui Tengen',
    role: 'Servicer',
    avatar: 'https://i.pinimg.com/736x/88/10/0a/88100a490178cd2f05beb67134cf60ef.jpg',
    hours: '1-8',
    price: '10$',
    availability: 'available',
    selected: false,
  },
  {
    name: 'Kyojuro Rengoku',
    role: 'Trainer',
    avatar: 'https://i.pinimg.com/736x/ae/00/3b/ae003baf057596bf2d62c8ffd0393d30.jpg',
    hours: '4-6',
    price: '15$',
    availability: 'non available',
    selected: false,
  },
  {
    name: 'Itachi Uciha',
    role: 'Trainer',
    avatar: 'https://i.pinimg.com/736x/f3/78/96/f37896c54355b9ad4a6d1c8d43fabb25.jpg',
    hours: '2-6',
    price: '15$',
    availability: 'non available',
    selected: false,
  },
  {
    name: 'Anna Yamada',
    role: 'Trainer',
    avatar: 'https://i.pinimg.com/736x/cc/bc/bb/ccbcbb4377d41a5ce435b331cb798355.jpg',
    hours: '4-6',
    price: '30$',
    availability: 'non available',
    selected: false,
  },
])

const toggleSelected = index => {
  people[index].selected = !people[index].selected
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
  background-color: #e8f5e9;
  margin: 0 20px 20px 20px;
  border: 1px solid #ccc;
  color: #666;
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
