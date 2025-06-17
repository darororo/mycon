import { defineStore } from 'pinia'

export const useInventoryStore = defineStore('inventory', () => {
  const inventory = ref({})

  return { inventory }
})
