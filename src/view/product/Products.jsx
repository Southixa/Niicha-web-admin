import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'

export const Products = () => {
    const [typeActive, setTypeActive] = useState('DESSERT')
    const listTypeProduct = [
        {
            id: 1,
            title: 'DESSERT',
            path: '/dessert'
        },
        {
            id: 2,
            title: 'FOOD',
            path: '/food'
        },
        {
            id: 3,
            title: 'DRINK',
            path: '/drink'
        },
        {
            id: 4,
            title: 'COFFEE',
            path: '/coffee'
        }
    ]


    return (
        <Sidebar>
            <div className=' bg-[#eaf1f2] w-full h-screen'>
                <div className=' flex p-8'>
                    <div className=' flex-[5]'>
                        <ul className=' flex items-center gap-[60px]'>
                            {
                                listTypeProduct.map((item, index) => {
                                    return (
                                        <li onClick={() => item.title === typeActive ? setTypeActive(item.title) : setTypeActive(item.title)} className={`bg-[#daa7e2] ${typeActive === item.title ? 'bg-[#e3f3da] border-2 border-black' : ''} px-10 py-6 cursor-pointer rounded-[20px] font-medium text-lg`}>
                                            {item.title}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className=' flex-[2]'>k</div>
                </div>
            </div>
        </Sidebar>
    )
}