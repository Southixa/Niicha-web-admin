import React from "react";

export default function ModalAddProduct() {
    const [showModal, setShowModal] = React.useState(false);
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
                        className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative border-[3px] border-black rounded-lg w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex  w-full bg-[#e3f3da] outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">

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
                                    <h3 className="text-2xl w-[200px] my-4 font-semibold bg-[#dcfcff] py-2 px-6 rounded-[50px]">
                                        ເພີ່ມສິນຄ້າ
                                    </h3>
                                    <form>
                                        <div className=" mb-4">
                                            <label htmlFor=""
                                                className="block mb-2">ປະເພດ</label>
                                            <section className=" w-[250px] py-2 px-2 border border-black bg-white">
                                                <option value="">ເລືອກປະເພດ</option>
                                            </section>
                                        </div>
                                        <div className=" w-full mb-4">
                                            <div className=" flex flex-col">
                                                <label htmlFor="" className=" text-[16px]">Upload picture</label>
                                                <input type="file" name="" id=""
                                                    className=" border-none bg-"
                                                />
                                            </div>
                                            <img src="" alt="" />
                                        </div>
                                        <div className=" w-full mb-2 mt-4 flex items-center">
                                            <label htmlFor="" className=" inline-block w-28">ຊື່ສິນຄ້າ</label>
                                            <input type="text" className=" rounded-[50px] bg-white py-2 px-4 outline-none" />
                                        </div>
                                        <div className=" w-full flex items-center mb-2">
                                            <label htmlFor="" className=" inline-block w-28">ລາຍລະອຽດ</label>
                                            <textarea rows={1} type="text" className=" rounded-[50px] bg-white py-2 resize-none px-4 outline-none" ></textarea>
                                        </div>
                                        <div className=" w-full mb-2 flex items-center">
                                            <label htmlFor="" className=" inline-block w-28">ລາຄາ</label>
                                            <input type="text" className=" rounded-[50px] bg-white py-2 px-4 outline-none" />
                                        </div>
                                    </form>
                                </div>
                                <div className="flex items-end justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
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
                                        onClick={() => setShowModal(false)}
                                    >
                                        ຢືນຢັນ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" opacity-70 fixed inset-0 z-40 bg-white"></div>
                </>
            ) : null}
        </>
    );
}