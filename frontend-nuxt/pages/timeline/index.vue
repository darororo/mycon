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
            Timeline
          </h2>
          <div style="flex-direction: row; gap: 10px; display: flex">
            <Select
              v-model="selectedProject"
              :options="project"
              optionLabel="project"
              placeholder="Filter Project"
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
          <h1>{{ error }}</h1>
          <div
            v-for="post in posts"
            :key="post.id"
            class="flex flex-row justify-center w-full h-full"
          >
            <div class="min-w-[360px] max-w-[540px] max-h-[1000px]">
              <PostCard :post="post" />
            </div>
          </div>
        </div>
      </div>
      <div
        style="border-radius: 10px; padding: 20px 0; border: 1px solid #ccc; margin-bottom: 12px"
      >
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
import PostCard from '~/components/post/PostCard.vue'
import TimelineForm from '~/components/project/form/TimelineForm.vue'
import SideWorkflow from '~/components/workflow/SideWorkflow.vue'

const createFormVisible = ref(false)
const { posts } = storeToRefs(usePostStore())
// const { posts, postsDummy } = postStore

const { data, error, execute } = useFetch('/api/posts', {
  method: 'GET',
})

const project = ref([
  {
    project: 'Residential Building Construction',
    code: 'CONST001',
  },
  {
    project: 'Bridge Renovation Project',
    code: 'CONST002',
  },
  {
    project: 'Road Expansion Program',
    code: 'CONST003',
  },
  {
    project: 'High-Rise Apartment Development',
    code: 'CONST004',
  },
  {
    project: 'Shopping Mall Construction',
    code: 'CONST005',
  },
])

onMounted(async () => {
  await execute()
  posts.value = data.value
  console.log(posts.value)
})

const select = {
  color: 'black',
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
    background: '#203a43',
    color: 'white',
    border: {
      color: 'none',
    },
    hover: {
      background: '#203a43',
      color: 'white',
      border: {
        color: 'none',
      },
    },
    active: {
      background: '#203a43',
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
