import type { IComment } from './comment.interface'
import type { IPhoto } from './photo.interface'
import type { User } from './user.interface'

export interface TimelinePost {
  id: number
  description: string
  comments: IComment[]
  photos: IPhoto[]
  createdAt: Date
  updatedAt: Date
  user?: User
}
