import { ref } from 'vue'

export function useImageUploader() {
  const { apiBase } = usePublicRuntimeConfig()
  const images = ref<File[]>([])

  const loadImages = (selectedImages: File[]) => {
    images.value = selectedImages
    console.log('after add', images.value)
  }

  const removeImage = (index: number) => {
    images.value.splice(index, 1)
    console.log('after remove', images.value)
  }

  const uploadImages = async () => {
    const formData = new FormData()

    images.value.forEach(image => {
      formData.append('files', image) // If your backend expects array: use 'files[]'
    })

    return $fetch(`${apiBase}/upload`, {
      method: 'POST',
      body: formData,
    })
  }

  return {
    images,
    loadImages,
    removeImage,
    uploadImages,
  }
}
