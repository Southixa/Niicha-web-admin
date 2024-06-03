import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { CardProducts } from './components/CardProducts'
import { CartProduct } from './components/CartProduct'

export const SellProducts = () => {
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
    console.log(typeActive);

    return (
        <Sidebar>
            <div className=' bg-[#eaf1f2] w-full '>
                <div className=' flex h-full'>
                    <div className=' flex-[4] p-8'>
                        <ul className=' flex items-center gap-[60px]'>
                            {
                                listTypeProduct.map((item, index) => {
                                    return (
                                        <li key={index} onClick={() => item.title === typeActive ? setTypeActive(item.title) : setTypeActive(item.title)}
                                            className={`bg-[#daa7e2] ${typeActive === item.title ? 'bg-[#e3f3da] border-2 border-black' : 'border-2 border-transparent'} px-10 py-6 cursor-pointer rounded-[20px] font-medium  text-lg`}>
                                            {item.title}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div>
                            <CardProducts typeActive={typeActive} />
                        </div>
                    </div>
                    <div className=' flex-[3] bg-[#f0f7d7]'>
                        <CartProduct />
                    </div>
                </div>
            </div>
        </Sidebar>
    )
}
