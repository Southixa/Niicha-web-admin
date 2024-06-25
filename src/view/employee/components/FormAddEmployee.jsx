import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Sidebar from '../../../components/Sidebar'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { notify, validationSchema } from "../../../utils";
import { AddUserApi } from "../../../api/user";
import { EMessage, Role, SMessage } from "../../../constant";
import Loading from "../../../components/Loading";
import { AddEmployeeApi } from "../../../api/employee";

export const FormAddEmployee = () => {

    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        const response = await AddEmployeeApi(values);
        if(!response) {
            notify.error(EMessage.add);
            return;
        }
        notify.success(SMessage.add);
        navigate("/employee");
    };

    return (
        <Sidebar>
            <div className="w-full flex justify-center">
                <Formik
                validationSchema={validationSchema.employee}
                enableReinitialize={true}
                initialValues={{
                    firstname: "",
                    lastname: "",
                    gender: "male",
                    birthday: "",
                    address: "",
                    phoneNumber: ""
                }}
                onSubmit={ async (values) => {
                    // console.log(values);
                    await handleSubmit(values)
                }}
                >
                 {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <div className="w-[400px] bg-white mt-20 rounded-lg shadow-md border border-gray-200 px-4 py-4 mb-20">
                            <p className="text-2xl text-center font-semibold text-gray-800">ເພີ່ມຂໍ້ມູນພະນັກງານ</p>
                            {/*------ firstname ------*/}
                            <label className="block mb-1 text-sm font-medium text-gray-900 mt-8">ຊື່</label>
                            <Field disabled={isSubmitting} type="text" name="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 disabled:opacity-50" placeholder="ປ້ອນຊື່"/>
                            <ErrorMessage component={"div"} className="text-red-500" name="firstname" />
                            {/*------ lastname ------*/}
                            <label className="block mb-1 text-sm font-medium text-gray-900 mt-8">ລະຫັດຜ່ານ</label>
                            <Field disabled={isSubmitting} type="text" name="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 disabled:opacity-50" placeholder="ປ້ອນນາມສະກຸ່ນ"/>
                            <ErrorMessage component={"div"} className="text-red-500" name="lastname" />
                            {/*------ gender ------*/}
                            <label className="block mb-1 text-sm font-medium text-gray-900 mt-8">ເພດ</label>
                            <Field disabled={isSubmitting} as="select" name="gender" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 disabled:opacity-50" placeholder="ເລືອກເພດ">
                                <option value="" disabled>-- ເລຶອກ --</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </Field>
                            <ErrorMessage component={"div"} className="text-red-500" name="gender" />
                            {/*------ birthday ------*/}
                            <label className="block mb-1 text-sm font-medium text-gray-900 mt-8">ວັນເດືອນປີເກີດ</label>
                            <Field disabled={isSubmitting} type="date" name="birthday" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 disabled:opacity-50" placeholder="ປ້ອນນາມສະກຸ່ນ"/>
                            <ErrorMessage component={"div"} className="text-red-500" name="birthday" />
                            {/*------ address ------*/}
                            <label className="block mb-1 text-sm font-medium text-gray-900 mt-8">ທີ່ຢູ່</label>
                            <Field disabled={isSubmitting} type="text" name="address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 disabled:opacity-50" placeholder="ປ້ອນທີ່ຢູ່ ບ້ານ, ເມືອງ, ແຂວງ"/>
                            <ErrorMessage component={"div"} className="text-red-500" name="address" />
                            {/*------ phoneNumber ------*/}
                            <label className="block mb-1 text-sm font-medium text-gray-900 mt-8">ເບີໂທ</label>
                            <Field disabled={isSubmitting} type="text" name="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 disabled:opacity-50" placeholder="ປ້ອນເບີໂທ"/>
                            <ErrorMessage component={"div"} className="text-red-500" name="phoneNumber" />

                            <div className="flex items-center justify-between gap-4 mt-8">
                                <button type="button" className="w-full mt-8 bg-gray-400 text-white font-bold py-2 px-4 rounded hover:opacity-90" onClick={() => navigate(-1)}>ຍົກເລີກ</button>
                                <button disabled={isSubmitting} type="submit" className="w-full mt-8 bg-[#e08cc4] text-white font-bold py-2 px-4 rounded hover:opacity-90 disabled:opacity-50 flex gap-2 justify-center items-center"><Loading show={isSubmitting} size={5} />ຢືນຢັນ</button>
                            </div>
                        </div>
                    </Form>
                 )}
                </Formik>
                
            </div>
        </Sidebar>
    )
}
