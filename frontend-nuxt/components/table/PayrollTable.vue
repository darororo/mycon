<template>
  <DataTable
    :value="people"
    :dt="myTable"
    :pt="{
      tableContainer: {
        style: `
      border-radius: 16px;
      max-width: 1200px;
      `,
      },
    }"
    scrollable
    scrollHeight="600px"
  >
    <Column
      v-for="item in myColumns"
      :key="item.field"
      :field="item.field"
      :header="item.header"
      :frozen="item.frozen"
      :style="item.style"
      :pt="{
        headerCell: {
          style: `
        background-color: orange;
        `,
        },
        bodyCell: {
          style: `
        background-color: #f4f4f4`,
        },
      }"
    >
    </Column>

    <Column
      v-for="i in 30"
      :key="i"
      field="day1"
      :header="`Day ${i}`"
      style="min-width: 6rem"
    >
    </Column>

    <Column
      field="rate"
      header="TOTAL"
      frozen
      alignFrozen="right"
      :pt="{
        headerCell: {
          style: `
  background-color: orange;
  `,
        },
        bodyCell: {
          style: `
  background-color: #f4f4f4`,
        },
      }"
    >
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
const { data: people } = await useFetch('https://6817396926a599ae7c39aeae.mockapi.io/users')

const myTable = ref({
  row: {
    background: '#F4F4F4',
    color: 'black',
  },
})

const myColumns = ref([
  { field: 'id', header: 'Name', frozen: true },
  { field: 'firstName', header: 'Name', frozen: true, style: 'background-color: #F4F4F4' },
  { field: 'position', header: 'Role', frozen: true },
  { field: 'rate', header: 'Rate', frozen: true },
])
</script>
