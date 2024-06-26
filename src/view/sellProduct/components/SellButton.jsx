import React, { useState } from 'react'
import Swal from 'sweetalert2';
import ModalConfirm from './ModalComfirm';
import { AddOrderForSellApi } from '../../../api/order';
import { notify } from '../../../utils';
import { EMessage } from '../../../constant';
import { AddOrderDetailApi } from '../../../api/order_detail';

const SellButton = ({disabled = false, onSuccess = () => {}, productList}) => {

    const calTotalPrice = () => {
      let total = 0
      productList.forEach((item) => {
        total += item?.price;
      });
      return total;
    }

    const addOrder = async () => {
      const data = {
        totalPrice: calTotalPrice(),
      }
      const response = await AddOrderForSellApi(data);
      if(!response){
        notify.error(EMessage.add)
        return false;
      }
      return response?.order_id;
    }

    const autoAddingData = async (addApi, data) => {
      const response = await addApi(data);
      if(!response){
        return false;
      }
      return true;
    }

    const getTotalAmount = (PID) => {
      let amount = 0
      productList.forEach((item) => {
        if(item?.PID === PID) {
          amount++;
        }
      });
      return amount;
    }

    const addOrderDetail = async (orderId) => {
        const uniqueProductList = [...new Set(productList.map(item => item))];

        // add every unique product
        const resultAdd =  await Promise.all(
          uniqueProductList.map((item) => {
            const data = {
              orders_id: orderId,
              product_id: item?.PID,
              qty: getTotalAmount(item?.PID),
              total: getTotalAmount(item?.PID) * item?.price
            }
            return autoAddingData(AddOrderDetailApi, data);
        })
        )

        if (resultAdd.includes(false)) {
          notify.error(EMessage.add)
          return false;
        }

        return true;
    }

    const sellOrder = async () => {
        const orderId = await addOrder();
        if(!orderId){
          return;
        }
        const result = await addOrderDetail(orderId);
        if(!result){
          return;
        }
        onSuccess(orderId);
        return;
    }

    const comfirmSell = async () => {
        Swal.fire({
            title: "ຂາຍສິນຄ້າ",
            text: "ທ່ານຕ້ອງການຂາຍແທ້ບໍ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ຕົກລົງ",
            cancelButtonText: "ຍົກເລີກ",
            reverseButtons: true,
            preConfirm: async () => {
              return await sellOrder();
            },
          })
    }


  return (
    <>
        <button
        disabled={disabled}
            className=" bg-[#e08cc4] active:bg-[#d66eb4]
        font-semibold text-sm px-6 
        py-3 rounded-[50px] shadow outline-none focus:outline-none mr-1 mb-1 
        ease-linear transition-all duration-150 disabled:opacity-50"
            type="button"
            onClick={comfirmSell}
        >
            ຢືນຢັນການສັ່ງຊື້
        </button>
    </>
  )
}

export default SellButton