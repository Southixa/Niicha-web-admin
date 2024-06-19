import React, { useState } from 'react'

// data 
import { dataProduct } from '../dataProduct';

import { IoBagAddSharp } from "react-icons/io5";


export const CardSellProducts = ({ typeActive, addToCart }) => {

    const filterProduct = dataProduct.filter(item => item.category === typeActive)
    return (
        <div className=' mt-8'>
            <ul className=' grid grid-cols-3 gap-5'>
                {filterProduct.map((menu, index) => {
                    return (
                        <li key={index} style={{ fontFamily: "Noto Sans Lao" }}
                            className='card-product relative cursor-pointer bg-[#e08cc4] px-3 pt-3 pb-6 rounded-lg 
                            transition-transform ease-in duration-200 hover:scale-[1.02] hover:shadow-lg'>
                            <img src={menu.picture} alt=""
                                className=' rounded-md mb-2 w-56 h-56 object-cover'
                            />
                            <div className=' flex items-center justify-between mt-3 mb-2'>
                                <div>
                                    <p className=' font-medium text-[18px]'>{menu.nameLao}</p>
                                    <p className=' font-medium text-[12px]'>{menu.nameEng}</p>
                                    <p className=' text-[#e3f3da] underline absolute bottom-1'>{menu.price} ₭</p>
                                </div>
                                <button onClick={() => addToCart(menu)} className=' flex items-center justify-center rounded-lg w-10 bg-[#e3f3da] h-10'>
                                    <IoBagAddSharp className=' text-2xl text-[#daa7e2]' />
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}
