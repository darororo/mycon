export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie('Authentication', {
    sameSite: 'lax',
    secure: true,
    path: '/',
  }).value
  const authStore = useAuthStore()

  // Public routes that don't require auth
  const publicPaths = ['/auth/login', '/auth/signup']

  // If token exists but user not loaded yet, load from token
  if (token) {
    authStore.setToken(token)
  }

  console.log('🚦 Navigating:')
  console.log('  From:', from.fullPath)
  console.log('  To:', to.fullPath)
  console.log('  Auth cookie:', token)
  console.log('  Auth user:', authStore.authUser)

  // Redirect unauthenticated users trying to access protected routes
  if (!authStore.authUser && !publicPaths.includes(to.path)) {
    return navigateTo('/auth/login')
  }
})
