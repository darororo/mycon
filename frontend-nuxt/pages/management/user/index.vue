<template>
  <div>
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
          Users
        </h2>
        <div style="flex-direction: row; gap: 10px; display: flex">
          <Select
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            placeholder="Filter Worker"
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
      <div>
        <UserTable />
      </div>
    </div>

    <Dialog
      v-model:visible="createFormVisible"
      modal
      header="Create Worker"
      :style="{ width: '800px', height: '600px' }"
      :pt="{
        content: {
          style: `
                  padding :0;
              `,
        },
        header: {
          style: 'border-bottom: 1px solid #ccc;',
        },
      }"
      :dt="{
        background: 'white',
        color: 'black',
        header: {
          padding: '30px',
        },
        border: {
          radius: '20px',
        },
      }"
    >
      <ScrollPanel style="height: 480px">
        <CreateWorkerForm />
      </ScrollPanel>
    </Dialog>
  </div>
</template>

<script setup>
import UserTable from '~/components/table/UserTable.vue'
import CreateWorkerForm from '~/components/management/form/CreateWorkerForm.vue'

const createFormVisible = ref(false)
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
const button = {
  primary: {
    background: '#222831',
    color: 'white',
    border: {
      color: 'none',
    },
    hover: {
      background: '#222831',
      color: 'white',
      border: {
        color: 'none',
      },
    },
    active: {
      background: '#222831',
      color: 'white',
      border: {
        color: 'none',
      },
    },
  },
  border: {
    radius: '12px',
  },
  padding: {
    x: '20px',
    y: '10px',
  },
}
</script>
