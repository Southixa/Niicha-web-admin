import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { GetOrderApi } from '../../api/order';
import { notify } from '../../utils';
import { EMessage } from '../../constant';
import { formatCurrency, timeFormatter } from '../../helpers';
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { Empty } from '../../components/Empty';

export const OrderHistory = () => {
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);

    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(false);

    const itemsPerPage = 20;

    const totalPages = Math.ceil(order.length / itemsPerPage);

    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const dataSortedByDate = order.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const currentData = dataSortedByDate.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


    const fetchData = async () => {
        setLoading(true);
        const response = await GetOrderApi();
        if(!response) {
            notify.error(EMessage.getData)
            return;
        }
        const onlySuccessOrder = response?.filter(item => item?.status === 'ສຳເລັດ');
        setOrder(onlySuccessOrder);
        setLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <Sidebar>
            <div className=' bg-[#fff] w-full mb-20 '>
                <div className='  w-full h-full  p-8'>

                    <h1 className=' text-2xl font-semibold mb-6'>ປະຫວັດການສັ່ງຊື້</h1>

                    <table className=' w-full mt-3 shadow-md'>
                        <thead className=' bg-[#ffecd5]'>
                            <tr>
                                <th className="px-6 py-3 border-b-2 border-gray-300">ເລກອໍເດີ້</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300">ວັນທີ</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300">ສະຖານະ</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300">ລາຄາທັງໝົດ</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300">ຊ່ອງທາງຊຳລະ</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300">ລາຍລະອຽດ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={"100%"}>
                                    <Loading show={loading} className={'w-full flex justify-center my-8'} />
                                    <Empty className={"my-8"} show={order.length === 0 && !loading} />
                                </td>
                            </tr>
                            {currentData.map((item, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="px-6 text-center py-2">{item?.OID}</td>
                                    <td className="px-6 text-center py-2">{timeFormatter(item?.createdAt)}</td>
                                    <td className="px-6 text-center py-2">{item?.status}</td>
                                    <td className="px-6 text-center py-2">{formatCurrency(item?.totalPrice)} ກີບ</td>
                                    <td className="px-6 text-center py-2">{(item?.tables_id) ? "ຂາຍຢູ່ໂຕະ" : "ຂາຍຢູ່ຮ້ານ" }</td>
                                    <td className="px-6 flex justify-center items-center py-2">
                                        <div onClick={() => navigate(`/orderHistoryDetail/${item?.OID}`)} className=' w-8 h-8 rounded-full bg-[#daa7e2] flex justify-center items-center opacity-80 hover:opacity-70 hover:shadow-md cursor-pointer'>
                                            <FaEye size={16} color={'#fff'} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-between items-center mt-8">
                        <button
                            onClick={handlePreviousPage}
                            className="bg-gray-300 px-4 py-2 rounded"
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={handleNextPage}
                            className="bg-gray-300 px-4 py-2 rounded"
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </Sidebar>
    )
}
