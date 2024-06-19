import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// icon
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export const OrderList = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selected, setSelected] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    const handleCheckboxChange = (event, id) => {
        if (event.target.checked) {
            setSelected([...selected, id]);
        } else {
            setSelected(selected.filter(item => item !== id));
        }
    };

    const data = [
        {
            id: 1,
            picture: "https://mysakonnakhon.com/wp-content/uploads/2022/11/Cafe-Amazon-Signature-Drip-Coffee.jpg",
            name: 'Coffee',
            qty: 3,
            price: 39000
        },
        {
            id: 2,
            picture: "https://mysakonnakhon.com/wp-content/uploads/2022/11/Cafe-Amazon-Signature-Drip-Coffee.jpg",
            name: 'Burger',
            qty: 3,
            price: 39000
        },
        {
            id: 3,
            picture: "https://mysakonnakhon.com/wp-content/uploads/2022/11/Cafe-Amazon-Signature-Drip-Coffee.jpg",
            name: 'Noudle soup',
            qty: 3,
            price: 39000
        },
    ];

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const searchProduct = (name) => {
        return data.find(product => product.name === name);
    }

    const [productInput, setProductInput] = useState('');
    // const [findProduct, setFindProduct] = useState(null);
    console.log(productInput);


    return (
        <div className=' mt-7'>
            <div className=" flex items-center justify-between">
                <div className=' flex gap-5'>
                    <div className=' relative flex w-[180px] items-center'>
                        <DatePicker
                            selected={startDate}
                            placeholderText='ວັນທີ່ເລີ່ມຕົ້ນ'
                            onChange={(date) => setStartDate(date)}
                            className=' w-[180px] bg-[#e08cc4] px-2 py-1.5 rounded outline-none cursor-pointer placeholder:text-black'
                        />
                        <IoIosArrowDown className=' absolute right-1' />
                    </div>
                    <div className=' relative flex w-[180px] items-center'>
                        <DatePicker
                            selected={endDate}
                            placeholderText='ວັນທີ່ສິ້ນສຸດ'
                            onChange={(date) => setEndDate(date)}
                            className=' w-[180px] bg-[#e08cc4] px-2 py-1.5 rounded outline-none cursor-pointer placeholder:text-black'
                        />
                        <IoIosArrowDown className=' absolute right-1' />
                    </div>
                </div>
                <div className=' flex'>
                    <div className=' flex items-center relative'>
                        <input type="text" placeholder='ຄົ້ນຫາລາຍການສິນຄ້າ'
                            value={productInput}
                            onChange={(e) => setProductInput(e.target.value)}
                            className='border-2 border-black rounded px-7 py-1 w-[300px]' />
                        <IoSearch className=' absolute left-1.5 text-[20px]' />
                    </div>
                    <button className=' bg-[#e08cc4] py-1 px-5 ml-2 rounded'>
                        ຄົ້ນຫາ
                    </button>
                </div>
            </div>

            <table className=' w-full mt-3 shadow-md'>
                <thead className=' bg-[#e08cc4]'>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-center">
                            <input
                                type="checkbox"
                                className="form-checkbox  mr-2"
                            />
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300">ສະຖານະ</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300">ຮູບພາບ</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300">ຊື່ສິນຄ້າ</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300">ຈຳນວນ</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300">ລາຄາ</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300">ຊ່ອງທາງຊຳລະ</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.filter((item) => {
                        return productInput.toLowerCase() === '' ?
                            item : item.name.toLowerCase().includes(productInput)
                    }).map((row) => (
                        <tr key={row.id} className="border-b">
                            <td className=" py-2 text-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox"
                                    checked={selected.includes(row.id)}
                                    onChange={(event) => handleCheckboxChange(event, row.id)}
                                />
                            </td>
                            <td className=" px-6 flex flex-col items-center space-y-1 py-2">
                                <p className=' text-center cursor-pointer text-[14px] w-[70px] py-1 bg-green-400 text-white rounded'>ອະນຸມັດ</p>
                                <p className=' text-center cursor-pointer text-[14px] w-[70px] py-1 bg-red-400 text-white rounded'>ປະຕິເສດ</p>
                            </td>
                            <td className="px-6 py-2">
                                <div className=' w-full flex justify-center'>
                                    <img src={row.picture} className=' w-[70px] rounded' alt="" />
                                </div>
                            </td>
                            <td className="px-6 text-center py-2">{row.name}</td>
                            <td className="px-6 text-center py-2">{row.qty}</td>
                            <td className="px-6 text-center py-2">{row.price}</td>
                            <td className="px-6 text-center py-2">transfer</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between items-center mt-4">
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
    );
};
