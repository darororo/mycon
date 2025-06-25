import { defineStore } from 'pinia'
import type { AuthUser } from '~/interfaces/auth.interface'
import type { User } from '~/interfaces/user.interface'
export const useAuthStore = defineStore('auth', () => {
  const authUser = ref<AuthUser | null>()
  const currentUser = ref<User>()
  const token = ref<string | null>()

  async function setToken(t: string) {
    token.value = t
    useCookie('Authentication').value = t // persist
    await setUserFromToken(t)
  }

  async function setUserFromToken(t: string) {
    try {
      const payload = JSON.parse(atob(t.split('.')[1]))
      authUser.value = {
        userId: payload.userId,
        email: payload.email,
        username: payload.username,
      }

      await fetchUser()
    } catch (e) {
      console.error('Invalid JWT', e)
      authUser.value = null
    }
  }

  async function fetchUser() {
    const { data } = await useFetch<User>(`/api/users/${authUser.value?.userId}`)
    if (data.value) currentUser.value = data.value
  }

  function logout() {
    authUser.value = null
    token.value = null
    useCookie('Authentication').value = null
  }

  return { authUser, currentUser, setToken, setUserFromToken, logout }
})
