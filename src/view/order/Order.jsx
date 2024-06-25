import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'

// icons
import { MdOutlinePriceChange, MdOutlineFreeCancellation } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { OrderList } from './components/OrderList';
import { GetOrderApi } from '../../api/order';
import { formatCurrency } from '../../helpers';
import { notify } from '../../utils';
import { EMessage } from '../../constant';

export const Order = () => {

    const [order, setOrder] = useState([]);

    const fetchData = async () => {
        const response = await GetOrderApi();
        if(!response) {
            notify.error(EMessage.getData)
            return;
        }
        setOrder(response);
    }

    const calTotalPrice = (order) => {
        let total = 0;
        order?.map(item => {
            total += item?.totalPrice
        })
        return total
    }

    const calTotalOrder = (order) => {
        return order.length;
    }

    const calTotalApproved = (order) => {
        let total = 0;
        order?.map(item => {
            if(item?.status === 'ສຳເລັດ') total += 1
        })
        return total
    }

    const calTotalDenied = (order) => {
        let total = 0;
        order?.map(item => {
            if(item?.status === 'ຍົກເລີກ') total += 1
        })
        return total
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Sidebar>
            <div className=' bg-[#fff] w-full h-screen '>
                <div className='  w-full h-full  p-8'>
                    <div className="shadow-lg bg-[#fff4fb] mx-2 py-10 rounded-lg">
                        <div className=" grid grid-cols-4 place-items-center">
                            <div className=" flex items-center justify-between w-[220px] h-[100px] p-4 rounded-lg bg-green-300
                            shadow-lg">
                                <div className=" flex flex-col gap-y-1">
                                    <p className=' text-[18px] font-semibold'>{formatCurrency(calTotalPrice(order))} ກີບ</p>
                                    <p className=' text-[14px] font-medium'>ມູນຄ່າລວມ</p>
                                </div>
                                <div className=" bg-yellow-100 p-1.5 rounded-full">
                                    <MdOutlinePriceChange className=' text-[24px]' />
                                </div>
                            </div>
                            <div className=" flex items-center justify-between w-[220px] h-[100px] p-4 rounded-lg bg-[#e3f3da]
                            shadow-lg">
                                <div className=" flex flex-col gap-y-1">
                                    <p className=' text-[18px] font-semibold'>{calTotalOrder(order)} ລາຍການ</p>
                                    <p className=' text-[14px] font-medium'>ອໍເດີ້ທັງໝົດ</p>
                                </div>
                                <div className=" bg-[#fff] p-2 rounded-full">
                                    <FaRegListAlt className=' text-[22px]' />
                                </div>
                            </div>
                            <div className=" flex items-center justify-between w-[220px] h-[100px] p-4 rounded-lg bg-[#f0f7d7]
                            shadow-lg">
                                <div className=" flex flex-col gap-y-1">
                                    <p className=' text-[18px] font-semibold'>{calTotalApproved(order)} ລາຍການ</p>
                                    <p className=' text-[14px] font-medium'>ອໍເດີ້ທີ່ອະນຸມັດ</p>
                                </div>
                                <div className=" bg-orange-100 p-2 rounded-full">
                                    <FaRegCalendarCheck className=' text-[22px] text-black' />
                                </div>
                            </div>
                            <div className=" flex items-center justify-between w-[220px] h-[100px] p-4 rounded-lg bg-[#daa7e2]
                            shadow-lg">
                                <div className=" flex flex-col gap-y-1">
                                    <p className=' text-[18px] font-semibold'>{calTotalDenied(order)} ລາຍການ</p>
                                    <p className=' text-[14px] font-medium'>ອໍເດີ້ທີ່ຍົກເລີກ</p>
                                </div>
                                <div className=" bg-[#e3f3da] p-1.5 rounded-full">
                                    <MdOutlineFreeCancellation className=' text-[24px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <OrderList />
                </div>
            </div>
        </Sidebar>
    )
}
