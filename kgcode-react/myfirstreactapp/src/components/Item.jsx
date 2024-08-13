import styles from './Item.module.css'
// const Item =(props)=>{
//   let {foodItem}=props;
//   return(
//     // <li className="list-group-item">{props.foodItem}</li>

//     <li className="list-group-item">{foodItem}</li>
//   )
// }
//const Item =({foodItem})=>{
  // const handleBuyButton=(foodItem)=>{
  //   alert(`Buy Clicked ${foodItem}`)
  // }
  // const handleBuyButton=()=>{
  //   alert(`Buy Clicked ${foodItem}`)
  // }
//   const handleBuyButton=(event)=>{
//     console.log(event)
//     alert(`Buy Clicked ${foodItem}`)
//   }
//   return(
//     // <li className="list-group-item kg-item"><span className="kg-span">{foodItem}</span></li>
//     <li className={`${styles['kg-item']} list-group-item` }>
//       <span className={styles['kg-span']}>{foodItem}</span>
//       {/* <button className={`${styles.button} btn btn-info`} onClick={()=>handleBuyButton(foodItem)}>Buy</button> */}
//       {/* <button className={`${styles.button} btn btn-info`} onClick={handleBuyButton}>Buy</button> */}
//       <button className={`${styles.button} btn btn-info`} onClick={(event)=>handleBuyButton(event)}>Buy</button>
//       </li>

//   )
// }

//}
const Item =({foodItem,bought,handleBuyButton})=>{

  return(
    <li className={`${styles['kg-item']} list-group-item ${bought && 'active'}` }>
      <span className={styles['kg-span']}>{foodItem}</span>
      <button className={`${styles.button} btn btn-info`} onClick={handleBuyButton}>Buy</button>
      </li>
  
  )
}
export default Item