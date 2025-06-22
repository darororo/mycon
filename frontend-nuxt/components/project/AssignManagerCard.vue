<template>
  <div style="gap: 14px; display: flex; flex-direction: column">
    <Card
      style="border: 1px solid #ccc; color: black"
      :pt="{
        root: {
          style: `
              width: 18rem;
              border-radius: 1rem;
              background: white;
            `,
        },
      }"
      :dt="cardDt"
    >
      <!-- <template #content>
        <div class="card-content">
          <div class="user-info">
            <img
              class="avatar"
              :src="item.urlImg"
              alt="User Avatar"
            />
            <label class="username">{{ item.username }}</label>
          </div>
          <Icon
            class="close-icon"
            name="material-symbols:close"
          />
        </div>
      </template> -->
      <template #content>
        <Accordion
          :dt="{
            panel: {
              border: {
                width: '0',
              },
            },
            content: {
              background: 'white',
              border: {
                width: '0',
              },
              padding: '0',
            },
            header: {
              padding: '20px 0 10px 0',
              background: 'white',
              hover: {
                background: 'white',
              },
              active: {
                background: 'white',
                hover: {
                  background: 'white',
                },
              },
              toggle: {
                icon: {
                  active: {
                    color: 'black',
                    hover: {
                      color: 'black',
                    },
                  },
                  hover: {
                    color: 'black',
                  },
                  color: 'black',
                },
              },
            },
          }"
          value="0"
        >
          <AccordionPanel value="0">
            <AccordionHeader
              ><div class="user-info">
                <img
                  class="avatar"
                  :src="item.urlImg"
                  alt="User Avatar"
                />
                <div class="username-block">
                  <span class="username">{{ item.username }} </span>
                  <span class="role">Manager</span>
                </div>
              </div></AccordionHeader
            >
            <AccordionContent>
              <hr class="divider" />
              <div class="project-section">
                <label class="project-label">Active Projects</label>
                <ul class="project-list">
                  <li
                    v-for="(project, idx) in item.projects"
                    :key="idx"
                  >
                    {{ project }}
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </template>
    </Card>
  </div>
</template>

<script setup>
const cardDt = {
  body: {
    padding: '0 20px 10px 20px',
  },
}

defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.username-block {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.username {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  color: black;
  font-weight: 600;
}
.role {
  font-size: 10px;
  font-weight: 600;
  color: grey;
}
.divider {
  border: 1px solid #ccc;
  margin: 10px 0;
}
.project-section {
  margin: 12px 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
}

.project-label {
  color: black;
  font-weight: 600;
  margin-bottom: 6px;
  display: block;
}

.project-list {
  color: black;
  margin: 10px 0 0 0;
  padding: 0 0 0 18px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  list-style: decimal;
}
.card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #fff;
}

.username {
  font-weight: 600;
  font-size: 12px;
  color: black;
  font-family: 'Montserrat', sans-serif;
}

.close-icon {
  cursor: pointer;
  font-size: 18px;
  color: black;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.close-icon:hover {
  transform: scale(1.1);
}
</style>
