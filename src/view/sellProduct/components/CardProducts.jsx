import React from 'react'

// data 
import { dataDessert, dataFood, dataDrink, dataCoffee } from '../dataProduct';

import { IoBagAddSharp } from "react-icons/io5";


export const CardProducts = ({ typeActive }) => {

    return (
        <div className=' mt-8'>
            {typeActive === 'DESSERT' && <ul className=' grid grid-cols-3 gap-5'>
                {dataDessert.map((menu, index) => {
                    return (
                        <li key={index} className='card-product cursor-pointer bg-[#e08cc4] px-3 py-3 rounded-lg 
                            transition-transform ease-in duration-200 hover:scale-[1.02] hover:shadow-lg'>
                            <img src={menu.picture} alt=""
                                className=' rounded-md mb-2'
                            />
                            <div className=' flex items-center justify-between'>
                                <div>
                                    <span className=' font-medium text-xl'>{menu.name}</span>
                                    <p className=' text-[#e3f3da] underline'>{menu.price} ₭</p>
                                </div>
                                <button className=' flex items-center justify-center rounded-lg w-10 bg-[#e3f3da] h-10'>
                                    <IoBagAddSharp className=' text-2xl text-[#daa7e2]' />
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            }

            {typeActive === 'FOOD' && <ul className=' grid grid-cols-3 gap-5'>
                {dataFood.map((menu, index) => {
                    return (
                        <li key={index} className='card-product cursor-pointer bg-[#e08cc4] px-3 py-3 rounded-lg 
                            transition-transform ease-in duration-200 hover:scale-[1.02] hover:shadow-lg'>
                            <img src={menu.picture} alt=""
                                className=' rounded-md mb-2'
                            />
                            <div className=' flex items-center justify-between'>
                                <div>
                                    <span className=' font-medium text-xl'>{menu.name}</span>
                                    <p className=' text-[#e3f3da] underline'>{menu.price} ₭</p>
                                </div>
                                <button className=' flex items-center justify-center rounded-lg w-10 bg-[#e3f3da] h-10'>
                                    <IoBagAddSharp className=' text-2xl text-[#daa7e2]' />
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            }

            {typeActive === 'DRINK' && <ul className=' grid grid-cols-3 gap-5'>
                {dataDrink.map((menu, index) => {
                    return (
                        <li key={index} className='card-product cursor-pointer bg-[#e08cc4] px-3 py-3 rounded-lg 
                            transition-transform ease-in duration-200 hover:scale-[1.02] hover:shadow-lg'>
                            <img src={menu.picture} alt=""
                                className=' rounded-md mb-2'
                            />
                            <div className=' flex items-center justify-between'>
                                <div>
                                    <span className=' font-medium text-xl'>{menu.name}</span>
                                    <p className=' text-[#e3f3da] underline'>{menu.price} ₭</p>
                                </div>
                                <button className=' flex items-center justify-center rounded-lg w-10 bg-[#e3f3da] h-10'>
                                    <IoBagAddSharp className=' text-2xl text-[#daa7e2]' />
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            }

            {typeActive === 'COFFEE' && <ul className=' grid grid-cols-3 gap-5'>
                {dataCoffee.map((menu, index) => {
                    return (
                        <li key={index} className='card-product cursor-pointer bg-[#e08cc4] px-3 py-3 rounded-lg 
                            transition-transform ease-in duration-200 hover:scale-[1.02] hover:shadow-lg'>
                            <img src={menu.picture} alt=""
                                className=' rounded-md mb-2'
                            />
                            <div className=' flex items-center justify-between'>
                                <div>
                                    <span className=' font-medium text-xl'>{menu.name}</span>
                                    <p className=' text-[#e3f3da] underline'>{menu.price} ₭</p>
                                </div>
                                <button className=' flex items-center justify-center rounded-lg w-10 bg-[#e3f3da] h-10'>
                                    <IoBagAddSharp className=' text-2xl text-[#daa7e2]' />
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            }


        </div>
    )
}
