<template>
  <div class="table-container">
    <DataTable
      style="
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        width: auto;
        max-width: 1500px;
        overflow-x: hidden;
        border-radius: 10px;
        border: 1px solid #ccc;
        margin-bottom: 12px;
      "
      :value="workers"
      :dt="myTable"
      scrollable
      scrollHeight="800px"
    >
      <Column
        v-for="item in myColumns"
        :key="item.field"
        :field="item.field"
        :header="item.header"
        :frozen="item.frozen"
        :pt="{
          bodyCell: {
            style: 'background-color: white;',
          },
        }"
        style="padding: 0 10px 0 20px"
      >
      </Column>

      <Column
        v-for="i in 30"
        :key="i"
        field="day1"
        :header="`Day ${i}`"
        :pt="{
          headerCell: {
            style: `
            background-color: orange;
            margin: 20px;
            `,
          },
          bodyCell: {
            style: `background-color: white`,
          },
        }"
      >
      </Column>

      <Column
        field=""
        header="TOTAL"
        frozen
        alignFrozen="right"
        :pt="{
          bodyCell: {
            style: 'background-color: white',
          },
        }"
        style="padding: 0 20px"
      >
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['workers'])

onMounted(() => {
  console.log(props.workers)
})

const myTable = ref({
  body: {
    cell: {
      border: {
        color: '#ccc',
      },
      padding: '24px',
    },
  },
  header: {
    cell: {
      background: '#008080',
      border: {
        color: '#ccc',
      },
      padding: '10px',
      color: 'white',
    },
  },
  row: {
    color: 'black',
  },
  column: {
    title: {
      font: {
        weight: '600',
      },
    },
  },
})

const myColumns = ref([
  { field: 'id', header: 'ID', frozen: true },
  { field: 'firstName', header: 'First Name', frozen: true },
  { field: 'lastName', header: 'Last Name', frozen: true },
  { field: 'role', header: 'Role', frozen: true },
  { field: 'hourlyRate', header: 'Rate', frozen: true },
])
</script>

<style scoped>
::v-deep(.p-datatable-column-title) {
  width: 90px;
}
</style>
