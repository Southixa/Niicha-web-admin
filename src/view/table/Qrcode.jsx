import React, { useRef } from 'react'
import QRCode from 'qrcode.react';
import { MdDownload } from "react-icons/md";

const Qrcode = ({qrCodeUrl}) => {
    const canvasRef = useRef(null);

    const downloadImage = () => {
        const canvas = canvasRef.current.querySelector('canvas')
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = `${qrCodeUrl}.png`;
        link.click();
      };


  return (
    <div>
        <div ref={canvasRef} className='p-4 bg-white rounded-xl'>
            <QRCode size={150} value={qrCodeUrl} />
        </div>
        <div className='w-full flex justify-center mt-4'>
            <div onClick={downloadImage} className='p-2 bg-white rounded-lg opacity-50 hover:cursor-pointer hover:shadow-md hover:opacity-80'>
                <MdDownload className='opacity-100' color='gray' size={20} />
            </div>
        </div>
    </div>
  )
}
export default Qrcode