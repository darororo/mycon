import { defineStore } from 'pinia'
import { googleSignUpServices } from '~/service/googleSignUp.service'

export const useGoogleAuthStore = defineStore('googleAuth', () => {

    const user = ref(null)
    const loading = ref(false)
    const error = ref(null)

    const signUpWithGoogle = async (token: string) => {
        loading.value = true
        error.value = null
        console.log('call');

        try {
            const response = await googleSignUpServices.googleSignUp(token)
            // user.value = response.user || response // depends on API response shape

            if (response.success) {
                navigateTo('/dashboard')
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