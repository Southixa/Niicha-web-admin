import React, { useEffect, useState } from 'react';
import logo from "../../../assets/logos.jpeg";
import { autoFetchingData, formatCurrency, getCurrentDate, getCurrentUsername, timeFormatter } from '../../../helpers';
import { GetProductTypeApi } from '../../../api/product_type';
import { GetEmployeeApi } from '../../../api/order_detail';
import { GetOrderApi } from '../../../api/order';
import { useNavigate } from 'react-router-dom';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { FaAngleLeft } from 'react-icons/fa';

export const ReportIncome = () => {

    const navigate = useNavigate();

    const handleDownloadPDF = () => {
        // Trigger the browser's print dialog
        window.print()
    };

    const [order, setOrder] = useState([]);

    const calTotalOrderPrice = (order) => {
        let total = 0;
        order?.map(item => {
            total += item?.totalPrice
        })
        return total
    }

    const calTotalOrder = (order) => {
        return order.length;
    }

    const calTotalOrderOnylySuccess = (order) => {
        let total = 0;
        order?.map(item => {
            if(item?.status === 'ສຳເລັດ') total += 1
        })
        return total
    }

    const calTotalOrderPriceOnlySuccess = (order) => {
        let total = 0;
        order?.map(item => {
            if(item?.status === 'ສຳເລັດ') total += item?.totalPrice
        })
        return total
    }

    useEffect(() => {
        autoFetchingData(GetOrderApi, setOrder)
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
                    <h1 className='text-[28px] font-semibold'>ລາຍງານລາຍຮັບ</h1>
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
                                <th className='border-2 text-center border-black'>ລາຄາລວມອໍເດີ້ທັງໝົດ</th>
                                <th className='border-2 text-center border-black'>ຈຳນວນອໍເດີ້ທັງໝົດ</th>
                                <th className='border-2 text-center border-black'>ລາຄາລວມອໍເດີ້ທີ່ສຳເລັດທັງໝົດ</th>
                                <th className='border-2 text-center border-black'>ຈຳນວນອໍເດີ້ທີ່ສຳເລັດ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border-2 text-center border-black'>{formatCurrency(calTotalOrderPrice(order))} ກີບ</td>
                                <td className='border-2 text-center border-black'>{calTotalOrder(order)}</td>
                                <td className='border-2 text-center border-black'>{formatCurrency(calTotalOrderPriceOnlySuccess(order))} ກີບ</td>
                                <td className='border-2 text-center border-black'>{calTotalOrderOnylySuccess(order)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
