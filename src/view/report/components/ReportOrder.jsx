import React, { useEffect, useState } from 'react';
import logo from "../../../assets/logos.jpeg";
import { autoFetchingData, formatCurrency, getCurrentDate, getCurrentUsername, timeFormatter } from '../../../helpers';
import { GetProductTypeApi } from '../../../api/product_type';
import { GetEmployeeApi } from '../../../api/order_detail';
import { GetOrderApi } from '../../../api/order';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { IoCloudDownloadOutline } from 'react-icons/io5';

export const ReportOrder = () => {

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const navigate = useNavigate();

    const handleDownloadPDF = () => {
        // Trigger the browser's print dialog
        window.print()
    };

    const [initOrder, setInitOrder] = useState([]);
    const [order, setOrder] = useState([]);

    const fetchData = async () => {
        const response = await GetOrderApi();
        if(!response) {
            notify.error(EMessage.getData)
            return;
        }
        setOrder(response);
        setInitOrder(response);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const filterByDate = () => {
        const filtered = initOrder.filter(item => {
            const dateValue = Date.parse(timeFormatter(item?.createdAt));
            const startDateValue = Date.parse(startDate);
            const endDateValue = Date.parse(endDate);
            return (dateValue >= startDateValue && dateValue <= endDateValue);
        })
        return filtered;
    }

    useEffect(() => {
        if(!startDate || !endDate) return;
        const data = filterByDate();
        setOrder(data);
    }, [startDate, endDate])

    const calTotalPrice = (order) => {
        let total = 0;
        order?.map(item => {
            total += item?.totalPrice
        })
        return total
    }

    return (
        <div className='w-full h-full'>
            <div id='form_pdf' className='w-full h-full flex flex-col justify-center py-10 px-14'>
                <div className='w-full mb-8 flex justify-between items-center no-print'>
                    <button onClick={() => navigate(-1)} className='flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 px-2 py-2 rounded-md'><FaAngleLeft />ກັບຄືນ</button>
                    <div className='w-[520px] h-20 flex justify-between pl-20'>
                        <div>
                            <p className='mb-2'>ແຕ່ວັນທີ</p>
                            <input onChange={(e) => setStartDate(e.target.value)} className='w-52 h-10 bg-gray-100 px-2 border border-gray-400 rounded-lg' type="date" placeholder='ຄົ້ນຫາລາຍງານ' />
                        </div>
                        <div>
                            <p className='mb-2'>ຫາວັນ</p>
                            <input onChange={(e) => setEndDate(e.target.value)} className='w-52 h-10 bg-gray-100 px-2 border border-gray-400 rounded-lg' type="date" placeholder='ຄົ້ນຫາລາຍງານ' />
                        </div>
                    </div>
                    <button
                        className='bg-[#e3f3da] text-[16px] px-4 py-2 rounded-full no-print hover:shadow-sm hover:opacity-85 flex justify-center items-center gap-3'
                        onClick={handleDownloadPDF}
                    >
                        ດາວໂຫລດ PDF <IoCloudDownloadOutline />
                    </button>
                </div>
                <div className='flex items-center justify-between'>
                    <img src={logo} alt="" className='w-24 rounded-md' />
                    <h1 className='text-[28px] font-semibold'>ລາຍງານອໍເດີທັງໝົດ</h1>
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
                                <th className='border-2 text-center border-black'>ລະຫັດອໍເດີ</th>
                                <th className='border-2 text-center border-black'>ວັນທີ</th>
                                <th className='border-2 text-center border-black'>ສະຖານະ</th>
                                <th className='border-2 text-center border-black'>ລາຄາລວມ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.map((item, index) => (
                                <tr key={index}>
                                    <td className='border-2 text-center border-black'>{index + 1}</td>
                                    <td className='border-2 text-center border-black'>{item?.OID}</td>
                                    <td className='border-2 text-center border-black'>{timeFormatter(item?.createdAt)}</td>
                                    <td className='border-2 text-center border-black'>{item?.status}</td>
                                    <td className='border-2 text-center border-black'>{formatCurrency(item?.totalPrice)} ກີບ</td>
                                </tr>
                            ))}
                            <tr>
                                <td className='border-2 text-center border-black'></td>
                                <td className='border-2 text-center border-black'></td>
                                <td className='border-2 text-center border-black'></td>
                                <td className='border-2 text-center border-black font-bold'>ລວມທັງໝົດ:</td>
                                <td className='border-2 text-center border-black font-bold'>{formatCurrency(calTotalPrice(order))} ກີບ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
