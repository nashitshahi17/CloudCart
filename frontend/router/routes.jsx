import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedLayout from "../features/auth/layouts/ProtectedLayout";
import AuthLayout from "../features/auth/layouts/AuthLayout";
import GuestLayout from "../features/auth/layouts/GuestLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import Products from "../features/products/pages/Products"
import ProductDetails from "../features/products/pages/ProductDetails";
import Cart from "../features/cart/pages/Cart";
import Checkout from "../features/checkout/pages/Checkout";
import Orders from "../features/orders/pages/Order";
import OrderDetails from "../features/orders/pages/OrderDetails";
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
            path: "orders/:id",
            element: <OrderDetails />
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