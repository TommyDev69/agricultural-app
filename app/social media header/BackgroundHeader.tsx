
import React from 'react'
import icon_1 from '../icon/Vector.jpg'
import icon_2 from '../icon/icon _whatsapp_.png'
import icon_3 from '../icon/mdi_twitter.png'
import icon_4 from '../icon/Vector (1).png'
import BackgroundInfo from './BackgroundInfo'
export default function BackgroundHeader() {
    const icons = [icon_1, icon_2, icon_3, icon_4]
  return (
    <div className='h-12.5   bg-[#EDECE9] flex'>
      <BackgroundInfo image={icons} text=' Welcome to Agriconnect Hub'/>
    </div>
  )
}
