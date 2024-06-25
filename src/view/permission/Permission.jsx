import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { FormAddPermission } from './components/FormAddPermission';
import { useNavigate } from 'react-router-dom';
import { Delete, Edit } from '@mui/icons-material';
import { DeleteUsereApi, GetUserApi } from '../../api/user';
import DeleteButton from '../../components/DeleteButton';
import Loading from '../../components/Loading';
import { Empty } from '../../components/Empty';
import { notify } from '../../utils';
import { EMessage } from '../../constant';

export const Permission = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
  
  
    const fetchData = async () => {
      setLoading(true);
      const response = await GetUserApi();
      if(!response) {
         notify.error(EMessage.getData)
         return;
      }
      setUser(response);
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
                            ຄົນທີ່ມີສິດເຂົ້າເຖິງເວັບແອັດມິນ
                        </h1>
                        <button onClick={() => navigate('/addPermission')} className=' bg-[#e3f3da] px-6 py-1.5 rounded font-medium'>
                            ເພີ່ມໃໝ່
                        </button>

                    </div>
                    <hr className=' my-5' />
                    <table className='w-full shadow-md rounded-xl'>
                        <thead>
                            <tr className='bg-[#ffecd5]'>
                                <td className='px-4 py-4 font-medium text-gray-800'>ຊື່ຜູ້ໃຊ້</td>
                                <td className='px-4 py-4 font-medium text-gray-800'>ສິດເຂົ້າເຖິງເວັບແອັດມິນ</td>
                                <td className='px-4 py-4 font-medium text-gray-800'>ຈັດການ</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={"100%"}>
                                    <Loading show={loading} className={'w-full flex justify-center my-8'} />
                                    <Empty show={user.length === 0 && !loading} />
                                </td>
                            </tr>
                            {user.map((item, index) => (
                                <tr key={index} className='border-b hover:bg-gray-50'>
                                    <td className='px-4 py-4 font-medium'><span className='bg-[#daa7e2] text-white px-4 py-1 rounded-full'>{item?.username}</span></td>
                                    <td className='px-4 py-4'>{item?.role}</td>
                                    <td className='px-4 py-4 w-40'>
                                        <div className='w-full h-8 flex gap-4'>
                                            <button onClick={() => navigate(`/editPermission/${item?.UID}`)} className='flex justify-center items-center bg-gray-200 w-8 h-8 rounded-full text-[#daa7e2]'>
                                                <Edit fontSize='small' />
                                            </button>
                                            <div className='flex justify-center items-center bg-gray-200 w-8 h-8 rounded-full text-red-400'>
                                                <DeleteButton id={item?.UID} deleteApi={DeleteUsereApi} onSuccess={fetchData} />
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
