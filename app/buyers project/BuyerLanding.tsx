import React from 'react'
import BuyerNavbar from './BuyerNavbar/BuyerNavbar'
import BuyerBoard from './BuyerAdvert/BuyerBoard'
import BuyerTransportation from './BuyerShipper/BuyerTransportation'
import PopularCategories from './BuyerCart/PopularCategories'
import PopularProduct from './popularProduct/PopularProduct'



export default function BuyerLanding() {
  return (
    <div>
        <BuyerNavbar />
        <BuyerBoard />
         <BuyerTransportation />
         <PopularCategories />
        <PopularProduct />
        
        
       
    </div>
  )
}
