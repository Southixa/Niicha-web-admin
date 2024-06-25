import React, { useEffect, useState } from 'react';
import logo from "../../../assets/logos.jpeg";
import { autoFetchingData, getCurrentDate, getCurrentUsername } from '../../../helpers';
import { GetProductTypeApi } from '../../../api/product_type';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { IoCloudDownloadOutline } from "react-icons/io5";

export const ReportTypeProduct = () => {

    const navigate = useNavigate();

    const handleDownloadPDF = () => {
        // Trigger the browser's print dialog
        window.print()
    };

    const [type, setType] = useState([]);

    useEffect(() => {
        autoFetchingData(GetProductTypeApi, setType)
    }, [])

    return (
        <div className='w-full h-full'>
            <div id='form_pdf' className='w-full h-full flex flex-col justify-center py-10 px-14'>
                <div className='w-full mb-8 flex justify-between items-center no-print'>
                    <button onClick={() => navigate(-1)} className='flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 px-2 py-2 rounded-md'><FaAngleLeft />ກັບຄືນ</button>
                    <button
                        className='bg-[#e3f3da] text-[16px] px-4 py-2 rounded-full no-print hover:shadow-sm hover:opacity-85 flex justify-center items-center gap-3'
                        onClick={handleDownloadPDF}
                    >
                        ດາວໂຫລດ PDF <IoCloudDownloadOutline />
                    </button>
                </div>
                <div className='flex items-center justify-between'>
                    <img src={logo} alt="" className='w-24 rounded-md' />
                    <h1 className='text-[28px] font-semibold'>ລາຍງານປະເພດສິນຄ້າ</h1>
                    <div className='w-24'></div>
                </div>
                <div className='mt-7'>
                    <h3 className='text-[18px]'>ຊື່ຮ້ານ: <span>Niicha ນິຊາ</span></h3>
                    <h3 className='text-[18px]'>ຊື່ພະນັກງານຜູ້ອອກບິນ: <span>{getCurrentUsername()}</span></h3>
                    <p className='text-[18px]'>ວັນທີທີ່ອອກລາຍງານ: {getCurrentDate()} <span></span></p>
                </div>
                <div className='w-full flex justify-center py-10'>
                    <table className='w-[500px]'>
                        <thead>
                            <tr>
                                <th className='border-2 text-center border-black'>ລຳດັບ</th>
                                <th className='border-2 text-center border-black'>ຊື່ປະເພດ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {type.map((item, index) => (
                                <tr key={index}>
                                    <td className='border-2 text-center border-black'>{index + 1}</td>
                                    <td className='border-2 text-center border-black'>{item?.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
