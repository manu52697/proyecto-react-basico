import { useNavigate } from 'react-router-dom'
import useUserCredentials from '../../../hooks/auth/useUserCredentials'
import RedirigibleRoute from './RedirigibleRoute'
import type { Credentials } from '../../../models/types/auth'

const ProtectedRoute = (props: any): JSX.Element => {
  const navigate = useNavigate()
  const credentials = useUserCredentials() as unknown as Credentials

  const doesRedirect: boolean = !credentials.isLoggedIn

  const redirectToLogin: () => void = () => {
    // alert the user
    alert('You must be logged in. Redirecting to login page')

    // redirect to login replacing the url on the browser history
    navigate('/login', { replace: true })
  }

  return (
        <RedirigibleRoute
        redirectionCondition={() => doesRedirect}
        redirectionFunction={redirectToLogin}
        >
        {props.children}
        </RedirigibleRoute>
  )
}

export default ProtectedRoute
