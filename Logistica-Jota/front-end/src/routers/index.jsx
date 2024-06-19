import { createBrowserRouter } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'


const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])
export default router