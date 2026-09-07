import React from 'react'
import Image from 'next/image'
import group from '../image/group.png'
export default function CauroselInformation() {
    const title = "Welcome to agricultural products rural enterprenuership management system"
    const brand = 'agriconnect hub'
    const description = "Empowering Rural Dreams, Nurturing Agricultural Growth – AgriConnect Hub  cultivates prosperity from the roots up."
  return (
    <div className="flex flex-col gap-y-7 my-32 ">
        <div className="lg:w-[30%] lg:ml-60  ml-10">
            <p className="lg:text-[16px] text-sm font-bold text-white uppercase">{title}</p>
        </div>

        <div className="flex spaced-x-14 pyf-14 bg-gereen-700">
            <div className="lg:w-[30%] flex items-center lg:ml-60 lg:mr-0 mr-24 ml-10 bwg-yellow-600">
                <p className='text-white w-[30%] uppercase font-extrabold lg:text-[40px] text-[24px]'>{brand}</p>
                <div className=' bg-blwue-700 lg:ml-64 ml-14 mb-14 '>
                    <Image src={group} width={80}   alt='group' />
                </div>
            </div>
        </div>

        <div className="lg:w-[30%] lg:ml-60  ml-10">
            <p className="lg:text-[16px] text-sm font-bold text-white capitalize">{title}</p>
        </div>
    </div>
  )
}
