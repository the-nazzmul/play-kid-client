import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login and Registration/Login";
import Registration from "../Pages/Login and Registration/Registration";
import ErrorPage from "../Pages/Error/ErrorPage";
import AllToys from "../Pages/All Toys/AllToys";
import MyToys from "../Pages/My Toys/MyToys";
import AddToys from "../Pages/Add Toys/AddToys";
import Blog from "../Pages/Blog/Blog";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../Pages/UpdateToys/UpdateToy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/all-toys',
        element: <AllToys></AllToys>
      },
      {
        path: '/my-toys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: '/add-toys',
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/products/:id',
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://play-kid-server.vercel.app/products/${params.id}`)
      },
      {
        path: '/update-product/:id',
        element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
        loader: ({ params }) => fetch(`https://play-kid-server.vercel.app/products/${params.id}`)
      }
    ]
  },
]);