<template>
    <div class="card flex justify-center">
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-56" />
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Listbox from 'primevue/listbox';
  
  
  const selectedCity = ref();
  const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
    { name: 'Phnom Penh', code: 'PP'}
  ]);
  </script>
  
<style scoped>
:root {
  /* --blue: #1e90ff; */
  /* --white: #ffffff; */
  /* --p-listbox-option-group-color: red;
  --p-list-option-color: red; */
  /* --p-content-hover-background: var(--p-red-500); */
}


.p-listbox {
  background-color: var(--p-blue-500);

}

.p-listbox .p-listbox-option {
  color: var(--p-red-950);
}
</style>