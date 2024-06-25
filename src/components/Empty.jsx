import React from 'react'

export const Empty = ({show = false, className}) => {
  return (
    show && (
        <div className={`w-full flex justify-center ${className}`}>
            ບໍ່ມີຂໍ້ມູນ
        </div>
    )
  )
}
