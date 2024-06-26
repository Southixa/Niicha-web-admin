// ModalManageProduct

import React, { useEffect, useState } from "react";
import add from "../../../assets/add.png";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { notify, validationSchema } from "../../../utils";
import { AddProductTypeApi, DeleteProductTypeApi, UpdateProductTypeApi } from "../../../api/product_type";
import { EMessage, SMessage } from "../../../constant";
import Loading from "../../../components/Loading";
import DeleteButton from "../../../components/DeleteButton";
import { MdEdit } from "react-icons/md";

export default function EditProductTypeButton({item, onEditSuccess}) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [type, setType] = useState(item?.name);
  const [isTypeEmpty, setIsTypeEmpty] = useState(false);

  const handleEdit = async (values) => {
    setLoading(true);
    const response = await UpdateProductTypeApi(item?.PTID ,values);
    // console.log(response);
    if(!response) {
      notify.error(EMessage.update);
      setLoading(false);
      return;
    }
    notify.success(SMessage.update);
    onEditSuccess();
    setShowModal(false);
    setLoading(false);
  };

  const onSubmit = async () => {
    if(type === "") {
      setIsTypeEmpty(true);
      return;
    }
    setIsTypeEmpty(false);
    await handleEdit({title: type});
  }

  return (
    <>
        <span onClick={() => setShowModal(true)} className="cursor-pointer opacity-80 absolute top-[-6px] right-[16px] rounded-full w-[20px] h-[20px] text-xs flex justify-center items-center hover:opacity-80 hover:bg-gray-50 hover:text-blue-600 text-white">
            <MdEdit />
        </span>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative border-[3px] border-black rounded-lg w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex w-full bg-[#e3f3da] outline-none focus:outline-none">
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <h3 className="text-2xl w-[250px] my-4 font-semibold bg-[#dcfcff] py-2 px-6 rounded-[50px]">
                          ແກ້ໄຂປະເພດສິນຄ້າ
                        </h3>
                        <div className="w-full mb-2 mt-4 flex items-start">
                          <label
                            htmlFor="productName"
                            className="inline-block w-28 text-[18px] font-medium mt-2"
                          >
                            ຊື່ປະເພດສິນຄ້າ
                          </label>
                          <div>
                            <input
                                onChange={(e) => setType(e.target.value)}
                                value={type}
                                disabled={loading}
                                name="title"
                                type="text"
                                id="productName"
                                className="rounded-[50px] bg-white py-2 px-4 outline-none mb-2"
                            />
                            {isTypeEmpty && <p className="text-red-500">ກະລຸນາປ້ອນຂໍ້ມູນ</p>}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-end justify-end py-9 px-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                        disabled={loading}
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          ປິດ
                        </button>
                        <button
                        onClick={onSubmit}
                            disabled={loading}
                          className="bg-[#e08cc4] active:bg-[#d66eb4] font-semibold text-sm px-6 py-3 rounded-[50px] shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex justify-center items-center gap-2"
                          type="submit"
                        >
                          <Loading show={loading} />ຢືນຢັນ
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-white"></div>
        </>
      ) : null}
    </>
  );
}
