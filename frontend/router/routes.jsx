import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedLayout from "../features/auth/layouts/ProtectedLayout";
import AuthLayout from "../features/auth/layouts/AuthLayout";
import GuestLayout from "../features/auth/layouts/GuestLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductsDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Orders from "../pages/Orders/Orders";
import Profile from "../pages/Profile/Profile";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/products" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },

      // Guest Routes
      {
        element: <GuestLayout />,
        children: [
          {
            element: <AuthLayout />,
            children: [
              {
                path: "login",
                element: <Login />,
              },
              {
                path: "register",
                element: <Register />,
              },
            ],
          },
        ],
      },

      // Protected Routes
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "products/:id",
            element: <ProductDetails />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
];

export default routes;