<template>
  <div
    style="width: 100rem"
    class="max-w-[1500px]"
  >
    <div style="display: flex; justify-content: space-between">
      <div style="display: flex; flex-direction: column; max-width: 1130px">
        <div
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: end;
          "
        >
          <h2
            style="
              font-weight: 600;
              font-size: 22px;
              color: black;
              font-family: 'Montserrat', sans-serif;
            "
          >
            Select Manager
          </h2>
          <div style="flex-direction: row; gap: 10px; display: flex">
            <Select
              v-model="selectedCity"
              :options="cities"
              optionLabel="name"
              placeholder="Filter Name"
              :dt="select"
              :pt="{
                root: {
                  style: 'font-weight: 500; font-size: 14px; font-family: Montserrat, san serif',
                },
              }"
            />
          </div>
        </div>
        <hr style="margin: 12px 0; border-color: #ccc" />
        <div style="display: flex; flex-wrap: wrap; gap: 13px">
          <ManagerCard
            v-for="person in managers"
            :key="person.name"
            :person="person"
          />
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 4px">
        <label
          style="
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 500;
            color: black;
            font-size: 16px;
            font-family: 'Montserrat', sans-serif;
          "
          >Total Selection
          <span
            style="
              padding: 8px 12px;
              background-color: #cf0f47;
              color: white;
              border-radius: 100%;
              font-size: 12px;
              font-family: 'Montserrat', sans-serif;
            "
            >{{ managers.length }}</span
          >
        </label>
        <ScrollPanel
          style="
            position: sticky;
            top: 80px;
            max-height: 1130px;
            width: auto;
            border: 1px solid #ccc;
            padding: 20px;
            border-radius: 10px;
          "
        >
          <div style="gap: 14px; display: flex; flex-direction: column">
            <AssignManagerCard
              v-for="card in cards"
              :key="card.id"
              :item="card"
            />
          </div>
        </ScrollPanel>
      </div>
    </div>
  </div>
</template>

<script setup>
import AssignManagerCard from '~/components/project/AssignManagerCard.vue'
import ManagerCard from '~/components/project/ManagerCard.vue'
const cards = [
  {
    id: 1,
    urlImg: 'https://i.pinimg.com/736x/1d/71/4d/1d714db6e010802da8bd751835ca9819.jpg',
    username: 'Yamada',
    projects: ['Skyline Tower', 'Vila Nova', 'State Stone House'],
  },
  {
    id: 2,
    urlImg: 'https://i.pinimg.com/736x/bf/2a/3a/bf2a3a1daaef400bb3a069990c074113.jpg',
    username: 'Taiki',
    projects: ['Osaka Hotel', 'Tokyo Restaurant', 'Glass Henven'],
  },
]

const managers = reactive([
  {
    name: 'Yuzui Tengen',
    role: 'Servicer',
    avatar: 'https://i.pinimg.com/736x/88/10/0a/88100a490178cd2f05beb67134cf60ef.jpg',
    hours: '1-8',
    price: '10$',
    availability: true,
    selected: false,
  },
  {
    name: 'Kyojuro Rengoku',
    role: 'Trainer',
    avatar: 'https://i.pinimg.com/736x/ae/00/3b/ae003baf057596bf2d62c8ffd0393d30.jpg',
    hours: '4-6',
    price: '15$',
    availability: false,
    selected: false,
  },
  {
    name: 'Itachi Uciha',
    role: 'Trainer',
    avatar: 'https://i.pinimg.com/736x/f3/78/96/f37896c54355b9ad4a6d1c8d43fabb25.jpg',
    hours: '2-6',
    price: '15$',
    availability: false,
    selected: false,
  },
  {
    name: 'Kyojuro Rengoku',
    role: 'Trainer',
    avatar: 'https://i.pinimg.com/736x/ae/00/3b/ae003baf057596bf2d62c8ffd0393d30.jpg',
    hours: '4-6',
    price: '15$',
    availability: false,
    selected: false,
  },
  {
    name: 'Itachi Uciha',
    role: 'Trainer',
    avatar: 'https://i.pinimg.com/736x/f3/78/96/f37896c54355b9ad4a6d1c8d43fabb25.jpg',
    hours: '2-6',
    price: '15$',
    availability: false,
    selected: false,
  },
  {
    name: 'Yuzui Tengen',
    role: 'Servicer',
    avatar: 'https://i.pinimg.com/736x/88/10/0a/88100a490178cd2f05beb67134cf60ef.jpg',
    hours: '1-8',
    price: '10$',
    availability: true,
    selected: false,
  },
  {
    name: 'Kyojuro Rengoku',
    role: 'Trainer',
    avatar: 'https://i.pinimg.com/736x/ae/00/3b/ae003baf057596bf2d62c8ffd0393d30.jpg',
    hours: '4-6',
    price: '15$',
    availability: false,
    selected: false,
  },
  {
    name: 'Itachi Uciha',
    role: 'Trainer',
    avatar: 'https://i.pinimg.com/736x/f3/78/96/f37896c54355b9ad4a6d1c8d43fabb25.jpg',
    hours: '2-6',
    price: '15$',
    availability: false,
    selected: false,
  },
  {
    name: 'Kyojuro Rengoku',
    role: 'Trainer',
    avatar: 'https://i.pinimg.com/736x/ae/00/3b/ae003baf057596bf2d62c8ffd0393d30.jpg',
    hours: '4-6',
    price: '15$',
    availability: false,
    selected: false,
  },
  {
    name: 'Itachi Uciha',
    role: 'Trainer',
    avatar: 'https://i.pinimg.com/736x/f3/78/96/f37896c54355b9ad4a6d1c8d43fabb25.jpg',
    hours: '2-6',
    price: '15$',
    availability: false,
    selected: false,
  },
  {
    name: 'Yuzui Tengen',
    role: 'Servicer',
    avatar: 'https://i.pinimg.com/736x/88/10/0a/88100a490178cd2f05beb67134cf60ef.jpg',
    hours: '1-8',
    price: '10$',
    availability: true,
    selected: false,
  },
  {
    name: 'Kyojuro Rengoku',
    role: 'Trainer',
    avatar: 'https://i.pinimg.com/736x/ae/00/3b/ae003baf057596bf2d62c8ffd0393d30.jpg',
    hours: '4-6',
    price: '15$',
    availability: false,
    selected: false,
  },
  {
    name: 'Itachi Uciha',
    role: 'Trainer',
    avatar: 'https://i.pinimg.com/736x/f3/78/96/f37896c54355b9ad4a6d1c8d43fabb25.jpg',
    hours: '2-6',
    price: '15$',
    availability: false,
    selected: false,
  },
  {
    name: 'Kyojuro Rengoku',
    role: 'Trainer',
    avatar: 'https://i.pinimg.com/736x/ae/00/3b/ae003baf057596bf2d62c8ffd0393d30.jpg',
    hours: '4-6',
    price: '15$',
    availability: false,
    selected: false,
  },
  {
    name: 'Itachi Uciha',
    role: 'Trainer',
    avatar: 'https://i.pinimg.com/736x/f3/78/96/f37896c54355b9ad4a6d1c8d43fabb25.jpg',
    hours: '2-6',
    price: '15$',
    availability: false,
    selected: false,
  },
])

const select = {
  background: 'white',
  border: {
    color: '#ccc',
    radius: '12px',
  },
  hover: {
    border: {
      color: '#ccc',
    },
  },
  focus: {
    border: {
      color: '#ccc',
    },
  },
  padding: {
    x: '18px',
    y: '10px',
    cards,
  },
}
</script>
