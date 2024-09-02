import style from './FoodInput.module.css'
// const FoodInput = () => {

//   const handleOnChange = (e) => {
//     console.log(e.target.value)

//   }

//   return (
//     <>
//     <input type="text" className={style.foodInput} placeholder="Enter food" onChange={handleOnChange}/>
//     </>
//   );

// }
// const FoodInput = ({handleOnChange}) => {

//   return (
//     <>
//     <input type="text" className={style.foodInput} placeholder="Enter food" onChange={handleOnChange}/>
//     </>
//   );

// }
const FoodInput = ({handleKeyDown}) => {

  return (
    <>
    <input type="text" className={style.foodInput} placeholder="Enter food" onKeyDown={handleKeyDown}/>
    </>
  );

}

export default FoodInput