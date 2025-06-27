import type { IPhoto } from './photo.interface'
import type { User } from './user.interface'

export interface CreateProjectDto {
  name: string
  clientId?: number
  description: string
  longtitude: number
  latitude: number
  location: string
  price: number
}

export interface IProject {
  id: number
  name: string
  client: User
  description: string
  longtitude: number
  latitude: number
  location: string
  price: number
  photos: IPhoto[]
}
