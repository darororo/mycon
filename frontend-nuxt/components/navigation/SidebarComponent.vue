<template>
  <div class="card">
    <Listbox
      v-model="selectedOption"
      :options="groupedOption"
      optionLabel="label"
      optionGroupLabel="label"
      optionGroupChildren="items"
      class="container003"
      listStyle="max-height:1000px"
      :focusOnHover="false"
    >
      <template #optiongroup="slotProps">
        <div
          class="container033"
          :class="{
            'with-margin': slotProps.option.label === 'USER PAGE',
          }"
        >
          <div>{{ slotProps.option.label }}</div>
        </div>
      </template>
      <template #option="slotProps">
        <div
          class="container03"
          :class="{
            'selected-option': selectedOption === slotProps.option,
          }"
        >
          <Icon
            :name="slotProps.option.icon"
            size="22"
            class="icon"
            :class="[
              `flag flag-${slotProps.option.value} mr-2`,
              { 'icon-white': selectedOption === slotProps.option },
            ]"
          />
          <div
            :class="[
              // $style.name01,
              { name011: selectedOption === slotProps.option },
            ]"
          >
            {{ slotProps.option.label }}
          </div>
        </div>
      </template>
    </Listbox>
  </div>
</template>

<script setup>
import { Listbox } from "primevue";
import { ref } from "vue";

const selectedOption = ref();
const groupedOption = ref([
  {
    label: "MAIN MENU",
    items: [
      {
        label: "Dashboard",
        value: "DASH",
        icon: "material-symbols:dashboard-rounded",
      },
      {
        label: "Timeline",
        value: "TIME",
        icon: "vaadin:chart-timeline",
      },
      { label: "Worksheet", value: "WORK", icon: "material-symbols:flowsheet" },
      { label: "Management", value: "MAN", icon: "pixel:management" },
      { label: "Projects", value: "PRO", icon: "eos-icons:project" },
      { label: "Inventory", value: "INVEN", icon: "ic:baseline-inventory" },
      { label: "Billing", value: "BILL", icon: "medical-icon:i-billing" },
    ],
  },

  {
    label: "USER PAGE",
    items: [
      {
        label: "App & Integration",
        value: "APP",
        icon: "icon-park-solid:more-app",
      },
      { label: "Settings", value: "SET", icon: "uil:setting" },
      { label: "Help & Support", value: "HELP", icon: "material-symbols:help" },
      { label: "Logout", value: "OUT", icon: "material-symbols:logout" },
    ],
  },
]);
</script>

<style scoped>
::v-deep(.p-listbox-option.p-listbox-option-selected) {
  border-radius: 100px;
  background-color: #333 !important;
}
::v-deep(.p-listbox-list) {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
::v-deep(.p-listbox-option-group) {
  padding: 0;
  margin-top: 20px;
}
::v-deep(.p-listbox .p-listbox-list .p-listbox-option.p-listbox-option:hover) {
  background-color: none !important;
  color: white;
}
::v-deep(.p-listbox-option) {
  background-color: transparent;
}
::v-deep(
    .p-listbox .p-listbox-list .p-listbox-option.p-listbox-option-selected
  ) {
  background-color: yellow !important;
}
.with-margin {
  padding-top: 150px;
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
  gap: 2px;
  bottom: 6px;
}

.container033 {
  padding-left: 40px;
  padding-bottom: 10px;
  font-size: 14px;
  color: black;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
}

.p-listbox {
  background-color: #f4f4f4;
  border-color: #f4f4f4;
  width: 265px;
  height: 860px;
  border-radius: 10px;
  padding: 0 10px 0 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px,
    rgba(27, 31, 35, 0.25) 0px 0px 0px 1px;
}

.icon-white {
  filter: brightness(0) invert(1);
}

.p-listbox-list {
  display: flex;
  gap: 100px !important;
}
::v-deep(.p-listbox) {
  .p-listbox-option {
    padding-top: 18px;
    padding-left: 20px;
    color: #333;
    border-radius: 100px;
    font-weight: 500;
    height: 44px;
    font-size: 14px;
  }

  /* #pv_id_0_0 {
    padding-top: 20px;
  }

  #pv_id_0_8 {
    padding-top: 130px;
  } */
}
</style>

<!-- <style module>
.name01 {
  font-family: "Montserrat", sans-serif;
}
</style> -->
