import GoogleProvider from '@auth/core/providers/google'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler(
  {
    // Secret key for JWT signing
    secret: useRuntimeConfig().authSecret,

    // Configure providers
    providers: [
      GoogleProvider({
        clientId: useRuntimeConfig().googleClientId,
        clientSecret: useRuntimeConfig().googleClientSecret,
      }),
    ],

    // Optional: Configure callbacks
    callbacks: {
      jwt: async ({ user, token }) => {
        if (user) {
          token.uid = user.id
        }
        return token
      },
      session: async ({ session, token }) => {
        if (session?.user) {
          session.user.id = token.uid
        }
        return session
      },
    },
  },
  useRuntimeConfig().authSecret
)
