import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../view/auth/Login";
import Register from "../view/auth/Register";
const RouterPath = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterPath;
