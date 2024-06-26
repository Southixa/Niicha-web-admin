import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import { notify } from '../../utils';
import { EMessage } from '../../constant';
import { DeleteTableApi, GetTableApi } from '../../api/table';
import Loading from '../../components/Loading';
import { Empty } from '../../components/Empty';
import { MdEdit } from "react-icons/md";
import DeleteButton from '../../components/DeleteButton';
import Qrcode from './Qrcode';

const TableManage = () => {

  const navigate = useNavigate();

  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchData = async () => {
    setLoading(true);
    const response = await GetTableApi();
    if(!response) {
       notify.error(EMessage.getData)
       return;
    }
    setTable(response);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Sidebar>
      <div className=' bg-[#fff] w-full '>
        <div className=' h-full  p-8'>
          <div className=" flex items-center justify-between mb-10">
            <h1 className=' text-2xl font-semibold'>
              ການຈັດການໂຕະ
            </h1>
            <button onClick={() => navigate('/addTable')} className=' bg-[#e3f3da] px-6 py-1.5 rounded font-medium'>
              ເພີ່ມໂຕະໃໝ່
            </button>
          </div>
          <div className='w-full flex justify-center item-center'>
            <Loading show={loading} />
          </div>
          <Empty show={table.length === 0 && !loading} />
          <div className='w-full grid grid-cols-4 gap-4'>
            {table.map((item, index) => {
              return (
                <div key={index} className='w-full bg-[#ffecd5] rounded-2xl text-center shadow-md hover:shadow-lg relative group pb-8'>
                  <h1 className='text-3xl font-semibold text-center mt-4 mb-4'>ເບີ {item?.noTable}</h1>
                  <div className='w-full flex justify-center item-center'>
                    <Qrcode qrCodeUrl={item?.url_web} />
                  </div>
                  <div className='absolute top-0 right-0 w-16 h-10  justify-center gap-2 hidden group-hover:flex'>
                    <button>
                      <MdEdit onClick={() => navigate(`/editTable/${item?.TID}`)} className='text-white' size={20} />
                    </button>
                    <div className='mt-2'>
                      <DeleteButton className={"text-red-300"} onSuccess={fetchData} id={item?.TID} deleteApi={DeleteTableApi} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Sidebar>
  )
}

export default TableManage