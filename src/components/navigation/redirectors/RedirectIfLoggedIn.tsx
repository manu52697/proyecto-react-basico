import { useNavigate } from 'react-router-dom'

import RedirigibleRoute from './RedirigibleRoute'
import useUserCredentials from '../../../hooks/auth/useUserCredentials'
import type { Credentials } from '../../../models/types/auth'

const RedirectIfLoggedIn = (props: { children: any }): JSX.Element => {
  const credentials = useUserCredentials() as unknown as Credentials
  const navigate = useNavigate()

  const doesRedirect = credentials.isLoggedIn

  function redirectLoggedUsers (): void {
    alert('You are already logged in. Redirecting to home...')
    navigate('/home', { replace: true })
  }

  return (
        <RedirigibleRoute
            redirectionCondition={() => doesRedirect}
            redirectionFunction={redirectLoggedUsers}
        >
            {props.children}
        </RedirigibleRoute>
  )
}

export default RedirectIfLoggedIn
