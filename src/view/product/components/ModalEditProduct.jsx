import React, { useState } from "react";
import add from "../../../assets/add.png";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { notify, validationSchema } from "../../../utils";
import { AddProductTypeApi } from "../../../api/product_type";
import Loading from "../../../components/Loading";
import { AddProductApi, UpdateProductApi } from "../../../api/product";
import { EMessage, SMessage } from "../../../constant";
import { MdEdit } from "react-icons/md";

export default function ModalEditProduct({typeData, onEditSuccess, currentItem}) {
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState(null);
    const [loading , setLoading] = useState(false);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleSubmit = async (values) => {
        const data = {
            ...values,
            image: image
        }
        setLoading(true);
        const response = await UpdateProductApi(currentItem?.PID, data);
        if(!response) {
            notify.error(EMessage.add);
            setLoading(false);
            return;
        }
        notify.success(SMessage.add);
        setLoading(false);
        setShowModal(false);
        onEditSuccess();
    };

    return (
        <>
            <div
                className="flex cursor-pointer mx-auto bg-white rounded-full h-8 w-8 items-center justify-center"
                onClick={() => setShowModal(true)}
                >
                <MdEdit size={16} className="text-blue-600"/>
            </div>
            {showModal ? (
                <>
                <Formik
                    validationSchema={validationSchema.product}
                    enableReinitialize={true}
                    initialValues={{
                        typeId: currentItem?.product_type || "",
                        name: currentItem?.name || "",
                        detail: currentItem?.detail || "",
                        price: currentItem?.price + "" || "",
                    }}
                    onSubmit={ async (values) => {
                        // console.log(values);
                        if(!image) return;
                        await handleSubmit(values)
                    }}
                >
                    {({ setFieldValue, isSubmitting }) => (
                    <Form >
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative border-[3px] border-black rounded-lg w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex w-full bg-[#e3f3da] outline-none focus:outline-none">

                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <h3 className="text-2xl w-[200px] my-4 font-semibold bg-[#dcfcff] py-2 px-6 rounded-[50px]">
                                        ແກ້ໄຂສິນຄ້າ
                                    </h3>
                                    <div>
                                        <div className="mb-4">
                                            <label htmlFor="category" className="block mb-2 text-[18px] font-medium">ປະເພດ</label>
                                            <Field as="select" name="typeId" disabled={isSubmitting} className="w-[250px] py-2 px-2 border border-black bg-white disabled:opacity-50">
                                                <option value="" disabled>ເລືອກປະເພດ</option>
                                                {typeData?.map((item, index) => (
                                                    <option key={index} value={item?.PTID}>{item?.name}</option>
                                                ))}
                                            </Field>
                                            <ErrorMessage name="typeId" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full mb-4">
                                            <h2 className=" text-[18px] font-medium">ອັບໂຫຼດຮູບພາບ</h2>
                                            <div className="flex">
                                                <label htmlFor="imageUpload" className={`text-[16px] bg-[#e08cc4] inline-block px-3 py-1 mr-5 rounded-[50px] h-fit ${isSubmitting ? "opacity-50" : "cursor-pointer"}`}>Choose File</label>
                                                <input
                                                    type="file"
                                                    id="imageUpload"
                                                    hidden
                                                    className="border-none opacity-50"
                                                    onChange={handleImageUpload}
                                                />
                                                {image && <img src={(URL.createObjectURL(image) || "")} className={`w-[200px] h-[200px] object-cover rounded-md ${isSubmitting ? "opacity-50" : ""}`}
                                                    alt="Uploaded preview" />}
                                                {!image && <p className={`text-[16px] text-red-500`}>ກະລຸນາເລືອກຮູບ</p>}
                                            </div>
                                        </div>
                                        <div className="w-full mb-2 mt-4 flex items-center gap-2">
                                            <label htmlFor="productName" className="inline-block w-28 text-[18px] font-medium">ຊື່ສິນຄ້າ</label>
                                            <Field type="text" name="name" disabled={isSubmitting} id="productName" className="rounded-[50px] bg-white py-2 px-4 outline-none disabled:opacity-50" />
                                            <ErrorMessage component={"div"} className="text-red-500" name="name" />
                                        </div>
                                        <div className="w-full flex items-center mb-2 gap-2">
                                            <label htmlFor="productDescription" className="inline-block w-28 text-[18px] font-medium">ລາຍລະອຽດ</label>
                                            <Field type="text" name="detail" disabled={isSubmitting} id="productName" className="rounded-[50px] bg-white py-2 px-4 outline-none disabled:opacity-50" />
                                            <ErrorMessage component={"div"} className="text-red-500" name="detail" />
                                        </div>
                                        <div className="w-full mb-2 flex items-center gap-2">
                                            <label htmlFor="productPrice" className="inline-block w-28 text-[18px] font-medium">ລາຄາ</label>
                                            <Field type="text" name="price" disabled={isSubmitting} id="productName" className="rounded-[50px] bg-white py-2 px-4 outline-none disabled:opacity-50" />
                                            <ErrorMessage component={"div"} className="text-red-500" name="price" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-end justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
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
                                        className="bg-[#e08cc4] active:bg-[#d66eb4] font-semibold text-sm px-6 py-3 rounded-[50px] shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center gap-2"
                                        type="submit"
                                    >
                                        <Loading show={loading}/>ຢືນຢັນ
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
