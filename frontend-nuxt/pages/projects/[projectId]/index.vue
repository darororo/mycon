<template>
  <div
    v-if="project"
    class="card max-w-[1280px]"
    style="margin: 0 0 16px"
  >
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
          <OverviewSection :project="project" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
  <div v-else>
    <div class="not-found-wrapper">
      <div class="not-found-container">
        <!-- Icon Section -->
        <div class="icon-wrapper">
          <Icon
            name="si:error-line"
            class="not-found-icon"
          />
        </div>

        <!-- Content Section -->
        <div class="content-section">
          <h2 class="not-found-title">Project Not Found</h2>
          <p class="not-found-description">
            The project you're looking for doesn't exist or may have been moved. Please check the
            project ID and try again.
          </p>

          <!-- Action Buttons -->
          <div class="action-buttons">
            <button
              class="btn btn-primary"
              @click="goBack"
            >
              <Icon
                name="ep:back"
                class="btn-icon"
              />
              Go Back
            </button>
          </div>

          <!-- Help Text -->
          <div class="help-section">
            <p class="help-text">
              Need help? Contact our support team or check your project permissions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import OverviewSection from '~/components/project/OverviewSection.vue'
import TimelineCard from '~/components/project/timeline/TimelineCard.vue'

const routes = useRoute()
const router = useRouter()

const { data: project } = await useFetch(`/api/projects/${routes.params.projectId}`)

const goBack = () => {
  router.push('/projects/create')
}

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
      background: '#203a43',
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

/* Project Not Found Styles */

.not-found-container {
  /* max-width: 500px; */
  width: 100%;
  text-align: center;
  background: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid #e2e8f0;
}

.icon-wrapper {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.not-found-icon {
  width: 80px;
  height: 80px;
  color: #64748b;
  /* opacity: 0.8; */
}

.content-section {
  space-y: 1.5rem;
}

.not-found-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
}

.not-found-description {
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  font-family: 'Montserrat', sans-serif;
}

.btn-icon {
  width: 18px;
  height: 18px;
}

.btn-primary {
  background: #203a43;
  color: white;
}

.btn-secondary {
  background: #f1f5f9;
  color: #475569;
  border: 1px solid #e2e8f0;
}

.help-section {
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
}

.help-text {
  font-size: 0.9rem;
  color: #64748b;
  font-style: italic;
}

.not-found-wrapper {
  margin-left: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
</style>
