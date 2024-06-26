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
import ClientProfile from '../components/DataClientProfile/DataClientProfile'
import UpdateDataClient from '../pages/UpdateDataClient/UpdateDataClient'
import DeleteOK from '../pages/DeleteOK/DeleteOK'
import UpdateOK from '../pages/UpdateOK/UpdateOK'
import HomeAdmin from '../pages/HomeAdmin/HomeAdmin'
import AddFactory from '../pages/AddFactory/AddFactory'
import CreateFactoryOK from '../pages/CreateFactoryOK/CreateFactoryOK'
import MakeOrder from '../pages/MakeOrder/MakeOrder'
import OrderOK from '../pages/OrderOK/OrderOK'


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
      {
        path: '/ClientProfile',
        element: <ClientProfile />,
      },
      {
        path: '/UpdateDataClient',
        element: <UpdateDataClient />,
      },
      {
        path: '/DeleteOK',
        element: <DeleteOK />,
      },
      {
        path: '/UpdateOK',
        element: <UpdateOK />,
      },
      {
        path: '/HomeAdmin',
        element: <HomeAdmin />,
      },
      {
        path: '/AddFactory',
        element: <AddFactory />,
      },
      {
        path: '/CreateFactoryOK',
        element: <CreateFactoryOK />,
      },
      {
        path: '/MakeOrder',
        element: <MakeOrder />,
      },
      {
        path: '/OrderOK',
        element: <OrderOK />,
      },
    ],
  },
])
export default router