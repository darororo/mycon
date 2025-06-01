import { defineStore } from 'pinia'
export const useAuthStore = defineStore('auth', () => {
  const user = ref({})

  return { user }
})
