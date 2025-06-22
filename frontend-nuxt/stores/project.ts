import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', () => {
  const projects = ref([])

  const activeProjectPayroll = ref()

  return { projects }
})
