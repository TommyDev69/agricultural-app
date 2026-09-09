'use client'
import React from 'react'
import Image from 'next/image'
import truck from "../icon/delivery-truck 1.svg"
import phone from "../icon/headphones 1.svg"
import bag from "../icon/shopping-bag.svg"
import packages from "../icon/package.svg"

export default function BuyerTransportation() {
    const transportationData = [{
        id: 1,
        icon: truck,
        title: "Fast Delivery",
        description: "free delivery on orders."
    }, {
        id: 2,
        icon: phone,
        title: "customer Support 24/7",
        description: "instant assistance whenever you need it."
    }, {
        id: 3,
        icon: bag,
        title: "100% Secure Payment",
        description: "We ensure all transactions are secure and protected."
    }, {
        id: 4,
        icon: packages,
        title: "money Back Guarantee",
        description: "30 day money back guarantee."
    }];

  return (
    <div className="shadow-2xl shadow-gray-700 rounded-lg border border-white bg-white lg:p-4 lg:mx-8 mx-4">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-8 *:py-6">
            {transportationData.map((item) => (
                <div key={item.id} className="flex  items-center lg:px-0 px-6 lg:justify-center gap-4">
                   <Image src={item.icon} alt={item.title} className="w-8 h-8" />
                    <div>
                        <p className="font-bold lg:text-lg text-sm">{item.title}</p>
                        <p className="text-gray-600">{item.description}</p>
                    </div> 
                </div>
            ))}
        </div>
    </div>
  )
  
}
