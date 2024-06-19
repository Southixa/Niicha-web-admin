import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { FormAddPermission } from './components/FormAddPermission';

export const Permission = () => {
    return (
        <Sidebar>
            <div className=' bg-[#fff] w-full '>
                <div className='  w-full h-full  p-8'>
                    <div className=" flex items-center justify-between">
                        <h1 className=' text-2xl font-semibold'>
                            ຄົນທີ່ມີສິດເຂົ້າເຖິງເວັບແອັດມິນ
                        </h1>
                        <button onClick={() => window.location.href = "/addPermission"} className=' bg-[#daa7e2] px-6 py-1.5 rounded font-medium'>
                            ເພີ່ມໃໝ່
                        </button>

                    </div>
                    <hr className=' my-5' />
                    <div className=" w-full flex flex-col gap-y-4">
                        <div className=" w-full grid grid-cols-5 items-center">
                            <div className=" flex items-center col-span-2">
                                <img src="https://media.istockphoto.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=yqAKmCqnpP_T8M8I5VTKxecri1xutkXH7zfybnwVWPQ=" alt=""
                                    className=' w-14 rounded-[100%] h-14 object-cover'
                                />
                                <div className=' ml-2'>
                                    <h4 className=' font-medium'>Saysamone dongchan</h4>
                                    <p className=' text-[12px]'>ສິດໃນການອະນຸຍາດ, ລົບສະມາຊິກ, <br /> ເພີ່ມເງື່ອນໄຂ, ຈັດການສິນຄ້າ</p>
                                </div>
                            </div>
                            <div className=" text-center">
                                <p className=' text-[14px] font-medium'>02099220101</p>
                            </div>
                            <div className=" text-end">
                                <p className=' text-[14px] font-medium'>ssm</p>
                            </div>
                            <div className=" text-end">
                                <p className=' text-[15px] font-medium'>Admin</p>
                            </div>
                        </div>
                        <div className=" w-full grid grid-cols-5 items-center">
                            <div className=" flex items-center col-span-2">
                                <img src="https://media.istockphoto.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=yqAKmCqnpP_T8M8I5VTKxecri1xutkXH7zfybnwVWPQ=" alt=""
                                    className=' w-14 rounded-[100%] h-14 object-cover'
                                />
                                <div className=' ml-2'>
                                    <h4 className=' font-medium'>Saysamone dongchan</h4>
                                    <p className=' text-[12px]'>ສິດໃນການອະນຸຍາດ, ລົບສະມາຊິກ, <br /> ເພີ່ມເງື່ອນໄຂ, ຈັດການສິນຄ້າ</p>
                                </div>
                            </div>
                            <div className=" text-center">
                                <p className=' text-[14px] font-medium'>02099220101</p>
                            </div>
                            <div className=" text-end">
                                <p className=' text-[14px] font-medium'>ssm</p>
                            </div>
                            <div className=" text-end">
                                <p className=' text-[15px] font-medium'>Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Sidebar>
    )
}
