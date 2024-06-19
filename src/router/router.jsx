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
import { Permission } from "../view/permission/Permission";
import { Order } from "../view/order/Order";
import { OrderHistory } from "../view/orderHistory/OrderHistory";
import { FormAddPermission } from "../view/permission/components/FormAddPermission";
import { FormAddTable } from "../view/table/FormAddTable";

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
      path: "/addTable",
      element: <FormAddTable />
    },
    {
      path: '/history',
      element: <OrderHistory />
    },
    {
      path: '/reportProductType',
      element: <ReportTypeProduct />
    },

    {
      path: '/reports',
      element: <Reports />
    },

    {
      path: '/order',
      element: <Order />
    },
    {
      path: '/permission',
      element: <Permission />
    },
    {
      path: "/addPermission",
      element: <FormAddPermission />
    }
  ]);
  return <RouterProvider router={router} />;
};

export default RouterPath;
