import { createBrowserRouter } from 'react-router-dom'
import SignUp from '../pages/SignUp/SignUp'
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import Root from '../layout/Root'
import Services from '../pages/Services/Services'
import AboutUs from '../pages/AboutUs/AboutUs'
import Contact from '../pages/Contact/Contact'
import RegisterOK from '../pages/RegisterOK/RegisterOK'
import HomeClient from '../pages/HomeClient/HomeClient'


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
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/aboutUs',
        element: <AboutUs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/registerOK',
        element: <RegisterOK />,
      },
      {
        path: '/HomeClient',
        element: <HomeClient />,
      },
    ],
  },
])
export default router