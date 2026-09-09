import BuyerContentWork from "./BuyerContentWork";

const BuyerContent = () => {
    const navContent =[
        {
            id:1,
           name:"home",
            link:'/'
        },
        {
            id:2,
           name:'shop',
            link:'/shop'

        },
        {
            id:3,
           name: 'pages',
            link: '/page'
        },
         {
            id:4,
           name:'blog',
            link:'/blog'
         },
         {
            id:5,
           name:'about us',
            link:'/about-us'
         },
         {
            id:6,
           name:'contact us',
            link:'/contact-us'
         }
    ]
       
    return (  
        <>
            <BuyerContentWork content={navContent}/>

        </>

    );
}
 
export default BuyerContent;
