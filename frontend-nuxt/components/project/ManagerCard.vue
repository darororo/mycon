<template>
  <div>
    <Card
      :pt="{
        root: {
          style: `
            height: auto;
            width: 23rem;
            border: 1px solid grey;
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
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 20px;
            gap: 16px;
          "
        >
          <div
            style="display: flex; align-items: center; justify-content: center"
            class="availability text-black bg-[#e8f5e9] flex"
            :class="[{ 'bg-orange-200': !person.availability, 'text-black': !person.availability }]"
          >
            <span>{{ person.availability ? 'Available' : 'Busy' }}</span>
          </div>
          <div>
            <MultiSelect
              style="
                height: 32px;
                border-radius: 100px;
                margin-bottom: 20px;
                font-size: 12px;
                font-weight: 500;
                display: flex;
                width: 200px;
                max-width: 200px;
                align-items: center;
                font-family: 'Montserrat', sans-serif;
              "
              v-model="selectedCities"
              display="chip"
              :options="project"
              optionLabel="name"
              filter
              placeholder="Select Projects"
              :maxSelectedLabels="3"
              :pt="{
                pcOptionCheckbox: {
                  box: {
                    style: `
                      background-color: #f1f1f1;
                      color: black;
                      border-color: #ccc;
                    `,
                  },
                },
                pcHeaderCheckbox: {
                  box: {
                    style: `
                      background-color: #f1f1f1;
                      color: black;
                      border-color: #ccc;
                    `,
                  },
                },
                pcFilter: {
                  root: {
                    style: `
                      background-color: white;
                      color: black;
                      border-color: #ccc;
                      padding: 0;
                      font-size: 14px;
                      padding: 6px 12px;

                    `,
                  },
                },
              }"
              :dt="{
                chip: {
                  border: {
                    radius: '100px',
                  },
                },
                overlay: {
                  color: 'red',
                  background: 'white',
                  border: {
                    color: '#ccc',
                    radius: '10px',
                  },
                },
                option: {
                  color: 'black',
                  focus: {
                    color: 'black',
                    background: '#eee',
                  },
                },
                optionLabel: {
                  root: {
                    style: `
                      font-family: 'Montserrat', sans-serif;
                      font-size: 14px;
                    `,
                  },
                },
                background: 'white',
                border: {
                  color: 'grey',
                },
                placeholder: {
                  color: 'black',
                },
                color: 'black',
                focus: {
                  border: {
                    color: 'grey',
                  },
                },
              }"
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
const selectedCities = ref()
const project = ref([
  { name: 'Skyline Tower', code: 'ST' },
  { name: 'State Stone House', code: 'SSH' },
  { name: 'Nova Vila', code: 'NV' },
])
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
::v-deep(.p-chip) {
  background-color: #f1f1f1;
  color: black;
}
::v-deep(.p-chip-remove-icon) {
  color: black;
}

.tick {
  position: absolute;
  top: -12px;
  right: -12px;
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
  border: 3px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
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
  margin-bottom: 20px;
  border: 1px solid grey;
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
