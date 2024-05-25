import React from "react";
import userLogo from "../../../assets/man.png";
const CardDashboard = () => {
  const cardData = [
    {
      icon: userLogo,
      title: "ຂໍ້ມູນຜູ້ໃຊ້",
    },
    {
      icon: userLogo,
      title: "ຂໍ້ມູນສິນຄ້າ",
    },
    // {
    //   icon: userLogo,
    //   title: "ປະເພດສິນຄ້າ",
    // },
    {
      icon: userLogo,
      title: "ອໍເດີ",
    },
    {
      icon: userLogo,
      title: "ສິດເຂົ້າໃຊ້",
    },
    {
      icon: userLogo,
      title: "ລາຍງານ",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-6 p-8">
      {cardData.map((item, index) => (
        <div className="flex  bg-white shadow-lg rounded-lg h-[150px] justify-center items-center  ">
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
