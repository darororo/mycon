import { joinURL } from 'ufo'

export default defineEventHandler(async event => {
  const proxyUrl = useRuntimeConfig().fileStorage

  console.log(proxyUrl)

  const path = event.path.replace(/^\/api\/storage\//, '') // /storage/upload/image.png -> 'image.png'
  const target = joinURL(proxyUrl, path)

  return proxyRequest(event, target)
})
