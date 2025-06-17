import type { User } from '~/interfaces/user.interface'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>()
  const users = ref<User[]>([])

  return { user, users }
})
