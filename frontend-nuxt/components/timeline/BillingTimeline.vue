<template>
  <div class="container">
    <Card
      :pt="{
        root: {
          style: `
                background-color: white;
                color: black;
                box-shadow: none;
                width: 100%;
                box-sizing: border-box;
                `,
        },
        content: {
          style: `
                // background-color: red;
                color: black;
                box-shadow: none;
                width: auto;
                `,
        },
      }"
    >
      <template #title>Ash's House</template>
      <template #subtitle>
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters.
      </template>
      <template #content>
        <div>
          <Timeline
            :value="events"
            layout="horizontal"
            align="top"
            :pt="{
              eventMarker: {
                style: `
                        flex: 0 0 32px;
                        align-self: center;
                    `,
              },
              eventContent: {
                style: `
                    width: 10ch;
                    word-break: break-word;
                    align-self: start;
                `,
              },
            }"
            :dt="{
              event: {
                marker: {
                  size: '32px',
                  background: '#4A5069',
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
                class="w-8 h-8 bg-[#4A5069] rounded-full flex justify-center items-center"
              >
                <Icon
                  name="mingcute:check-fill"
                  class="text-white"
                />
              </div>

              <div
                v-else
                class="size-8 bg-[#F4F4F4] rounded-full border border-2 border-black flex justify-center items-center"
              >
                <div class="size-3 bg-[#4A5069] rounded-full"></div>
              </div>
            </template>

            <template #connector="timeProps">
              <div
                class="w-[80%] h-1.5 rounded-md mx-1"
                :class="[timeProps.item.completed ? 'bg-[#4A5069]' : 'bg-gray-400']"
              ></div>
            </template>

            <template #content="timeProps">
              {{ timeProps.item.name }}
            </template>
          </Timeline>
        </div>
      </template>
    </Card>
    <Divider
      layout="vertical"
      type="solid"
    />
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
          <div class="person-container">
            <h1>{{ name }}</h1>
            <p class="role">{{ role }}</p>
          </div>
          <img
            class="image"
            src=""
            alt=" "
          />
        </div>
      </template>
      <template #subtitle>
        <div class="sub-container">
          <div class="sub">
            <Icon
              name="material-symbols:schedule-outline-rounded"
              alt=""
              size="16px"
            />
            <p class="sub-p">1-8 hours / day</p>
          </div>
          <div class="sub">
            <Icon
              name="material-symbols:location-on-outline-rounded"
              alt=""
              size="16px"
            />
            <p class="sub-p">Phnom Penh, Cambodia</p>
          </div>
        </div>
      </template>
      <template #content>
        <div class="button">
          <Button label="Contact" />
          <Button
            class="button2"
            label="View Detail"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  name: { type: String, default: 'Cena Jr.' },
  role: { type: String, default: 'Son of the Invisible' },
})

// const events = ref([
//   'Invoice Created',
//   'Invoice Sent',
//   'Payment Pending',
//   'Payment Received',
//   'Success',
// ])

const events = ref([
  { name: 'Invoice Created', completed: true },
  { name: 'Invoice Created', completed: true },
  { name: 'Invoice Created', completed: true },
  { name: 'Invoice Created', completed: false },
  { name: 'Invoice Created', completed: false },
])
</script>

<style scoped>
.container {
  display: flex;
  width: auto;
  height: auto;
  padding: 8px;
  background-color: #f4f4f4;
}

.role {
  margin-top: -2px;
  font-weight: 400;
  font-size: 14px;
  color: var(--p-zinc-400);
}

.image {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
}

.person-info {
  display: flex;
  justify-content: space-between;
}

.sub {
  display: flex;
  align-items: center;
}

.sub-p {
  font-size: 14px;
  padding-left: 5px;
  font-family: 'Montserrat', sans-serif;
}

.button {
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.p-button {
  background-color: var(--p-neutral-300);
  border-color: var(--p-neutral-500);
  border-radius: 12px;
}

.button2 {
  background-color: #4a5069;
}

.sub-container {
  padding-top: 15px;
}
</style>
