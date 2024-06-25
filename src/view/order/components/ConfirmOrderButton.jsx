import React from 'react'
import Swal from "sweetalert2";
import { UpdateOrderStatusApi } from '../../../api/order';
import { EMessage, SMessage } from '../../../constant';
import { notify } from '../../../utils';

const ConfirmOrderButton = ({id, onSuccess = () => {}}) => {


    const updateOrderStatus = async () => {
        const data = {
            status: "ສຳເລັດ"
        }
        const response = await UpdateOrderStatusApi(id, data);
        if(!response){
          notify.error(EMessage.update)
          return;
        }
        notify.success(SMessage.update)
        onSuccess();
        return;
    }

    const comfirmOrder = async () => {
        Swal.fire({
            title: "ອະນຸມັດ?",
            text: "ທ່ານຕ້ອງການອະນຸມັດແທ້ບໍ!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ຕົກລົງ",
            cancelButtonText: "ຍົກເລີກ",
            reverseButtons: true,
            preConfirm: async () => {
              return await updateOrderStatus();
            },
          })
    }


  return (
    <p onClick={comfirmOrder} className=' text-center cursor-pointer text-[14px] w-[70px] py-1 bg-green-400 text-white rounded'>ອະນຸມັດ</p>
  )
}

export default ConfirmOrderButton