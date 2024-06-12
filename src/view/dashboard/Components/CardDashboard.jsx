import React from "react";
import userLogo from "../../../assets/man.png";
import menu from "../../../assets/menu.png"
import checkout from "../../../assets/check-out.png"
import permission from "../../../assets/permission.png"
import result from "../../../assets/result.png"
const CardDashboard = () => {
  const cardData = [
    {
      icon: userLogo,
      title: "ຂໍ້ມູນຜູ້ໃຊ້",
    },
    {
      icon: menu,
      title: "ຂໍ້ມູນສິນຄ້າ",
    },

    {
      icon: checkout,
      title: "ອໍເດີ",
    },
    {
      icon: permission,
      title: "ສິດເຂົ້າໃຊ້",
    },
    {
      icon: result,
      title: "ລາຍງານ",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-2 p-8">
      {cardData.map((item, index) => (
        <div key={index} className="flex  bg-white shadow-lg rounded-lg h-[150px] justify-center items-center  ">
          <div className="text-center justify-start">
            <img className="h-16" src={item.icon}></img>
            <div className=" text-xl font-bold mt-2">{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDashboard;
