import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../view/auth/Login";
import Register from "../view/auth/Register";
import Dashboard from "../view/dashboard/Dashboard";
import { SellProducts } from "../view/sellProduct/SellProducts";
import { Products } from '../view/product/Products'
import TableManage from "../view/table/TableManage";
import { Reports } from "../view/report/Reports";
import { ReportTypeProduct } from "../view/report/components/ReportTypeProduct";

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
      path: '/product',
      element: <Products />
    },
    {
      path: '/tableManage',
      element: <TableManage />
    },
    {
      path: '/reports',
      element: <Reports />
    },
    {
      path: '/reportProductType',
      element: <ReportTypeProduct />
    }
  ]);
  return <RouterProvider router={router} />;
};

export default RouterPath;
