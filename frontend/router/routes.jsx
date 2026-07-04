import { Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import GuestLayout from "../layouts/GuestLayout";

import GuestRoute from "../features/auth/components/GuestRoute";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";

import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";

import Products from "../features/products/pages/Products";
import ProductDetails from "../features/products/pages/ProductDetails";

import Cart from "../features/cart/pages/Cart";
import Checkout from "../features/checkout/pages/Checkout";

import Orders from "../features/orders/pages/Order";
import OrderDetails from "../features/orders/pages/OrderDetails";

import Profile from "../features/profile/pages/Profile";
import Notifications from "../features/notifications/pages/Notification";

const routes = [
  {
    element: <GuestRoute />,
    children: [
      {
        element: <GuestLayout />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/products" replace />,
          },
          {
            path: "/products",
            element: <Products />,
          },
          {
            path: "/products/:id",
            element: <ProductDetails />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/checkout",
            element: <Checkout />,
          },
          {
            path: "/orders",
            element: <Orders />,
          },
          {
            path: "/orders/:id",
            element: <OrderDetails />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/notifications",
            element: <Notifications />
          }
        ],
      },
    ],
  },
];

export default routes;