// const ErrorMessage=()=>{
//   let foodItems=['Dal','Green Vegetable','Roti','Salad','Milk'];
//   return (<>
//       {foodItems.length===0 && <h3>No food items</h3>}
//   </>)  
// }
const ErrorMessage=({items})=>{
  return (<>
      {items.length===0 && <h3>No food items</h3>}
  </>)  
}
export default ErrorMessage