const api = useApi()
export const googleSignUpServices = {
    googleSignUp: async (payload: string) => {
        return await api('/auth/google-signup', {
            method: 'POST',
            body: payload
        })
    }
}