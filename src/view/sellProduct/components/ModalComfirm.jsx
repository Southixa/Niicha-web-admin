import React, { useState } from "react";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

// or via CommonJS
// const Swal = require('sweetalert2')

import logo from "../../../assets/logos.jpeg";

export default function ModalConfirm() {
    const [showModal, setShowModal] = React.useState(false);
    const [showBill, setShowBill] = useState(false)
    const navigate = useNavigate();

    const alertSuccess = () => {
        setShowModal(false);
        Swal.fire({
            title: "ທຳການສັ່ງຊື້ສຳເລັດ",
            icon: "success",
        }).then(() => {
            setShowBill(true);
        })
    }
    return (
        <>
            <button
                className="bg-green-400 active:bg-green-500 w-full py-2 font-semibold rounded-lg hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                ສັ່ງຊື້
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#e3f3da] outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-2xl font-semibold bg-[#dcfcff] py-2 px-6 rounded-[50px]">
                                        ຄຳສັ່ງຊື້ລ່າສຸດ
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <table className=" border-2 border-black">
                                        <thead>
                                            <tr >
                                                <th className=" py-2 w-[120px] border-2 border-black">ລະຫັດສິນຄ້າ</th>
                                                <th className=" py-2 w-[120px] border-2 border-black">ຮູບສິນຄ້າ</th>
                                                <th className=" py-2 w-[120px] border-2 border-black">ຊື່ສິນຄ້າ</th>
                                                <th className=" py-2 w-[120px] border-2 border-black">ຈຳນວນ</th>
                                                <th className=" py-2 w-[120px] border-2 border-black">ລາຄາ</th>
                                                <th className=" py-2 w-[120px] border-2 border-black">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className=" text-center border-2 border-black">P001</td>
                                                <td className=" flex justify-center ">
                                                    <img className=" w-16 rounded-md"
                                                        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574" alt="" />
                                                </td>
                                                <td className="border-2 border-black text-center">Hotdog</td>
                                                <td className="border-2 border-black text-center">2</td>
                                                <td className="border-2 border-black text-center">32000</td>
                                                <td className="border-2 border-black"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/*footer*/}
                                <div className="flex flex-col items-end justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <div className=" flex flex-col items-center gap-y-2">
                                        <div>
                                            <label htmlFor="pay" className=" inline-block w-[70px] text-[18px]">ເງິນທີ່ຈ່າຍ:</label>
                                            <input type="text" className=" py-1 px-2 rounded-sm outline-none" />
                                        </div>
                                        <div>
                                            <label htmlFor="change" className=" inline-block w-[70px] text-[18px]">ເງິນທອນ:</label>
                                            <input type="text" className=" py-1 px-2 rounded-sm outline-none" />
                                        </div>
                                    </div>
                                    <div className=" flex items-center mt-10">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            ປິດ
                                        </button>
                                        <button
                                            className=" bg-[#e08cc4] active:bg-[#d66eb4]
                                        font-semibold text-sm px-6 
                                        py-3 rounded-[50px] shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 
                                        ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={alertSuccess}
                                        >
                                            ຢືນຢັນການສັ່ງຊື້
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" opacity-70 fixed inset-0 z-40 bg-white"></div>
                </>
            ) : null}
            {showBill && (
                <div className="fixed inset-0 z-50 flex items-center justify-center w-full bg-white/60">
                    <div className="border-2 border-black bg-white py-8 px-4 rounded shadow-lg">
                        <div>
                            <div className="rounded-md flex justify-center w-full mb-8">
                                <img src={logo} alt="" className="w-[80px] rounded-md " />
                            </div>
                            <div className=" flex justify-between items-center ">
                                <div>
                                    <h4>
                                        ພະນັກງານ: <span>Noy</span>
                                    </h4>
                                    <h4>
                                        Order: No# <span></span>
                                    </h4>
                                </div>
                                <div className=" flex flex-col items-end">
                                    <p>ວັນ ແລະ ເວລາ</p>
                                    <p className=" flex gap-x-2">
                                        <span>01/02/2024</span>
                                        <span>09:30</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr className=" border-gray-500 border-dashed my-5" />
                        <table>
                            <thead>
                                <tr>
                                    <th className=" w-[100px] font-medium"
                                        align='center'>ລຳດັບ</th>
                                    <th className=" w-[100px] font-medium"
                                        align='start'>ລາຍການອາຫານ</th>
                                    <th className=" w-[100px] font-medium"
                                        align='center'>ຈຳນວນ</th>
                                    <th className=" w-[100px] font-medium"
                                        align='start'>ລາຄາຕໍ່ໜ່ວຍ</th>
                                    <th className=" w-[100px] font-medium"
                                        align='start'>ລາຄາລວມ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td align="center">1</td>
                                    <td align="start">Capucino</td>
                                    <td align="center">2</td>
                                    <td align="start">40000</td>
                                    <td align="start">80000</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className=" mt-10">
                            <p>ຈຳນວນ :<span>2</span></p>
                            <p>ຍອດລວມ :<span>800000</span></p>
                        </div>
                        <hr className=" border-gray-500 border-dashed my-5" />
                        <h2 className=" text-[24px] font-semibold mt-5 text-center">ຂອບໃຈທີ່ມາອຸດໜຸນ</h2>
                    </div>
                </div>
            )}
        </>
    );
}