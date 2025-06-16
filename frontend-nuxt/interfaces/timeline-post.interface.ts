import type { User } from './user.interface'

export interface TimelinePost {
  id: number
  description: string
  comments: string[]
  createdAt: Date
  updatedAt: Date
  user?: User
}
