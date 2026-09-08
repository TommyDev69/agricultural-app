import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
//
export default function BuyerShow() {
  return (
    <>
        <div className='  w-[70%] text-white font-extrabold mx-auto justify-content flex items-center pl-4 pt-52'>
          <p className='text-[24px]  capitalize'>agricConnect hub</p>
        </div>
        <div className='flex items-center justify-betwween w-[70%] font-bold mx-auto py-4'>
            <> 
                <p className = 'text-[16px] text-white   pl-4'>Sales up to </p>
            </>
            <div className='flex items-center  bg-orange-400 p-2 mx-4'>
                <p className='text-[16px]  text-white'>30% <i> off </i></p>
            </div>

        </div>
        <div className='flex  text-white items-center justify-betwween w-[70%] font-bold mx-auto pb-4'>
            <em className=' pl-4'>free shipping on your order</em>
        </div>

        <div className='w-[70%] mx-auto px-4'>
        <button className=" mx-auqto flex items-center rounded-4xl text-lime-500 text-[16px] bg-white py-3 px-5">
            <p className="text-lime-500">shop now</p>
            <FontAwesomeIcon icon={faArrowLeft} className='text-line-500' />
        </button>
        </div>
    </>
  )
}
