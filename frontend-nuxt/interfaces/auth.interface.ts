export interface UserSignup {
  username: string
  password: string
  firstName: string
  lastName: string
  gender: string
  email: string
  role: string
}

export interface UserLogin {
  email: string
  password: string
}
