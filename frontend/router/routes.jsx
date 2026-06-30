import { Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductsDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Orders from "../pages/Orders/Orders";
import Profile from "../pages/Profile/Profile"

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,

        children: [
            {
                index: true,
                element: <Navigate to="/products" replace />
            },

            {
                path: "login",
                element: <Login />
            },

            {
                path: "register",
                element: <Register />
            },

            {
                path: "home",
                element: <Home />
            },

            {
                path: "products",
                element: <Products />
            },

            {
                path: "products/:id",
                element: <ProductDetails />
            },

            {
                path: "cart",
                element: <Cart />
            },

            {
                path: "checkout",
                element: <Checkout />
            },

            {
                path: "orders",
                element: <Orders />
            },

            {
                path: "profile",
                element: <Profile />
            }
        ]
    }
];

export default routes;