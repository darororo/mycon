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
            <Button
              :dt="button"
              :pt="{
                root: {
                  style: 'font-weight: 500; font-size: 14px; font-family: Montserrat, san serif',
                },
              }"
              label="Create Role"
            >
              <template #icon>
                <Icon
                  style="font-size: 20px; background-color: white"
                  name="ic:round-plus"
                />
              </template>
            </Button>
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
          >Assign Manager
          <span
            style="
              padding: 8px;
              background-color: #cf0f47;
              color: white;
              border-radius: 100px;
              font-size: 10px;
              font-family: 'Montserrat', sans-serif;
            "
            >{{ managers.length }}</span
          ></label
        >
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
    username: 'Anna Yamada',
    urlImg: 'https://i.pinimg.com/736x/1d/71/4d/1d714db6e010802da8bd751835ca9819.jpg',
  },
  {
    id: 2,
    username: 'Anna Yamada',
    urlImg: 'https://i.pinimg.com/736x/1d/71/4d/1d714db6e010802da8bd751835ca9819.jpg',
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
const button = {
  primary: {
    background: '#222831',
    color: 'white',
    border: {
      color: 'none',
    },
    hover: {
      background: '#222831',
      color: 'white',
      border: {
        color: 'none',
      },
    },
    active: {
      background: '#222831',
      color: 'white',
      border: {
        color: 'none',
      },
    },
  },
  border: {
    radius: '12px',
  },
  padding: {
    x: '20px',
    y: '10px',
  },
}
</script>
