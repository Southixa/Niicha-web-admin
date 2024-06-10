import React from "react";
import plus from "../../../assets/plus.png";
const CardProduct = () => {
  const product = [
    {
      image:
        "https://img.freepik.com/free-photo/sweet-pastry-assortment-top-view_23-2148516578.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717200000&semt=sph",
      title: "Bakery",
      price: "28,000 ກີບ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPG9bnTKXg0DDmiNRd8RH2TmcppqDP4z3ng&s",
      title: "Bakery",
      price: "28,000 ກີບ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKAsEP7jdZjhozBl4vLPp7MAMvWfyNczxkg&s",
      title: "Bakery",
      price: "28,000 ກີບ",
    },
    {
      image:
        "https://www.allrecipes.com/thmb/Hqro0FNdnDEwDjrEoxhMfKdWfOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21667-easy-iced-coffee-ddmfs-4x3-0093-7becf3932bd64ed7b594d46c02d0889f.jpg",
      title: "Bakery",
      price: "28,000 ກີບ",
    },
    {
      image:
        "https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg",
      title: "Bakery",
      price: "28,000 ກີບ",
    },
    {
      image:
        "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2018/4/shutterstock_1By_stockcreations.jpg",
      title: "Bakery",
      price: "28,000 ກີບ",
    },
  ];
  return (
    <div className=" w-full h-full grid grid-cols-6 gap-2 px-8  columns-2 ">
      {product.map((item, index) => {
        return (
          <div className="flex  bg-[#daa7e2] shadow-lg rounded-lg h-[28%]  ">
            <div className=" px-2">
              <img
                className="flex h-[130px] w-full py-2 rounded items-center justify-center"
                src={item.image}
              ></img>
              <div>{item.title}</div>

              <div className="flex row-auto">
                {item.price}
                <div
                  onClick={() => alert("ok")}
                  className="flex cursor-pointer mx-auto bg-white rounded-full h-[30%] w-[30%] items-center justify-center hover: "
                >
                  <img src={plus} className="h-6 p-1" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardProduct;
