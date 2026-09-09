import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
//
export default function BuyerShow() {
  return (
    <div className='flex h-full w-full max-w-xl flex-col justify-center px-8 py-10 text-white sm:px-14 lg:mx-auto lg:w-[70%]'>
        <p className='promo-copy text-2xl font-extrabold capitalize sm:text-3xl'>agricConnect hub</p>
        <div className='promo-copy promo-copy-delay mt-4 flex items-center gap-3 font-bold'>
            <p className='text-base'>Sales up to</p>
            <span className='promo-badge bg-orange-400 px-3 py-2 text-base'>30% <i>off</i></span>
        </div>
        <em className='promo-copy promo-copy-delay-2 mt-4 text-sm font-bold sm:text-base'>Free shipping on your order</em>
        <button className="promo-button promo-copy-delay-3 mt-6 flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-base font-bold text-lime-600 shadow-lg" type="button">
            <span>Shop now</span>
            <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
        </button>
    </div>
  )
}
