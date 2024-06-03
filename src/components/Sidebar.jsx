import React from "react";
import HomeIcon from "../assets/home.svg";
import logo from "../assets/logos.jpeg";
import { NavLink } from "react-router-dom";
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
} from "react-icons/fa";
const Sidebar = ({ children }) => {
  const data = [
    {
      title: "ໜ້າຫຼັກ",
      icon: <FaHome />,
      path: "/",
    },
    // { title: "ຜູ້ໃຊ້", icon: <FaUser />, path: "/student" },

    {
      title: "ຂາຍສິນຄ້າ",
      icon: <FaChalkboardTeacher />,
      path: "/sellProduct",
    },

    { title: "ສິນຄ້າ", icon: <FaCalendar />, path: "/product" },
    { title: "ຂາຍສິນຄ້າ", icon: <FaShoppingCart />, path: "/major" },

    {
      title: "ປະຫວັດການສັ່ງຊື້",
      icon: <FaClock />,
      path: "/history",
    },
    {
      title: "ສິດເຂົ້າໃຊ້",
      icon: <FaCheckSquare />,
      path: "/checklist",
    },

    { title: "ລາຍງານ", icon: <FaFile />, path: "/report" },
  ];
  return (
    <div className="flex w-full ">
      <div className="w-64 bg-[#e08cc4] fixed top-0 left-0 z-50 h-full  px-4 py-2">
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
                      : " flex items-center bg-white text-black mb-2 rounded-full hover:shadow hover:bg-[#e3f3da] py-2 px-3"
                  }
                >
                  <div className="mr-3 text-xl font-bold">{items.icon}</div>
                  {items.title}
                </NavLink>
              </div>
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
