// import React, { useState } from 'react'
import freshVegetables from "../images/image1.png"
import freshFruit from "../images/image12.png"
import meatAndFish from "../images/image2.png"
import snacks from "../images/image3.png"
import beverages from "../images/image4.png"
import beautyAndHealth from "../images/image5.png"
import breadAndBakery from "../images/image6.png"
import bakingNeeds from "../images/image7.png"
import cooking from "../images/image8.png"
import diabeticFoods from "../images/image9.png"
import dishDetergent from "../images/image10.png"
import oil from "../images/image11.png"
import PopularCategoriesData from './PopularCategoriesData'
export default function PopularCategories() {
    const popularCategoriesData = [
        { id: 1, name: "Fresh Vegetables", image: freshVegetables },
        { id: 2, name: "Fresh Fruit", image: freshFruit },
        { id: 3, name: "Meat & Fish", image: meatAndFish },
        { id: 4, name: "Snacks", image: snacks },
        { id: 5, name: "Beverages", image: beverages },
        { id: 6, name: "Beauty & Health", image: beautyAndHealth },
        { id: 7, name: "Bread & Bakery", image: breadAndBakery },
        { id: 8, name: "Baking Needs", image: bakingNeeds },
        { id: 9, name: "Cooking Essentials", image: cooking },
        { id: 10, name: "Diabetic Foods", image: diabeticFoods },
        { id: 11, name: "Dish Detergent", image: dishDetergent },
        { id: 12, name: "Oil", image: oil },
      ];

    //   const [selectedCategory, setSelectedCategory] =useState(null);
  return (
    <>  
       
            <PopularCategoriesData  data ={popularCategoriesData}  />
   
    </>
  )
}
