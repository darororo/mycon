<template>
  <div>
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
</template>

<script setup>
import ScrollPanel from 'primevue/scrollpanel'
import SideWorkflowItem from './SideWorkflowItem.vue'
import { ref } from 'vue'

const workflows = ref([
  { id: 1, title: 'workflow 1' },
  { id: 2, title: 'workflow 2' },
])
</script>

<style scoped>
.side-work-flow {
  height: auto;
  width: 438px;
}

.workflow-list {
  display: flex;
  justify-content: center;
}
</style>
