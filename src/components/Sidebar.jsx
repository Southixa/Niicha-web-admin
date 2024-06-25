import React, { useEffect } from "react";
import HomeIcon from "../assets/home.svg";
import logo from "../assets/logos.jpeg";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {
  FaHome,
  FaUser,
  FaSchool,
  FaChalkboard,
  FaFile,
  FaCalendar,
  FaChalkboardTeacher,
  FaBook,
  FaCheckSquare,
  FaShoppingCart,
  FaSquare,
  FaClock,
  FaTable,
  FaFolderOpen,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Role } from "../constant";
import { isAllowedRole } from "../helpers";
const Sidebar = ({ children }) => {

  const navigate = useNavigate();

  const { employee, admin, superadmin } = Role;


  const data = [
    {
      title: "ໜ້າຫຼັກ",
      icon: <FaHome />,
      path: "/",
      allowRole: [employee, admin, superadmin],
    },
    // { title: "ຜູ້ໃຊ້", icon: <FaUser />, path: "/student" },

    {
      title: "ຂາຍສິນຄ້າ",
      icon: <FaChalkboardTeacher />,
      path: "/sellProduct",
      allowRole: [employee, admin, superadmin],
    },

    { 
      title: "ຈັດການສິນຄ້າ", 
      icon: <FaCalendar />, 
      path: "/product",
      allowRole: [admin, superadmin],
    },
    // { title: "ຈັດການປະເພດສິນຄ້າ", icon: <FaFolderOpen />, path: "/product" },
    { 
      title: "ອໍເດີ", 
      icon: <FaShoppingCart />, 
      path: "/order" ,
      allowRole: [employee, admin, superadmin],
    },

    {
      title: "ປະຫວັດການສັ່ງຊື້",
      icon: <FaClock />,
      path: "/history",
      allowRole: [employee, admin, superadmin],
    },
    {
      title: "ຈັດການໂຕະ",
      icon: <FaTable />,
      path: "/tableManage",
      allowRole: [admin, superadmin],
    },
    {
      title: "ພະນັກງານ",
      icon: <IoPerson />,
      path: "/employee",
      allowRole: [admin, superadmin],
    },
    {
      title: "ສິດເຂົ້າໃຊ້",
      icon: <FaCheckSquare />,
      path: "/permission",
      allowRole: [admin, superadmin],
    },

    { 
      title: "ລາຍງານ", 
      icon: <FaFile />, 
      path: "/reports",
      allowRole: [employee, admin, superadmin],
    },
  ];

  return (
    <div className="flex w-full ">
      <div className="w-64 bg-[#fffcf2] fixed top-0 left-0 z-50 h-full  px-4 py-2 shadow-md">
        <div className="my-2 mb-4">
          <div className=" w-full flex items-center justify-center">
            <img src={logo} alt="" className=" w-[80px] ic rounded-full" />
          </div>
          <h1 className="text-2x text-black font-bold text-center py-2 ">
            Niicha Cafe
          </h1>
          <hr />
          <div className=" text-white font-bold mt-4">
            {data.map((items, index) => (
              ((isAllowedRole(items.allowRole)) && (
                  <div key={index}>
                  <>
                    {items.status == true ? (
                      <div className="w-full  h-[20%] text-sm text-slate-300 ">
                        ຈັດການຫ້ອງຮຽນ
                      </div>
                    ) : (
                      <div />
                    )}
                  </>
                  <NavLink
                    key={index}
                    to={items.path}
                    className={({ isActive }) =>
                      isActive
                        ? " flex items-center mb-2 rounded-full shadow bg-[#e3f3da] py-2 px-3 text-black border-2 border-black"
                        : " flex items-center bg-[#f0fafb] text-black mb-2 rounded-full hover:shadow hover:bg-[#e3f3da] py-2 px-3"
                    }
                  >
                    <div className="mr-3 text-xl font-bold">{items.icon}</div>
                    {items.title}
                  </NavLink>
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
      {/* Navbar */}
      <div className="w-full ps-[250px]">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
