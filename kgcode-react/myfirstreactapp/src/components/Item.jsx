import styles from './Item.module.css'
// const Item =(props)=>{
//   let {foodItem}=props;
//   return(
//     // <li className="list-group-item">{props.foodItem}</li>

//     <li className="list-group-item">{foodItem}</li>
//   )
// }
const Item =({foodItem})=>{
  
  return(
    // <li className="list-group-item kg-item"><span className="kg-span">{foodItem}</span></li>
    <li className={`${styles['kg-item']} list-group-item` }><span className={styles['kg-span']}>{foodItem}</span></li>

  )
}

export default Item