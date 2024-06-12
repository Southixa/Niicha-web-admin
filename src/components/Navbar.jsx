import React from "react";
import { FaBars, FaSignInAlt, } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

import Logos from "../assets/man.png"
const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-[#f9ccea] px-4 py-3 shadow-lg flex justify-between">
      <div className="flex items-center text-xl w-full text-black">
        <div className=" flex items-center relative">
          <IoSearch className="absolute text-[24px] left-2" />
          <input type="text" className="w-[500px] border-[2px] border-black rounded-md py-1 
        text-[18px] pl-10 pr-5 outline-none"
            placeholder="Search"
          />
          <div className="ml-1 px-5 py-2 bg-[#ee94fd] text-white rounded-lg">
            <IoSearch className=" text-[25px]" />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="h-10 flex rounded-full overflow-hidden w-10">
          <img src={Logos}></img>
        </div>

        <div className="px-5 text-sm">Saiyvoud</div>
        <Link to='/login' className="cursor-pointer">
          <FaSignInAlt />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
