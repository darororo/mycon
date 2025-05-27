<template>
  <div
    style="width: 100rem"
    class="max-w-[1500px]"
  >
    <div
      style="display: flex; flex-direction: row; justify-content: space-between; align-items: end"
    >
      <h2
        style="
          font-weight: 600;
          font-size: 22px;
          color: black;
          font-family: 'Montserrat', sans-serif;
        "
      >
        Project History
      </h2>
      <div style="flex-direction: row; gap: 10px; display: flex">
        <Select
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="Filter Project"
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
  </div>
</template>

<script setup>
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
  },
}
</script>
