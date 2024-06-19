import React from 'react';
import logo from "../../../assets/logos.jpeg";

export const ReportTypeProduct = () => {

    const handleDownloadPDF = () => {
        // Trigger the browser's print dialog
        window.print()
    };

    return (
        <div className='w-full h-full'>
            <div id='form_pdf' className='w-full h-full flex flex-col justify-center py-10 px-14'>
                <div className='flex items-center justify-between'>
                    <img src={logo} alt="" className='w-24 rounded-md' />
                    <h1 className='text-[28px] font-semibold'>ລາຍງານປະເພດອາຫານ</h1>
                    <button
                        className='bg-[#e3f3da] text-[20px] px-4 py-4 rounded-full'
                        onClick={handleDownloadPDF}
                    >
                        ດາວໂຫລດ PDF
                    </button>
                </div>
                <div className='mt-7'>
                    <h3 className='text-[18px]'>ຊື່ຮ້ານ: <span>noy</span></h3>
                    <h4 className='text-[18px] my-2'>ຊື່ຜູ້ອອກບິນ: <span></span></h4>
                    <p className='text-[18px]'>ວັນທີທີ່ອອກບິນ <span></span></p>
                </div>
                <div className='w-full flex justify-center py-10'>
                    <table className='w-[500px]'>
                        <thead>
                            <tr>
                                <th className='border-2 text-center border-black'>1</th>
                                <th className='border-2 text-center border-black'>1</th>
                                <th className='border-2 text-center border-black'>1</th>
                                <th className='border-2 text-center border-black'>1</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
};
