import { joinURL } from 'ufo'

export default defineEventHandler(async event => {
  const proxyUrl = useRuntimeConfig().apiHost

  const path = event.path.replace(/^\/api\//, '') // /api/users -> users
  const target = joinURL(proxyUrl, path)

  return proxyRequest(event, target)
})
