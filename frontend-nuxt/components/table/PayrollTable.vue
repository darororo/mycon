<template>
  <DataTable
    :value="people"
    :dt="myTable"
    :pt="{
      tableContainer: {
        style: `
      border-radius: 16px;
      width: 1280px;
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
        background-color: rgb(55, 86, 122);
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
      style="max-width: 80px"
      :pt="{
        headerCell: {
          style: `
  background-color: gray;
  `,
        },
        bodyCell: {
          style: `
  background-color: rgb(222, 222, 222)`,
        },
      }"
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
  background-color: rgb(55, 86, 122);
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

  <!-- <DataTable
    :value="people"
    :dt="myTable"
    :pt="{
      tableContainer: {
        style: `
      border-radius: 16px;
      width: 1000px;
      `,
      },
      header: {
        style: `
          width: 20%;
        `,
      },
    }"
    scrollable
    scrollHeight="600px"
  >
    <ColumnGroup
      type="header"
      :pt="{
        root: {
          style: `
          width: 20%;
          background: red;
        `,
        },
      }"
    >
      <Row>
        <Column
          header="ID"
          :rowspan="2"
        ></Column>
        <Column
          header="Name"
          :rowspan="2"
        ></Column>
        <Column
          header="Role"
          :rowspan="2"
        ></Column>
        <Column
          header="Day"
          :colspan="7"
          :rowspan="1"
        ></Column>
      </Row>
      <Row :pt="{ style: `max-width: 500px;` }">
        <Column
          v-for="i in 31"
          :key="i"
          :header="i"
        ></Column>
      </Row>
      <Column
        header="Total Wage"
        :rowspan="2"
      ></Column>
    </ColumnGroup>
  </DataTable> -->
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
