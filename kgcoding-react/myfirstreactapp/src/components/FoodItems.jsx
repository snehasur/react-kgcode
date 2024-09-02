import { useState } from "react";
import Item from "./Item";
// const FoodItems=()=>{
//   let foodItems=['Dal','Green Vegetable','Roti','Salad','Milk'];

//   return  (
//       <ul className="list-group">
//        {foodItems.map((foodItem)=>(
//          <Item key={foodItem} foodItem={foodItem}/>
//        )
//       )}
//       </ul>
//       );
// }
// const FoodItems=({items})=>{
//   return  (
//       <ul className="list-group">
//        {items.map((foodItem)=>(
//          <Item key={foodItem} foodItem={foodItem}/>
//        )
//       )}
//       </ul>
//       );
// }

const FoodItems=({items})=>{
  let [activeItem,setActiveItem]=useState([]);
  let onBuyButton=(item,event)=>{
    let newItems=[...activeItem,item];
    setActiveItem(newItems);
  }
  return  (
      <ul className="list-group">
       {items.map((foodItem)=>(
         <Item key={foodItem} 
         bought={activeItem.includes(foodItem)}foodItem={foodItem} handleBuyButton={
        ()=>
        //alert(`Buy Clicked-> ${foodItem}`);
        //console.log(`Bought-> ${item}`)}
        onBuyButton(foodItem,event)}/>
       )
      )}
      </ul>
      );
}

export default FoodItems;