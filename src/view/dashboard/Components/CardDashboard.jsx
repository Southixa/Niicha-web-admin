import React from "react";
import userLogo from "../../../assets/man.png";
import menu from "../../../assets/menu.png"
import selling from "../../../assets/selling.png"
import table from "../../../assets/table.png"
import checkout from "../../../assets/check-out.png"
import permission from "../../../assets/permission.png"
import result from "../../../assets/result.png"
import { useNavigate } from "react-router-dom";
import { Role } from "../../../constant";
import { isAllowedRole } from "../../../helpers";
const CardDashboard = () => {

  const navigate = useNavigate();

  const { employee, admin, superadmin } = Role;

  const cardData = [
    {
      icon: selling,
      title: "ຂາຍສິນຄ້າ",
      path: "/sellProduct",
      allowRole: [employee, admin, superadmin],
    },
    {
      icon: menu,
      title: "ຂໍ້ມູນສິນຄ້າ",
      path: "/product",
      allowRole: [admin, superadmin],
    },

    {
      icon: checkout,
      title: "ອໍເດີ",
      path: "/order",
      allowRole: [employee, admin, superadmin],
    },
    {
      icon: table,
      title: "ໂຕະ",
      path: "/tableManage",
      allowRole: [admin, superadmin],
    },
    {
      icon: permission,
      title: "ສິດເຂົ້າໃຊ້",
      path: "/permission",
      allowRole: [admin, superadmin],
    },
    {
      icon: result,
      title: "ລາຍງານ",
      path: "/reports",
      allowRole: [employee, admin, superadmin],
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-2 p-8">
      {cardData.map((item, index) => (
        ((isAllowedRole(item.allowRole)) && (
          <button key={index} onClick={() => navigate(item.path)}>
            <div className="flex  bg-white shadow-lg rounded-lg h-[150px] justify-center items-center  ">
              <div className="text-center justify-start">
                <img className="h-16" src={item.icon}></img>
                <div className=" text-xl font-bold mt-2">{item.title}</div>
              </div>
            </div>
          </button>
        ))
      ))}
    </div>
  );
};

export default CardDashboard;
