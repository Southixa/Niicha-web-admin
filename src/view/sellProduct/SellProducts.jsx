import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { CardSellProducts } from './components/CardSellProducts'
import { CartProduct } from './components/CartProduct'
import { autoFetchingData } from '../../helpers'
import { GetProductTypeApi } from '../../api/product_type'
import { GetProductApi } from '../../api/product'
import Loading from '../../components/Loading'
import ProductList from './components/ProductList'
import CartOrder from './components/CartOrder'

export const SellProducts = () => {

    const [selectedTypeId, setSelectedTypeId] = useState("");

    const [type, setType] = useState([]);
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const [selectedProductList, setSelectedProductList] = useState([]);

    const handleRemoveProduct = (item) => {
        const findIndexFirstProduct = selectedProductList.findIndex(product => product.PID === item.PID);
        const newSlectedProductList = [];
        for(let i = 0; i < selectedProductList.length; i++) {
            if(i !== findIndexFirstProduct) {
                newSlectedProductList.push(selectedProductList[i]);
            }
        }
        setSelectedProductList(newSlectedProductList);
    }

    const fetchData = async () => {
        setLoading(true);
        await Promise.all([
            autoFetchingData(GetProductTypeApi, setType),
            autoFetchingData(GetProductApi, setProduct)
        ]);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Sidebar>
            <div className='w-full grid grid-cols-10'>
                <div className='col-span-7 min-h-screen bg-white px-8'>
                    <div className='w-full flex justify-center'>
                        <Loading show={loading && type.length === 0} className={"mt-8"} />
                    </div>
                    <div className='w-full py-8 flex gap-4 overflow-x-scroll hide-scrollbar'>
                        {type.map((item, index) => (
                            <div key={index} onClick={() => setSelectedTypeId(item?.PTID)} className={`whitespace-nowrap py-4 px-6 text-gray-800 text-xl rounded-xl text-center cursor-pointer duration-300 transition-all ${(selectedTypeId === item?.PTID) ? "bg-[#e3f3da] outline outline-2 outline-gray-800 outline-offset-[-2px]" :  "bg-[#ffecd5]"}`}>
                                {item?.name}
                            </div>
                        ))}
                    </div>
                    <div className='mt-4'>
                        <ProductList productData={product} selectedTypeId={selectedTypeId} onSelectedProduct={(item) => setSelectedProductList([...selectedProductList, item])} />
                    </div>
                </div>
                <div className='col-span-3 bg-[#f0f7d7]'>
                    <CartOrder productList={selectedProductList} onAdd={(item) => setSelectedProductList([...selectedProductList, item])} onRemove={(item) => handleRemoveProduct(item)} onSellSuccess={() => setSelectedProductList([])} />
                </div>
            </div>
        </Sidebar>
    )
}
