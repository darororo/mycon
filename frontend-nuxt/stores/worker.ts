import { defineStore } from 'pinia'

export const useWorkerStore = defineStore('worker', () => {
  const workers = ref([])

  return { workers }
})
