import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registe from "../Pages/Register/Registe";
import Bloge from "../Pages/bloge/Bloge";
import AllToyes from "../Pages/AllToyes/AllToyes"
import MyToys from "../Pages/MyToys/MyToys"
import AddToy from "../Pages/AddToy/AddToy"
import Update from "../Pages/update/Update";
import Private from "./Private";
import Details from "../Pages/AllToyes/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Registe></Registe>
            },
            {
                path: 'blog',
                element: <Bloge></Bloge>
            },
            {
                path: 'allToys',
                element: <AllToyes></AllToyes>
            },
            {
                path: 'myToys',
                element: <Private><MyToys></MyToys></Private>,
            },
            {
                path: 'addToy',
                element: <Private><AddToy></AddToy></Private>
            },
            {
                path: 'update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:3000/mytoys/${params.id}`)
            },
            {
                path: 'details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:3000/mytoys/${params.id}`)
            }
        ]

    },
    {
        path: "*",
        element: < div >
            <img className="w-1/2 " src="https://cdn.vectorstock.com/i/1000x1000/85/43/error-page-not-found-vector-27898543.webp" alt="" />
        </div >
    }









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