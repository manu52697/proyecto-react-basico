/* eslint react/no-children-prop : 0 */

import { createBrowserRouter } from 'react-router-dom' // lo que el tutorial dice

// Root route
import Root from '../components/navigation/root'

// Pages
import NotFoundPage from '../pages/404/NotFoundPage'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'

// routes
import { PUBLIC_ROUTES } from './public-routes'
import { USER_ROUTES } from './user-routes'
import RedirectIfLoggedIn from '../components/navigation/redirectors/RedirectIfLoggedIn'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useRouter = () => {
  // ? El tutorial indica crearlo de esta manera, o pasando un "fromElements()" con "<Route/>"s
  return createBrowserRouter(
    [
      {
        path: '/*',
        element: <Root />,
        errorElement: <NotFoundPage />,
        children: [...PUBLIC_ROUTES, ...USER_ROUTES] // *** Those are configured in 'src/routes/'
      },
      {
        path: 'login',
        element: <RedirectIfLoggedIn children={<LoginPage/>} />
      },
      {
        path: 'signup',
        element: <RedirectIfLoggedIn children={<RegisterPage/>}/>
      }
    ],
    {
      basename: ''
    }
  )
}
