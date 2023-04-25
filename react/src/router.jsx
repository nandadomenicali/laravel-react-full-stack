import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Users from "./views/Users.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import { Children } from "react";

const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout/>,
      children: [    
        {
          path: '/Users',
          element: <Users />
        },
      ],
    },
    {
      path: '/',
      element: <GuestLayout/>
    },
    {
        path: '/login',
        element: <Login />
    },
    {
      path: '/Signup',
      element: <Signup />
    },
    {
      path: '*',
      element: <NotFound />
    }, 
])

export default router;