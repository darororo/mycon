<script setup lang="ts">
import BillingTable from '~/components/table/BillingTable.vue'
import BillingTimeline from '~/components/timeline/BillingTimeline.vue'

const projectOverviewVisible = ref(false)

const dialogStyle = {
  height: '30rem',
  width: '48rem',
  background: '#fff',
  color: 'black',
}
const dialogBreakpoints = {
  '1199px': '75vw',
  '575px': '90vw',
}
</script>

<template>
  <div
    style="width: 100rem"
    class="max-w-[1500px]"
  >
    <div>
      <BillingTimeline style="margin-bottom: 20px" />
    </div>
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
        Billing
      </h2>
    </div>
    <hr style="margin: 12px 0; border-color: #ccc" />
    <div>
      <BillingTable @open-project-dialog="projectOverviewVisible = true" />
    </div>
  </div>
  <div>
    <Dialog
      v-model:visible="projectOverviewVisible"
      :style="dialogStyle"
      :breakpoints="dialogBreakpoints"
      modal
      class="test"
      header="Project Overview"
    >
      <BillingPopupOverview />
    </Dialog>
  </div>
</template>
