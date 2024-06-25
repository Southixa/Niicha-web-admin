import React from "react";
import plus from "../../../assets/plus.png";
import { MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import ModalEditProduct from "./ModalEditProduct";
import { cloudinaryResizeImage, formatCurrency } from "../../../helpers";
import DeleteButton from "../../../components/DeleteButton";
import { DeleteProductApi } from "../../../api/product";

const CardProduct = ({ productData, selectedTypeId, typeData, onEditSuccess, onDeleteSuccess, loading }) => {

  const filteredProducts = productData.filter((item) => item?.product_type === selectedTypeId);

  return (
    <>
      {(filteredProducts.length == 0 && !loading) && <div className="text-center my-8">ບໍ່ມີຂໍ້ມູນ</div>}
      <div className="w-full h-full grid grid-cols-6 gap-4 px-8 mt-8 mb-16">
      {filteredProducts.map((item, index) => (
        <div key={index} className="flex bg-[#fffcf2] shadow-lg rounded-lg h-full p-2 justify-center">
          <div className="flex flex-col px-2 w-full">
            <img
              className="flex h-[130px] object-cover w-full py-2 rounded-2xl items-center justify-center"
              src={cloudinaryResizeImage(item?.image, 300)}
              alt={item?.name}
            />
            <div>{item?.name}</div>
            <div className="flex row-auto">
              <p className="text-red-600">{formatCurrency(item?.price)} ກີບ</p>
            </div>
            <div className="grow">
            </div>
            <div className="flex justify-center items-center gap-4 mt-2">
              <div>
                <ModalEditProduct typeData={typeData} currentItem={item} onEditSuccess={onEditSuccess} />
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
                <DeleteButton className={"text-red-400"} id={item?.PID} deleteApi={DeleteProductApi} onSuccess={onDeleteSuccess} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default CardProduct;
