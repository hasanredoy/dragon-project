import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Shared/login/Login";
import Register from "../pages/Shared/register/Register";
import NewsDetails from "../pages/newsDetails/NewsDetails";
import PrivetRoute from "../pages/PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('/news.json')
            },
            {
                path:"/news/:id",
                element:<PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }    
]);

export default router;