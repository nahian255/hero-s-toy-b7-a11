import {
    createBrowserRouter,

} from "react-router-dom";

import Home from "../LastPractics/Home";

import Login from "../LastPractics/Login";
import Service from "../LastPractics/Service";
import Registar from "../LastPractics/Registar";
import Logout from '../LastPractics/Logout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Registar></Registar>
            },
            {
                path: "/logout",
                element: <Logout></Logout>
            },
            {
                path: "/service",
                element: <Service></Service>
            },
        ]
    },









    // {
    //     path: '/',
    //     element: <Main />,
    //     children: [
    //         {
    //             path: '/:id',
    //             element: <Home></Home>,
    //             loader: ({ params }) => fetch(`http://localhost:3000/post/${params.id}`)
    //         }
    //     ]
    // },
    // {
    //     path: "/dashboard",
    //     element: <DashBoardLayout />,
    //     children: [
    //         {
    //             path: '/dashboard',
    //             element: <Dashboard></Dashboard>
    //         },
    //         {

    //             path: '/dashboard/products',
    //             element: <AllProduct></AllProduct>
    //         },
    //         {

    //             path: '/dashboard/add-product',
    //             element: <AddProduct></AddProduct>
    //         },
    //     ]
    // },
    // {
    //     path: "/catagory",
    //     element: <MainCatagory></MainCatagory>,
    //     children: [
    //         {
    //             path: "/catagory/using_id/:id",
    //             element: <NewCatagory></NewCatagory>,
    //             loader: ({ params }) => fetch(`http://localhost:3000/catagory/using_id/${params.id}`),
    //         }
    //     ]
    // },
]);


export default router;