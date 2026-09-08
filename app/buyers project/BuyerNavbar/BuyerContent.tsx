import { link } from "fs";
import BuyerContentWork from "./BuyerContentWork";

const BuyerContent = () => {
    const navContent =[
        {
            id:1,
           name:"home",
            linking:'/'
        },
        {
            id:2,
           name:'shop',
            linking:'/shop'

        },
        {
            id:3,
           name: 'pages',
            linking: '/page'
        },
         {
            id:4,
           name:'blog',
            linking:'/blog'
         },
         {
            id:5,
           name:'about us',
            linking:'/about us'
         },
         {
            id:6,
           name:'contact us',
            linking:'/contact us'
         }
    ]
       
    return (  
        <>
            <BuyerContentWork content={navContent}/>

        </>

    );
}
 
export default BuyerContent;