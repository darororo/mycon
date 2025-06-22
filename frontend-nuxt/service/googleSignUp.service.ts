export const googleSignUpServices = {
    googleSignUp: async (idToken: string) => {
        const api = useApi()
        return await api('/google-sign-up', {
            method: 'POST',
            body: {
                idToken: idToken
            }
        })
    }
}