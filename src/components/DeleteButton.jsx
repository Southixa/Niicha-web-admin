import { DeleteOutline } from '@mui/icons-material'
import React from 'react'
import Swal from "sweetalert2";
import { EMessage, SMessage } from '../constant';
import { notify } from '../utils';

const DeleteButton = ({id = "", onSuccess = () => {}, deleteApi = async (id) => {}, className, icon = <DeleteOutline /> }) => {


    const deleteData = async () => {
        const response = await deleteApi(id);
        if(!response){
          notify.error(EMessage.delete)
          return;
        }
        notify.success(SMessage.delete)
        onSuccess();
        return;
    }

    const comfirmDelete = async () => {
        Swal.fire({
            title: "ລົບຂໍ້ມູນ?",
            text: "ທ່ານຕ້ອງການທີ່ຈະລົບຂໍ້ມູນແທ້ບໍ່!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ຕົກລົງ",
            cancelButtonText: "ຍົກເລີກ",
            reverseButtons: true,
            preConfirm: async () => {
              return await deleteData();
            },
          })
    }

  return (
    <button className={className} onClick={comfirmDelete}>
      {icon}
    </button>
  )
}

export default DeleteButton