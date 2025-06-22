<template>
  <div
    style="width: 100rem"
    class="max-w-[1500px]"
  >
    <div>
      <ScrollPanel
        style="
          height: 330px;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid grey;
          background: #203a43;
          margin-bottom: 20px;
        "
      >
        <BillingTimeline
          v-for="items in billingCard"
          :key="items.id"
          :items="items"
          style="margin-bottom: 20px"
        />
      </ScrollPanel>
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
    <div style="margin-bottom: 12px">
      <BillingTable @open-project-dialog="projectOverviewVisible = true" />
    </div>

    <Dialog
      v-model:visible="projectOverviewVisible"
      :style="dialogStyle"
      :breakpoints="dialogBreakpoints"
      modal
      class="test"
      header="Project Overview"
    >
      <Overview />
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import Overview from '~/components/billing/popup/Overview.vue'
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

const billingCard = [
  {
    id: 1,
    projectName: 'Fresh Gold Hat',
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    name: 'Denji',
    role: 'Son of the Invisible',
    UrlProfile: 'https://i.pinimg.com/736x/9a/03/c2/9a03c2f9daf7e94cae8a959530e1ea32.jpg',
    timePerDay: '1-8 hours / day',
    location: 'Phnom Penh, Cambodia',
  },
  {
    id: 2,
    projectName: 'Small Bronze Tuna',
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    name: 'Hisul',
    role: 'The son the god',
    UrlProfile: 'https://i.pinimg.com/736x/09/8c/a9/098ca9d8aded62f9a1f0454defaae606.jpg',
    timePerDay: '1-8 hours / day',
    location: 'Phnom Penh, Cambodia',
  },
]
</script>
