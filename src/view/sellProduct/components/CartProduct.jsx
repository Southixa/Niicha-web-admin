import React, { useState } from 'react'

import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import ModalConfirm from './ModalComfirm';
import { hr } from 'date-fns/locale';

export const CartProduct = ({ cart }) => {
    const [amount, setAmount] = useState({});

    function addAmount(itemId) {
        setAmount((prevAmount) => ({
            ...prevAmount,
            [itemId]: (prevAmount[itemId] || 1) + 1
        }))
    }
    function deleteAmount(itemId) {
        setAmount((prevAmount) => ({
            ...prevAmount,
            [itemId]: Math.max((prevAmount[itemId] || 1) - 1, 1),
        }))
    }
    return (
        <div className=' p-4'>
            <h1 className='text-3xl font-semibold text-center py-3 my-3'>ອໍເດີ້ປັດຈຸບັນ</h1>
            <ul className=' flex flex-col gap-y-3'>
                {
                    cart.map((item, index) => (
                        <li key={index} className=' flex items-center h-full'>
                            <img src={item.picture} alt=""
                                className=' w-24 h-20 object-cover  rounded-lg mr-[6px]'
                            />
                            <div className=' flex justify-between w-full'>
                                <div className=' h-full'>
                                    <h4 className=' text-[16px] font-medium mb-3 '>{item.nameLao}</h4>
                                    <div className=' leading-[1]'>
                                        <p className=' text-[15px]'>ຈຳນວນ</p>
                                        <div className=' flex items-center gap-1'>
                                            <button onClick={() => addAmount(item.id)} className=' text-[#e08cc4]'><FaCirclePlus /></button>
                                            <span className=' cursor-default'>{amount[item.id] || 1}</span>
                                            <button onClick={() => deleteAmount(item.id)} className=' text-red-300'><FaCircleMinus /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex items-end'>
                                    <p className=' font-semibold'>{item.price}</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className=' flex justify-between items-center mb-5 mt-10'>
                <h4 className=' text-[18px] '>ລາຄາລວມ</h4>
                <p className='font-bold'>
                    {cart.reduce((total, item) => total + ((amount[item.id] || 0) * item.price), 0)} ₭
                </p>
            </div>
            {/* <button className=' block bg-green-400 w-full py-[6px] border-2 border-black rounded-lg text-[18px]'>ສັ່ງຊື້</button> */}
            <div className=' w-full'>
                <ModalConfirm cart={cart} amount={amount} />
            </div>
        </div>
    )
}
