import React from 'react'

import BigBanner from '../images/bigBannar.png'
import Banner from '../images/Bannar.png'
import Banner2 from '../images/banner2.png'

import BuyerShow from './BuyerShow'
import BuyerSales from './BuyerSales'
import BuyerDeal from './BuyerDeal'
export default function BuyerBoard() {
  return (
    <section className='grid w-full grid-cols-1 gap-4 px-4 py-5 sm:px-6 lg:grid-cols-[3fr_2fr] lg:gap-6 lg:px-8'>
        <div className='promo-card promo-reveal h-[360px] bg-cover bg-center bg-no-repeat sm:h-[440px] lg:h-[880px]' 
            style={{ backgroundImage: `url(${BigBanner.src})`,}}>
                <BuyerShow />
            
        </div>
        <div className = "grid gap-4 lg:gap-6 lg:pr-6">
            <div className='promo-card promo-reveal promo-reveal-delay h-[250px] bg-cover bg-center bg-no-repeat sm:h-[300px] lg:h-[428px]' 
                style={{ backgroundImage: `url(${Banner.src})`,}}>
                <BuyerSales />
            </div>
            <div className='promo-card promo-reveal promo-reveal-delay-2 h-[250px] bg-cover bg-center bg-no-repeat sm:h-[300px] lg:h-[428px]' 
                style={{ backgroundImage: `url(${Banner2.src})`,}}>
                <BuyerDeal />
            </div>
        </div>
    </section>
  )
}
