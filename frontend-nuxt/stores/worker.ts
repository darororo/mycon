import { defineStore } from 'pinia'
import type { WorkerDto } from '~/interfaces/worker.interface'

export const useWorkerStore = defineStore('worker', () => {
  const workers = ref<WorkerDto[]>([])

  return { workers }
})
