import { defineStore } from 'pinia'
import type { IProject } from '~/interfaces/project.interface'

export const useProjectStore = defineStore('project', () => {
  const projects = ref<IProject[]>([])

  const activeProjectPayroll = ref()

  return { projects }
})
