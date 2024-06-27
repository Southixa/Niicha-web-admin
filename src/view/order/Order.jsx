import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { OrderList } from './components/OrderList';
import OrderStatic from './components/orderStatic';

export const Order = () => {

    return (
        <Sidebar>
            <div className=' bg-[#fff] w-full h-screen '>
                <div className='  w-full h-full  p-8'>
                    <OrderStatic />
                    <OrderList />
                </div>
            </div>
        </Sidebar>
    )
}
