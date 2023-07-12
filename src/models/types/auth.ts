import { type ROLES } from '../roles.enum'

export interface LoginInfo {

  username?: string
  email?: string
  password: string
}

export interface Credentials {
  id: number
  role: 'anonymous' | 'user' | 'admin'
  isLoggedIn: boolean
}

export interface RegisterInfo {
  username: string
  email: string
  password: string
  confirm: string
  role: ROLES
}

// Credentials for unlogged users
// ? Change isLoggedIn to true or false to check proper redirection
export const unLoggedCredentials: Credentials = { id: -1, role: 'anonymous', isLoggedIn: false }
