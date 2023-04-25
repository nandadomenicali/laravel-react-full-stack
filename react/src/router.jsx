import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Users from "./views/Users.jsx";
import NotFound from "./views/NotFound.jsx";
import defaultLayout from "./components/DefaultLayout.jsx";

const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout/>
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
      path: '/Users',
      element: <Users />
    },
    {
      path: '*',
      element: <NotFound />
    }, 
])

export default router;