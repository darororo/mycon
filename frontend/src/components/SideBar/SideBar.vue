<template>
  <div class="container0003">
    <div class="card flex justify-center">
      <Listbox
        v-model="selectedOption"
        :options="groupedOption"
        optionLabel="label"
        optionGroupLabel="label"
        optionGroupChildren="items"
        class="container003"
        listStyle="max-height:1000px"
      >
        <template #optiongroup="slotProps">
          <div class="container033">
            <div :class="$style.name01">{{ slotProps.option.label }}</div>
          </div>
        </template>
        <template #option="slotProps">
          <div
            class="container03"
            :class="{
              'selected-option': selectedOption === slotProps.option,
            }"
          >
            <Img
              :alt="slotProps.option.name"
              :src="`/src/assets/svg/${slotProps.option.icon}`"
              class="icon"
              :class="[
                `flag flag-${slotProps.option} mr-2`,
                { 'icon-white': selectedOption === slotProps.option },
              ]"
              style="width: 28px; height: auto"
            />
            <div
              :class="[
                $style.name01,
                { name011: selectedOption === slotProps.option },
              ]"
            >
              {{ slotProps.option.label }}
            </div>
          </div>
        </template>
      </Listbox>
    </div>
  </div>
</template>

<script setup>
import { Listbox } from "primevue";
import { ref } from "vue";

const selectedOption = ref();
const groupedOption = ref([
  {
    label: "Main Menu",
    items: [
      { label: "Dashboard", value: "DASH", icon: "dashboard-icon.svg" },
      { label: "Timeline", value: "TIME", icon: "timeline-icon.svg" },
      { label: "Worksheet", value: "WORK", icon: "worksheet-icon.svg" },
      { label: "Management", value: "MAN", icon: "manage-icon.svg" },
      { label: "Projects", value: "PRO", icon: "project-icon.svg" },
      { label: "Inventory", value: "INVEN", icon: "inven-icon.svg" },
      { label: "Billing", value: "BILL", icon: "bill-icon.svg" },
    ],
  },

  {
    label: "User Page",
    items: [
      { label: "App & Integration", value: "APP", icon: "appi-icon.svg" },
      { label: "Settings", value: "SET", icon: "setting-icon.svg" },
      { label: "Help & Support", value: "HELP", icon: "help-icon.svg" },
      { label: "Logout", value: "OUT", icon: "logout-icon.svg" },
    ],
  },
]);
</script>

<style scoped>
::v-deep(.p-listbox-option.p-listbox-option-selected),
::v-deep(.p-listbox-option.p-focus) {
  border-radius: 14px;
}

.container0003 {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
}

.container03 {
  display: flex;
  position: relative;
  align-items: center;
  bottom: 6px;
}

.container033 {
  padding-left: 25px;
  padding-bottom: 10px;
  color: #333333;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
}

.p-listbox {
  background-color: #f4f4f4;
  width: 300px;
  height: 1010px;
  border-radius: 20px;
  padding: 0 10px 0 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}

.icon-white {
  filter: brightness(0) invert(1);
}

.name011 {
  font-size: 15px;
  font-weight: 600;
}

::v-deep(.p-listbox) {
  .p-listbox-option {
    padding-top: 24px;
    padding-left: 30px;
  }

  #pv_id_0_0 {
    padding-top: 30px;
  }

  #pv_id_0_8 {
    padding-top: 200px;
  }
}
</style>

<style module>
.name01 {
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  padding-left: 20px;
}
</style>
