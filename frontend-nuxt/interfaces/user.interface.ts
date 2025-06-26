import type { IPhoto } from './photo.interface'

export interface User {
  id: number
  username: string
  firstName: string
  lastName: string
  email: string
  role: string
  address: string
  phone: string
  gender: string
  photos: IPhoto[]
}

export interface UserAuthData {
  id: number
  username: string
  firstName: string
  lastName: string
  email: string
  role: string
}
