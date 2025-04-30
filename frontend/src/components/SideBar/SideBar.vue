<!-- <template>
    <div class="card flex justify-center">
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="test" />
    </div>
  </template>
  
  <script setup>
  import SideBarItem from './SideBarItem.vue';
  import Listbox from 'primevue/listbox';
  import { ref } from "vue";
  
  
  const selectedCity = ref();
  const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
    { name: 'Phnom Penh', code: 'PP'},
    {  }
  ]);
  </script>
  
<style scoped>
::v-deep(.p-listbox){
  background-color: var(--p-blue-100);
  width: 300px;

  .p-listbox-option {
    color: black;

  }

}
  


</style> -->




<template>
  <div class="container0003">
    <div class="card flex justify-center">
        <Listbox v-model="selectedOption" :options="groupedOption" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" class="container003" listStyle="max-height:900px">
            <template #optiongroup="slotProps">
                <div class="container033">
                    <div :class="$style.name01">{{ slotProps.option.label }}</div>
                </div>
            </template>
            <template #option="slotProps">
                <div class="container03">
                    <img :alt="slotProps.option.name" :src="`/src/assets/svg/${slotProps.option.icon}`" :class="`flag flag-${slotProps.option} mr-2`" style="width: 32px" />
                    <div :class="$style.name01">{{ slotProps.option.label }}</div>
                </div>
            </template>
        </Listbox>
    </div>
  </div>
</template>

<!-- <template>
  <div class="container0003">
    <div class="card flex justify-center">
      <Listbox v-model="selectedCountry" :options="countries" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" class="container003" listStyle="max-height:600px">
          <template #option="slotProps">
              <div class="container03">
                  <img :alt="slotProps.option.name" :src="`/src/assets/svg/${slotProps.option.icon}`" :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 32px" />
                  <div :class="$style.name01">{{ slotProps.option.name }}</div>
              </div>
          </template>
      </Listbox>
    </div>
  </div>
</template> -->

<script setup>
import { Listbox } from "primevue";
import { ref } from "vue";

const selectedOption = ref();
const groupedOption = ref([
  {
    label: 'Main Menu',
    items: [
      { label: 'Dashboard', value: 'DASH', icon:'dashboard-icon.svg' },
      { label: 'Timeline', value: 'TIME', icon:'timeline-icon.svg' },
      { label: 'Worksheet', value: 'WORK', icon:'worksheet-icon.svg' },
      { label: 'Management', value: 'MAN', icon:'manage-icon.svg' },
      { label: 'Projects', value: 'PRO', icon:'project-icon.svg' },
      { label: 'Inventory', value: 'INVEN', icon:'inven-icon.svg' },
      { label: 'Billing', value: 'BILL', icon: 'bill-icon.svg' },
    ]
  },

  {
    label: 'User Page',
    items: [
      { label: 'App & Integration', value: 'APP', icon: 'appi-icon.svg' },
      { label: 'Settings', value: 'SET', icon: 'setting-icon.svg' },
      { label: 'Help & Support', value: 'HELP', icon: 'help-icon.svg' },
      { label: 'Logout', value: 'OUT', icon: 'logout-icon.svg' },
    ]
  },
  
])
</script>


<style scoped>
  .container0003 {
    width: 300px;
    background-color: aliceblue;
    height: 900px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 20px;
  }

  .container03 {
    display: flex;
    align-items: center;
  }

  .container033 {
    display: flex;
    align-items: center;
  }
  
  .container033 > *:nth-child(2){
    display: flex;
    align-items: center;
    padding-top: 200px;
  }
  
  .p-listbox {
    background-color: aliceblue;
    width: 300px;
  }

  .title01 {
    color: black;
    padding-left: 70px;
    padding-top: 20px;
    font-size: 18px;
  }

  ::v-deep(.p-listbox){
    .p-listbox-option {
      padding-top: 10px;
      padding-left: 30px;
    }
  }
</style>

<style module>
  .name01 {
    font-size: 18px;
    /* font-family: "Montserrat", sans-serif; */
    padding-left: 10px;
  }
</style>