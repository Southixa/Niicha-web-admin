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

export const FormAddPermission = () => {

    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        const response = await AddUserApi(values);
        if(!response) {
            notify.error(EMessage.add);
            return;
        }
        notify.success(SMessage.add);
        navigate("/permission");
    };

    return (
        <Sidebar>
            <div className="w-full flex justify-center">
                <Formik
                validationSchema={validationSchema.user}
                enableReinitialize={true}
                initialValues={{
                    username: "",
                    password: "",
                    role: "",

                }}
                onSubmit={ async (values) => {
                    // console.log(values);
                    await handleSubmit(values)
                }}
                >
                 {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <div className="w-[400px] bg-white mt-20 rounded-lg shadow-md border border-gray-200 px-4 py-4">
                            <p className="text-2xl text-center font-semibold text-gray-800">ເພີ່ມຂໍ້ມູນສິດເຂົ້າໃຊ້</p>
                            {/*------ username ------*/}
                            <label className="block mb-1 text-sm font-medium text-gray-900 mt-8">username</label>
                            <Field disabled={isSubmitting} type="text" name="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 disabled:opacity-50" placeholder="ປ້ອນ username"/>
                            <ErrorMessage component={"div"} className="text-red-500" name="username" />
                            {/*------ password ------*/}
                            <label className="block mb-1 text-sm font-medium text-gray-900 mt-8">ລະຫັດຜ່ານ</label>
                            <Field disabled={isSubmitting} type="text" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 disabled:opacity-50" placeholder="ປ້ອນລະຫັດຜ່ານ"/>
                            <ErrorMessage component={"div"} className="text-red-500" name="password" />
                            {/*------ role ------*/}
                            <label className="block mb-1 text-sm font-medium text-gray-900 mt-8">ສິດເຂົ້າໃຊ້</label>
                            <Field disabled={isSubmitting} as="select" name="role" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 disabled:opacity-50" placeholder="ປ້ອນຈຳນວນທີ່ນັ່ງ">
                                <option value="" disabled>-- ເລຶອກ --</option>
                                <option value={Role.employee}>{Role.employee}</option>
                                <option value={Role.admin}>{Role.admin}</option>
                                <option value={Role.superadmin}>{Role.superadmin}</option>
                            </Field>
                            <ErrorMessage component={"div"} className="text-red-500" name="role" />
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
