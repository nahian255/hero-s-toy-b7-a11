import {
    createBrowserRouter,

} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <div> i am home</div>,

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