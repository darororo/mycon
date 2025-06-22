interface ApiHeaders extends Record<string, string> {
    'Content-Type'?: string
    'Accept'?: string
    'Authorization'?: string
}
export const useApi = () => {
    const config = useRuntimeConfig()

    const api = $fetch.create({
        baseURL: config.public.apiBase,
        timeout: 30000, // 30 seconds
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        } as ApiHeaders,
        onRequest({ request, options }) {
            // Add authentication token if available
            const token = useCookie('auth-token')
            if (token.value) {
                options.headers = {
                    ...options.headers,
                    'Authorization': `Bearer ${token.value}`
                } as Record<string, string>
            }
        },
        onResponse({ response }) {
            console.log('Response status:', response.status)
        },
        onResponseError({ response }) {
            console.log('Response error:', response.status)

            if (response.status === 401) {
                // Handle unauthorized
                navigateTo('/login')
            }
        }
    })

    return api
}