<template>
  <div class="card max-w-[1280px]">
    <Tabs
      :dt="tabs"
      value="0"
    >
      <TabList>
        <Tab
          class="tab"
          value="0"
          >Overview</Tab
        >
        <Tab
          class="tab"
          value="1"
          >Stage</Tab
        >
      </TabList>
      <TabPanels>
        <TabPanel value="1">
          <div class="card">
            <Timeline
              class="custome-timeline"
              :dt="timelineDt"
              :pt="timelinePt"
              :value="events"
            >
              <template #content="slotProps">
                <TimelineCard :item="slotProps.item" />
              </template>
            </Timeline>
          </div>
        </TabPanel>
        <TabPanel value="0">
          <ProjectGallery />
          <ProjectOveriewHeader />
          <ProjectOverviewContent />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectGallery from '~/components/project/ProjectGallery.vue'
import TimelineCard from '~/components/project/timeline/TimelineCard.vue'
const tabs = {
  tabpanel: {
    background: 'transparent',
    padding: '20px 0 0 0',
  },
  tablist: {
    background: 'transparent',
    border: {
      color: '#ccc',
    },
  },
  tab: {
    padding: '8px 40px',
    hover: {
      color: 'grey',
      border: {
        color: '#ccc',
      },
    },
    color: 'grey',
    active: {
      color: 'white',
      border: {
        color: '#ccc',
      },
      background: '#222831',
    },
    border: {
      color: '#ccc',
    },
  },

  active: {
    bar: {
      background: '#ccc',
    },
  },
}
const timelineDt = {
  vertical: {
    event: {
      content: {
        padding: '0 0 20px 30px',
      },
    },
  },
  event: {
    connector: {
      color: '#ccc',
      size: '4px',
      margin: '10px 0',
    },
    marker: {
      content: {
        size: '12px',
        background: '#4bcc50',
      },
      background: '#66BB6A',
      border: {
        color: '#66BB6A',
      },
    },
  },
}
const timelinePt = {
  root: {
    style: 'margin-left: 20rem',
  },
  eventOpposite: {
    style: 'padding: 0 !important',
  },
  eventConnector: {
    style: 'margin: 6px 0; border-radius: 10px',
  },
  eventseparator: {
    style: 'position: relative; top: 70px',
  },
}
const events = ref([
  {
    id: 1,
    months: 'JAN',
    days: '08',
    topic: 'Visit #1 - Foundation laid Phase 1',
    user: 'Taiki Inomata',
    status: 'FINISHED',
    location: 'Phnom Penh, Cambodia',
  },
  {
    id: 2,
    months: 'FEB',
    days: '12',
    topic: 'Inspection #2 - Site Cleanup',
    user: 'Alex Tan',
    status: 'FINISHED',
    location: 'Kampot, Cambodia',
  },
  {
    id: 3,
    months: 'MAR',
    days: '04',
    topic: 'Inspection #3 - Outdoor Cleanup',
    user: 'Tomi Okaney',
    status: 'FINISHED',
    location: 'Phnom Penh, Cambodia',
  },
  {
    id: 4,
    months: 'APR',
    days: '06',
    topic: 'Maven #4 - Meeting Rooo Cleanup',
    user: 'Tomi Okaney',
    status: 'IN PROGRESS',
    location: 'Phnom Penh, Cambodia',
  },
])
</script>

<style scoped>
.custom-timeline {
  position: relative;
  top: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tab {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 12px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
