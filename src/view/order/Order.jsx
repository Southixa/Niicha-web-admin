import React from 'react'
import Sidebar from '../../components/Sidebar'

// icons
import { MdOutlinePriceChange, MdOutlineFreeCancellation } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { OrderList } from './components/OrderList';

export const Order = () => {
    return (
        <Sidebar>
            <div className=' bg-[#fff] w-full h-screen '>
                <div className='  w-full h-full  p-8'>
                    <div className="shadow-lg bg-[#fff4fb] mx-2 py-10 rounded-lg">
                        <div className=" grid grid-cols-4 place-items-center">
                            <div className=" flex items-center justify-between w-[220px] h-[100px] p-4 rounded-lg bg-green-300
                            shadow-lg">
                                <div className=" flex flex-col gap-y-1">
                                    <p className=' text-[18px] font-semibold'>999,000 ກີບ</p>
                                    <p className=' text-[14px] font-medium'>ມູນຄ່າລວມ</p>
                                </div>
                                <div className=" bg-yellow-100 p-1.5 rounded-full">
                                    <MdOutlinePriceChange className=' text-[24px]' />
                                </div>
                            </div>
                            <div className=" flex items-center justify-between w-[220px] h-[100px] p-4 rounded-lg bg-[#e3f3da]
                            shadow-lg">
                                <div className=" flex flex-col gap-y-1">
                                    <p className=' text-[18px] font-semibold'>8 ລາຍການ</p>
                                    <p className=' text-[14px] font-medium'>ອໍເດີ້ທັງໝົດ</p>
                                </div>
                                <div className=" bg-[#fff] p-2 rounded-full">
                                    <FaRegListAlt className=' text-[22px]' />
                                </div>
                            </div>
                            <div className=" flex items-center justify-between w-[220px] h-[100px] p-4 rounded-lg bg-[#f0f7d7]
                            shadow-lg">
                                <div className=" flex flex-col gap-y-1">
                                    <p className=' text-[18px] font-semibold'>10 ລາຍການ</p>
                                    <p className=' text-[14px] font-medium'>ອໍເດີ້ທີ່ອະນຸມັດ</p>
                                </div>
                                <div className=" bg-orange-100 p-2 rounded-full">
                                    <FaRegCalendarCheck className=' text-[22px] text-black' />
                                </div>
                            </div>
                            <div className=" flex items-center justify-between w-[220px] h-[100px] p-4 rounded-lg bg-[#daa7e2]
                            shadow-lg">
                                <div className=" flex flex-col gap-y-1">
                                    <p className=' text-[18px] font-semibold'>1 ລາຍການ</p>
                                    <p className=' text-[14px] font-medium'>ອໍເດີ້ທີ່ຍົກເລີກ</p>
                                </div>
                                <div className=" bg-[#e3f3da] p-1.5 rounded-full">
                                    <MdOutlineFreeCancellation className=' text-[24px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-10 w-full flex items-center justify-center'>
                        <div className=' flex gap-20'>
                            <h4 className=" bg-yellow-300 w-[220px] font-medium  text-center py-2 rounded-md">ລໍຖ້າອະນຸມັດ</h4>
                            <h4 className=" bg-red-700 w-[220px] font-medium text-white text-center py-2 rounded-md">ອໍເດີ້ທີ່ຍົກເລີກ</h4>
                            <h4 className=" bg-green-300 w-[220px] font-medium  text-center py-2 rounded-md">ອໍເດີ້ທີ່ສຳເລັດ</h4>
                        </div>
                    </div>
                    <OrderList />
                </div>
            </div>
        </Sidebar>
    )
}
