import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { cloudinaryResizeImage, formatCurrency } from '../../../helpers';
import SellButton from './SellButton';
import ModalConfirm from './ModalComfirm';

const CartOrder = ({productList, onAdd, onRemove, onSellSuccess}) => {

  const seenItemsId = [];

  const getTotalAmount = (PID) => {
    let amount = 0
    productList.forEach((item) => {
      if(item?.PID === PID) {
        amount++;
      }
    });
    return amount;
  }

  const getTotalPrice = (PID) => {
    let price = 0
    productList.forEach((item) => {
      if(item?.PID === PID) {
        price += item?.price;
      }
    });
    return formatCurrency(price);
  }

  const calTotalPrice = () => {
    let total = 0
    productList.forEach((item) => {
      total += item?.price;
    });
    return formatCurrency(total);
  }

  return (
    <div className='w-full p-3 pb-8'>
      <p className='text-center mt-8 mb-4 text-2xl font-semibold text-gray-900'>ອໍເດີ້ປັດຈຸບັນ</p>
      <div className='w-full flex flex-col gap-4'>
        {productList.map((item, index) => {
          if (seenItemsId.includes(item?.PID)) {
            return null
          } else {
            seenItemsId.push(item?.PID);
            return (
              <div key={index} className='w-full h-20 flex justify-between gap-2'>
                <div className='w-20 h-20 rounded-lg overflow-hidden bg-blue-gray-700'>
                  <img src={cloudinaryResizeImage(item?.image, 300)} alt='productImage' className='w-full h-full object-cover' />
                </div>
                <div className='grow flex flex-col'>
                  <p className='text-sm font-semibold'>{item?.name}</p>
                  <p className='text-sm text-gray-700 mt-1 mb-1 flex items-end flex-grow'>ຈຳນວນ</p>
                  <div className='flex justify-between items-center w-16 h-4'>
                    <button onClick={() => onRemove(item)} className='w-4 h-4 bg-red-400 text-white flex justify-center items-center rounded-full'><FaMinus size={10} /></button>
                    <span className='min-w-2 flex justify-center'>{getTotalAmount(item?.PID)}</span>
                    <button onClick={() => onAdd(item)} className='w-4 h-4 bg-purple-300 text-white flex justify-center items-center rounded-full'><FaPlus size={10} /></button>
                  </div>
                </div>
                <div className='min-w-20 flex justify-end items-end'>
                  <p>{getTotalPrice(item?.PID)} ກີບ</p>
                </div>
              </div>
            )
          }
        })}
      </div>
      <div className='w-full mt-12 flex justify-between items-center'>
        <p>ລາຄາລວມ</p>
        <p>{calTotalPrice()} ກີບ</p>
      </div>
      <ModalConfirm productList={productList} disabled={productList.length === 0} onSellSuccess={onSellSuccess}/>
      
    </div>
  )
}

export default CartOrder