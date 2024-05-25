import React from "react";
import { FaBars,FaSignInAlt, } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logos from "../assets/man.png"
const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-white px-4 py-3 shadow-lg flex justify-between">
      <div className="flex items-center text-xl text-black">
        <FaBars className="cursor-pointer me-4" />
        <div className="font-bold">ຍິນດີຕ້ອນຮັບ</div>
      </div>
      <div className="flex items-center">
        <div className="h-10 flex rounded-full overflow-hidden w-10">
          <img src={Logos}></img>
        </div>

        <div className="px-5 text-sm">Saiyvoud</div>
        <Link className="cursor-pointer">
           <FaSignInAlt/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
