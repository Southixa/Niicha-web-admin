import React from 'react'
import { IoAddCircle } from "react-icons/io5";
import { cloudinaryResizeImage, formatCurrency } from '../../../helpers';
import { Empty } from '../../../components/Empty';

const ProductList = ({productData, selectedTypeId, onSelectedProduct}) => {

    const filteredProducts = productData.filter((item) => item?.product_type === selectedTypeId);



  return (
    <>
        <Empty show={filteredProducts.length === 0} />
        <div className='w-full grid grid-cols-4 gap-4'>
            {filteredProducts.map((item, index) => (
            <div key={index} className='w-full bg-[#fffcf2] rounded-xl p-3 flex flex-col hover:shadow-lg transition-all duration-300 hover:scale-[101%]'>
                <div className='w-full h-48 bg-gray-200 rounded-md overflow-hidden'>
                    <img src={cloudinaryResizeImage(item?.image, 300)}  alt='productImage' className='w-full h-full object-cover' />
                </div>
                <div className='w-full flex justify-between items-start mt-2 flex-grow'>
                    <div className='grow'>
                        <p className='text-base'>{item?.name}</p>
                        <p className='text-sm text-gray-800'>{item?.detail}</p>
                    </div>
                    <button onClick={() => onSelectedProduct(item)}>
                        <div className='w-8 h-8 bg-gray-200 rounded-md text-pink-300 flex justify-center items-center hover:shadow-md'>
                            <IoAddCircle size="24" />
                        </div>
                    </button>
                </div>
                <div className='mt-2'>
                    <p className='text-red-300'>{formatCurrency(item?.price)} ກີບ</p>
                </div>
            </div> 
            ))}
        </div>
    </>
  )
}

export default ProductList