import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'

const TableManage = () => {
  const [typeActive, setTypeActive] = useState('ໂຕະ 01')
  const dataTables = [
    {
      id: 1,
      tableNo: 'ໂຕະ 01',
    },
    {
      id: 2,
      tableNo: 'ໂຕະ 02'
    },
    {
      id: 3,
      tableNo: 'ໂຕະ 03'
    },
    {
      id: 4,
      tableNo: 'ໂຕະ 04'
    },
    {
      id: 5,
      tableNo: 'ໂຕະ 05'
    },
    {
      id: 6,
      tableNo: 'ໂຕະ 06'
    },
    {
      id: 7,
      tableNo: 'ໂຕະ 07'
    },
    {
      id: 8,
      tableNo: 'ໂຕະ 08'
    }
  ]
  return (
    <Sidebar>
      <div className=' bg-[#fff] w-full '>
        <div className=' flex h-full  p-8'>
          <ul className=' grid grid-cols-4 gap-[60px] w-full'>
            {
              dataTables.map((item, index) => {
                return (
                  <li key={index} onClick={() => item.tableNo === typeActive ? setTypeActive(item.tableNo) : setTypeActive(item.tableNo)}
                    className={`bg-[#daa7e2] ${typeActive === item.tableNo ? 'bg-[#e3f3da] border-2 border-black' : 'border-2 border-transparent'} px-10 py-6 cursor-pointer rounded-[20px] font-medium  text-[30px] text-center`}>
                    {item.tableNo}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </Sidebar>
  )
}

export default TableManage