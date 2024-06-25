import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { useNavigate } from 'react-router-dom';
import { Delete, Edit } from '@mui/icons-material';
import { DeleteUsereApi, GetUserApi } from '../../api/user';
import DeleteButton from '../../components/DeleteButton';
import Loading from '../../components/Loading';
import { Empty } from '../../components/Empty';
import { DeleteEmployeeApi, GetEmployeeApi } from '../../api/employee';
import { notify } from '../../utils';
import { EMessage } from '../../constant';
import { timeFormatter } from '../../helpers';

export const Employee = () => {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState([]);
    const [loading, setLoading] = useState(false);
  
  
    const fetchData = async () => {
      setLoading(true);
      const response = await GetEmployeeApi();
      if(!response) {
         notify.error(EMessage.getData)
         return;
      }
      setEmployee(response);
      setLoading(false);
    }
  
    useEffect(() => {
      fetchData();
    }, [])

    return (
        <Sidebar>
            <div className=' bg-[#fff] w-full '>
                <div className='  w-full h-full  p-8'>
                    <div className=" flex items-center justify-between">
                        <h1 className=' text-2xl font-semibold'>
                            ຈັດການພະນັກງານ
                        </h1>
                        <button onClick={() => navigate('/addEmployee')} className=' bg-[#e3f3da] px-6 py-1.5 rounded font-medium'>
                            ເພີ່ມໃໝ່
                        </button>

                    </div>
                    <hr className=' my-5' />
                    <table className='w-full shadow-md rounded-xl'>
                        <thead>
                            <tr className='bg-[#ffecd5]'>
                                <td className='px-4 py-4 font-medium text-gray-800'>ຊື່ ແລະ ນາມສະກຸນ</td>
                                <td className='px-4 py-4 font-medium text-gray-800'>ເພດ</td>
                                <td className='px-4 py-4 font-medium text-gray-800'>ທີ່ຢູ່</td>
                                <td className='px-4 py-4 font-medium text-gray-800'>ວັນເດືອນປີເກີດ</td>
                                <td className='px-4 py-4 font-medium text-gray-800'>ເບີໂທ</td>
                                <td className='px-4 py-4 font-medium text-gray-800'>ຈັດການ</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={"100%"}>
                                    <Loading show={loading} className={'w-full flex justify-center my-8'} />
                                    <Empty className={"my-8"} show={employee.length === 0 && !loading} />
                                </td>
                            </tr>
                            {employee.map((item, index) => (
                                <tr key={index} className='border-b hover:bg-gray-50'>
                                    <td className='px-4 py-4 font-medium'><span className='bg-[#daa7e2] text-white px-4 py-1 rounded-full'>{item?.firstname} {item?.lastname}</span></td>
                                    <td className='px-4 py-4'>{item?.gender}</td>
                                    <td className='px-4 py-4'>{item?.address}</td>
                                    <td className='px-4 py-4'>{timeFormatter(item?.birthday)}</td>
                                    <td className='px-4 py-4'>{item?.phoneNumber}</td>
                                    <td className='px-4 py-4 w-40'>
                                        <div className='w-full h-8 flex gap-4'>
                                            <button onClick={() => navigate(`/editEmployee/${item?.EID}`)} className='flex justify-center items-center bg-gray-200 w-8 h-8 rounded-full text-[#daa7e2]'>
                                                <Edit fontSize='small' />
                                            </button>
                                            <div className='flex justify-center items-center bg-gray-200 w-8 h-8 rounded-full text-red-400'>
                                                <DeleteButton id={item?.EID} deleteApi={DeleteEmployeeApi} onSuccess={fetchData} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </Sidebar>
    )
}
