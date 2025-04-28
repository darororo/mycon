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
    <div>
      <p class="title01">Main Menu</p>
      <div class="card flex justify-center">
        <Listbox v-model="selectedCountry" :options="countries" optionLabel="name" class="container003" listStyle="max-height:600px">
            <template #option="slotProps">
                <div class="container03">
                    <img :alt="slotProps.option.name" :src="`/src/assets/svg/${slotProps.option.icon}`" :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 32px" />
                    <!-- <user-icon/> -->
                    <div :class="$style.name01">{{ slotProps.option.name }}</div>
                </div>
            </template>
        </Listbox>
      </div>
    </div>
  
    <div>
      <p class="title01">User Page</p>
      <div class="card flex justify-center">
        <div class="title01">Main Menu</div>
        <Listbox v-model="selectedOption1" :options="options1" optionLabel="name" class="container003" listStyle="max-height:600px">
            <template #option="slotProps">
                <div class="container03">
                    <img :alt="slotProps.option.name" :src="`/src/assets/svg/${slotProps.option.icon}`" :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 32px" />
                    <!-- <user-icon/> -->
                    <div :class="$style.name01">{{ slotProps.option.name }}</div>
                </div>
            </template>
        </Listbox>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Listbox } from "primevue";
import { ref } from "vue";

const selectedCountry = ref();
const countries = ref([
  { name: 'Dashboard', code: 'DASH', icon:'dashboard-icon.svg' },
  { name: 'Timeline', code: 'TIME', icon:'timeline-icon.svg' },
  { name: 'Worksheet', code: 'WORK', icon:'worksheet-icon.svg' },
  { name: 'Management', code: 'MAN', icon:'manage-icon.svg' },
  { name: 'Projects', code: 'PRO', icon:'project-icon.svg' },
  { name: 'Inventory', code: 'INVEN', icon:'inven-icon.svg' },
  { name: 'Billing', code: 'BILL', icon: 'bill-icon.svg' },
]);

const selectedOption1 = ref();
const options1 = ref([
  {name: 'App & Integration', code: 'APP', icon: 'appi-icon.svg'},
  {name: 'Settings', code: 'SET', icon: 'setting-icon.svg'},
  {name: 'Help & Support', code: 'HELP', icon: 'help-icon.svg'},
  {name: 'Logout', code: 'OUT', icon: 'logout-icon.svg'},
])
</script>


<style scoped>
  .container0003 {
    width: 300px;
    background-color: aliceblue;
    height: 900px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 20px;
  }

  .container03 {
    display: flex;
    align-items: center;
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
    padding-left: 10px;
  }
</style>