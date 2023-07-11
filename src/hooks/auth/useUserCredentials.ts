import { useState } from 'react'
import { type Credentials, unLoggedCredentials } from '../../models/types/auth'

function parseCredentials (credentialString: string): Credentials {
  return JSON.parse(credentialString)
}

function serializeCredentials (credentials: Credentials): string {
  return JSON.stringify(credentials)
}

export default function useUserCredentials (credentials?: Credentials): Credentials | boolean {
  /*
  If the function is called without args, it will try to retrieve credentials from sessionStorage,
  and if there are none, will return the default anonymous credentials.

  If the function is called with credentials, it will try store those in sessionStorage and return
  true or false signaling if has been able to do so.
*/

  // * 1- Create the state. By default, use credentials for anonymous role
  const [userCredentials, setUserCredentials] = useState(unLoggedCredentials)

  // * 2- We check if the argument is undefined
  if (credentials === undefined) {
    const serializedCredentials = sessionStorage.getItem('credentials')
    const currentCredentials = serializedCredentials === null ? unLoggedCredentials : parseCredentials(serializedCredentials)
    setUserCredentials(currentCredentials)
    return userCredentials
  } else { // * 3- Set the state, store the credentials and return true if able, false otherwise
    try {
      sessionStorage.setItem('credentials', serializeCredentials(credentials))
      setUserCredentials(credentials)
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }
}
