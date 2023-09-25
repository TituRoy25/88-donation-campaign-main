import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Card from "../pages/Card/Card";


const myCreatedRoute = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : ()=> fetch("/data.json")
            },
            {
                path : "/Donation",
                element : <Donation></Donation>
            },
            {
                path : "/Statistics",
                element : <Statistics></Statistics>
            },
            {
                path : "/cards/:id",
                element : <Card></Card>,
                loader : ()=>fetch('/data.json')

            }
        ]
    }
])
export default myCreatedRoute;