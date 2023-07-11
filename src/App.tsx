// @ts-nocheck

import { RouterProvider } from 'react-router-dom'
import './App.css'

// Router
import { useRouter } from './routes/useRouter'

// import TaskPage from './pages/tasks/TaskPage';
// import RegisterPage from './pages/auth/RegisterPage';

const App = (): React.JSX.Element => {
  // eslint-disable-next-line lines-around-comment
  //
  // //? El tutorial indica crearlo de esta manera, o pasando un "fromElements()" con "<Route/>"s
  // const router = createBrowserRouter(
  //   [
  //     {
  //       path: "/*",
  //       element: <Root />,
  //       errorElement: <NotFoundPage />,
  //       children: [...PUBLIC_ROUTES, ...USER_ROUTES], // *** This are configured in 'src/routes/'
  //     },
  //     {
  //       path: "login",
  //       element: <RedirectIfLoggedIn children=<LoginPage/> />,
  //     },
  //   ],
  //   {
  //     basename: "",
  //   }
  // );

  const router = useRouter()

  return (

    // *** Lo que el tutorial indica
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
