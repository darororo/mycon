<template>
  <div class="container">
    <Card
      :pt="{
        root: {
          style: `
                background-color: white;
                height: 280px;
                color: black;
                box-shadow: none;
                width: 100%;
                box-sizing: border-box;
                `,
        },
        content: {
          style: `
                color: black;
                box-shadow: none;
                width: auto;
                `,
        },
      }"
      :dt="{
        body: {
          padding: '16px 20px',
        },
      }"
    >
      <template #title>
        <h1 style="color: black; font-weight: 600">{{ items.projectName }}</h1>
      </template>
      <template #subtitle>
        <p style="font-size: 14px; color: grey">
          {{ items.content }}
        </p>
      </template>
      <template #content>
        <div>
          <Timeline
            :value="events"
            layout="horizontal"
            align="top"
            style="margin-top: 30px"
            :pt="{
              eventContent: {
                style: `
                    width: 10rem;
                    word-break: break-word;
                    align-self: start;
                `,
              },
            }"
            :dt="{
              event: {
                marker: {
                  size: '32px',
                  background: '#222831',
                },
              },
              horizontal: {
                event: {
                  content: {
                    padding: '8px',
                  },
                },
              },
            }"
          >
            <template #marker="timeProps">
              <div
                v-if="timeProps.item.completed"
                class="w-8 h-8 bg-[#222831] rounded-full flex justify-center items-center"
              >
                <Icon
                  name="mingcute:check-fill"
                  class="text-white"
                />
              </div>

              <div
                v-else
                class="size-8 rounded-full flex justify-center items-center"
                style="background-color: white; border: 1px solid grey"
              >
                <div class="size-3 bg-[#222831] rounded-full"></div>
              </div>
            </template>

            <template #connector="timeProps">
              <div
                style="margin-left: 7px"
                class="w-[80%] h-1 rounded-full mx-1"
                :class="[timeProps.item.completed ? 'bg-[#222831]' : 'bg-gray-400']"
              />
            </template>

            <template #content="timeProps">
              <div style="font-size: 14px; margin-top: 6px; font-weight: 400">
                {{ timeProps.item.name }}
              </div>
            </template>
          </Timeline>
        </div>
      </template>
    </Card>
    <!-- <Divider
      layout="vertical"
      type="solid"
      style="height: 280px; max-height: 280px"
      :dt="{
        border: {
          color: 'grey',
          radius: '10px',
        },
      }"
    /> -->
    <Card
      :pt="{
        root: {
          style: `
                background-color: white;
                color: black;
                box-shadow: none
                `,
        },
        body: {
          style: `
                width: 300px;
                height: 280px;
                display: flex;
                flex-direction: column;
                justify-content: space-between
                `,
        },
      }"
    >
      <template #title>
        <div class="person-info">
          <div style="display: flex; flex-direction: column; align-items: start; gap: 4px">
            <h1 style="font-weight: 600; font-size: 16px">{{ items.name }}</h1>
            <p style="font-size: 14px; color: grey">{{ items.role }}</p>
          </div>
          <img
            style="height: 50px; border-radius: 100%"
            :src="items.UrlProfile"
          />
        </div>
      </template>
      <template #subtitle>
        <div
          style="
            display: flex;
            margin-top: 10px;
            align-items: start;
            flex-direction: column;
            gap: 4px;
          "
        >
          <div style="display: flex; align-items: center; gap: 10px">
            <Icon
              name="mingcute:time-line"
              size="18px"
            />
            <p style="font-size: 14px">{{ items.timePerDay }}</p>
          </div>
          <div style="display: flex; align-items: center; gap: 10px">
            <Icon
              name="mingcute:location-line"
              size="18px"
            />
            <p style="font-size: 14px">{{ items.location }}</p>
          </div>
        </div>
      </template>
      <template #content>
        <div style="display: flex; flex-direction: column; gap: 14px">
          <Button
            style="font-size: 14px"
            :dt="{
              primary: {
                color: 'black',
                background: 'white',
                border: {
                  color: 'grey',
                },
                hover: {
                  color: 'black',
                  background: 'none',
                  border: {
                    color: 'grey',
                  },
                },
                active: {
                  color: 'black',
                  background: 'none',
                  border: {
                    color: 'grey',
                  },
                },
              },
            }"
            label="Contact"
          />
          <Button
            :dt="{
              primary: {
                background: '#222831',
                color: 'white',
                border: {
                  color: 'grey',
                },
                hover: {
                  background: '#222831',
                  color: 'white',
                  border: {
                    color: 'grey',
                  },
                },
                active: {
                  background: '#222831',
                  color: 'white',
                  border: {
                    color: 'white',
                  },
                },
              },
            }"
            style="font-size: 14px"
            label="View Details"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  items: {
    type: Object,
  },
})

const events = ref([
  { name: 'Invoice Created', completed: true },
  { name: 'Invoice Sent', completed: true },
  { name: 'Payment Pending', completed: true },
  { name: 'Payment Received', completed: false },
  { name: 'Completed', completed: false },
])
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  /* border: 1px solid white; */
  border-radius: 10px;
  padding: 10px;
  gap: 20px;
  font-family: 'Montserrat', sans-serif;
}

.person-info {
  display: flex;
  justify-content: space-between;
}
</style>
