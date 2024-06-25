import React from "react";
import { FaBars, FaSignInAlt, } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

import Logos from "../assets/man.png"
import { decryptData } from "../helpers";

const getUsername = () => {
  const username = localStorage.getItem("username");
  if(!username) return "";
  return username;
}

const getRole = () => {
  const encryptedRole = localStorage.getItem("role");
  const role = decryptData(encryptedRole);
  if(!role) return "";
  return role;
}


const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-[#ffecd5] px-4 py-3 shadow-lg flex justify-between">
      <div className="flex items-center text-xl w-full text-black">
      </div>
      <div className="flex justify-center items-center">
        <img src={Logos} className="w-10 h-10 object-cover"></img>

        <div className="px-5 text-sm">{getUsername()} <p className="text-xs text-gray-600">({getRole()})</p></div>
        <Link to='/login' className="cursor-pointer mr-6">
          <FaSignInAlt />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
