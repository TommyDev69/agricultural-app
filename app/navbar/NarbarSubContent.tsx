import React from 'react'

export default function NarbarSubContent({navbarItems}: {navbarItems: {id: number, name: string, href: string}[]}) {
  return (
    <div className= "lg:flex py-5 bg- w-full lg:w-100.56 gap-x-8 items-center">
        {navbarItems.map(item =>(
          <p key={item.id} className="text-[18px]  lg:text-lime-500 font-medium cursor-pointer spirasl-hover pl-2 lg:pl-4 lg:pr-4 pr-0  rounded-2xl lwg:rounded-none py-4 hover:bg-lime-500 lg:hover:bg- hover:text-white">
            {item.name}
          </p>
        ))}
    </div>
  )
}
