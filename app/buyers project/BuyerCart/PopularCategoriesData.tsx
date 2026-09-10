'use client'
import Image, { StaticImageData } from 'next/image'

interface Category {
    id: number;
    name: string;
    image: StaticImageData; 
}
const PopularCategoriesData = ({data}: {data: Category[]}) => {
    return ( 
        <div className="bg-white gap-2 py-6 lg:px-8 px-0 lg:gap-4 my-12 lg: mx-4 lg:mx-10">
           <div className="flex justify-between items-center lg:px-8 px-4 py-4 lg:py-6 bg-whinte border-b border-gray-300">
                <h2 className="text-lg lg:text-2xl font-bold">Popular Categories</h2>
                <a href="#" className="text-sm lg:text-md text-lime-500 font-bold hover:underline">View All</a>
            </div>
             <div className="grid grid-cols-4 bg-white  lg:grid lg:grid-cols-6 items-center gap-2 py-6 px-w4 lg:gap-4 my-12 lg: mx- lg:mx-1w0">

            {data.map((items) =>(
                <div key={items.id} className="flex flex-col hover:border-lime-500 hover:shadow-lg hover:shadow-lime-500 border-gray-300 items-center justify-center gap-2 lg:gap-4">
                    <div className="flex flex-col items-center justify-center gap-2 lg:gap-4 py-2 lg:py-4"  >
                        <Image src={items.image} alt={items.name} className="w-16 h-16 lg:w-32 lg:h-32" />
                         <p className="text-sm lg:text-lg">{items.name}</p>
                    </div>
                </div>
            ))} 
             </div>
        </div>


    );
}
 
export default PopularCategoriesData;