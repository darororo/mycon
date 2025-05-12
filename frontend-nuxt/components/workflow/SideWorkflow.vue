<template>
  <div class="card">
    <div>
      <h1 class="worklist-list-title">All Workflows</h1>
      <ScrollPanel class="side-work-flow">
        <div class="workflow-list">
          <div class="workflow-item-content">
            <div
              v-for="(item, index) in workflows"
              :key="index"
            >
              <SideWorkflowItem :data="item" /><br />
            </div>
          </div>
        </div>
      </ScrollPanel>
    </div>
  </div>
</template>

<script setup>
import ScrollPanel from 'primevue/scrollpanel'
import SideWorkflowItem from './SideWorkflowItem.vue'
import { ref } from 'vue'

const workflows = ref([
  { id: 1, title: 'workflow 1' },
  { id: 2, title: 'workflow 2' },
  { id: 3, title: 'workflow 3' },
  { id: 4, title: 'workflow 4' },
  { id: 5, title: 'workflow 5' },
])
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  padding-top: 14px;
  height: 900px;
  width: 450px;
  border: 1px rgb(209, 209, 209) solid;
}
.side-work-flow {
  height: 790px;
  width: 438px;
}
.worklist-list-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #333;
  padding: 0 0 20px 20px;
}
.workflow-list {
  display: flex;
  justify-content: center;
}
</style>
