import greenApple from './image/apple.svg'
import cabbage from './image/cabbage.svg'
import eggPlant from './image/eggPlant.svg'
import orange from './image/orange.svg'
import capsicum from './image/capsicum.svg'
import bigPotatoes from './image/big_potatoes.svg'
import cauliflower from './image/cauliflower.svg'
import corn from './image/corn.svg'
import green_chili from './image/green_chili.svg'
import green_lettuce from './image/green_lettuce.svg'
import PopularProductData from './PopularProductData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const PopularProduct = () => {
    const popularProduct =[
        {
            id:1,
            name:'green apple',
            photo:greenApple,
            price:'$6' 
      },
        {
            id:2,
            name:'cabbage',
            photo: cabbage,
            price:'$3' 
  },
        {
            id:3,
            name:'egg plant',
            photo:eggPlant,
            price:'$16' 
    },
        {
            id:4,
            name:'orange',
            photo:orange,
            price:'$20' 
 },
        {
            id:5,
            name:'capsicum',
            photo:capsicum,
            price:'$50' 
   },
        {
            id:6,
            name:'big Potatoes',
            photo:bigPotatoes,
            price:'$86' 
       },
        {
            id:7,
            name:'cauliflower',
            photo:cauliflower,
            price:'$70' 
      },
        {
            id:8,
            name:'corn',
            photo:corn,
            price:'$59'}
    ,
        {
            id:9,
            name:'green chili',
            photo:green_chili,
            price:'$10' 
      },
        {
            id:10,
            name:'green lettuce',
            photo:green_lettuce,
            price:'$4'

    },
    ]
    return ( 
            <>
                <div className="bg-white gap-2 py-6 lg:px-8 px-0 lg:gap-4 my-12 lg: mx-4 border-2 shadow-md shadow-lime-500 rounded-2xl border-gray-300 lg:mx-10">
                    <div className="flex justify-between items-center lg:px-8 px-4 py-4 lg:py-6 bg-whinte border-b border-gray-300">
                        <h2 className="text-lg lg:text-2xl font-bold">Popular Product</h2>
                        <div className="flex space-x-2 items-center">
                            <a href="#" className="text-sm lg:text-md text-lime-500 font-bold hover:underline">View All</a>
                            <FontAwesomeIcon icon={faArrowRight} className='text-lime-500' />
                        </div>
                    </div>
                    <PopularProductData data={popularProduct} />
                </div>
            </>
     );
}
 
export default PopularProduct;