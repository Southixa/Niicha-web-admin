import React, { useEffect, useState } from 'react';
import logo from "../../../assets/logos.jpeg";
import { autoFetchingData, cloudinaryResizeImage, formatCurrency, getCurrentDate, getCurrentUsername } from '../../../helpers';
import { GetProductTypeApi } from '../../../api/product_type';
import { GetProductApi } from '../../../api/product';
import { useNavigate } from 'react-router-dom';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { FaAngleLeft } from 'react-icons/fa';

export const ReportProduct = () => {

    const navigate = useNavigate();

    const handleDownloadPDF = () => {
        // Trigger the browser's print dialog
        window.print()
    };

    const [product, setProduct] = useState([]);
    const [type, setType] = useState([]);

    const fetchData = async () => {
        await Promise.all([
            autoFetchingData(GetProductApi, setProduct),
            autoFetchingData(GetProductTypeApi, setType)
        ])
    }

    const getTypeName = (id) => {
        const item = type.find((item) => item.PTID === id);
        if(item) {
            return item.name
        }
        return ""
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='w-full h-full'>
            <div id='form_pdf' className='w-full h-full flex flex-col justify-center py-10 px-14'>
                <div className='w-full mb-8 flex justify-between items-center no-print'>
                    <button onClick={() => navigate(-1)} className='flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 px-2 py-2 rounded-md'><FaAngleLeft />ກັບຄືນ</button>
                    <button
                        className='bg-[#e3f3da] text-[16px] px-4 py-2 rounded-full no-print hover:shadow-sm hover:opacity-85 flex justify-center items-center gap-3'
                        onClick={handleDownloadPDF}
                    >
                        ດາວໂຫລດ PDF <IoCloudDownloadOutline />
                    </button>
                </div>
                <div className='flex items-center justify-between'>
                    <img src={logo} alt="" className='w-24 rounded-md' />
                    <h1 className='text-[28px] font-semibold'>ລາຍງານສິນຄ້າ</h1>
                    <div className='w-24'></div>
                </div>
                <div className='mt-7'>
                    <h3 className='text-[18px]'>ຊື່ຮ້ານ: <span>Niicha ນິຊາ</span></h3>
                    <h3 className='text-[18px]'>ຊື່ພະນັກງານຜູ້ອອກບິນ: <span>{getCurrentUsername()}</span></h3>
                    <p className='text-[18px]'>ວັນທີທີ່ອອກລາຍງານ: {getCurrentDate()} <span></span></p>
                </div>
                <div className='w-full flex justify-center py-10'>
                    <table className='w-[500px]'>
                        <thead>
                            <tr>
                                <th className='border-2 text-center border-black'>ລຳດັບ</th>
                                <th className='border-2 text-center border-black'>ລະຫັດ</th>
                                <th className='border-2 text-center border-black'>ຮູບ</th>
                                <th className='border-2 text-center border-black'>ຊື່ສິນຄ້າ</th>
                                <th className='border-2 text-center border-black'>ປະເພດ</th>
                                <th className='border-2 text-center border-black'>ລາຍລະອຽດ</th>
                                <th className='border-2 text-center border-black'>ລາຄາ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.map((item, index) => (
                                <tr key={index}>
                                    <td className='border-2 text-center border-black'>{index + 1}</td>
                                    <td className='border-2 text-center border-black'>{item?.PID}</td>
                                    <td className='border-2 text-center border-black'>
                                        <div className='w-12 h-10 bg-blue-gray-100 mx-auto'>
                                            <img src={cloudinaryResizeImage(item?.image, 100)} alt="productImage" className='w-full h-full object-cover' />
                                        </div>
                                    </td>
                                    <td className='border-2 text-center border-black'>{item?.name}</td>
                                    <td className='border-2 text-center border-black'>{getTypeName(item?.product_type)}</td>
                                    <td className='border-2 text-center border-black text-sm'>{item?.detail}</td>
                                    <td className='border-2 text-center border-black'>{formatCurrency(item?.price)} ກີບ</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
