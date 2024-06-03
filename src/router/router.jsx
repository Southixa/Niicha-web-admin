import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../view/auth/Login";
import Register from "../view/auth/Register";
import Dashboard from "../view/dashboard/Dashboard";
import { SellProducts } from "../view/sellProduct/SellProducts";
import { Products } from '../view/product/Products'
const RouterPath = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/sellProduct",
      element: <SellProducts />
    },
    {
      path: 'product',
      element: <Products />
    }
  ]);
  return <RouterProvider router={router} />;
};

export default RouterPath;
