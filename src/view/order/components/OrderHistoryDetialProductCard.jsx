import React, { useEffect, useState } from 'react'
import { GetOneProductApi } from '../../../api/product';
import { cloudinaryResizeImage, formatCurrency } from '../../../helpers';
import Loading from '../../../components/Loading';

const OrderHistoryDetialProductCard = ({item}) => {

    const [product, setProduct] = useState(null);

    const fetchData = async () => {
        const response = await GetOneProductApi(item?.product_id);
        if(!response) {
            notify.error(EMessage.getData)
            return;
        }
        setProduct(response);
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (product == null) {
        return (
            <div className='w-full h-16 bg-gray-100 mt-2 rounded-md flex justify-center items-center'>
                <Loading show={true} />
            </div>
        )
    }
  return (
    <div className='w-full h-16 bg-gray-100 mt-2 rounded-md flex justify-between'>
        <div className='w-16 h-16 bg-gray-200 rounded-md p-1'>
        <img src={cloudinaryResizeImage(product?.image, 200)} alt="productImage" className='w-full h-full object-cover' />
        </div>
        <div className='h-16 grow p-2'>
        <p>{product?.name}</p>
        <p>{item?.qty}</p>
        </div>
        <div className='h-16 grow p-2 flex justify-end'>
        <p>{formatCurrency(item?.total)} ກີບ</p>
        </div>
    </div>
  )
}

export default OrderHistoryDetialProductCard