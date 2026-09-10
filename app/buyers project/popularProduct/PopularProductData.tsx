'use client'
import Image, { StaticImageData } from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faEye } from '@fortawesome/free-solid-svg-icons';

interface product{
    id:number;
    name:string;
    price:string
    photo:StaticImageData;
}
const PopularProductData = ({data}:{data:product[]}) => {
    return (  
        <div className="grid grid-cols-2   lg:grid lg:grid-cols-5 items-center gap-6 py-6 px-4 lg:gap-14 my-12 lg: mx-4 lg:mx-10">
            {data.map((product) => (
                <div key={product.id} className="group relative hover:bg-lime-500 hover:text-white  flex lg:px-0 px-3.5 py-8 rounded-t-[80px] lg:rounded-t-0 lg:rounded-[105px] shadow-lime-600 shadow-2xl border-gray-400 flex-col items-center">
                        <>
                         <Image src={product.photo} alt={product.name} className="lg:w-full w-[70%] h-full object-contain" />
                        </>
                   <div className="absolute lg:right-[20px] right-6 lg:bottom-[226px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="rounded-full p-3 lg:p-3 lg:text-[7px] text-[4px] border-2 bg-black hover:bg-lime-500 hover:text-black transition duration-300">
                        <FontAwesomeIcon icon={faEye} className='' />
                    </div>
                        <div className="rounded-full p-3 text-[7px] border-2 mt-2 bg-black hover:bg-lime-500 hover:text-white transition duration-300">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                   </div>
                    <div className="flex justify-between text-sm space-x-14 items-center lg:pr-0 pr-4">
                        <div className="flex flex-col lg:items-center pl-8 lg:pl-0">
                            <h3 className="lg:text-[16px] font-normal mt-2 capitalize">{product.name}</h3>
                            <>
                                <p className="font-bold lg:text-[18px]">{product.price}</p>
                            </>
                            <div className="flex items-center my-2">

                                {Array.from({ length: 5 }).map((_, index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={faStar}
                                    className="lg:text-[10px] text-[7px] bg-transparent"
                                />
                                ))}
                            </div>

                        </div>
                        <FontAwesomeIcon icon={faBagShopping}  className='bg-lime-500  rounded-full p-4'/>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default PopularProductData;