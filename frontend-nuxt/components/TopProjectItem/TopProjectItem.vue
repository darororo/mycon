<template>
  <ScrollPanel
    :pt="{
      root: {
        style: `
        border-radius: 10px;
        border: 1px solid #ccc;
        width: 100%;
        height: 400px`,
      },
    }"
  >
    <Card :dt="card">
      <template #content>
        <div style="gap: 20px; justify-content: space-between; display: flex">
          <img
            style="border-radius: 10px; width: 270px; height: auto"
            :src="`/api/storage/${project.photos[0].thumbnail}`"
            alt="Project Photo"
          />
          <div
            style="
              border-radius: 10px;
              border: 1px solid #ccc;
              padding: 20px 30px 20px 30px;
              justify-content: space-between;
              flex-direction: column;
              display: flex;
            "
          >
            <div>
              <div style="justify-content: space-between; align-items: center; display: flex">
                <label
                  style="font-weight: 600; font-size: 16px; font-family: 'Montserrat', sans-serif"
                  >{{ project.description }}</label
                >
                <div style="cursor: pointer; gap: 6px; align-items: center; display: flex">
                  <span style="color: red; font-size: 14px; font-family: 'Montserrat', sans-serif"
                    >See details</span
                  >
                  <Icon
                    style="color: red; font-size: 24px"
                    name="si:arrow-right-duotone"
                  />
                </div>
              </div>
              <p
                style="
                  padding-right: 10rem;
                  padding-bottom: 20px;
                  width: auto;
                  font-size: 14px;
                  line-height: 30px;
                  font-family: 'Montserrat', sans-serif;
                "
              >
                {{ project.description }}
              </p>
            </div>
            <div style="justify-content: space-between; align-items: center; display: flex">
              <label style="font-size: 14px; font-family: 'Montserrat', sans-serif"
                >Location: <span>{{ project.location }}</span></label
              >
              <label
                style="
                  font-size: 14px;
                  gap: 4px;
                  display: flex;
                  font-family: 'Montserrat', sans-serif;
                "
                >{{ project.client.username
                }}<span style="color: red">{{ project.client.role }}</span></label
              >
            </div>
          </div>
        </div>
      </template>
    </Card>
  </ScrollPanel>
</template>

<script setup lang="ts">
import type { IProject } from '~/interfaces/project.interface'

const props = defineProps<{
  project: IProject
}>()

const card = {
  background: 'none',
  color: 'black',
  body: {
    padding: '20px',
    border: 'none',
  },
  shadow: 'none',
}
</script>

<style scoped></style>
