import { defineStore } from 'pinia'
import type { AuthUser } from '~/interfaces/auth.interface'
import type { User } from '~/interfaces/user.interface'
export const useAuthStore = defineStore('auth', () => {
  const authUser = ref<AuthUser | null>()
  const currentUser = ref<User | null>()
  const token = ref<string | null>()

  function setToken(t: string) {
    token.value = t
    useCookie('Authentication').value = t // persist
    setUserFromToken(t)
  }

  function setUserFromToken(t: string) {
    try {
      const payload = JSON.parse(atob(t.split('.')[1]))
      console.log(payload)
      authUser.value = {
        userId: payload.userId,
        email: payload.email,
      }
    } catch (e) {
      console.error('Invalid JWT', e)
      authUser.value = null
    }
  }

  async function fetchUser() {
    if (!authUser.value?.userId) return
    try {
      const u = await $fetch<User>(`/api/users/${authUser.value.userId}`)
      if (u) {
        currentUser.value = u
      }
    } catch (error) {
      console.error('Failed to fetch user:', error)
      currentUser.value = null
    }
  }

  function logout() {
    authUser.value = null
    token.value = null
    useCookie('Authentication').value = null
  }

  return { authUser, currentUser, setToken, setUserFromToken, logout, fetchUser }
})
