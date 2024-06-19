import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'

export const OrderHistory = () => {
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
            name: 'John Doe',
            qty: 3,
            price: 39000
        },
        {
            id: 2,
            name: 'Jane Doe',
            qty: 3,
            price: 39000
        },
        {
            id: 3,
            name: 'Sam Smith',
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

    return (
        <Sidebar>
            <div className=' bg-[#fff] w-full h-screen '>
                <div className='  w-full h-full  p-8'>

                    <table className=' w-full mt-3 shadow-md'>
                        <thead className=' bg-[#e08cc4]'>
                            <tr>
                                <th className="px-6 py-3 border-b-2 border-gray-300">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox  mr-2"
                                    />
                                    ເລືອກທັງໝົດ
                                </th>
                                <th className="px-6 py-3 border-b-2 border-gray-300">ຊື່ສິນຄ້າ</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300">ຈຳນວນ</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300">ລາຄາ</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300">ຊ່ອງທາງຊຳລະ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((row) => (
                                <tr key={row.id} className="border-b">
                                    <td className="px-6 text-center py-2">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox"
                                            checked={selected.includes(row.id)}
                                            onChange={(event) => handleCheckboxChange(event, row.id)}
                                        />
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
            </div>
        </Sidebar>
    )
}
