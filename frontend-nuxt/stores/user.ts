import type { UserSignup } from '~/interfaces/auth.interface'
import type { User } from '~/interfaces/user.interface'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>()
  const users = ref([])

  const userSignupDto = ref<UserSignup>({
    username: '',
    email: '',
    firstName: 'john',
    lastName: 'batista',
    gender: 'male',
    role: 'client',
    password: '',
  })

  const baseUrl = `${process.env.API}/users`

  const fetchUser = async (id: number) => {
    const { data, error } = await useFetch<User>(`http://localhost:3100/users/${id}`, {
      method: 'GET',
      key: `user-${id}`, // for deduplication in SSR
    })

    if (error.value) {
      console.error('Failed to fetch user:', error.value)
      return
    }

    user.value = data.value
    console.log(data.value)
    console.log(user.value)
  }

  return { user, users, userSignupDto, fetchUser }
})
