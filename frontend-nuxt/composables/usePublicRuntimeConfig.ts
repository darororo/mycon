export function usePublicRuntimeConfig() {
  const runtimConfig = useRuntimeConfig()
  return runtimConfig.public
}
