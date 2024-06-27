import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import { GetOrderApi } from '../../../api/order';
import { notify } from '../../../utils';
import { EMessage } from '../../../constant';
import { dateTimeToHMS, formatCurrency, timeFormatter } from '../../../helpers';
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading';
import { Empty } from '../../../components/Empty';
import Swal from "sweetalert2";
import ConfirmOrderButton from './ConfirmOrderButton';
import DeniedOrderButton from './DeniedOrderButton';

export const OrderList = () => {
    const navigate = useNavigate();

    const [selectedStatus, setSelectedStatus] = useState("ກຳລັງດຳເນີນ");

    const [orderInitData, setOrderInitData] = useState([]);
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const response = await GetOrderApi();
        if(!response) {
            notify.error(EMessage.getData)
            return;
        }
        setOrderInitData(response);
        const selectedOrder = response?.filter(item => item?.status === selectedStatus);
        setOrder(selectedOrder);
        setLoading(false);
    }

    useEffect(() => {
        const selectedOrder = orderInitData?.filter(item => item?.status === selectedStatus);
        setOrder(selectedOrder);
    }, [selectedStatus]);

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className='mt-8 mb-8 pb-20'>

                <div className=' mt-10 w-full flex items-center justify-center mb-8'>
                        <div className=' flex gap-20'>
                            <h4 onClick={() => setSelectedStatus("ກຳລັງດຳເນີນ")} className={`bg-yellow-300 w-[220px] font-medium  text-center py-2 rounded-md cursor-pointer ${(selectedStatus === "ກຳລັງດຳເນີນ") ? "border-2 border-gray-700 shadow-md" : "opacity-70"}`}>ລໍຖ້າອະນຸມັດ</h4>
                            <h4 onClick={() => setSelectedStatus("ຍົກເລີກ")} className={`bg-red-700 w-[220px] font-medium text-white text-center py-2 rounded-md cursor-pointer ${(selectedStatus === "ຍົກເລີກ") ? "border-2 border-gray-700 shadow-md" : "opacity-70"}`}>ອໍເດີ້ທີ່ຍົກເລີກ</h4>
                            <h4 onClick={() => setSelectedStatus("ສຳເລັດ")} className={` bg-green-300 w-[220px] font-medium  text-center py-2 rounded-md cursor-pointer ${(selectedStatus === "ສຳເລັດ") ? "border-2 border-gray-700 shadow-md" : "opacity-70"}`}>ອໍເດີ້ທີ່ສຳເລັດ</h4>
                        </div>
                    </div>
            
            <table className=' w-full mt-3 shadow-md' style={{height: "100%"}}>
                        <thead className=' bg-[#ffecd5]'>
                            <tr>
                                {(selectedStatus === "ກຳລັງດຳເນີນ") && (
                                    <>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left">
                                        ຈັດການ
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300">ເລກໂຕະ</th>
                                    </>
                                )}
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
                            {order.map((item, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50" style={{height: "100%"}}>
                                    {(item?.status === "ກຳລັງດຳເນີນ") && (
                                        <>
                                        <td className="flex gap-2 pl-4">
                                            <ConfirmOrderButton id={item?.OID} onSuccess={fetchData} />
                                            <DeniedOrderButton id={item?.OID} onSuccess={fetchData} />
                                        </td>
                                        <td className="px-6 text-center py-2">{item?.noTable || ""}</td>
                                        </>
                                    )}
                                    <td className="px-6 text-center py-2">{item?.OID}</td>
                                    <td className="px-6 text-center py-2">{timeFormatter(item?.createdAt)}, {dateTimeToHMS(item?.createdAt)}</td>
                                    <td className="px-6 text-center py-2">{item?.status}</td>
                                    <td className="px-6 text-center py-2">{formatCurrency(item?.totalPrice)} ກີບ</td>
                                    <td className="px-6 text-center py-2">{(item?.tables_id) ? "ຂາຍຢູ່ໂຕະ" : "ຂາຍຢູ່ຮ້ານ" }</td>
                                    <td className="px-6 flex justify-center items-center py-2" style={{height: "100%"}}>
                                        <div className='w-full h-full flex justify-center items-center'>
                                            <div onClick={() => navigate(`/orderHistoryDetail/${item?.OID}`)} className=' w-8 h-8 rounded-full bg-[#daa7e2] flex justify-center items-center opacity-80 hover:opacity-70 hover:shadow-md cursor-pointer'>
                                                <FaEye size={16} color={'#fff'} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
        </div>
                
    )
}
