import { createBrowserRouter } from 'react-router-dom'
import SignUp from '../pages/SignUp/SignUp'
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import Root from '../layout/Root'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
])
export default router