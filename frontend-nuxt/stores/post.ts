import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', () => {
  const posts = ref([])

  const postsDummy = ref([
    {
      userName: 'Yem Daro',
      userRole: 'Client',
      postTime: '8:30am-5:00pm',
      postStatus:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
      avatarUrl: 'https://i.pinimg.com/736x/83/6c/a5/836ca5b55fd7af5f4870bfa931b8a082.jpg',
      postImageUrl: 'https://i.pinimg.com/736x/3c/bd/0f/3cbd0f6640f168461388437b7ccb9058.jpg',
      comments: [{ content: 'Test' }],
    },
    {
      userName: 'Yem Daro',
      userRole: 'Client',
      postTime: '8:30am-5:00pm',
      postStatus:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
      avatarUrl: 'https://i.pinimg.com/736x/83/6c/a5/836ca5b55fd7af5f4870bfa931b8a082.jpg',
      postImageUrl: 'https://i.pinimg.com/736x/3c/bd/0f/3cbd0f6640f168461388437b7ccb9058.jpg',
      comments: [{ content: 'Test' }],
    },
    {
      userName: 'Yem Daro',
      userRole: 'Client',
      postTime: '8:30am-5:00pm',
      postStatus:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
      avatarUrl: 'https://i.pinimg.com/736x/83/6c/a5/836ca5b55fd7af5f4870bfa931b8a082.jpg',
      postImageUrl: 'https://i.pinimg.com/736x/3c/bd/0f/3cbd0f6640f168461388437b7ccb9058.jpg',
      comments: [{ content: 'Test' }],
    },
  ])

  const comments = ref([])

  return { posts, postsDummy, comments }
})
