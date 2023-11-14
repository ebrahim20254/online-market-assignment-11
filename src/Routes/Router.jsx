import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Header/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddJob from "../Pages/AddJob/AddJob";
import TabSection from "../Pages/Home/TabSection/TabSection";
import MyJob from "../Pages/MyJob/MyJob";
import MyBids from "../Pages/MyBids/MyBids";
import DetailsPage from "../Pages/Details/DetailsPage";
import UpdateJob from "../Pages/MyJob/UpdateJob";
import MyRequest from "../Pages/MyRequest/MyRequest";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/jobs',
                element: <AddJob></AddJob>
            },
            {
                path: '/jobs',
                element: <AddJob></AddJob>
            },
            {
                path: '/myJob',
                element: <MyJob></MyJob>,
                loader: () => fetch('https://online-market-server-assignment-11.vercel.app/job')
                
            },
            {
                path: '/update/:id',
                element: <UpdateJob></UpdateJob>,
                loader: ({params}) => fetch(`https://online-market-server-assignment-11.vercel.app/job/${params.id}`)
            },
            {
                path: '/bids',
                element: <MyBids></MyBids>
            },
            {
                path: '/tab',
                element: <TabSection></TabSection>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <DetailsPage></DetailsPage>
            },
            {
                path: '/request',
                element:  <MyRequest></MyRequest>
            }
        ]
    }
]);

export default router;