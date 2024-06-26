import React, { useState } from "react";
import { useNavigate } from "react-router";
import QRCode from 'qrcode.react';
import Logo from "../../assets/logos.jpeg";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Sidebar from '../../components/Sidebar'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { notify, validationSchema } from "../../utils";
import { AddTableApi } from "../../api/table";
import { EMessage, SMessage, clientWebAppBaseUrl } from "../../constant";
import Loading from "../../components/Loading";

export const FormAddTable = () => {

    const navigate = useNavigate();
    const [qrCodeUrl, setQrCodeUrl] = useState(clientWebAppBaseUrl);
    const [tableNumber, setTableNumber] = useState("");

    const handleSubmit = async (values) => {
        const response = await AddTableApi(values);
        if(!response) {
            notify.error(EMessage.add);
            return;
        }
        notify.success(SMessage.add);
        navigate("/tableManage");
    };

    const onTableNumberChange = (value) => {
        if(!Number.isInteger(+value)){
            return
        }
        setTableNumber(value);
        setQrCodeUrl(`${clientWebAppBaseUrl}/${value}`);
    }

    return (
        <Sidebar>
            <div className="w-full flex justify-center">
                <Formik
                validationSchema={validationSchema.table}
                enableReinitialize={true}
                initialValues={{
                    noTable: tableNumber,
                    url: qrCodeUrl,

                }}
                onSubmit={ async (values) => {
                    // console.log(values);
                    await handleSubmit(values)
                }}
                >
                 {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <div className="w-[400px] bg-white mt-20 rounded-lg shadow-md border border-gray-200 px-4 py-4 mb-20">
                            <p className="text-2xl text-center font-semibold text-gray-800">ເພີ່ມຂໍ້ມູນໂຕະ</p>
                            {/*------ noTable ------*/}
                            <label className="block mb-1 text-sm font-medium text-gray-900 mt-8">ເບີໂຕະ</label>
                            <Field disabled={isSubmitting} onChange={(e) => onTableNumberChange(e.target.value)} type="text" name="noTable" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 disabled:opacity-50" placeholder="ປ້ອນໝາຍເລກໂຕະ"/>
                            <ErrorMessage component={"div"} className="text-red-500" name="noTable" />
                            {/*------ url ------*/}
                            <label className="block mb-1 text-sm font-medium text-gray-900 mt-8">URL qr code ສັ່ງອາຫານ</label>
                            <Field disabled={true} type="text" name="url" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 disabled:opacity-50" placeholder="ປ້ອນເວັບໄຊ"/>
                            <ErrorMessage component={"div"} className="text-red-500" name="url" />
                            <div className="w-full flex justify-center mt-8 opacity-80">
                                <QRCode size={150} value={qrCodeUrl} />
                            </div>
                            <div className="flex items-center justify-between gap-4 mt-8">
                                <button className="w-full mt-8 bg-gray-400 text-white font-bold py-2 px-4 rounded hover:opacity-90" onClick={() => navigate("/tableManage")}>ຍົກເລີກ</button>
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
