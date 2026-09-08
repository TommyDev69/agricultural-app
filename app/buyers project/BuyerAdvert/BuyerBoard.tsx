import React from 'react'

import BigBanner from '../images/bigBannar.png'
import BuyerShow from './BuyerShow'
export default function BuyerBoard() {
  return (
    <div className='grid grid-cols-[60%_40%] w-full'>
        <div className='h-220 bg-cover object-cover   bg-no-repeat' 
            style={{ backgroundImage: `url(${BigBanner.src})`,}}>
                <BuyerShow />
            
        </div>
        <div className=' h-full bg-blue-500'>
            {/* items */}
        </div>
    </div>
  )
}