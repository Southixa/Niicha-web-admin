import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar';
import { FaAngleLeft } from "react-icons/fa";
import { GetOneOrderApi } from '../../../api/order';
import { GetOrderDetailByOrderIdApi } from '../../../api/order_detail';
import { notify } from '../../../utils';
import { EMessage } from '../../../constant';
import { cloudinaryResizeImage, formatCurrency, timeFormatter } from '../../../helpers';
import OrderHistoryDetialProductCard from './OrderHistoryDetialProductCard';
import Loading from '../../../components/Loading';
import { Empty } from '../../../components/Empty';

const OrderHistoryDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [Order, setOrder] = useState({});
  const [orderDetail, setOrderDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOrder = async () => {
    const response = await GetOneOrderApi(id);
    if(!response) {
      notify.error(EMessage.getData)
      return;
    }
    setOrder(response);
  }

  const fetchOrderDetail = async () => {
    const response = await GetOrderDetailByOrderIdApi(id);
    if(!response) {
      notify.error(EMessage.getData)
      return;
    }
    setOrderDetail(response);
  }

  const fetchData = async () => {
    setLoading(true);
    await Promise.all([
      fetchOrder(),
      fetchOrderDetail()
    ])
    setLoading(false);
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <Sidebar >
      <div className='w-full min-h-screen bg-gray-100 pt-20'>

        <div className='w-[800px] bg-white mx-auto rounded-md shadow-sm px-8 pt-6 pb-12'>
          <button onClick={() => navigate(-1)} className='flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 px-2 py-2 rounded-md'><FaAngleLeft />ກັບຄືນ</button>
          <div className='w-full text-xl font-bold text-[#e08cc4] text-center mb-4'>
            ລາຍລະອຽດອໍເດີ້
          </div>
          <div className='w-full flex justify-between items-start'>
            <div className='w-1/2 flex flex-col justify-center items-center'>
              <p className='text-center'>ຮູບການໂອນ</p>
              <div className='w-[300px] h-[300px] bg-gray-100 mt-4 border border-gray-200 rounded-md overflow-hidden'>
                <Loading show={loading} className={'w-full h-full flex justify-center items-center'} />
                <Empty show={!Order?.billQR} className={'w-full h-full flex justify-center items-center'} />
                {(Order?.billQR && (<img src={cloudinaryResizeImage(Order?.billQR, 400)} alt="paymentScreenshot" className='w-full h-full object-cover' />))}
              </div>
            </div>
            <div className='w-1/2 px-4'>
              <p className='text-center'>ອໍເດີ້</p>
              <div className='flex w-full justify-between mt-2'>
                <p className='text-gray-700'>ວັນທີ:</p>
                <p className='text-gray-700'>{timeFormatter(Order?.createdAt || "")}</p>
              </div>
              <div className='flex w-full justify-between mt-2'>
                <p className='text-gray-700'>ລະຫັດອໍເດີ:</p>
                <p className='text-gray-700'>{Order?.OID || ""}</p>
              </div>
              <div className='flex w-full justify-between mt-2'>
                <p className='text-gray-700'>ໂຕະເລກທີ:</p>
                <p className='text-gray-700'>{Order?.noTable || ""}</p>
              </div>
              <div className='flex w-full justify-between mt-2'>
                <p className='text-gray-700'>ສະຖານະ:</p>
                <p className='text-gray-700'>{Order?.status || ""}</p>
              </div>
              <div className='flex w-full justify-between mt-2'>
                <p className='text-gray-700'>ຈຳນວນເງິນທັງໝົດ:</p>
                <p className='text-gray-900 text-bold'>{formatCurrency(Order?.totalPrice || 0)} ກີບ</p>
              </div>
              <p className='text-center mt-8'>ລາຍລະອຽດອໍເດີ້</p>
              <Empty className={"my-4"} show={orderDetail.length == 0 && !loading} />
              {
                orderDetail.map((item, index) => {
                  return (
                    <OrderHistoryDetialProductCard item={item} key={index} />
                  )
                })
              }
            </div>
          </div>

        </div>

      </div>
    </Sidebar>
  )
}

export default OrderHistoryDetail