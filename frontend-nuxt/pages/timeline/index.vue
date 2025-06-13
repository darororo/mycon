<template>
  <div
    style="width: 100rem"
    class="max-w-[1500px]"
  >
    <div style="display: flex; justify-content: space-between">
      <div style="margin-right: 20px; width: 100%">
        <div
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: end;
          "
        >
          <h2
            style="
              font-weight: 600;
              font-size: 22px;
              color: black;
              font-family: 'Montserrat', sans-serif;
            "
          >
            Timelime
          </h2>
          <div style="flex-direction: row; gap: 10px; display: flex">
            <Select
              v-model="selectedCity"
              :options="cities"
              optionLabel="name"
              placeholder="Filter Timeline"
              :dt="select"
              :pt="{
                root: {
                  style: 'font-weight: 500; font-size: 14px; font-family: Montserrat, san serif',
                },
              }"
            />
            <Button
              :dt="button"
              :pt="{
                root: {
                  style: 'font-weight: 500; font-size: 14px; font-family: Montserrat, san serif',
                },
              }"
              label="Add Timeline"
              @click="createFormVisible = true"
            >
              <template #icon>
                <Icon
                  style="font-size: 20px; background-color: white"
                  name="ic:round-plus"
                />
              </template>
            </Button>
          </div>
        </div>
        <hr style="margin: 12px 0; border-color: #ccc" />

        <div class="grid grid-cols-1 gap-4">
          <div
            v-for="post in posts"
            :key="post"
            class="flex flex-row justify-center w-full h-full"
          >
            <div class="min-w-[360px] max-w-[540px] max-h-[1000px]">
              <PostCard :post="post" />
            </div>
          </div>
        </div>
      </div>
      <div style="border-radius: 10px; padding: 20px 0; border: 1px solid #ccc">
        <h1 class="worklist-list-title">All Workflows</h1>
        <div class="sticky top-20 h-50">
          <SideWorkflow />
        </div>
      </div>
    </div>
    <TimelineForm v-model="createFormVisible" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TimelineForm from '~/components/project/form/TimelineForm.vue'
import SideWorkflow from '~/components/workflow/SideWorkflow.vue'

const createFormVisible = ref(false)
const postStore = usePostStore()
const posts = postStore.posts

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
const selectedCity = ref()
const cities = ref([{ name: 'New York', code: 'NY' }])
</script>

<style scoped>
.worklist-list-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #333;
  padding: 0 0 20px 20px;
}
</style>
