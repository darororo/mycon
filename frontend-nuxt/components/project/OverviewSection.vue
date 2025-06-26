<template>
  <section>
    <ProjectGallery :photos="project?.photos" />
    <ProjectOverviewHeader :project="project" />
    <ProjectOverviewContent :project="project" />
  </section>
</template>

<script setup lang="ts">
import ProjectGallery from './ProjectGallery.vue'
import ProjectOverviewContent from './ProjectOverviewContent.vue'
import ProjectOverviewHeader from './ProjectOverviewHeader.vue'

const { project } = defineProps({ project: { type: Object } })
</script>
