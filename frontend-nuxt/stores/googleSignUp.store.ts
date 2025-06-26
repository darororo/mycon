import { defineStore } from 'pinia'
import { googleSignUpServices } from '~/service/googleSignUp.service'
import { setCache } from '~/composables/useCache'
import type { User } from '~/interfaces/user.interface'
export const useGoogleAuthStore = defineStore('googleAuth', () => {

    const user = ref(null)
    const loading = ref(false)
    const error = ref(null)
    const authStore = useAuthStore()
    const router = useRouter()

    const signUpWithGoogle = async (token: string) => {
        loading.value = true
        error.value = null

        try {
            const response = await googleSignUpServices.googleSignUp(token)
            // user.value = response.user || response // depends on API response shape

            if (response.success) {
                setCache('userStore', response.data?.user)
                const u = await $fetch<User>(`/api/users/${response.data?.user?.id}`)
                if (u) {
                    authStore.currentUser = u
                }
                // navigateTo('/dashboard')
                router.push({ name: 'dashboard' })
            }

        } catch (err: unknown) {
            error.value = err?.data?.message || err.message || 'Sign up failed'
        } finally {
            loading.value = false
        }
    }

    return {
        user,
        loading,
        error,
        signUpWithGoogle,
    }
})