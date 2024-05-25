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
    FaSquare,
  } from "react-icons/fa";
const Sidebar = ({ children }) => {
    const data = [
        {
          title: "ໜ້າຫຼັກ",
          icon: <FaHome />,
          path: "/",
        },
        { title: "ຜູ້ໃຊ້", icon: <FaUser />, path: "/student" },
        {
          title: "ສິນຄ້າ",
          icon: <FaChalkboardTeacher />,
          path: "/teacher",
        },
    
        { title: "ປະເພດສິນຄ້າ", icon: <FaCalendar />, path: "/year" },
        { title: "ອໍເດີ", icon: <FaChalkboard />, path: "/major" },
       
        {
          title: "ສິດເຂົ້າໃຊ້",
          icon: <FaCheckSquare />,
          path: "/checklist",
        },
        { title: "ລາຍງານ", icon: <FaFile />, path: "/report" },
      ];
      return (
        <div className="flex w-full ">
          <div className="w-64 bg-[#8fbc8f] fixed top-0 left-0 z-50 h-full  px-4 py-2">
            <div className="my-2 mb-4">
              <img src={logo} alt="" className="px-20" />
              <h1 className="text-2x text-white font-bold text-center py-2 ">
                Niicha Cafe
              </h1>
              <hr />
              <div className=" text-white font-bold mt-4">
                {data.map((items, index) => (
                  <div>
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
                          ? " flex mb-2 rounded shadow bg-green-500 py-2 px-1"
                          : " flex mb-2 rounded hover:shadow hover:bg-green-500 py-2 px-1"
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
