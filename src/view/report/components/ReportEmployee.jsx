import React, { useEffect, useState } from 'react';
import logo from "../../../assets/logos.jpeg";
import { autoFetchingData, getCurrentDate, getCurrentUsername, timeFormatter } from '../../../helpers';
import { GetProductTypeApi } from '../../../api/product_type';
import { GetEmployeeApi } from '../../../api/order_detail';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { IoCloudDownloadOutline } from 'react-icons/io5';

export const ReportEmployee = () => {

    const navigate = useNavigate();

    const handleDownloadPDF = () => {
        // Trigger the browser's print dialog
        window.print()
    };

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        autoFetchingData(GetEmployeeApi, setEmployee)
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
                    <h1 className='text-[28px] font-semibold'>ລາຍງານພະນັກງານ</h1>
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
                                <th className='border-2 text-center border-black'>ລະຫັດ</th>
                                <th className='border-2 text-center border-black'>ຊື່</th>
                                <th className='border-2 text-center border-black'>ນາມສະກຸນ</th>
                                <th className='border-2 text-center border-black'>ເພດ</th>
                                <th className='border-2 text-center border-black'>ເບີໂທ</th>
                                <th className='border-2 text-center border-black'>ວັນເດືອນປີເກີດ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee.map((item, index) => (
                                <tr key={index}>
                                    <td className='border-2 text-center border-black'>{index + 1}</td>
                                    <td className='border-2 text-center border-black'>{item?.EID}</td>
                                    <td className='border-2 text-center border-black'>{item?.firstname}</td>
                                    <td className='border-2 text-center border-black'>{item?.lastname}</td>
                                    <td className='border-2 text-center border-black'>{item?.gender}</td>
                                    <td className='border-2 text-center border-black'>{item?.phoneNumber}</td>
                                    <td className='border-2 text-center border-black'>{timeFormatter(item?.birthday)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
