import { defineStore } from 'pinia'
import type { CreateInventoryDto } from '~/interfaces/inventory.interface'

export const useInventoryStore = defineStore('inventory', () => {
  const inventory = ref<CreateInventoryDto[]>([])

  return { inventory }
})
