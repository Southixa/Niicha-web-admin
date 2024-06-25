import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Role } from "../constant";
import { isAllowedRole } from "../helpers";
import Swal from "sweetalert2";

const Authentication = ({ children, allowedRoles = [Role.employee] }) => {

  const isAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    return true;
  }

  if(!isAuth()){
    return <Navigate to="/login"/>;
  }

  if(!isAllowedRole(allowedRoles)){
    Swal.fire({
      title: "ຜິດພາດ",
      text: "ທ່ານບໍ່ມີສິດເຂົ້າເຖິງ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
      icon: "error",
    });
    return <Navigate to="/login"/>;
  }

  return <>{children}</>;
};

export default Authentication;
