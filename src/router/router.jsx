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
import { FormEditTable } from "../view/table/FormEditTable";
import { FormEditPermission } from "../view/permission/components/FormEditPermission";
import { Employee } from "../view/employee/Employee";
import { FormAddEmployee } from "../view/employee/components/FormAddEmployee";
import { FormEditEmployee } from "../view/employee/components/FormEditEmployee";
import OrderHistoryDetail from "../view/orderHistory/components/OrderHistoryDetail";
import { ReportProduct } from "../view/report/components/ReportProduct";
import { ReportEmployee } from "../view/report/components/ReportEmployee";
import { ReportTable } from "../view/report/components/ReportTable";
import { ReportPermission } from "../view/report/components/ReportPermission";
import { ReportOrder } from "../view/report/components/ReportOrder";
import { ReportIncome } from "../view/report/components/ReportIncome";
import { Role } from "../constant";
import Authentication from "../components/Authentication";

const RouterPath = () => {

  const { employee, admin, superadmin } = Role;


  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: (
        <Authentication allowedRoles={[employee, admin, superadmin]}>
          <Dashboard />
        </Authentication>
      ),
    },
    {
      path: "/sellProduct",
      element: (
        <Authentication allowedRoles={[employee, admin, superadmin]}>
          <SellProducts />
        </Authentication>
      ),
    },
    {
      path: '/product',
      element: (
        <Authentication allowedRoles={[admin, superadmin]}>
          <Products />
        </Authentication>
      ),
    },
    {
      path: '/tableManage',
      element: (
        <Authentication allowedRoles={[admin, superadmin]}>
          <TableManage />
        </Authentication>
      ),
    },
    {
      path: "/addTable",
      element: (
        <Authentication allowedRoles={[admin, superadmin]}>
          <FormAddTable />
        </Authentication>
      ),
    },
    {
      path: "/editTable/:id",
      element: (
        <Authentication allowedRoles={[admin, superadmin]}>
          <FormEditTable />
        </Authentication>
      ),
    },
    {
      path: '/history',
      element: (
        <Authentication allowedRoles={[employee, admin, superadmin]}>
          <OrderHistory />
        </Authentication>
      ),
    },
    {
      path: '/orderHistoryDetail/:id',
      element: (
        <Authentication allowedRoles={[employee, admin, superadmin]}>
          <OrderHistoryDetail />
        </Authentication>
      ),
    },
    {
      path: '/reportProductType',
      element: (
        <Authentication allowedRoles={[employee, admin, superadmin]}>
          <ReportTypeProduct />
        </Authentication>
      ),
    },
    {
      path: '/reportProduct',
      element: (
        <Authentication allowedRoles={[employee, admin, superadmin]}>
          <ReportProduct />
        </Authentication>
      ),
    },
    {
      path: '/reportEmployee',
      element: (
        <Authentication allowedRoles={[employee, admin, superadmin]}>
          <ReportEmployee />
        </Authentication>
      ),
    },
    {
      path: '/reportTable',
      element: (
        <Authentication allowedRoles={[employee, admin, superadmin]}>
          <ReportTable />
        </Authentication>
      ),
    },
    {
      path: '/reportPermission',
      element: (
        <Authentication allowedRoles={[employee, admin, superadmin]}>
          <ReportPermission />
        </Authentication>
      ),
    },
    {
      path: '/reportOrder',
      element: (
        <Authentication allowedRoles={[employee, admin, superadmin]}>
          <ReportOrder />
        </Authentication>
      ),
    },
    {
      path: '/reportIncome',
      element: (
        <Authentication allowedRoles={[employee, admin, superadmin]}>
          <ReportIncome />
        </Authentication>
      ),
    },
    {
      path: '/reports',
      element: (
        <Authentication allowedRoles={[employee, admin, superadmin]}>
          <Reports />
        </Authentication>
      ),
    },

    {
      path: '/order',
      element: (
        <Authentication allowedRoles={[employee, admin, superadmin]}>
          <Order />
        </Authentication>
      ),
    },
    {
      path: '/permission',
      element: (
        <Authentication allowedRoles={[admin, superadmin]}>
          <Permission />
        </Authentication>
      ),
    },
    {
      path: "/addPermission",
      element: (
        <Authentication allowedRoles={[admin, superadmin]}>
          <FormAddPermission />
        </Authentication>
      ),
    },
    {
      path: "/EditPermission/:id",
      element: (
        <Authentication allowedRoles={[admin, superadmin]}>
          <FormEditPermission />
        </Authentication>
      ),
    },
    {
      path: '/employee',
      element: (
        <Authentication allowedRoles={[admin, superadmin]}>
          <Employee />
        </Authentication>
      ),
    },
    {
      path: "/addEmployee",
      element: (
        <Authentication allowedRoles={[admin, superadmin]}>
          <FormAddEmployee />
        </Authentication>
      ),
    },
    {
      path: "/editEmployee/:id",
      element: (
        <Authentication allowedRoles={[admin, superadmin]}>
          <FormEditEmployee />
        </Authentication>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterPath;
