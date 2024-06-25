// ModalManageProduct

import React, { useState } from "react";
import add from "../../../assets/add.png";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { notify, validationSchema } from "../../../utils";
import { AddProductTypeApi, DeleteProductTypeApi } from "../../../api/product_type";
import { EMessage, SMessage } from "../../../constant";
import Loading from "../../../components/Loading";
import DeleteButton from "../../../components/DeleteButton";

export default function ModalManageProduct({typeData, onAddSuccess, onDeleteSuccess}) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAdd = async (values) => {
    setLoading(true);
    const response = await AddProductTypeApi(values);
    // console.log(response);
    if(!response) {
      notify.error(EMessage.add);
      setLoading(false);
      return;
    }
    notify.success(SMessage.add);
    onAddSuccess();
    setShowModal(false);
    setLoading(false);
  };

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="w-full h-20 cursor-pointer flex bg-green-200 justify-center  items-center text-center rounded-xl"
      >
        <h4 className=" text-[20px] font-semibold">ຈັດການສິນຄ້າ</h4>
      </div>
      {showModal ? (
        <>
          <Formik
            initialValues={{
              title: "",
            }}
            validationSchema={validationSchema.productType}
            onSubmit={ async (values) => {
                // console.log(values);
                await handleAdd(values)
            }}
          >
            {({ errors, touched, handleSubmit, submitForm }) => (
              <Form>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative border-[3px] border-black rounded-lg w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex w-full bg-[#e3f3da] outline-none focus:outline-none">
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <h3 className="text-2xl w-[250px] my-4 font-semibold bg-[#dcfcff] py-2 px-6 rounded-[50px]">
                          ເພີ່ມປະເພດສິນຄ້າ
                        </h3>
                        <div className="max-w-[400px] flex flex-wrap gap-2">
                          {typeData.map((item, index) => (
                            <span key={index} className="px-4 py-1 bg-pink-400 rounded-full relative">
                              <span className="cursor-pointer absolute top-[-6px] right-[-6px] rounded-full bg-white w-[20px] h-[20px] text-xs flex justify-center items-center hover:opacity-80">
                                <DeleteButton icon={"x"} className={"text-red-600 w-full"} id={item?.PTID} deleteApi={DeleteProductTypeApi} onSuccess={onDeleteSuccess} />
                              </span>
                              {item?.name}
                            </span>
                          ))}
                        </div>
                        <div className="w-full mb-2 mt-4 flex items-start">
                          <label
                            htmlFor="productName"
                            className="inline-block w-28 text-[18px] font-medium mt-2"
                          >
                            ຊື່ປະເພດສິນຄ້າ
                          </label>
                          <div>
                            <Field
                                disabled={loading}
                                name="title"
                                type="text"
                                id="productName"
                                className="rounded-[50px] bg-white py-2 px-4 outline-none mb-2"
                            />
                            <ErrorMessage component={"div"} className="text-red-500" name="title" />
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
              </Form>
            )}
          </Formik>
          <div className="opacity-70 fixed inset-0 z-40 bg-white"></div>
        </>
      ) : null}
    </>
  );
}
