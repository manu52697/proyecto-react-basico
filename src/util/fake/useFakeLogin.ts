import useUserCredentials from '../../hooks/auth/useUserCredentials'
import { type LoginInfo, type Credentials, unLoggedCredentials } from '../../models/types/auth'
import { type User } from '../../models/user.class'

// TODO replace fake data for an actual check
import { USER_LIST } from './usersPopulator'

export const useFakeLogin: (credentials: LoginInfo) => boolean = (loginCredentials) => {
  let user: User | undefined

  if (loginCredentials.username !== null && loginCredentials.username !== undefined) {
    user = USER_LIST
      .find((u) => u.username === loginCredentials.username && u.password === loginCredentials.password)
  } else if (loginCredentials.email !== null && loginCredentials.email !== undefined) {
    user = USER_LIST
      .find((u) => u.email === loginCredentials.email && u.password)
  }

  const id = USER_LIST.findIndex((usr) => usr === user)

  const credentials: Credentials = user === undefined
    ? unLoggedCredentials
    : {
        id,
        role: user.role,
        isLoggedIn: true
      }

  const success = useUserCredentials(credentials) as boolean

  return success
}
