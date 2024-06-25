import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { dataReport } from './components/dataReport';

import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

export const Reports = () => {
    const [typeActive, setTypeActive] = useState('')

    return (
        <Sidebar>
            <div className=' bg-[#fff] w-full '>
                <div className=' flex h-full  p-8'>
                    <ul className=' grid grid-cols-4 gap-x-[10px] gap-y-[30px] w-full'>
                        {
                            dataReport.map((item, index) => {
                                return (
                                    <NavLink to={item.path} key={index} onClick={() => item.title === typeActive ? setTypeActive(item.title) : setTypeActive(item.title)}
                                        className={` ${typeActive === item.title ? 'bg-[#e3f3da] border-2 border-black' : 'border-2 border-transparent bg-[#ffecd5]'} w-[220px] flex flex-col px-1 py-4 cursor-pointer rounded-[20px]  
                                        hover:border-black hover:border-2 duration-300 font-medium  text-[20px] text-center`}>
                                        <h2>
                                            {item.title}
                                        </h2>
                                        <div className=' flex justify-end mt-1'>
                                            <FaArrowRight className='bg-[#d5e2bb] w-[40px] h-[40px] rounded-full p-1 text-[30px] text-white ' />
                                        </div>
                                    </NavLink>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </Sidebar>
    )
}
